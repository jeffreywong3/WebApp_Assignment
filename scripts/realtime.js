

function hideShowStudentData(loggedIn) {
    var x = document.getElementById("studentDataDiv");
    if (loggedIn) {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

var nameV, idV, ageV, yearV;    // values of the input boxes in the HTML
 
function ready() {
   nameV = document.getElementById('name').value;
   idV = document.getElementById('idNum').value;
   ageV = document.getElementById('age').value;
   yearV = document.getElementById('year').value;
}

document.getElementById('insert').onclick = () => {
    ready();
  
    // notice similar style of syntax for the object we are adding
    // to the collection. 
    db.collection('student').add({
        nameOfStudent: nameV,
        idNum: idV,
        age: ageV,
        year: yearV
    }).catch(e => console.log(e.message));
 }