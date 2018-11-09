'use strict';

class Order {
  static of(...args) {
    return new Order(...args);
  }

  static computeWeight(sortOrder) {
    const propsAmount = sortOrder.reduce((total, rules) => total + rules.length, 0);
    const groupWeight = 10 ** String(propsAmount).length;
    const unknownPropWeight = (2 * sortOrder.length + 1) * groupWeight;

    const propsWeight = {};

    sortOrder.forEach((props, groupNumber) => props.forEach((prop, position) => {
      propsWeight[prop] = (2 * groupNumber + 1) * groupWeight + position;
    }));

    return { propsWeight, groupWeight, unknownPropWeight };
  }

  constructor(sortOrder) {
    const { propsWeight, groupWeight, unknownPropWeight } = Order.computeWeight(sortOrder);

    this.propsWeight = propsWeight;
    this.groupWeight = groupWeight;
    this.unknownPropWeight = unknownPropWeight;

    this.byWeight = this.byWeight.bind(this);
  }

  // comparator,
  // [].sort(Order.of().byWeight);
  byWeight(nodeA, nodeB) {
    if (nodeA.type !== 'decl' && nodeB.type !== 'decl') return 0;
    if (nodeA.type !== 'decl' && nodeB.type === 'decl') return 1;
    if (nodeA.type === 'decl' && nodeB.type !== 'decl') return -1;

    return this.getWeight(nodeA) - this.getWeight(nodeB);
  }

  getWeight(node) {
    return typeof this.propsWeight[node.prop] === 'number'
      ? this.propsWeight[node.prop]
      : this.unknownPropWeight;
  }

  isSimilarGroup(node, lastNode) {
    if (node.type !== 'decl') return false;
    if (lastNode === null || lastNode.type !== 'decl') return false;

    return Math.abs(this.getWeight(node) - this.getWeight(lastNode)) <= this.groupWeight;
  }
}

module.exports = Order;
