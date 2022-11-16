
            // //Calls the UL into memory
            // const parentUL = document.getElementById('tdUl');

            // //Function executed on click of add button
            // function submit() {
            //     let newLI = document.createElement('li');//creates new list item
            //     let newBtn = document.createElement('button');//creates a button to go into new list item
            //     newBtn.innerHTML=(myInput).value;//pulls input form into the button text
            //     newBtn.className="itemButton btn-lg";//gives button appropriate class names
            //     newLI.appendChild(newBtn);//puts newBtn into the list item
            //    parentUL.appendChild(newLI);//inserts complete button into the origninal UL
            //    document.getElementById("myInput").value = ""};//clears the input form

               
            //Calls the UL into memory
            let nodeList=document.getElementsByTagName("LI")
            const parentUL = document.getElementById('tdUl');
            let x=0;

            //Function executed on click of add button
            function sbmt() {
                let newLI = document.createElement('li');//creates new list item
                newLI.tagName="LI";
                let newBtn = document.createElement('span');//creates a button to go into new list item
                newBtn.innerHTML=(myInput).value;//pulls input form into the button text
                newBtn.className="itemButton btn-lg";//gives button appropriate class names
                newBtn.setAttribute("onclick","deleteItem()");
                newLI.appendChild(newBtn);//puts newBtn into the list item
               parentUL.appendChild(newLI);//inserts complete button into the origninal UL
               document.getElementById("myInput").value = ""
            console.log(newLI)
            };//clears the input form
            
            // StrikeThrough




            
            function deleteItem(e){
                document.e.target.remove();}
                // let li = e.target.parentUL;
                //     console.log(li);
                //     parentUL.removeChild(li);}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}



            //    let p = document.getElementById("para1")
            //    let p_prime = p.cloneNode(true)
               



//             //    Deleting a list item when clicked.
// 


//                let listItems = document.getElementsByClassName(itemButton);
               
//                dltItem.addEventListener('click', function(event) {
//                   	slctd.document.getElementBy
//                   //     newLI.innerHTML=document.getElementById('newToDo').value;
//                   //     parentUL.appendChild(newLI);
//                   //     document.getElementById("newToDo").value = ""});
        
// //          const parentUL = document.querySelector('ul');
// // const sumbit = document.querySelector('button');

// // submit.addEventListener('click', function(event) {
// // 	let newLI = document.createElement('li');
// //     newLI.innerHTML=document.getElementById('newToDo').value;
// //     parentUL.appendChild(newLI);
// //     document.getElementById("newToDo").value = ""});
//  console.log(newLI);