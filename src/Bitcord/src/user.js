
gun.put('users');
const users = gun.get('users');

var current_user;

function create_user(){
    var alias = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    var food = document.getElementById('favoritefood').value;

    current_user = {alias: alias, password: pass, food: food, own_hubs, hubs};
    users.put(alias + pass)
    current_user = users.get(alias + pass).put(current_user);

    current_user.on((data) =>{
        console.log(data);
    });
}

function login(){
    var alias = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    current_user = users.get(alias + pass);
    current_user.on((data) =>{
        console.log(data);
    });
}
