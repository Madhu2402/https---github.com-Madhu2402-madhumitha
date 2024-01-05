function toggleCard() {
    var card = document.querySelector('.card');
    card.classList.toggle('clicked');
}

function login() {
    //var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var loginMessage = document.getElementById('loginMessage');
    var loginContainer = document.getElementById('loginContainer');
    var contentContainer = document.getElementById('contentContainer');

    // Basic validation
    if (password === 'madhu123') {
        loginMessage.textContent = 'Login successful!';
        loginContainer.style.display = 'none';
        contentContainer.style.display = 'block';
    } else {
        loginMessage.textContent = 'Invalid username or password';
    }
}
