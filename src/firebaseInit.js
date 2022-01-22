// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signOut,signInWithEmailAndPassword,onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, getDocs,doc, addDoc,deleteDoc,updateDoc  , onSnapshot ,query,where , orderBy, limit, serverTimestamp } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXYBugSJMvg-Ss7SOP-TwP871tG2ifJNQ",
  authDomain: "vuejs-project-21285.firebaseapp.com",
  projectId: "vuejs-project-21285",
  storageBucket: "vuejs-project-21285.appspot.com",
  messagingSenderId: "146505208723",
  appId: "1:146505208723:web:4dab4adf070de65aca4e66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init services
const db = getFirestore(app);
const auth = getAuth(app);

const TodoListCollection =  collection(db, 'tasks');


// get data from getFirestore
function readFromFirestore() {

  colRef  =  collection(db, 'tasks')
  
  let results = [];

  getDocs(colRef)
    .then(function(snapshot){

        snapshot.docs.forEach(function(doc){
            results.push({ ...doc.data(), id : doc.id });
        })

        return results
    })
    .catch(function(err){
        console.error(err)
    });
};

// get data from a query
function readFromFirestoreQuery(){
  colRef  =  collection(db, 'tasks')

  const q = query(colRef,where("title","==","Go to Bed"))
  // const q = query(citiesRef, orderBy("name", "desc"), limit(3));

  getDocs(q)
  .then(function(snapshot){

      snapshot.docs.forEach(function(doc){
          results.push({ ...doc.data(), id : doc.id });
      })

      return results
  })
  .catch(function(err){
      console.error(err)
  });
}
// get data in realtime format
 onSnapshot(collection(db, 'tasks'),function(snapshot){
    let results = [];

    snapshot.docs.forEach(function(doc){
      results.push({ ...doc.data(), id : doc.id });
    })
  
    console.log(results)

  })

// add data to firestore
function writeToFirestore(newTaskObj){

  colRef  =  collection(db, 'tasks')

  addDoc(colRef, newTaskObj)
    .then(function(){
      console.log('New data added')
    })
    .catch(function(err){
      console.error(err)
  });
}

// update data on firestore
function updateToFirestore(doc_id,newTaskObj){
  const docRef = doc(db,'tasks',doc_id)

  updateDoc(docRef,newTaskObj)
    .then(function(){
      console.log('doc updated')
    })



}

// delete from firestore
function deleteFromFirestore(id) {

  const docRef = doc(db,'tasks',doc_id)
  
  deleteDoc(docRef)
    .then(function(){
      console.log('Doc deleted successfully')
  })
  .catch(function(err){
    console.error(err)
  });
  
}


// Sign up user
function SignUp(email, password){

  createUserWithEmailAndPassword(auth , email, password)
    .then(function(credentials) {
        console.log(credentials)
    })
    .catch(function(err){
      console.error(err)
    })
}

function LogOutUser(){

  signOut(auth)
  .then(function() {
        console.log('the user signed out')
    })
    .catch(function(err){
      console.error(err)
    })
}

function LoginIn(email, password){

  signInWithEmailAndPassword(auth,email,password)
  .then(function(credentials) {
    this.$store.commit('setUser',credentials);
    console.log(credentials)  // login successful
    })
    .catch(function(err){
      console.error(err)
    })
}


const unsub = onAuthStateChanged(auth,function(user){
  this.$store.commit('setAuthIsReady',true);
  this.$store.commit('setUser',user);
  unsub();

})

export { db, auth }

