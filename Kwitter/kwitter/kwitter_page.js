//Firebase Links
const firebaseConfig = {
      apiKey: "AIzaSyACeZE9OksH5QP44B1WESeBuZWkYWblBhI",
      authDomain: "kwitter-dd30b.firebaseapp.com",
      databaseURL: "https://kwitter-dd30b-default-rtdb.firebaseio.com",
      projectId: "kwitter-dd30b",
      storageBucket: "kwitter-dd30b.appspot.com",
      messagingSenderId: "614665516456",
      appId: "1:614665516456:web:3c26b1b70857a3ad19599d"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send() {

      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });

      document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
