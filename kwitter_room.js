//ADD YOUR FIREBASE LINKS HERE
add_user = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + add_user + "!";

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();