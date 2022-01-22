<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12" lg="3">
                <v-card elevation="2" shaped >
                    <v-toolbar color="green"  flat>
                        <v-tabs slider-color="white">
                            <v-tab>
                                <v-btn icon>
                                    <v-icon>mdi-home</v-icon>
                                </v-btn>
                            </v-tab>
                            <v-tab>
                                <v-badge content="2" color="orange" overlap offset-x="18" offset-y="18">
                                    <v-btn icon>
                                        <v-icon>mdi-cart</v-icon>
                                    </v-btn>
                                </v-badge>
                            </v-tab>
                        </v-tabs>
                    </v-toolbar>
                </v-card>
                
                <v-card class="my-3 rounded-xl" >
                    <v-card-subtitle>Top Selling</v-card-subtitle>
                    
                    <v-list>
                        <v-list-item  three-line v-for="item in TopSellers" :key="item.product">
                            <v-list-item-avatar tile size="60">
                                <v-img src="plant_3.jpg"></v-img>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title class="subtitle-2">{{ item.product}}</v-list-item-title>
                                <v-list-item-subtitle>{{ item.qty}} plants</v-list-item-subtitle>
                                <v-list-item-title class="subtitle-2">Ghs {{item.price}}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item></v-list-item>
                    </v-list>
                   
                </v-card>
            </v-col>
            <v-col cols="12" lg="6">
                <v-text-field label="Search" filled rounded dense prepend-inner-icon="mdi-magnify"></v-text-field>

                <v-card class="rounded-xl mt-2" >

                    <v-row>
                        <v-col cols="12" lg="4" align="center" justify="center">
                            <v-avatar tile size="200">
                                <img src="plant_2.jpg" alt="">
                            </v-avatar>

                            <v-btn fab plain @click="minusCount()"><v-icon >mdi-minus-box</v-icon></v-btn>
                            {{ counter}}
                            <v-btn fab plain  @click="addCount()"><v-icon >mdi-plus-box</v-icon></v-btn>
                        </v-col>
                        <v-col cols="12" lg="8">
                            <v-app-bar color="white" flat>
                                <v-spacer></v-spacer><v-icon>mdi-heart</v-icon>
                            </v-app-bar>
                            <span class="font-weight-bold">Lidya Buayah</span> 
                            <p class="grey--text text-sm-body-2">
                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                            </p>
                            <h6 class="grey--text">Overview</h6>

                            <v-row class="mb-3">
                                <v-col cols="12" lg="6">
                                    <v-avatar class="mr-3" size="30" color="grey"><v-icon small>mdi-airplane-clock </v-icon></v-avatar>
                                    30-Days
                                </v-col>
                                <v-col cols="12" lg="6">
                                    <v-avatar size="30" color="grey">
                                        <v-icon>mdi-thermometer-lines </v-icon>
                                    </v-avatar>
                                    70% Humidity
                                </v-col>
                            </v-row>
                            <v-btn small rounded color="orange" class="white--text"><v-icon>mdi-plus</v-icon> ADD TO CART</v-btn>
                            <span  class="font-weight-bold text-sm-body-2 ml-2">$234</span>
                        </v-col>
                    </v-row>
                </v-card>

                <v-row>
                    <v-col class="my-2" cols="12" lg="6">
                        <v-card class="rounded-xl">
                            <v-list>
                                <v-list-item>
                                    <v-list-item-avatar tile size="100">
                                        <img src="plant_2.jpg" alt="">
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                        <v-list-item-title class="font-weight-bold">Bonsai Tree</v-list-item-title>
                                        <v-list-item-title class="font-weight-bold">$386</v-list-item-title>
                                    </v-list-item-content>
                                    
                                </v-list-item>
                            </v-list>
                        </v-card>
                    </v-col>
                    <v-col class="my-2" cols="12" lg="6">
                        <v-card class="rounded-xl">
                            <v-list>
                                <v-list-item>
                                    <v-list-item-avatar tile size="100">
                                        <img src="plant_2.jpg" alt="">
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                        <v-list-item-title class="font-weight-bold">Bonsai Tree</v-list-item-title>
                                        <v-list-item-title class="font-weight-bold">$386</v-list-item-title>
                                    </v-list-item-content>
                                    
                                </v-list-item>
                            </v-list>
                        </v-card>
                    </v-col>
                </v-row>

                
            </v-col>
            <v-col cols="12" lg="3">
                <v-card elevation="2" shaped>
                    <v-toolbar color="green" flat>
                         <v-avatar size="25">
                                <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
                         </v-avatar>
                        <v-toolbar-title class="white--text ml-2">Fua Lamba</v-toolbar-title>
                        <span class="ml-2"></span> 
                        <v-btn icon>
                            <v-icon right dark>mdi-chevron-down</v-icon>
                        </v-btn>

                    </v-toolbar>
                </v-card>

                <v-card class="my-3 rounded-xl" >
                    <v-toolbar flat>
                        <v-toolbar-title>Online</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-badge color="orange" dot overlap bottom><v-icon>mdi-account</v-icon></v-badge>
                        119
                    </v-toolbar>
                    
                    <v-list>
                        <v-list-item-group>
                            <v-list-item  three-line  v-for="item in OnlineUsers" :key="item.title">
                                <v-list-item-avatar tile size="40">
                                    <img src="https://picsum.photos/500/300?random=1" alt="">
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title class="subtitle-2">{{ item.title }}</v-list-item-title>
                                    <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-item-action>
                                    <v-list-item-action-text>{{ item.action }}</v-list-item-action-text>
                                </v-list-item-action>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                   
                    <v-toolbar flat>
                        <v-toolbar-title>Recommended Friends</v-toolbar-title>
                    </v-toolbar>
                    <v-list>
                            <v-list-item>
                                 <v-list-item-avatar tile size="40">
                                    <img src="https://picsum.photos/500/300?random=2" alt="">
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title>Karl Vanesan</v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-action>
                                    <v-btn color="orange" plain>ADD</v-btn>
                                </v-list-item-action>
                            </v-list-item>

                            <v-list-item>
                                 <v-list-item-avatar tile size="40">
                                    <img src="https://picsum.photos/500/300?random=3" alt="">
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title>Ruseel D</v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-action>
                                    <v-btn color="orange" plain>ADD</v-btn>
                                </v-list-item-action>
                            </v-list-item>

                    </v-list>
                </v-card>
            </v-col>
        </v-row>

        
    </v-container>
</template>
<script>
export default {
    name : 'PlantShop',
    data () {
        return {
            counter : 1,
            TopSellers : [
                { product : 'Cactus', qty:650, price : 640},
                { product : 'Kalanchoe', qty:760, price : 234},
                { product : 'Madagascar Jewel', qty:712, price : 638},
                { product : 'Succulent', qty:539, price : 190},
                { product : 'Cactus Mini', qty:554, price : 264},
                { product : 'Maivestus', qty:690, price : 360},
            ],

            OnlineUsers : [
                {
                action: '15 min',
                headline: 'Brunch this weekend?',
                subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
                title: 'Ali Connors',
                },
                {
                action: '2 hr',
                headline: 'Summer BBQ',
                subtitle: `Wish I could come, but I'm out of town this weekend.`,
                title: 'me, Scrott, Jennifer',
                },
                {
                action: '6 hr',
                headline: 'Oui oui',
                subtitle: 'Do you have Paris recommendations? Have you ever been?',
                title: 'Sandra Adams',
                },
                {
                action: '12 hr',
                headline: 'Birthday gift',
                subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
                title: 'Trevor Hansen',
                },
                {
                action: '18hr',
                headline: 'Recipe to try',
                subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
                title: 'Britta Holt',
                },
            ],
        } 
    },

    methods: {
        addCount (){
            this.counter+=1
        },
        
        minusCount (){
            if (this.counter>0){
                this.counter-=1
            }
            
        }
    }
    
}
</script>