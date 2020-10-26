<template>
  <div class="home">
    <v-app class="grey lighten-4">
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="8" sm="8">
            <span class="text-h4 font-weight-thin">Exams</span>
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
        description:
          "In computer science, a data structure is a data organization, management, and storage format that enables efficient access and modification. More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data",
      },
      {
        title: "Cyber Security for Embedded Systems",
        time: "4:30 PM",
        code: "MEEN206",
        show: false,
        image: require("../assets/cyber.jpg"),
        description:
          "In computer science, a data structure is a data organization, management, and storage format that enables efficient access and modification. More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data",
      },
      {
        title: "Introduction to Cloud Computing",
        time: "4:30 PM",
        code: "MEEN206",
        image: require("../assets/cloud.jpeg"),
        show: false,
        description:
          "In computer science, a data structure is a data organization, management, and storage format that enables efficient access and modification. More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data",
      },
      {
        title: "Server Scalability and Interoperability",
        time: "4:30 PM",
        code: "MEEN206",
        show: false,
        image: require("../assets/server.jpg"),
        description:
          "In computer science, a data structure is a data organization, management, and storage format that enables efficient access and modification. More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data",
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

.v-btn {
  color: #e77c17;
}
.line {
  border-right: solid 1px #95a5a6;
}
.cutom__card--overflow {
  overflow-x: hidden;
  overflow-y: auto;
}
</style>