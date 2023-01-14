let getID = (id) => document.getElementById(id);
let getS = (selector) => document.querySelector(selector);
let loginRegExp = /^[a-zA-z]{4,16}$/;
let passRegExp = /^[a-zA-Z0-9+\.+\_+\-]{4,16}$/;
let emailRegExp = /^([\w+\.+\-]+@+[\w]+[\.]+[a-z]+[^\d+\W])$/;
let userLogin = getID('userLogin');
let userPass = getID('userPassword');
let userEmail = getID('userEmail');
let btnAddUser = getID('btnAddUser');
let btnEditUser = getID('edit-user');
let users = [];
getID('form').addEventListener('submit', (e) => {
    e.preventDefault();
    let testLogin = loginRegExp.test(userLogin.value);
    let testPass = passRegExp.test(userPass.value);
    let testEmail = emailRegExp.test(userEmail.value);
    let login = userLogin.value;
    let password = userPass.value;
    let email = userEmail.value;
    if (testLogin && testPass && testEmail) {
        addUser(login, password, email);
        userLogin.value = '';
        userPass.value = '';
        userEmail.value = '';
        userLogin.style.border = '';
        userLogin.style.boxShadow = '';
        userPass.style.border = '';
        userPass.style.boxShadow = '';
        userEmail.style.border = '';
        userEmail.style.boxShadow = '';
    }
    else if (testLogin && testPass) {
        userEmail.style.border = '1px solid red';
        userEmail.style.boxShadow = '0 0 10px red';
    }
    else if (testLogin && testEmail) {
        userPass.style.border = '1px solid red';
        userPass.style.boxShadow = '0 0 10px red';
    }
    else if (testPass && testEmail) {
        userLogin.style.border = '1px solid red';
        userLogin.style.boxShadow = '0 0 10px red';
    }
    else if (testLogin) {
        userPass.style.border = '1px solid red';
        userPass.style.boxShadow = '0 0 10px red';
        userEmail.style.border = '1px solid red';
        userEmail.style.boxShadow = '0 0 10px red';
    }
    else if (testPass) {
        userLogin.style.border = '1px solid red';
        userLogin.style.boxShadow = '0 0 10px red';
        userEmail.style.border = '1px solid red';
        userEmail.style.boxShadow = '0 0 10px red';
    }
    else if (testEmail) {
        userLogin.style.border = '1px solid red';
        userLogin.style.boxShadow = '0 0 10px red';
        userPass.style.border = '1px solid red';
        userPass.style.boxShadow = '0 0 10px red';
    }
    else {
        userLogin.style.border = '1px solid red';
        userLogin.style.boxShadow = '0 0 10px red';
        userPass.style.border = '1px solid red';
        userPass.style.boxShadow = '0 0 10px red';
        userEmail.style.border = '1px solid red';
        userEmail.style.boxShadow = '0 0 10px red';
    }
});
function addUser(login, password, email) {
    let user = {
        login: login,
        password: password,
        email: email
    };
    users.push(user);
    users.forEach((elem, i) => {
        elem.id = i + 1;
    });
    render();
}
function render() {
    let userCreated = getID('user');
    userCreated.innerHTML = '';
    for (let i = 0; i < users.length; i++) {
        userCreated.innerHTML += `<tr class="line"><th>${users[i].id}</th>
        <th>${users[i].login}</th>
        <th>${users[i].password}</th>
        <th>${users[i].email}</th>
        <th><button class="edit" onClick="editUser('${i}')">Edit</button></th>
        <th><button id="delete" onClick="deleteUser('${i}')">Delete</button></th></tr>`;
    }
}
function editUser(index) {
    btnAddUser.classList.add('hide');
    btnEditUser.classList.remove('hide');
    for (let i = 0; i < users.length; i++) {
        if (i == index) {
            userLogin.value = users[i].login;
            userPass.value = users[i].password;
            userEmail.value = users[i].email;
            let userIndex = index;
            btnEditUser.addEventListener('click', function saveUser() {
                let updateLogin = userLogin.value;
                let updatePass = userPass.value;
                let updateEmail = userEmail.value;
                if (updateLogin == '' || updatePass == '' || updateEmail == '') {
                    if (updateLogin && updatePass && updateEmail) {
                        userLogin.value = '';
                        userPass.value = '';
                        userEmail.value = '';
                        userLogin.style.border = '';
                        userLogin.style.boxShadow = '';
                        userPass.style.border = '';
                        userPass.style.boxShadow = '';
                        userEmail.style.border = '';
                        userEmail.style.boxShadow = '';
                    }
                    else if (updateLogin && updatePass) {
                        userEmail.style.border = '1px solid red';
                        userEmail.style.boxShadow = '0 0 10px red';
                    }
                    else if (updateLogin && updateEmail) {
                        userPass.style.border = '1px solid red';
                        userPass.style.boxShadow = '0 0 10px red';
                    }
                    else if (updatePass && updateEmail) {
                        userLogin.style.border = '1px solid red';
                        userLogin.style.boxShadow = '0 0 10px red';
                    }
                    else if (updateLogin) {
                        userPass.style.border = '1px solid red';
                        userPass.style.border = '0 0 10px red';
                        userEmail.style.border = '1px solid red';
                        userEmail.style.boxShadow = '0 0 10px red';
                    }
                    else if (updatePass) {
                        userLogin.style.border = '1px solid red';
                        userLogin.style.boxShadow = '0 0 10px red';
                        userEmail.style.border = '1px solid red';
                        userEmail.style.boxShadow = '0 0 10px red';
                    }
                    else if (updateEmail) {
                        userLogin.style.border = '1px solid red';
                        userLogin.style.boxShadow = '0 0 10px red';
                        userPass.style.border = '1px solid red';
                        userPass.style.boxShadow = '0 0 10px red';
                    }
                    else {
                        userLogin.style.border = '1px solid red';
                        userLogin.style.boxShadow = '0 0 10px red';
                        userPass.style.border = '1px solid red';
                        userPass.style.boxShadow = '0 0 10px red';
                        userEmail.style.border = '1px solid red';
                        userEmail.style.boxShadow = '0 0 10px red';
                    }
                }
                else {
                    class Person {
                        login;
                        password;
                        email;
                        constructor() {
                            this.login = updateLogin,
                                this.password = updatePass,
                                this.email = updateEmail;
                        }
                    }
                    const person = new Person();
                    users[userIndex].login = person.login;
                    users[userIndex].password = person.password;
                    users[userIndex].email = person.email;
                    userLogin.value = '';
                    userPass.value = '';
                    userEmail.value = '';
                    userLogin.style.border = '';
                    userLogin.style.boxShadow = '';
                    userPass.style.border = '';
                    userPass.style.boxShadow = '';
                    userEmail.style.border = '';
                    userEmail.style.boxShadow = '';
                    btnEditUser.classList.add('hide');
                    btnAddUser.classList.remove('hide');
                    render();
                }
            });
        }
    }
}
function deleteUser(index) {
    users.splice(index, 1);
    render();
}
userLogin.oninput = function () {
    let testLogin = loginRegExp.test(userLogin.value);
    if (testLogin) {
        userLogin.style.border = '1px solid green';
        userLogin.style.boxShadow = '0 0 10px green';
    }
    else {
        userLogin.style.border = '1px solid red';
        userLogin.style.boxShadow = '0 0 10px red';
    }
};
userPass.oninput = function () {
    let testPass = passRegExp.test(userPass.value);
    if (testPass) {
        userPass.style.border = '1px solid green';
        userPass.style.boxShadow = '0 0 10px green';
    }
    else {
        userPass.style.border = '1px solid red';
        userPass.style.boxShadow = '0 0 10px red';
    }
};
userEmail.oninput = function () {
    let testEmail = emailRegExp.test(userEmail.value);
    if (testEmail) {
        userEmail.style.border = '1px solid green';
        userEmail.style.boxShadow = '0 0 10px green';
    }
    else {
        userEmail.style.border = '1px solid red';
        userEmail.style.boxShadow = '0 0 10px red';
    }
};
userLogin.onblur = function () {
    let testLogin = loginRegExp.test(userLogin.value);
    if (testLogin) {
        userLogin.style.border = '1px solid green';
        userLogin.style.boxShadow = '0 0 10px green';
    }
    else {
        userLogin.style.border = '';
        userLogin.style.boxShadow = '';
    }
};
userPass.onblur = function () {
    let testPass = passRegExp.test(userPass.value);
    if (testPass) {
        userPass.style.border = '1px solid green';
        userPass.style.boxShadow = '0 0 10px green';
    }
    else {
        userPass.style.border = '1px solid red';
        userPass.style.boxShadow = '0 0 10px red';
    }
};
userEmail.onblur = function () {
    let testEmail = emailRegExp.test(userEmail.value);
    if (testEmail) {
        userEmail.style.border = '1px solid green';
        userEmail.style.boxShadow = '0 0 10px green';
    }
    else {
        userEmail.style.border = '1px solid red';
        userEmail.style.boxShadow = '0 0 10px red';
    }
};
