var firebaseConfig = {
  apiKey: "AIzaSyC1vyQICoKie16pzHidwrjkze7H0tX14Kc",
  authDomain: "kwitter-f9a09.firebaseapp.com",
  databaseURL: "https://kwitter-f9a09-default-rtdb.firebaseio.com",
  projectId: "kwitter-f9a09",
  storageBucket: "kwitter-f9a09.appspot.com",
  messagingSenderId: "800146252175",
  appId: "1:800146252175:web:7f537a0b2fdb51c0dd6bfa"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


/* Don't touch this, will be done in next class */
/* Starts here */
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}



function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}

