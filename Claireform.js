let form = document.getElementById("addForm")
let list = document.getElementById('itemsUL');


function getLis() {
    return Array.from(list.childNodes).filter(item => item.tagName === 'LI')
}

function addTodo(el) {
    let newLI = document.createElement('li');
    newLI.id = el.id
    newLI.className = "list-group-item";
    newLI.innerHTML = document.getElementById('item').value;
    list.appendChild(newLI);
    document.getElementById("item").value = ""
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

// myUL.addEventListener('click', function (event) { // // get the element
//     let p = document.getElementById("list-card")
//     // // create a copy of it
//     let p_prime = p.cloneNode(deep = true);
//     console.log(p_prime)
//     // // second list add
//     let parent = p.parentNode;
//     // console.log(parent);
//     parent.appendChild(p_prime);
//     console.log(parent);

// })

// let dup = document.getElementById('duplicate');

// // get the element
// let p = document.getElementById("list-card") // // create a copy of itlet p_prime = p.cloneNode(deep = true);console.log(p_prime)// // second list addlet parent = p.parentNode;// console.log(parent);parent.appendChild(p_prime);console.log(parent);// // add item clicked// itemInput.addEventListener('mouseclick', runEvent);// function buttonClick() {//     let parent = p.parentNode;//     // console.log(parent);//     function runEvent(e) {//         e.preventDefault();//     }//     let card = document.getElementById('card');}// //form submit event// form.addEventListener('add-task', addItem);// //add item// function addItem(e){//     e.preventDefault();//     //Get input value//     let newItem = document.getElementById('item').value;//     //create new li element//     let li = document.createElement('li');//     //add class//     li.className = 'list-group';//     //Add text node with input vale//     li.appendChild(document.createTextNode(newItem));//     //create del button element//     let delButton = document.createElement('button');//     itemList.appendChild(li);// }
