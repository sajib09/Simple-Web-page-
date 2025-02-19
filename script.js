document.getElementById('tryMe').addEventListener('click', function() {
    alert('Button clicked!');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('loginUsername').value;
    let password = document.getElementById('loginPassword').value;

    if (username === '' || password === '') {
        alert('Please fill in all fields.');
    } else {
        alert('Login successful!');
    }
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let firstName = document.getElementById('firstName').value;

    if (firstName === '') {
        document.getElementById('errorMsg').style.display = 'inline';
    } else {
        document.getElementById('errorMsg').style.display = 'none';
        alert('Registration successful!');
    }
});