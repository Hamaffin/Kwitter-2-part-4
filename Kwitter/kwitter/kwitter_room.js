//Firebase Console
const firebaseConfig = {
      apiKey: "AIzaSyACeZE9OksH5QP44B1WESeBuZWkYWblBhI",
      authDomain: "kwitter-dd30b.firebaseapp.com",
      databaseURL: "https://kwitter-dd30b-default-rtdb.firebaseio.com",
      projectId: "kwitter-dd30b",
      storageBucket: "kwitter-dd30b.appspot.com",
      messagingSenderId: "614665516456",
      appId: "1:614665516456:web:3c26b1b70857a3ad19599d"
    };

    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome, " + user_name + ".";


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
});
});
}
getData();

      function redirectToRoomName(name)
      {
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
      }

      function logout()
      {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location = "index.html";
      }

function addroom() {

      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child("room_name").update({
      purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

}

