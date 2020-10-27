<template>
  <nav>
    <!-- color="#00a368" -->
    <v-app-bar app dense flat color="primary">
      <v-app-bar-nav-icon
        tile
        dark
        small
        @click="drawer = !drawer"
        class="orange--text pa-5"
      ></v-app-bar-nav-icon>
      <!-- <v-layout column align-center>
        <v-flex class="mt-10 mb-8">
          <span class="text-h4 white--text font-weight-light">
            <span class="orange--text font-weight-black">Q</span>
            <span class="font-weight-thin">uizzer</span>
          </span>
        </v-flex>
      </v-layout> -->
      <span class="text-h4 white--text font-weight-light">
        <span class="orange--text font-weight-black">Q</span>
        <span class="font-weight-thin">uizzer</span>
      </span>
      <v-spacer></v-spacer>
      <div>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon small class="mr-2" v-on="on" v-bind="attrs">
              <v-badge content="7" bordered color="#00a368" overlap>
                <v-icon color="grey lighten-4">mdi-email</v-icon>
              </v-badge>
            </v-btn>
          </template>
        </v-menu>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small icon class="mx-2" v-on="on" v-bind="attrs">
              <v-badge content="7" color="orange darken-2" dot overlap>
                <v-icon color="grey lighten-4">mdi-bell</v-icon>
              </v-badge>
            </v-btn>
          </template>
        </v-menu>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      mini-variant
      mini-variant-width="100"
      v-model="drawer"
      dark
      app
      color="#2c3e50"
    >
      <!-- <div class="d-flex flex-column align-center justify-center"> -->
        <v-layout column align-center>
        <v-flex class="mt-10 mb-10">
        </v-flex>
      </v-layout>
        <v-divider class="mt-16"></v-divider>
        <v-list flat>
          <v-list-item
            active-class="orange--text"
            v-for="link in links"
            :key="link.icon"
            :to="link.route"
          >
            <!-- <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action> -->
            <v-list-item-content>
              <v-icon>{{ link.icon }}</v-icon>
              <v-list-item-subtitle align="center" class="font-weight-light">{{
                link.text
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
      <!-- </div> -->
      <template v-slot:append>
        <div class="pa-2 d-flex justify-center">
          <v-btn rounded dark text color="white" @click="logOut()">
            <span class="font-weight-light">Logout</span>
            <v-icon color="orange">mdi-exit-to-app</v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    links: [
      { icon: "mdi-comment-question", text: "Test", route: "/" },
      {
        icon: "mdi-bookshelf",
        text: "Library",
        route: "/library",
      },
      { icon: "mdi-crosshairs-question", text: "Exams", route: "/exam" },
      {
        icon: "mdi-google-analytics",
        text: "Analytics",
        route: "/analytic",
      },
    ],
    messages: [
      { title: "umar abubakar", subtitle: "hi", tile: "mention you" },
      { title: "abba abba", subtitle: "hello", tile: "mention you" },
      { title: "shehu sani", subtitle: "hello", tile: "mention you" },
      { title: "mubarak saeed", subtitle: "hi", tile: "mention you" },
    ],
    offset: true,
  }),
  methods: {
    logOut() {
      this.$store.dispatch("SIGN_OUT").then(() => {
        this.$router.push("/signin");
      });
    },
  },
};
</script>

<style>
</style>