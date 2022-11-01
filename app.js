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

  const at = (index) => {
    let currentNode = getHead();
    //what should this do if the number is greater than the number of index possible? Need a solution
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  };

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

  return { append, head, getHead, getLength, prepend, getTail, at };
};

const testList = linkedlist();
