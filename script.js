const accessBtn = document.getElementById('submit-button');
const email = document.getElementById('email');
const form = document.getElementById('form');
const emailInput = document.forms['email-form']["email"].value
const error = document.createElement("p");
const formContainer = document.getElementsByClassName("section-form")



accessBtn.addEventListener('click', () => {
    
    errorMessage();

    })


function errorMessage (){

    if (window.matchMedia("(min-width: 768px)").matches) {
    console.log("Screen width is at least 768");
    insertAfter(error, form)
    error.innerText = "Oops! Please add your email";
    error.classList.add('error');
    error.style.margin =  "0 px;";
    } else {
        if(emailInput === ""){
            console.log("Screen less than 500px");
            insertAfter(error, email);
            error.classList.add('error');
            error.style.marginBottom =  "20px";
            form.style.gap = 0;
            error.innerText = "Oops! Please add your email";   
            
        }
    }
}

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}
