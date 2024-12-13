"use strict";
let array = [1, 2, 3, 2, 1, 3, 4, 4, 5,'a','b','c','a','b','d'];

// obj = {};
// array.forEach(element =>{
//     if(obj[element]===undefined){
//         obj[element]=1;
//     }
//     else{
//         obj[element]++;
//     }
// })

// for(let key in obj){
//     console.log(`Element ${key} occurs ${map[key]} times`);
// }

// array.forEach(ele=>{
//     console.log(ele);
// })
// //REMOVE DUPLICATES FROM ARRAY
// const map = new Map();

// array.forEach(element =>{
//     map.set(element,true)
// })

// console.log([...map.keys()]);


//Reverse a Linked List

// function reverseLinkedlist(head){
//     let curr = head;
//     let prev = null;
//     let temp;

//     while(curr!=null){
//         temp = curr.next;
//         curr.next = prev;
//         prev = curr;
//         curr = temp;
//     }
//     return prev;
// }

// Iterative JavaScript program to reverse a linked list

class Node {
    constructor(newData) {
        this.data = newData;
        this.next = null;
    }
}

// Given the head of a list, reverse the list and return the
// head of reversed list
// function reverseList(head) {

//     // Initialize three pointers: curr, prev and next
//     let curr = head;
//     let prev = null;
//     let temp;

//     // Traverse all the nodes of Linked List
//     while (curr !== null) {
//         // Store next
//         temp = curr.next;

//         // Reverse current node's next pointer
//         curr.next = prev;

//         // Move pointers one position ahead
//         prev = curr;
//         curr = temp;
//     }

//     // Return the head of reversed linked list
//     return prev;
// }

// function printList(node) {
//     while (node !== null) {
//         console.log(" " + node.data);
//         node = node.next;
//     }
// }

// // Create a hard-coded linked list:
// // 1 -> 2 -> 3 -> 4 -> 5
// let head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);

// console.log("Given Linked list:");
// printList(head);

// let result = reverseList(head);

// console.log("Reversed Linked List:");
// printList(result);

// Recursive javascript program to reverse a linked list


// Given the head of a list, reverse the list and return the
// head of reversed list
function reverseList(head) {
    if (head === null || head.next === null)
        return head;

    // reverse the rest of linked list and put the first
    // element at the end
    let newhead = reverseList(head.next);

    // Make the current head as last node of remaining
    // linked list
    head.next.next = head;

    // Update next of current head to NULL
    head.next = null;

    // Return the reversed linked list
    return newhead;
}

function printList(node) {
    while (node !== null) {
        console.log(` ${node.data}`);
        node = node.next;
    }
}


// Create a hard-coded linked list:
// 1 -> 2 -> 3 -> 4 -> 5
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log("Given Linked List:");
printList(head);

head = reverseList(head);

console.log("\nReversed Linked List:");
printList(head);