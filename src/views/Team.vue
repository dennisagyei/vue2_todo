<template>
    <div>
        <v-subheader>Team</v-subheader>
        <v-container class="my-5">
            <v-row >
                <v-col cols="12" xs="12" md="6" lg="3" v-for="person in team" :key="person.name">
                    <v-card class="text-center" >
                       <v-responsive>
                            <v-avatar class="mt-5" color="red" size="100">
                                <span class="white--text text-h5">{{ person.initials }}</span>
                            </v-avatar>
                        </v-responsive>
                       
                        <v-card-text>
                            <div class="text-h6">{{ person.name }}</div>
                            <v-subheading>{{ person.role }}</v-subheading>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn plain color="grey">
                                <v-icon small left>mdi-message</v-icon> Message
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
                
            </v-row>
        </v-container>
    </div>
    
</template>

<script>
export default {
    name : "Team",
    data() {
        return {
            team :[
                { name : "Dennis Agyei", role : 'Senior Manager', initials : 'DA'},
                { name : "Abdul Alhassan", role : 'Senior Analyst', initials : 'AA'},
                { name : "Sammy Tugua", role : 'Web Developer', initials : 'ST'},
                { name : "Simeon Hude", role : 'Database Admin', initials : 'SH'},
                { name : "Philip Pantalon", role : 'DevOps', initials : 'PP'}
            ]
        }
    }
}
</script>