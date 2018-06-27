'use strict';

const BinarySearchTree = require('./binary-search-tree');

function inOrder(bst) {
  if (bst.left) inOrder(bst.left);

  console.log(bst.key);

  if (bst.right) inOrder(bst.right);
}

function preOrder(bst) {
  console.log(bst.key);

  if (bst.left) preOrder(bst.left);

  if (bst.right) preOrder(bst.right);
}

function postOrder(bst) {
  if (bst.left) postOrder(bst.left);

  if (bst.right) postOrder(bst.right);

  console.log(bst.key);
}

const bst = new BinarySearchTree();
bst.insert(25, 25);
bst.insert(15, 15);
bst.insert(50, 50);
bst.insert(10, 10);
bst.insert(24, 24);
bst.insert(35, 35);
bst.insert(70, 70);
bst.insert(4, 4);
bst.insert(12, 12);
bst.insert(18, 18);
bst.insert(31, 31);
bst.insert(44, 44);
bst.insert(66, 66);
bst.insert(90, 90);
bst.insert(22, 22);

console.log('pre-order:');
preOrder(bst);
console.log('in-order: ');
inOrder(bst);
console.log('post-order: ');
postOrder(bst);
