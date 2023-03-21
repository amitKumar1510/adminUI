// import { getFirestore,setDoc,doc,addDoc,collection } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";


 // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";

import { getFirestore, setDoc, addDoc,doc, updateDoc,deleteDoc,collection  } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";
  
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";
  
    // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
try{
  const firebaseConfig = {
    apiKey: "AIzaSyDEwS1eOl8gSvEEwY6ofzKWwBnXdisKMXs",
    authDomain: "e-polling-ea3b7.firebaseapp.com",
    projectId: "e-polling-ea3b7",
    storageBucket: "e-polling-ea3b7.appspot.com",
    messagingSenderId: "393687152016",
    appId: "1:393687152016:web:c91641ce71b6343e90ef15",
    measurementId: "G-KGYE4GM36X"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db=getFirestore(app);
//login page script here
var isLogedin=false;

   function handleLogin() {
     isLogedin=true;
     console.log(isLogedin);
   };
var xyz=document.getElementById("login");
xyz.addEventListener('click',handleLogin);


//add student start here

    var rollid;
    var sname;
    var mob;
    var course;
    var dept_code;
    var eyear;
    var voterid;
    var roll;
    
function setvalue(){
 sname = document.getElementById("name").value;
 
roll=document.getElementById("roll").value;
rollid=roll.replace(/\//g, "-");
course=document.getElementById("course").value;
dept_code=document.getElementById("dept_code").value;
eyear=document.getElementById("jyear").value;
mob=document.getElementById("mob").value;
//voterid=document.getElementById("voterid").value;
  mob="+91"+mob;
voterid=roll+"/"+Math.floor(Math.random()*10000).toString().padStart(4,'0')
  console.log(voterid);
console.log(sname,roll,course,dept_code,eyear,mob,voterid,rollid);
}

var submitS=document.getElementById("submit");
submitS.addEventListener('click',(e)=>{
  setvalue();
//    addDoc(collection(db,'/student'+"/20-04-DCS-08"+"/cd"), {
//   name: "Los Angeles",
//   state: "CA",
//   country: "USA"
// });
 if(!sname || !course || !dept_code || !roll || !eyear || !mob){
    console.log("please enter required feild")
  document.querySelector("#feild").style.visibility="visible";
  }
  else{
   setDoc(doc(db, "student", rollid), {
     course: course,
     dept_code: dept_code,
     enroll: roll,
     eyear: eyear,
     mobno: mob,
     name: sname,
     voterid: voterid

});
     console.log("set data called");
  } 
});
}
catch(e){
  console.log("pakada");
}