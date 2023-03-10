// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBJc2yJn9v8irbqYhMRRFhFc9JcMK3CXBI",
    authDomain: "test-a4657.firebaseapp.com",
    databaseURL: "https://project-5d32a-default-rtdb.firebaseio.com",
    projectId: "test-a4657",
    storageBucket: "test-a4657.appspot.com",
    messagingSenderId: "703058533299",
    appId: "1:703058533299:web:40aed08112ee4ed8bf49c6",
    measurementId: "G-NNPZKT7ZZY"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



