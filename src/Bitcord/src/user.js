
gun.put('users');
const users = gun.get('users');

var current_user;

function create_user(){
    var alias = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    var food = document.getElementById('favoritefood').value;
    var secretKey = Uint8Array.from(generate_key());
    current_user = {alias: alias, password: pass, secretkey: };
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

function generate_key(){
    var key = Array(64);
    for(let i = 0; i < key.length; i++){
        key[i] = Math.floor(Math.random * 255 + 1);
    }
    return key;
}
