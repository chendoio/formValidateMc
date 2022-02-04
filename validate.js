const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

form.addEventListener('submit', e =>{

    if(validate() === true) {
        window.location.href = 'thanks.html';
    } else {
        messageAlert();
        e.preventDefault();
    } 
});

function validate() {  
    const usernameValue = username.value;
	const emailValue = email.value;
	const messageValue = message.value;
    let result = true;
    
	
    if(usernameValue === '') {
        messError(username, '!Write name¡');
        result = false;  
    } else {
        Success(username);
    }
    if(emailValue === '') {
        messError(email, '!Email required¡'); 
        result = false;  
    } else {
        Success(email);
    }
    if(messageValue === '') {
        messError(message, '!Write message¡');
        result = false;  
    } else {
        Success(message);
    }
    return result;
}
// set error message
function messError(input, message) {
    const formControl = input.parentElement;
    const small = document.createElement('SMALL');
    formControl.className = 'form-control error';
    small.textContent = message;
    formControl.appendChild(small);
}
// Set Success
function Success(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'; 
}

// message top alert
function messageAlert() {
    const alert = document.querySelector('.bg-color');
    if(!alert) {
        const messAlert = document.querySelector('.messAlert');
        const divAlert = document.createElement('DIV');
        divAlert.classList.add('bg-color');
        
        const p = document.createElement('P');
        p.textContent = 'All Fields Required';
        p.style.color = '#5ca391';
        p.style.textTransform = 'uppercase';
        p.style.letterSpacing = '.2em';
        p.style.padding = '.5em 1em';
    
        divAlert.appendChild(p);
        messAlert.insertBefore(divAlert, messAlert.children[0]);

        setTimeout(() => {
            divAlert.remove();
        }, 3000);
    }  
    return;
    
}