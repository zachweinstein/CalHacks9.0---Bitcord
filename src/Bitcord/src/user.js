const users = gun.get('users');
var current_user;

function Message(message){
    this.message = message;
}

function create_user(){
    var alias = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    current_user = {alias: alias, password: pass, messages:{}};
    users.put(alias + pass);
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
    loggedin = true;
}

function send_message(){
    var message = new Message(document.getElementById('message').value);
    current_user.get('messages').put(message);
    current_user.get('messages').on((data) =>{
        console.log(data);
    });
}