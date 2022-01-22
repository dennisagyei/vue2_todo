<template>
    <v-container fluid style="background: #f5f5f5">
        <div id="wrapper" class="px-16">
            <v-row>
                <div class="text-h5 my-10">GET IN TOUCH</div>
            </v-row>

            <v-card class="pb-5 mb-10">
                <div class="ma-10">
                <v-row align="center" justify="center">
                    <v-col cols="12" lg="8">
                        <v-form>
                            <v-container fluid class="mt-10">
                                <v-row>
                                    <v-col cols="12" lg="6">
                                        <v-text-field placeholder="Name" outlined></v-text-field>
                                    </v-col>
                                    <v-col cols="12" lg="6">
                                        <v-text-field placeholder="Email" outlined></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-text-field placeholder="Subject" outlined></v-text-field>
                                <v-textarea placeholder="Message" outlined rows="5"></v-textarea>

                                <v-btn  class="white-text" color="orange" x-large>SEND MESSAGE</v-btn>
                            </v-container>
                            
                            

                        </v-form>
                        
                    </v-col>
                    <v-col cols="12" lg="4">
                        <v-list>
                            <v-list-item>
                                <v-list-item-avatar color="grey lighten-3">
                                    <v-icon>mdi-headphones</v-icon>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-subtitle> Call : </v-list-item-subtitle>
                                    <v-list-item-subtitle>024-316-5105</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item>
                                <v-list-item-avatar color="grey lighten-3">
                                    <v-icon>mdi-email-outline</v-icon>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-subtitle> Email : </v-list-item-subtitle>
                                    <v-list-item-subtitle>contact.us@aptworldservices.com</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item>
                                <v-list-item-avatar color="grey lighten-3">
                                    <v-icon>mdi-map-marker</v-icon>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-subtitle> Location  : </v-list-item-subtitle>
                                    <v-list-item-subtitle>Abbosey Okai</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item>
                                <v-list-item-title class="text-h5 font-weight-bold">Follow</v-list-item-title>
                            </v-list-item>

                            <v-list-item>
                                <v-list-item-sub-title>
                                    <v-btn color="orange" class="ml-5" fab outlined small><v-icon >mdi-facebook</v-icon></v-btn>
                                    <v-btn color="orange" class="ml-5" fab outlined small><v-icon >mdi-twitter</v-icon></v-btn>
                                    <v-btn color="orange" class="ml-5" fab outlined small><v-icon >mdi-linkedin</v-icon></v-btn>
                                    <v-btn color="orange" class="ml-5" fab outlined small><v-icon >mdi-whatsapp</v-icon></v-btn>
                                </v-list-item-sub-title>
                            </v-list-item>
                        </v-list>
                    </v-col>
                </v-row>
                </div>
            </v-card>
        </div>
    </v-container>
</template>