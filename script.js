const accessBtn = document.getElementById('submit-button');
const email = document.getElementById('email');
const form = document.getElementById('form');
const error = document.createElement("p");
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //to validate email format against

form.addEventListener('submit', (e) => {
    e.preventDefault();
    return validateForm();
  });


function validateForm (){
    let valid;
    if (window.matchMedia("(min-width: 768px)").matches) { // error msg location in DOM based on the screen width
        if(email.value === "") {
            insertAfter(error, form);
            error.innerText = "Oops! Please add your email";
            error.classList.add('error');
            error.style.margin = "0 px;";
            valid = false;
            } else if(!email.value.trim().match(emailFormat)){
                insertAfter(error, form);
                error.innerText = "Oops! Please input a valid email";
                error.classList.add('error');
                error.style.margin =  "0 px;";
                valid = false;
            } else {
                error.style.display = "none"; 
                form.style.gap = "1rem";
                alert('Congratulations! Access Granted')
                valid = true;
            }
        }    
    else { // if screen is less than 768px
        if(email.value === ''){
            insertAfter(error, email);
            error.classList.add('error');
            error.style.marginBottom =  "20px";
            form.style.gap = 0;
            error.innerText = "Oops! Please add your email";
            valid = false;   
            } else if(!email.value.trim().match(emailFormat)){
                insertAfter(error, email);
                error.classList.add('error');
                error.style.marginBottom =  "20px";
                form.style.gap = 0;
                error.innerText = "Oops! Please input a valid email";
                valid = false; 
                } else {
                    error.style.display = "none"; 
                    form.style.gap = "1rem";
                    alert('Congratulations! Access Granted')
                    valid = true;
                }
    }
    return valid;
}

// to insert between siblings
function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}
