'use strict';

class Indent {
  static of(...args) {
    return new Indent(...args);
  }

  constructor(
    blockIndent,
    spaceBeforeSelector,
    spaceBeforeOpeningBrace,
    spaceAfterOpeningBrace,
    spaceBetweenDeclarations,
    spaceBeforeClosingBrace
  ) {
    this.blockIndent = blockIndent;
    this.spaceBeforeSelector = spaceBeforeSelector;
    this.spaceBeforeOpeningBrace = spaceBeforeOpeningBrace;
    this.spaceAfterOpeningBrace = spaceAfterOpeningBrace;
    this.spaceBetweenDeclarations = spaceBetweenDeclarations;
    this.spaceBeforeClosingBrace = spaceBeforeClosingBrace;

    this.nodesLevel = new Map();
  }

  clearMap() {
    this.nodesLevel.clear();
  }

  level(node) {
    let parentNode = node.parent;
    if (this.nodesLevel.has(parentNode)) {
      return this.nodesLevel.get(parentNode);
    }

    let level = 0;
    while (parentNode.parent) {
      parentNode = parentNode.parent;
      level++;
    }

    // save level for node.parent instead of parentNode,
    // cause it is a first level child
    this.nodesLevel.set(node.parent, level);
    return level;
  }

  indent(node) {
    if (this.blockIndent === null) {
      return null;
    }

    return this.blockIndent.repeat(this.level(node));
  }

  declBefore(node, isFirst, isSimilarGroup) {
    // three cases
    // - first decl after bracket
    // - decl after decl
    // - decl after decl from another group
    if (
      isFirst &&
      this.blockIndent !== null &&
      this.spaceAfterOpeningBrace !== null
    ) {
      return this.spaceAfterOpeningBrace.includes('\n')
        ? `${this.spaceAfterOpeningBrace}${this.indent(node)}`
        : this.spaceAfterOpeningBrace;
    }

    if (
      !isFirst &&
      this.blockIndent !== null &&
      this.spaceBetweenDeclarations !== null
    ) {
      if (isSimilarGroup) {
        return this.spaceBetweenDeclarations.includes('\n')
          ? `${this.spaceBetweenDeclarations}${this.indent(node)}`
          : this.spaceBetweenDeclarations;
      }

      return this.spaceBetweenDeclarations.includes('\n')
        ? `\n${this.spaceBetweenDeclarations}${this.indent(node)}`
        : this.spaceBetweenDeclarations;
    }

    return null;
  }

  //   .selector {
  // | |
  ruleBefore(node, isFirst, isFirstNode) {
    if (this.blockIndent === null) {
      return null;
    }

    if (['atrule', 'rule'].includes(node.parent.type) && isFirst) {
      if (this.spaceAfterOpeningBrace === null) {
        return null;
      }

      return this.spaceAfterOpeningBrace.includes('\n')
        ? `${this.spaceAfterOpeningBrace}${this.indent(node)}`
        : this.spaceAfterOpeningBrace;
    }

    if (this.spaceBeforeSelector === null) {
      return null;
    }

    if (isFirstNode) {
      return '';
    }

    return `${this.spaceBeforeSelector}${this.indent(node)}`;
  }

  // .selector {
  //         | |
  // @import print {
  //             | |
  ruleBetween(node) {
    if (this.blockIndent === null || this.spaceBeforeOpeningBrace === null) {
      return null;
    }

    // @import url('...');
    if (node.type === 'atrule' && !node.nodes) {
      return '';
    }

    return this.spaceBeforeOpeningBrace.includes('\n')
      ? `${this.spaceBeforeOpeningBrace}${this.indent(node)}`
      : this.spaceBeforeOpeningBrace;
  }

  ruleAfter(node) {
    if (this.blockIndent === null || this.spaceBeforeClosingBrace == null) {
      return null;
    }

    return this.spaceBeforeClosingBrace.includes('\n')
      ? `${this.spaceBeforeClosingBrace}${this.indent(node)}`
      : this.spaceBeforeClosingBrace;
  }
}

module.exports = Indent;
