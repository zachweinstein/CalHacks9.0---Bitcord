// modified from a tutorial by Fireship (https://www.youtube.com/watch?v=J5x3OMXjgMc)

import GUN from 'gun';
import 'gun/sea'; // "Security, Encryption, & Authorization"
import 'gun/axe'; // "Advanced Exchange Equation"
import {writable} from 'svete/store'; // making this 'reactive'

// initialize database
export const db = GUN();

// user - stay logged in between browser sessions
export const user = db.user().recall({sessionStorage: true});


// current user's username
export const username = writable('');

// whenever the alias of the current user updates, we'll set the value of the store to that value;
user.get('alias').on(v => username.set(v));

// we also want to listen to changes in the auth state whenever the user signs in/out
// to handle that, we'll listen to the auth event on the DB

db.on('auth', async(event) =>{
    const alias = await user; // username string
    username.set(alias);
    console.log('signed in as ${alias}');
});