
            //Calls the UL into memory
            const parentUL = document.getElementById('tdUl');

            //Function executed on click of add button
            function submit() {
                let newLI = document.createElement('li');//creates new list item
                let newBtn = document.createElement('button');//creates a button to go into new list item
                newBtn.innerHTML=(myInput).value;//pulls input form into the button text
                newBtn.className="itemButton btn-lg";//gives button appropriate class names
                newLI.appendChild(newBtn);//puts newBtn into the list item
               parentUL.appendChild(newLI);//inserts complete button into the origninal UL
               document.getElementById("myInput").value = ""};//clears the input form
            console.log(newLI);
               
    