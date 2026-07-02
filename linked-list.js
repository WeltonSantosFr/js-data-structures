// A linked list is a linear collection of data elements, called nodes.
// Each node contains a reference (link) to the next node in the sequence, and optionally a reference to the previous node (in the case of a doubly linked list).

// Linked list constructor function
function LinkedList() {
  // We initialize the head and tail pointers to null, indicating that the list is initially empty.
  this.head = null;
  this.tail = null;
}
 
// Node constructor function
function Node(value, next, prev) {
  // The Node constructor takes three parameters, each parameter is assigned to a property of the node object.

  // The value parameter represents the data stored in the node
  this.value = value;

  // The next parameter is a reference to the next node in the list, allowing traversal from one node to the next.
  this.next = next;

  // The prev parameter is a reference to the previous node in the list, allowing traversal in the opposite direction.
  this.prev = prev;
}
 
// The addToHead method adds a new node with the specified value to the beginning of the linked list.
// It creates a new node, updates the head pointer, and adjusts the previous pointer of the old head node if it exists.
// If the list was empty, it also updates the tail pointer to point to the new node.
LinkedList.prototype.addToHead = function(value) {
  // Creates the new node.
  var newNode = new Node(value, this.head, null);

  // If the list is not empty, it updates the previous pointer of the old head node to point to the new node.
  if (this.head) this.head.prev = newNode;

  // If the list is empty, it sets the tail pointer to point to the new node.
  else this.tail = newNode;

  // Finally, it updates the head pointer to point to the new node, making it the new head of the list.
  this.head = newNode;
};
 
// The addToTail method adds a new node with the specified value to the end of the linked list.
// It creates a new node, updates the tail pointer, and adjusts the next pointer of the old tail node if it exists.
// If the list was empty, it also updates the head pointer to point to the new node.
LinkedList.prototype.addToTail = function(value) {
  // Creates the new node.
  var newNode = new Node(value, null, this.tail);

  // If the list is not empty, it updates the next pointer of the old tail node to point to the new node.
  if (this.tail) this.tail.next = newNode;

  // If the list is empty, it sets the head pointer to point to the new node.
  else this.head = newNode;

  // Finally, it updates the tail pointer to point to the new node, making it the new tail of the list.
  this.tail = newNode;
};
 
// The removeHead method removes the node at the beginning of the linked list and returns its value.
// It updates the head pointer to point to the next node in the list and adjusts the previous pointer of the new head node if it exists.
// If the list becomes empty after the removal, it also updates the tail pointer to null.
LinkedList.prototype.removeHead = function() {
  // If the list is empty, it return null.
  if (!this.head) return null;

  // It stores the value of the current head node in a variable.
  var val = this.head.value;

  // It updates the head pointer to point to the next node in the list.
  this.head = this.head.next;

  // If the new head node exists, it sets its previous pointer to null. If the list becomes empty, it also sets the tail pointer to null.
  if (this.head) this.head.prev = null;
  else this.tail = null;

  // Finally, it returns the value of the removed head node.
  return val;
};
 
// The removeTail method removes the node at the end of the linked list and returns its value.
// It updates the tail pointer to point to the previous node in the list and adjusts the next pointer of the new tail node if it exists.
// If the list becomes empty after the removal, it also updates the head pointer to null.
LinkedList.prototype.removeTail = function() {
  // If the list is empty, it return null.
  if (!this.tail) return null;

  // It stores the value of the current tail node in a variable.
  var val = this.tail.value;

  // It updates the tail pointer to point to the previous node in the list.
  this.tail = this.tail.prev;

  // If the new tail node exists, it sets its next pointer to null. If the list becomes empty, it also sets the head pointer to null.
  if (this.tail) this.tail.next = null;
  else this.head = null;

  // Finally, it returns the value of the removed tail node.
  return val;
};
 
// The search method traverses the linked list to find a node with the specified value.
// It starts from the head of the list and checks each node's value. If it finds a node with the matching value, it return that value.
// If it reaches the end of the list without finding a match, it returns null.
// This method has a runtime complexity of O(n), where n is the number of nodes in the linked list, because in the worst case, it may need to check every node in the list.
LinkedList.prototype.search = function(searchValue) {
  // It initializes a variable currentNode to the head of the list.
  var currentNode = this.head;

  // It enters a loop that continues as long as currentNode is not null.
  while (currentNode) {

    // It checks if the value of the current node matches the searchValue. If a match is found, it return the value of the current node.
    if (currentNode.value === searchValue) return currentNode.value;

    // If no match is found, it moves to the next node in the list by updating currentNode to point to the next node.
    currentNode = currentNode.next;
  } 

  // If the loop completes without finding a match, it means the value is not present in the list, and the method returns null.
  return null;
};
 
// The indexOf method traverses the linked list to find all occurrences of a specified value and returns an array of their indexes.
// It starts from the head of the list and checks each node's value. If it finds a node with the matching value, it adds the current index to an array.
// If it reaches the end of the list without finding any matches, it returns an empty array.
LinkedList.prototype.indexOf = function(value) {
  // Initialize an empty array to store the indexes of nodes with the specified value.
  var indexes = [];

  // Initialize a variable currentIndex to keep track of the current index as we traverse the list, starting from 0.
  var currentIndex = 0;

  // Initialize a variable currentNode to the head of the list to start the traversal.
  var currentNode = this.head;

  // Enter a loop that continues as long as currentNode is not null.
  while(currentNode) {

    // It checks if the value of the current node matches the specified value. If a match is found, it adds the current index to the indexes array.
    if (currentNode.value === value) indexes.push(currentIndex);

    // If no match is found, it moves to the next node in the list by updating currentNode to point to the next node and increments currentIndex by 1.
    currentNode = currentNode.next;
    currentIndex++;
  }

  // Finally, it returns the array of indexes where the specified value was found in the linked list. If no matches were found, the array will be empty.
  return indexes;
};
 
 
var myLL = new LinkedList();

console.log(myLL, 'myLL before adding nodes');
 
myLL.addToHead(123);
myLL.addToHead(70);
myLL.addToHead('hello');
myLL.addToTail(19);
myLL.addToTail('world');
myLL.addToTail(20);

console.log(myLL, 'myLL after adding nodes');

myLL.removeHead();
myLL.removeTail();

console.log(myLL, 'myLL after removing head and tail');

console.log(myLL.search(70), 'search for 70');
console.log(myLL.search('world'), 'search for world');
console.log(myLL.search(999), 'search for 999');

console.log(myLL.indexOf(123), 'index of 123');
console.log(myLL.indexOf('hello'), 'index of hello');