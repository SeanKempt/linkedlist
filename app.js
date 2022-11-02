//node factory
const node = (value, nextNode = null) => {
  nextNode = nextNode;
  return { value, nextNode };
};

//Linked list factory function
const linkedlist = () => {
  let head = null;
  let length = 0;

  const getHead = () => {
    return head;
  };

  const getTail = () => {
    let currentNode = getHead();
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  };

  const getLength = () => {
    return length;
  };

  //add value to end of linked list
  const append = (value) => {
    const newNode = node(value);
    if (head === null) {
      head = newNode;
    } else {
      let currentNode = getHead();

      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = newNode;
    }
    length++;
  };

  //returns value at the provided index
  const at = (index) => {
    let currentNode = getHead();
    if (index <= getLength()) {
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.nextNode;
      }
    } else {
      return `Length of linked list is lower than index! Try again!`;
    }
    return currentNode;
  };

  //returns index of where the value is found, otherwise return null
  const find = (value, currentNode = getHead(), index = 0) => {
    let length = getLength();
    while (index < length) {
      if (currentNode.value !== value) {
        currentNode = currentNode.nextNode;
        index++;
        return find(value, currentNode, index);
      } else if (currentNode.value === value) {
        return index;
      }
    }
    return null;
  };

  //prints out the entire linked list as a string of values
  const toString = () => {
    let currentNode = getHead();
    let output = ``;
    if (getHead() === null) {
      return (output = `null`);
    } else {
      while (currentNode !== null) {
        output += `(${currentNode.value}) -> `;
        currentNode = currentNode.nextNode;
      }
      if (currentNode === null) {
        output += `(null)`;
      }
      return output;
    }
  };

  //remove last element from list
  const pop = () => {
    let currentNode = at(getLength() - 2);
    length--;
    currentNode.nextNode = null;
    return currentNode;
  };

  //returns ture if the value is in the list and false if it does not exist in the linked list
  const contains = (value, currentNode = getHead()) => {
    if (currentNode === null) {
      return false;
    } else if (currentNode.value !== value) {
      currentNode = currentNode.nextNode;
      return contains(value, currentNode);
    } else {
      return true;
    }
  };

  //add value to the beginning of linked list
  const prepend = (value) => {
    const newNode = node(value);
    if (head === null) {
      head = newNode;
    } else {
      let currentNode = newNode;

      while (currentNode.nextNode !== null) {
        currentNode.nextNode = getHead();
      }
      currentNode.nextNode = getHead();
      head = currentNode;
    }
    length++;
  };

  return {
    append,
    head,
    getHead,
    getLength,
    prepend,
    getTail,
    at,
    pop,
    contains,
    find,
    toString,
  };
};

const testList = linkedlist();
