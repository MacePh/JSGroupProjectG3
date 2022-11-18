// variables
let form = document.getElementById("addForm")
    let list = document.getElementById('itemsUL');

    // add-task button function
    function getLis() {
        return Array.from(list.childNodes).filter(item => item.tagName === 'LI')
    }

    function addTodo(el) {
        let newLI = document.createElement('li');//Creates list item
        newLI.id = el.id
        newLI.className = "list-group-item";
        newLI.innerHTML = document.getElementById('item').value;
        list.appendChild(newLI);
        let newBtn = document.createElement('button');//creates a button to go into new list item
        newBtn.innerHTML = 'x';//.value;//pulls input form into the button text
        newBtn.className = "btn btn-secondary btn-sm float-right delete";//gives button appropriate class names
        newBtn.setAttribute("onclick", "foo(event)");
        newLI.appendChild(newBtn);//puts newBtn into the list item
        list.appendChild(newLI);//inserts complete button into the origninal UL
        document.getElementById("item").value = ""
    console.log(newBtn)
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault()
        const elements = Array.from(event.target)
        const input = elements[0]
        const value = input.value

        const lis = getLis()
        if (! value) {
            return
        }
        const newTodo = {
            id: lis.length,
            value: value
        }

        addTodo(newTodo)
        console.log(getLis())
    });


    function foo() {
        // let t = event.target;
        let xGonnnGiveItToYa = event.target.parentNode;
        list.removeChild(xGonnnGiveItToYa);
    }

    // myUL.addEventListener('click', function (event) { // // get the element

//     let p = document.getElementById("list-card")
//     let p_prime = p.cloneNode(deep = true);
//     console.log(p_prime)
//     let parent = p.parentNode;
//     console.log(parent);
//     parent.appendChild(p_prime);
//     console.log(parent);}}


// let dup = document.getElementById('duplicate');
// let p = document.getElementById("list-card") 
// let p_prime = p.cloneNode(deep = true);
// console.log(p_prime)
// parent = p.parentNode;
// console.log(parent);
// parent.appendChild(p_prime);
// console.log(parent);

// itemInput.addEventListener('mouseclick', runEvent);
// function buttonClick() {
//     let parent = p.parentNode;
//     console.log(parent);
//     function runEvent(e) {//         e.preventDefault();//     }//     let card = document.getElementById('card');}// //form submit event// form.addEventListener('add-task', addItem);// //add item// function addItem(e){//     e.preventDefault();//     //Get input value//     let newItem = document.getElementById('item').value;//     //create new li element//     let li = document.createElement('li');//     //add class//     li.className = 'list-group';//     //Add text node with input vale//     li.appendChild(document.createTextNode(newItem));//     //create del button element//     let delButton = document.createElement('button');//     itemList.appendChild(li);// }

// //add option to emphasize important objects