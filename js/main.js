function validateForm(e) {

    let nameInput = document.getElementById('name');
    let emailInput = document.getElementById('email');
    let textareaInput = document.getElementById('text');
    
    
    document.getElementById('message').innerHTML = '<ul id="message-list"></ul>';
    if(nameInput.value === ''){
        e.preventDefault();
        let msgName = document.createElement('li');
        msgName.innerHTML = 'Wpisz imię';
        document.getElementById('message-list').appendChild(msgName);
    }   
      if(emailInput.value === ''){
        e.preventDefault();
        let msgName = document.createElement('li');
        msgName.innerHTML = 'Wpisz email';
        document.getElementById('message-list').appendChild(msgName);
    }   
         if(textareaInput.value === ''){
        e.preventDefault();
        let msgName = document.createElement('li');
        msgName.innerHTML = 'Wpisz wiadomość';
        document.getElementById('message-list').appendChild(msgName);
    }   
}

document.getElementById('mailing-form').addEventListener('submit', validateForm);
