document.getElementById('login-btn').addEventListener('click', function () {
    // for email
    const emailField = document.getElementById('emailInput');
    const userEmail = emailField.value;

    // for password

    const passwordField = document.getElementById('passInput');
    const userPassword = passwordField.value;

    if (userEmail == 'naim@email.com' && userPassword == 'topsecret') {
        window.location.href = 'banking.html'
    } else {
        console.log('invalid userName of password');
    }
    
    
})