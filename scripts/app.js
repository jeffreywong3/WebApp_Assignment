
const userList = document.querySelector('#user-list');

// create element and render user
function renderUser(doc){
    let li = document.createElement('li');
    let nameOfUser = document.createElement('span');
    let idNum = document.createElement('span');
    let money = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    nameOfUser.textContent = doc.data().nameOfUser;
    idNum.textContent = doc.data().idNum;
    money.textContent = doc.data().money;

    li.appendChild(nameOfUser);
    li.appendChild(idNum);
    li.appendChild(money);

    userList.appendChild(li);
}

db.collection('user').get().then((snapshot) => {
    snapshot.docs.forEach(doc=> {
        renderUser(doc);
    })
})