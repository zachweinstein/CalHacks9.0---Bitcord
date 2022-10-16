var user;

function create_user(alias, pass, cb, opt){
    gun.get((alias, pass)).put({name: alias});
}

function login(event){
    gun.get((alias, pass));
}

const login = document.getElementById('login');

login.addEventListener('submit', login);