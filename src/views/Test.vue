<template>
  <div class="home">
    <v-app class="grey lighten-4">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" md="8" sm="8" class="pa-0">
            <v-text-field
              solo
              rounded
              hide-details
              class="mb-2"
              label="Search Practice Tests"
              append-icon="search"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
           <v-col cols="12" md="8" sm="8">
             <span class="text-h4 font-weight-thin">Practice Tests</span>
           </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col
            cols="12"
            lg="4"
            md="6"
            sm="12"
            class="pa-2"
            v-for="card in courses"
            :key="card.title"
          >
           <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src="card.image"
      height="200px"
    ></v-img>

    <v-card-title>
      {{ card.title }}
    </v-card-title>

    <v-card-subtitle>
      course code: {{ card.code }}
    </v-card-subtitle>

    <v-card-actions>
      

      <v-spacer></v-spacer>

      <v-btn
        text
        class="amber"
      >
         Start Test
      </v-btn>
    </v-card-actions>

   
  </v-card>
          </v-col>
        </v-row>
      
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({
    
    courses: [
      {
        title: "Data Structures and Algorithms Analysis",
        time: "4:30 PM",
        code: "MEEN206",
        image: require("../assets/data.png"),
        show: false,
        description: "In computer science, a data structure is a data organization, management, and storage format that enables efficient access and modification. More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data"
      },
      {
         title: "Cyber Security for Embedded Systems",
         time: "4:30 PM",
         code: "MEEN206",
         show: false,
         image: require("../assets/cyber.jpg"),
         description: "In computer science, a data structure is a data organization, management, and storage format that enables efficient access and modification. More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data"
      },
      {
         title: "Introduction to Cloud Computing",
         time: "4:30 PM",
         code: "MEEN206",
         image: require("../assets/cloud.jpeg"),
         show: false,
         description: "In computer science, a data structure is a data organization, management, and storage format that enables efficient access and modification. More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data"
      },
       {
         title: "Server Scalability and Interoperability",
         time: "4:30 PM",
         code: "MEEN206",
         show: false,
         image: require("../assets/server.jpg"),
         description: "In computer science, a data structure is a data organization, management, and storage format that enables efficient access and modification. More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data"
      },
    ],
   
  }),
  methods: {
    logout() {
      this.$router.push("/signin");
    },
  },
};
</script>

<style>
.rounded {
  border-radius: 30px;
}

.btn {
  color: #e77c17
}
.line {
  border-right: solid 1px #95a5a6;
}
.cutom__card--overflow {
  overflow-x: hidden;
  overflow-y: auto;
}
</style>