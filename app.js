import makeUser from './make-user.js';

const myForm = document.getElementById('user-form');

myForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const form = new FormData(myForm);

    makeUser(form);

    const user = makeUser(form);

    const stringedUser = JSON.stringify(user);
    localStorage.setItem('USER', stringedUser);
});
