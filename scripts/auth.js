auth.onAuthStateChanged(user => {
    if (user) {
        // get data if a valid user is logged in
        // do any set up code needed for a logged in user
        hideShowUserData(true);
    }
    else {
        // do any code needed once someone logs out or if
        // we load the app and no one is currently logged in
        hideShowUserData(false);
    }
 })

 function signUp() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(email + " " + password);

    auth.createUserWithEmailAndPassword(email, password).then(() =>  {
        console.log("Signed up " + email);
    }).catch(e => console.log(e.message));
}

function signIn() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password).then(() => { 
        console.log("Signed in " + email);
    }).catch(e => console.log(e.message));
}

function signOut() {
    auth.signOut();
    console.log("Signed Out");
}
