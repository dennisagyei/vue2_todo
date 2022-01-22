<template>
   <v-container class="my-5" fluid>
       <v-row class="my-5">
            <v-btn plain small color="grey"><v-icon small>mdi-folder</v-icon>By project name</v-btn>
            <v-btn plain class="mx-3" small color="grey"><v-icon small>mdi-account</v-icon>By person</v-btn>
       </v-row>
       <v-row class="my-3">
          <v-card color="blue" width="100%">
              <v-card class="ml-1" outlined>
                 
                  <v-row>
                      <v-col cols="12" md="6">
                        <div class="caption grey--text">Project Title</div> 
                        <div>Create a new website</div>
                      </v-col>
                      <v-col cols="12" lg="2">
                        <div class="caption grey--text">Person</div>
                        <div>The Net Ninja</div>
                      </v-col>
                      <v-col cols="12" lg="2">
                          <div class="caption grey--text">Due By</div>
                          <div>1st Jan 2021</div>
                      </v-col>
                      <v-col cols="12" lg="2">
                          <div class="pt-3"><v-chip class="primary" small>Ongoing</v-chip></div>
                      </v-col>
                  </v-row>

              </v-card>
          </v-card>

          <v-card color="red" width="100%">
              <v-card class="ml-1" outlined>
                 
                  <v-row>
                      <v-col cols="12" md="6">
                        <div class="caption grey--text">Project Title</div> 
                        <div>Create a new website</div>
                      </v-col>
                      <v-col cols="12" lg="2">
                        <div class="caption grey--text">Person</div>
                        <div>The Net Ninja</div>
                      </v-col>
                      <v-col cols="12" lg="2">
                          <div class="caption grey--text">Due By</div>
                          <div>1st Jan 2021</div>
                      </v-col>
                      <v-col cols="12" lg="2">
                          <div class="pt-3"><v-chip class="primary" small>Ongoing</v-chip></div>
                      </v-col>
                  </v-row>

              </v-card>

              <v-card color="yellow" width="100%">
              <v-card class="ml-1" outlined>
                 
                  <v-row>
                      <v-col cols="12" md="6">
                        <div class="caption grey--text">Project Title</div> 
                        <div>Create a new website</div>
                      </v-col>
                      <v-col cols="12" lg="2">
                        <div class="caption grey--text">Person</div>
                        <div>The Net Ninja</div>
                      </v-col>
                      <v-col cols="12" lg="2">
                          <div class="caption grey--text">Due By</div>
                          <div>1st Jan 2021</div>
                      </v-col>
                      <v-col cols="12" lg="2">
                          <div class="pt-3"><v-chip class="primary" small>Ongoing</v-chip></div>
                      </v-col>
                  </v-row>

              </v-card>
          </v-card>
          </v-card>
       </v-row>
       
        
    </v-container>
</template>

<script>
export default {
    name : "Projects"
}
</script>