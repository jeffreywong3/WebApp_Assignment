auth.onAuthStateChanged(user => {
    if (user) {
        // get data if a valid user is logged in
        // do any set up code needed for a logged in user
        hideShowStudentData(true);
    }
    else {
        // do any code needed once someone logs out or if
        // we load the app and no one is currently logged in
        hideShowStudentData(false);
    }
 })

 function signUp() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(email + " " + password);

    auth.createUserWithEmailAndPassword(email, password).then(() =>  {
        console.log("Signed up " + email);
        // after we successfully created the user with the email and pw
        // the method returns a "promise" and we can call the .then{}
        // function that will run after this async task has completed.

        //Any code that executes in here, is only going to run if the
        // user was successfully created.
    }).catch(e => console.log(e.message));
        //if the firebase add user was not successful, then an 
        //error message is returned and we can access the contents of
        //that error message using a catch and then log it to console
}

function signIn() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // signInWithEmailAndPassword
    // createUserWithEmailAndPassword
    auth.signInWithEmailAndPassword(email, password).then(() => { 
        console.log("Signed in " + email);
    }).catch(e => console.log(e.message));
}

function signOut() {
    auth.signOut();
    console.log("Signed Out");
    //any actions or method calls you want to
    //execute after sign out has occurred
}
