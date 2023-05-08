const firebaseConfig = {
    apiKey : "AIzaSya-KRrRDS1W4OpbZ81kaHJQ990Z-U2FKmc",
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
  room_name = localStorage.getItem("room_name");

  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       like:0 
    });

    document.getElementById("msg").value = "";
  }


  function updateLike(message_id) 
  {
    console.log("clicou no botão curtir - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    update_Likes = Number(likes) + 1;
    console.log(update_Likes);

    firebase.database().ref(room_name).child(message_id).update({
      like: update_Likes
    })
  
  }

  function logout( ) {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("kwitter.html");
  }

function getData() {firebase.database().ref("/"+room_name).on('value', function(snapshot){document.
getElementById("output").innerHTML= ""; snapshot.forEach(function(childSnapshost){childKey = childSnapshost.key;
  childData = childSnapshost.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
    console.log(firebase_message_id);
    console.log(message_data)
    name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4>"+ name +"<img class='user_tick'  src='tick.png'></h4>";
    message_with_tag = "<h4 class= 'message_h4'>" + message + "</h4>";
    like_button ="<button class='btn btn-warning' id="+ firebase_message_id+"  value="+like+" onclick= 'updateLike(this.id) ' >";
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Curtidas:"+ like +"</span></button><hr>";
    row = name_with_tag +message_with_tag +like_button + span_with_tag;
    document.getElementById("output").innerHTML+= row;
  
} }); }); }
getData();


