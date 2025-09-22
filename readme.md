1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

i. getElementById => select only one elemet by unique id and return a single element.

ii. getElemetnByClassName => select all the element of same class and return a HMTL Collection.

iii. querySelector => select only the first element that match with a css selector and return a single element.

iv. quereySelectorAll => select all the element that match with css selector and return a NodeList.


2. How do you create and insert a new element into the DOM?

To create a new element we have to follow this steps:
 i. select the element with documnet.getElementById() where you want to insert the new element.
 ii. create a new element with documnet.createElement.
 iii. append the new element inside the parentElement with appendChild.

 3. What is Event Bubbling and how does it work?

 When an event happes on a children and it's bubble up to it's parent till window it's call Event Bubbling.

<div id="parent">
  <button id="child">Click Me</button>
</div>
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

if you click the button => 
child handler runs → Child clicked
Then event bubbles up → parent handler runs → Parent clicked
Then continues bubbling up to <body>, <html>, and document.

4. What is Event Delegation in JavaScript? Why is it useful?

delegating event to it's parrent thorw event bubbling is called as event delegation.

Becasue of less memmory use, dynamic elements and cleaner code it's very usefull.

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() Stops the default action of an element. But
it does not stop the event from bubbling up.

StopPropagation() stops the event from bubbling (or capturing) to parent elements.
The default action will still happen unless you also call preventDefault().