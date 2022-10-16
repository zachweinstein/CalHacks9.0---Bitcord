var user;
var hubs;

function create_user(){
    var alias = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    gun.get('users').set(user)
}

function login(){
    var alias = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    // TODO - throw an error if the user does not exist
    user = gun.get((alias, pass));
    console.log(user.name);
}