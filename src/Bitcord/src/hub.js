
class Hub{
    constructor(creator, name){
        this.creator = creator;
        this.name = name;
    }
}

function create_hub(name){
    current_user.get('hubs').put(new Hub(current_user.get('alias'), name));
}