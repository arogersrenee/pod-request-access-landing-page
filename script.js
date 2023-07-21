const accessBtn = document.getElementById('submit-button');
const email = document.getElementById('email');
const form = document.getElementById('form');
const error = document.createElement("p");
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //to validate email format against

function formValidation (){
    if (window.matchMedia("(min-width: 768px)").matches) { // error msg location based on the screen width
        if(email.value === "") {
            insertAfter(error, form);
            error.innerText = "Oops! Please add your email";
            error.classList.add('error');
            error.style.margin =  "0 px;";
            } else if(!email.value.trim().match(emailFormat)){
                insertAfter(error, form);
                error.innerText = "Oops! Please check your email";
                error.classList.add('error');
                error.style.margin =  "0 px;";
            } else {
                console.log('great job')
                error.style.display = "none"; 
                form.style.gap = "1rem";
                alert('Access Granted')
            }
        }    
    else { // if screen is less than 768px
        if(email.value === ''){
            insertAfter(error, email);
            error.classList.add('error');
            error.style.marginBottom =  "20px";
            form.style.gap = 0;
            error.innerText = "Oops! Please add your email";   
            } else if(!email.value.trim().match(emailFormat)){
                insertAfter(error, email);
                error.classList.add('error');
                error.style.marginBottom =  "20px";
                form.style.gap = 0;
                error.innerText = "Oops! Please check your email"; 
                } else {
                    console.log('great job')
                    error.style.display = "none"; 
                    form.style.gap = "1rem";
                    alert('Access Granted')
                }
    }
}

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}
