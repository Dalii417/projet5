const form = document.getElementById('myform');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent default form submission behavior

    
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;

    
    if (!firstName!lastName!email || !subject) {
    alert('Please fill in all required fields');
    return false;
}

alert(First Name: ${ firstName }\nLast Name: ${ lastName }\nEmail: ${ email }\nSubject: ${ subject });
});



