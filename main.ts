let getID = (id: string) => document.getElementById(id);
let getS = (selector: string) => document.querySelector(selector);
//for correct registration
let loginRegExp: RegExp = /^[a-zA-z]{4,16}$/;
let passRegExp: RegExp = /^[a-zA-Z0-9+\.+\_+\-]{4,16}$/;
let emailRegExp: RegExp = /^([\w+\.+\-]+@+[\w]+[\.]+[a-z]+[^\d+\W])$/;
//for input fields
let userLogin = getID('userLogin') as HTMLInputElement;
let userPass = getID('userPassword') as HTMLInputElement;
let userEmail = getID('userEmail') as HTMLInputElement;
//btn for adding and editing user
let btnAddUser = getID('btnAddUser') as HTMLButtonElement;
let btnEditUser = getID('edit-user') as HTMLButtonElement;

let users = [];
//submit info and create user
getID('form').addEventListener('submit', (e) => {
    e.preventDefault();

    let testLogin = loginRegExp.test(userLogin.value);
    let testPass = passRegExp.test(userPass.value);
    let testEmail = emailRegExp.test(userEmail.value);

    let login = userLogin.value;
    let password = userPass.value;
    let email = userEmail.value;
    //check if all fields are filled
    if (testLogin && testPass && testEmail) {
        //if filled create user
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
    } else if (testLogin && testPass) {
        userEmail.style.border = '1px solid red';
        userEmail.style.boxShadow = '0 0 10px red';
    } else if (testLogin && testEmail) {
        userPass.style.border = '1px solid red';
        userPass.style.boxShadow = '0 0 10px red';
    } else if (testPass && testEmail) {
        userLogin.style.border = '1px solid red';
        userLogin.style.boxShadow = '0 0 10px red';
    } else if (testLogin) {
        userPass.style.border = '1px solid red';
        userPass.style.boxShadow = '0 0 10px red';
        userEmail.style.border = '1px solid red';
        userEmail.style.boxShadow = '0 0 10px red';
    } else if (testPass) {
        userLogin.style.border = '1px solid red';
        userLogin.style.boxShadow = '0 0 10px red';
        userEmail.style.border = '1px solid red';
        userEmail.style.boxShadow = '0 0 10px red';
    } else if (testEmail) {
        userLogin.style.border = '1px solid red';
        userLogin.style.boxShadow = '0 0 10px red';
        userPass.style.border = '1px solid red';
        userPass.style.boxShadow = '0 0 10px red';
    }
    else {
        userLogin.style.border = '1px solid red';
        userLogin.style.boxShadow = '0 0 10px red'
        userPass.style.border = '1px solid red';
        userPass.style.boxShadow = '0 0 10px red';
        userEmail.style.border = '1px solid red';
        userEmail.style.boxShadow = '0 0 10px red';
    }
});
//for creating add adding user
function addUser(login: string | number, password: any, email: any) {

    interface IUser {
        login: string | number;
        password: any;
        email: any;
    }

    let user: IUser = {
        login: login,
        password: password,
        email: email
    }

    users.push(user);
    users.forEach((elem, i) => {
        elem.id = i + 1;
    });
    render();
}
//for pushing user info into a table
function render() {
    let userCreated = getID('user') as HTMLDivElement;
    userCreated.innerHTML = '';
    for (let i = 0; i < users.length; i++) {
        userCreated.innerHTML += `<tr class="line"><th>${users[i].id}</th>
        <th>${users[i].login}</th>
        <th>${users[i].password}</th>
        <th>${users[i].email}</th>
        <th><button class="edit" onClick="editUser('${i}')">Edit</button></th>
        <th><button id="delete" onClick="deleteUser('${i}')">Delete</button></th></tr>`
    }
}
//for editing user info
function editUser(index: number) {
    btnAddUser.classList.add('hide');
    btnEditUser.classList.remove('hide');

    for (let i = 0; i < users.length; i++) {
        if (i == index) {
            userLogin.value = users[i].login;
            userPass.value = users[i].password;
            userEmail.value = users[i].email;

            let userIndex: number = index;
            //click btn Edit User
            btnEditUser.addEventListener('click', function saveUser() {
                let updateLogin: string | number = userLogin.value;
                let updatePass: any = userPass.value;
                let updateEmail: any = userEmail.value;
                //check input fields
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
                    } else if (updateLogin && updatePass) {
                        userEmail.style.border = '1px solid red';
                        userEmail.style.boxShadow = '0 0 10px red';
                    } else if (updateLogin && updateEmail) {
                        userPass.style.border = '1px solid red';
                        userPass.style.boxShadow = '0 0 10px red';
                    } else if (updatePass && updateEmail) {
                        userLogin.style.border = '1px solid red';
                        userLogin.style.boxShadow = '0 0 10px red';
                    } else if (updateLogin) {
                        userPass.style.border = '1px solid red';
                        userPass.style.border = '0 0 10px red';
                        userEmail.style.border = '1px solid red';
                        userEmail.style.boxShadow = '0 0 10px red';
                    } else if (updatePass) {
                        userLogin.style.border = '1px solid red';
                        userLogin.style.boxShadow = '0 0 10px red';
                        userEmail.style.border = '1px solid red';
                        userEmail.style.boxShadow = '0 0 10px red';
                    } else if (updateEmail) {
                        userLogin.style.border = '1px solid red';
                        userLogin.style.boxShadow = '0 0 10px red';
                        userPass.style.border = '1px solid red';
                        userPass.style.boxShadow = '0 0 10px red';
                    } else {
                        userLogin.style.border = '1px solid red';
                        userLogin.style.boxShadow = '0 0 10px red';
                        userPass.style.border = '1px solid red';
                        userPass.style.boxShadow = '0 0 10px red';
                        userEmail.style.border = '1px solid red';
                        userEmail.style.boxShadow = '0 0 10px red';
                    }
                } else {
                    //if all fields filled update info and rewrite into a table
                    class Person {
                        login: string | number;
                        password: any;
                        email: any;
                        constructor() {
                            this.login = updateLogin,
                                this.password = updatePass,
                                this.email = updateEmail
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
//for deleting user by index
function deleteUser(index: number) {
    users.splice(index, 1);
    render();
}
//check correct info while typing login,password and email
userLogin.oninput = function () {
    let testLogin = loginRegExp.test(userLogin.value);
    if (testLogin) {
        userLogin.style.border = '1px solid green';
        userLogin.style.boxShadow = '0 0 10px green';
    } else {
        userLogin.style.border = '1px solid red';
        userLogin.style.boxShadow = '0 0 10px red';
    }
}

userPass.oninput = function () {
    let testPass = passRegExp.test(userPass.value);
    if (testPass) {
        userPass.style.border = '1px solid green';
        userPass.style.boxShadow = '0 0 10px green';
    } else {
        userPass.style.border = '1px solid red';
        userPass.style.boxShadow = '0 0 10px red';
    }
}

userEmail.oninput = function () {
    let testEmail = emailRegExp.test(userEmail.value);
    if (testEmail) {
        userEmail.style.border = '1px solid green';
        userEmail.style.boxShadow = '0 0 10px green';
    } else {
        userEmail.style.border = '1px solid red';
        userEmail.style.boxShadow = '0 0 10px red';
    }
}
//change style of fields when not focusing
userLogin.onblur = function () {
    let testLogin = loginRegExp.test(userLogin.value);
    if (testLogin) {
        userLogin.style.border = '1px solid green';
        userLogin.style.boxShadow = '0 0 10px green';
    } else {
        userLogin.style.border = '';
        userLogin.style.boxShadow = '';
    }
}

userPass.onblur = function () {
    let testPass = passRegExp.test(userPass.value);
    if (testPass) {
        userPass.style.border = '1px solid green';
        userPass.style.boxShadow = '0 0 10px green';
    } else {
        userPass.style.border = '1px solid red';
        userPass.style.boxShadow = '0 0 10px red';
    }
}

userEmail.onblur = function () {
    let testEmail = emailRegExp.test(userEmail.value);
    if (testEmail) {
        userEmail.style.border = '1px solid green';
        userEmail.style.boxShadow = '0 0 10px green';
    } else {
        userEmail.style.border = '1px solid red';
        userEmail.style.boxShadow = '0 0 10px red';
    }
}