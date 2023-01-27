const form = document.getElementById('formWorker');
const user= document.getElementById('username');
const email = document.getElementById('email');
const cedula = document.getElementById('cedula');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    const userValue = user.value.trim();
    const emailValue = email.value.trim();
    const cedulaValue = cedula.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    
    if (userValue == ''){
        setErrorfor(user, 'No puede dejar el usuario en blanco.');
    }

    if(emailValue == ''){
        setErrorfor(email, 'No puede dejar el email en blanco.');
    }else if(!isEmail(emailValue)){
        setErrorfor(email,'No ingreso un email valido.');
    }
    if (cedulaValue == ''){
        setErrorfor(cedula, 'No puede dejar la cédula en blanco.');
    }

    if (passwordValue == ''){
        setErrorfor(password, 'No puede dejar el password en blanco.');
    }

    if (password2Value == ''){
        setErrorfor(password2, 'No puede dejar el password en blanco.');
    }else if (passwordValue !== password2Value){
        setErrorfor(password2,'Las contraseñas no coinciden.');
    }
     if (userValue !== '' && emailValue !== '' && cedulaValue !== '' && passwordValue !== '' && password2Value !== ''){
        window.location.href = 'app.html';
    }
}

function setErrorfor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


