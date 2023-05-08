const firebaseConfig = {
    apiKey: "AIzaSya-KRrRDS1W4OpbZ81kaHJQ990Z-U2FKmc",
    authDomain: "Kwitter-e3a99.firebaseapp.com",
    databaseURL: "https://kwitter-c3dc1-default-rtdb.firebaseio.com",
    projectId: "kwitter-c3dc1",
    storageBucket: "kwitter-c3dc1.appspot.com",
    messagingSenderId: "764412614909",
    appId: "1:764412614909:web:0a7cf3b4da87e61d414694",
    measurementId: "G-4JJ4YVPZM3"
  };
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML  = "Bem-vindo(a)," + user_name + "!";

  function addRoom()
  {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
purpose : "adicionando nome da sala"
    });


    localStorage.setItem("room_name", room_name);

   window.location = "kwitter_page.html" 

    
  }

  function getData(){firebase.database().ref("/").on('value', function(snapshot){document.getElementById("output").innerHTML
  room_names = childKey;
  console.log("Nome da sala - " + room_names);
  row = "<div class='room_name' id="+room_names+"onclick='redirectToRoomName(this.id)' >#" + room_names +"</div><hr>";
})}


function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html"
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";
}

