//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyChMVXMKcHSGRaoRQ6q7zoVKT4LZzzv9bE",
      authDomain: "gauri-rmml.firebaseapp.com",
      databaseURL: "https://gauri-rmml-default-rtdb.firebaseio.com",
      projectId: "gauri-rmml",
      storageBucket: "gauri-rmml.appspot.com",
      messagingSenderId: "354121305152",
      appId: "1:354121305152:web:88384ab10ed4fe00cb23a5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send()
    {
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
