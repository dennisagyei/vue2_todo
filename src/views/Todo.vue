<template>
<<<<<<< HEAD
  <div class="Todo">
=======
  <div class="Todo" >
>>>>>>> 9c273870934db634b5457cb90a184a18047f253f
    <v-form ref="form">
       <v-text-field
            class="pa-3"
            outlined
            label="Add Task"
            append-icon="mdi-plus"
            clearable
            v-model="newTask"
            :rules="[rules.required]"
            @keyup.enter="writeToFirestore()"
            @click:append="alert( 'this a test')"
          ></v-text-field>

    </v-form>
    
    
    <v-list      
      rounded
    >

        <div v-for="task in tasks" :key="task.id">
          
          <v-list-item @click="doneTask(task.id)">
          <template v-slot:default="{ active, }">
            <v-list-item-action>
              <v-checkbox
                :input-value="task.done"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{task.title}}</v-list-item-title>
            </v-list-item-content>

             <v-list-item-action>
          <v-btn icon @click.stop="deletePrompt()">
            <v-icon color="blue lighten-1">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
            
          </template>
        </v-list-item>
        <v-divider></v-divider>
        </div>
    </v-list>
     <v-row justify="center">
       <DeleteTodo  ref="DeleteDlg"/>
    </v-row>
    
    <div class="text-center">
    <v-alert dense dismissible type="warning" v-model="deleteAlert">{{ alert_text }}</v-alert>
    </div>

    <v-snackbar
      v-model="infoAlert"
      centered
      color="deep-purple accent-4"
    >
      {{ alert_text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="infoAlert = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
  


</template>

<script>

import {db, auth} from "@/firebaseInit"
import { collection, doc, addDoc ,getDocs,deleteDoc ,serverTimestamp ,increment  } from "firebase/firestore"
import DeleteTodo from '../components/DeleteTodo.vue'
import ConfirmDlg from '../components/ConfirmDlg.vue'

const TodoListCollection =  collection(db, 'tasks');

export default {
    name: 'Todo',
    data (){
      return {
        newTask :'',
        infoAlert : false,
        deleteAlert : false,deleteDialog : false,
        alert_text:'',
        TodoList : [],
        tasks : [],
        rules: {
          required: value => !!value || 'Value is required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
        },
        //tasks : [ { id: 1, title: 'Wake up', done: false }, { id: 2, title: 'Shower', done: false }, { id: 3, title: 'Get Breakfast', done: false}],
      }
    },

    components : { DeleteTodo} ,
    methods:{
      doneTask (id){
        console.log(id)

      },
      DeleteTask (id){
        this.tasks= this.tasks.filter(task => task.id !== id)
        this.alert_text ='Task deeted successfully'
        //this.infoAlert=false
        //this.deleteAlert=true
        this.deleteDialog=true
      },
      AddTask (){
        let newTaskObj = {  title: this.newTask, done : false}

        this.tasks.push(newTaskObj)
        this.alert_text ='Task added successfully'
        this.infoAlert=true
         this.deleteAlert=false
        this.newTask=''
        
      },
       
      writeToFirestore() {

      const newTaskObj = {  title: this.newTask, done : false, created_at : serverTimestamp()}
         
         //check form validation
         If (this.$refs.form.validate())
         {
            addDoc(TodoListCollection, newTaskObj).then(() => {
                  this.alert_text ='Task added successfully'
                  this.infoAlert=true
                  this.deleteAlert=false
                  this.newTask='' 

                  this.readFromFirestore()
            })
         }
              
        
      },

      async readFromFirestore() {
        //const ref = doc(db, "testCollection", "testDoc")
        try {
          const TodoList = await getDocs(TodoListCollection)

          this.TodoList = []

          TodoList.forEach((doc) => {
            this.TodoList.push({id : doc.id, title : doc.data().title, done : doc.data().done, created_at : doc.data().created_at});
          })
        
          this.tasks=this.TodoList
        } catch (e) {
          console.error(e)
        }
      },

      deleteFromFirestore(id) {

          const docRef = doc(db,'tasks',id)
          
          deleteDoc(docRef)
          .then(() => {
              this.readFromFirestore()
          })
          
        },

        deletePrompt(){
        this.$refs.DeleteDlg.open()
      },
<<<<<<< HEAD

      async delRecord() {
        if (
          await this.$refs.confirm.open(
            "Confirm",
            "Are you sure you want to delete this record?"
          )
        ) {
          this.deleteRecord();
        }
      },
      deleteRecord() {
        console.log("Record deleted.");
      },
=======
>>>>>>> 9c273870934db634b5457cb90a184a18047f253f
    },
    
    created(){
      this.readFromFirestore()
    }

  }
</script>
