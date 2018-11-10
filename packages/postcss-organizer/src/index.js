'use strict';

/**
 * postcss naming convention
 *
 * selector { declaration : prop; };
 * |      | | |         | | |   | |
 */
const postcss = require('postcss');

const Indent = require('./Indent');
const Order = require('./Order');
const Rule = require('./Rule');
const Decl = require('./Decl');
const normalizeUserOptions = require('./normalize-user-options');

module.exports = postcss.plugin('postcss-organizer', initPostcssOrganizerPlugin);

function initPostcssOrganizerPlugin(userOptions) {
  const options = normalizeUserOptions(userOptions);

  const order = Order.of(
    options['sort-order']
  );

  const indent = Indent.of(
    options['block-indent'],
    options['space-before-selector'],
    options['space-before-opening-brace'],
    options['space-after-opening-brace'],
    options['space-between-declarations'],
    options['space-before-closing-brace']
  );

  const rule = Rule.of(
    options['always-semicolon']
  );

  const decl = Decl.of(
    options['space-before-colon'],
    options['space-after-colon']
  );

  return postcssOrganizer;

  function postcssOrganizer(css, result) {
    const root = css.clone();

    if (options['sort-order'].length > 0) {
      root.nodes.sort(order.byWeight);
      root.walkAtRules(atrule => Array.isArray(atrule.nodes) && atrule.nodes.sort(order.byWeight));
      root.walkRules(rule => rule.nodes.sort(order.byWeight));
    }

    let lastNode = null;
    root.walk((node, position) => {
      const isFirst = position === 0;
      const isFirstNode = lastNode === null;

      // format selector
      if (node.type === 'atrule' || node.type === 'rule') {
        const before = indent.ruleBefore(node, isFirst, isFirstNode);
        const between = indent.ruleBetween(node);
        const after = indent.ruleAfter(node);
        node.raws = rule.raws(node.raws, before, between, after);
      }

      // format declarations
      if (node.type === 'decl') {
        const isSimilarGroup = order.isSimilarGroup(node, lastNode);
        const before = indent.declBefore(node, isFirst, isSimilarGroup);
        node.raws = decl.raws(node.raws, before);
      }

      lastNode = node;
    });

    indent.clearMap();

    result.root = root;
  }
}
