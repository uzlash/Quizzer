<template>
  <v-app class="grey lighten-4">
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" md="8" sm="8" class="pa-0">
          <v-text-field
            solo
            rounded
            hide-details
            class="mb-2"
            label="Search Courses Library"
            append-icon="search"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="8" sm="8">
          <span class="text-h5 font-weight-thin">Availaible Courses</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          lg="3"
          md="4"
          sm="6"
          class="pa-2"
          v-for="course in courses"
          :key="course.id"
        >
          <v-card outlined class="mx-auto" max-width="344">
            <v-img :src="course.image" height="200px"></v-img>
            <v-card-title class="body-2 font-weight-bold">
              {{ course.title }}
            </v-card-title>
            <v-card-subtitle class="pa-0 px-4"> Category: {{ course.category }} </v-card-subtitle>
            <v-card-subtitle class="pa-0 px-4"> Date Published: {{ course.date }} </v-card-subtitle>
            <v-card-subtitle class="pa-0 px-4"> Author: {{ course.author }} </v-card-subtitle>
            <v-card-subtitle class="pa-0 px-4"> Duration: {{ course.duration }} </v-card-subtitle>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="goToCourseView(course.id)" outlined color="orange"> Start Course </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    courses: [
      {
        id: 1,
        title: "Data Structures & Algorithms Analysis - 2020 (Updated)",
        image: require("../assets/data.png"),
        category: "Algorithms",
        author: 'Dennis Ritchie',
        date: '12-05-2020',
        duration: '12hrs'
      },
      {
        id: 2,
        title: "Cyber Security for Embedded Systems - 2016",
        image: require("../assets/cyber.jpg"),
        category: "Cyber Security",
        author: 'Bjarne Stroustrup',
        date: '12-05-2020',
        duration: '52hrs'
      },
      {
        id: 3,
        title: "Introduction to Cloud Computing and Networking - 2016",
        image: require("../assets/cloud.jpeg"),
        category: "Cloud Computing",
        author: 'James Gosling',
        date: '12-05-2020',
        duration: '7hrs 20mins'
      },
      {
        id: 4,
        title: "Server Scalability & Interoperability - 2019",
        image: require("../assets/server.jpg"),
        category: "Dev Ops",
        author: 'Guido Van Rossum',
        date: '12-05-2020',
        duration: '33hrs 40mins'
      },
      {
        id: 5,
        title: "Cyber Security for Embedded Systems - 2020 (Updated)",
        image: require("../assets/cyber.jpg"),
        category: "Cyber Security",
        author: 'Brenden Eich',
        date: '12-05-2020',
        duration: '4hrs'
      },
    ],
  }),
  methods: {
    goToCourseView (id) {
      this.$router.push(`/library/course/${id}`)
    }
  }
};
</script>