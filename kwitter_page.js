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
    room_name = localStorage.getItem("room_name");
    user_name = localStorage.getItem("user_name");

    
    //YOUR FIREBASE LINKS
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "" ;
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
      }