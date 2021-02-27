

function hideShowUserData(loggedIn) {
    var x = document.getElementById("userDataDiv");
    if (loggedIn) {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

var nameV, idV, ageV, moneyV;    // values of the input boxes in the HTML
 
function ready() {
   nameV = document.getElementById('name').value;
   idV = document.getElementById('idNum').value;
   moneyV = document.getElementById('money').value;
}

document.getElementById('insert').onclick = () => {
    ready();
  
    // notice similar style of syntax for the object we are adding
    // to the collection. 
    db.collection('user').add({
        nameOfUser: nameV,
        idNum: idV,
        money: moneyV
    }).catch(e => console.log(e.message));
 }

 document.getElementById('showData').onclick = () => {
  ready();
  console.log(idV + " " + nameV  + " " + moneyV);
  db.collection('user').where("idNum", '==', idV).get().then((snapshot) => {
      snapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          console.log(doc.data().idNum);
          document.getElementById('name').value = doc.data().nameOfUser;
          document.getElementById('idNum').value = doc.data().idNum;
          document.getElementById('money').value = doc.data().money;
      });
  }).catch((e) => {
      console.log("Error getting student by ID number: ", e.message);
  });

  db.collection('user').where("nameOfUser", '==', nameV).get().then((snapshot) => {
      //console.log("testing " + snapshot.get(0).id + " " + snapshot.get(0).data().nameOfUser);
      snapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          console.log(doc.data().idNum);
          document.getElementById('name').value = doc.data().nameOfUser;
          document.getElementById('idNum').value = doc.data().idNum;
          document.getElementById('money').value = doc.data().money;
      });
  }).catch((e) => {
      console.log("Error getting student by name: ", e.message);
  });
};

// UPDATE FUNCTIONALITY - ONCLICK
 
document.getElementById('update').onclick = () => {
  ready();
  console.log(idV + " " + nameV  + " " + moneyV);
  db.collection('user').where("idNum", '==', idV).get().then((snapshot) => {
      snapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          // gets UID so we can locate the document to update it in collection
          const updateID = doc.id;

          // if any of these fields are empty, we then keep old value
          if (nameV == undefined) {
              nameV = doc.data().nameOfUser;
          }
          if (moneyV == undefined) {
              moneyV = doc.data().money;
          }

          // sets new value to this existing student record.  Update will only
          // change the values we ask it to change. 
          db.collection('user').doc(updateID).update({
              nameOfUser: nameV,
              money: moneyV
          }).then(() => {
              console.log("Updated, new data:");
          }).catch(e => console.log(e.message));
      });
  });
};

// UPDATE FUNCTIONALITY - ONCLICK
document.getElementById('update').onclick = () => {
  ready();
  console.log(idV + " " + nameV + " " + ageV + " " + moneyV);
  db.collection('user').where("idNum", '==', idV).get().then((snapshot) => {
      snapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          // gets UID so we can locate the document to update it in collection
          const updateID = doc.id;

          // if any of these fields are empty, we then keep old value
          if (nameV == undefined) {
              nameV = doc.data().nameOfUser;
          }
          if (moneyV == undefined) {
            moneyV = doc.data().money;
          }

          // sets new value to this existing student record.  Update will only
          // change the values we ask it to change. 
          db.collection('user').doc(updateID).update({
              nameOfUser: nameV,
              money: moneyV
          }).then(() => {
              console.log("Updated, new data:");
          }).catch(e => console.log(e.message));
      });
  });
};

// DELETE FUNCTIONALITY - ONCLICK
document.getElementById('delete').onclick = () => {
  ready();
  db.collection('user').where("idNum", '==', idV).get().then((snapshot) => {
      snapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          // gets UID so we can locate the document to delete it in collection
          const updateID = doc.id;
          db.collection('user').doc(updateID).delete().then(() => {
              console.log("Deleted data");
          }).catch(e => console.log(e.message));
      });
  });
}

/*
Delete Everything: https://kalkus.dev/2019/08/05/how-to-delete-all-documents-from-a-collection-in-google-cloud-firestore/
*/
document.getElementById('deleteEverything').onclick = () => {
    
      db.collection("user")
        .get()
        .then(res => {
          res.forEach(element => {
            element.ref.delete();
          });
        });
}


/*
The functions below are to create the table in the app.
Source: https://www.youtube.com/watch?v=jOau1X5SKDE
Unfortunately, my monkey brain didn't realize that we haven't
touched anything on firebase's database (which is what this
is based on), so this code is USELESS
Jay's Translation: REEEEEEEEEE

//Getting the Data
function selectAllData(){
    firebase.database().ref('user').once('value',
    function(AllRecords){
        AllRecords.forEach()(
            function(CurrentRecord){
                var name = CurrentRecord.val().nameOfUser;
                var id = CurrentRecord.val().idNum;
                var cash = CurrentRecord.val().money;
                addItemsToTable(name, id, cash);
            }
        );
    });
}
window.onload = selectAllData;

//Filling the Table
var userNo = 0;
function addItemsToTable(name, id, cash){
    var tbody = document.getElementById('tbody1');
    var trow = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    td1.innerHTML= ++userNo;
    td2.innerHTML= name;
    td3.innerHTML= id;
    td4.innerHTML= cash;
    trow.appendChild(td1); 
    trow.appendChild(td2); 
    trow.appendChild(td3);
    tbody.appendChild(trow);
}
*/

