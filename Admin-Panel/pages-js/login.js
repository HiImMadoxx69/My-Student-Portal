document.getElementById('loginForm').addEventListener('submit', logIn);

const Username = document.getElementById('inputUsername').value;
const Password = document.getElementById('inputPassword').value;

const logIn = (e) =>{
e.preventDefault();
console.log(Username+" & "+Password );
}