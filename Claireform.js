// variables
let form = document.getElementById("addForm")
    let list = document.getElementById('itemsUL');


    // add-task button function
    function getLis() {
        return Array.from(list.childNodes).filter(item => item.tagName === 'LI')
    }

    function addTodo(el) {
        let newLI = document.createElement('li');
        newLI.id = el.id
        let newBtn= document.createElement('button')
        //let txt = document.createTextNode("\u00D7");
        newBtn.className = "btn btn-secondary btn-sm float-right delete";
        //newBtn.txt.innerHTML = text
        //appendChild(txt);
        //newBtn = newBtn.value;
      //  newLI.appendChild(newBtn); 
          newlist.innerHTML = newBtn
        newLI.className = "list-group-item";
        newLI.innerHTML = document.getElementById('item').value;
        list.appendChild(newLI);
        document.getElementById("item").value = ""
        console.log(newLI);
    }
        // //function submitunction sbmt() {
        //     let newLI = document.createElement('li');//creates new list item
        //     newLI.tagName = "LI";
        //     let newBtn = document.createElement('span');//creates a button to go into new list item
        //     newBtn.innerHTML = (myInput).value;//pulls input form into the button text
        //     newBtn.className = "itemButton btn-sm";//gives button appropriate class names
        //     newBtn.setAttribute("onclick", "deleteItem(event)");
        //     newLI.appendChild(newBtn);//puts newBtn into the list item
        //     parentUL.appendChild(newLI);//inserts complete button into the origninal UL
        //     document.getElementById("myInput").value = ""
        //     // console.log(newLI)
        // };

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



    // function deleteItem() {
    //     let d86 = event.target;
    //     let dPN86 = event.target.parentNode;
    //     parentUL.removeChild(dPN86);}
    //     //     document.e.target.remove
    
    
    //     //function submitunction sbmt() {
    //         let newLI = document.createElement('li');//creates new list item
    //         newLI.tagName = "LI";
    //         let newBtn = document.createElement('span');//creates a button to go into new list item
    //         newBtn.innerHTML = (myInput).value;//pulls input form into the button text
    //         newBtn.className = "itemButton btn-sm";//gives button appropriate class names
    //         newBtn.setAttribute("onclick", "deleteItem(event)");
    //         newLI.appendChild(newBtn);//puts newBtn into the list item
    //         parentUL.appendChild(newLI);//inserts complete button into the origninal UL
    //         document.getElementById("myInput").value = ""
    //         // console.log(newLI)
    //    // };
    

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