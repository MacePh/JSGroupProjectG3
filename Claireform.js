let myUL=document.getElementById('items');
let form = document.getElementById("add-task");
console.log(items);

// get the element
let p = document.getElementById("list-card")
// create a copy of it
let p_prime = p.cloneNode(deep = true);
console.log(p_prime)
// second list add
let parent = p.parentNode;
// console.log(parent);

parent.appendChild(p_prime);5
console.log(parent);

// add item clicked
itemInput.addEventListener('mouseclick', runEvent);

function buttonClick() {
    let parent = p.parentNode;
    // console.log(parent);


    function runEvent(e) {
        e.preventDefault();

    }
    let card = document.getElementById('card');}

//form submit event
form.addEventListener('add-task', addItem);

//add item
function addItem(e){
    e.preventDefault();

    //Get input value
    let newItem = document.getElementById('item').value;

    //create new li element
    let li = document.createElement('li');
    //add class
    li.className = 'list-group';
    //Add text node with input vale
    li.appendChild(document.createTextNode(newItem));

    //create del button element
    let delButton = document.createElement('button');

    itemList.appendChild(li);
}
