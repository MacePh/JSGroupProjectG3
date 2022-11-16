
            const parentUL = document.getElementById('tdUl');
            // console.log(parentUL);
            // const myInput = document.getElementById('myInput').value;
            function submit() {
                let newLI = document.createElement('li');
                let newBtn = document.createElement('button');
                newBtn.innerHTML=(myInput).value;
                
                newBtn.className="itemButton btn-lg";
                newLI.appendChild(newBtn);
               parentUL.appendChild(newLI);
               document.getElementById("myInput").value = ""};
            console.log(newLI);
               
            //     // newLI.innerHTML=newBtn.e;
                
            //     
            //     console.log('newBtn')
            //     var ul = document.getElementById("list");
// var li = document.createElement("li");
// li.appendChild(document.createTextNode("Four"));
// var button = document.createElement("button");
// button.innerHTML = "asdasd";
// li.appendChild(button);
// li.setAttribute("id","element4");
// ul.appendChild(li);
// alert(li.id);//