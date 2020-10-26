<template>
  <div class="videoView grey darken-4 pt-16">
    <v-row no-gutters class="d-flex">
      <v-col cols="12" md="8" lg="8">
        <div>
          <!-- <video-player
            class="video-js vjs-fill video-player-box vjs-big-play-centered"
            :options="videoOptions"
          /> -->
          <vue-core-video-player
          height="500"
            cover="https://www.telcoma.in/en/wp-content/uploads/2019/08/The-Complete-Junior-to-Senior-Web-Developer-Roadmap.jpg"
            src="https://media.vued.vanthink.cn/sparkle_your_name_am360p.mp4"
          ></vue-core-video-player>
            <!-- src="https://media.vued.vanthink.cn/sparkle_your_name_am360p.mp4" -->
        </div>
      </v-col>
      <v-col cols="12" md="4" lg="4">
        <div class="d-flex flex-column white--text grey darken-3">
          <div class="px-4 py-2">
            <h2 class="text-h6 font-weight-light">
              The Complete Web Developer Mastery Course 2020
            </h2>
            <span class="font-weight-light">By John Doe</span>
          </div>
          <v-divider class="grey darken-1"></v-divider>
          <v-card
            outlined
            flat
            height="410"
            color="transparent"
            class="cutom__card--overflow"
          >
            <v-list v-for="item in course" :key="item.id" class="py-0">
              <v-list-item
                active-class="orange--text"
                :to="{ name: 'CourseView', params: { id: item.id } }"
                class="px-2 grey darken-4"
              >
                <v-list-item-avatar color="orange--text" aria-dropeffect>
                  <v-icon color="orange">mdi-play-circle-outline</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title
                    class="font-weight-light body-1 text-wrap white--text"
                    >{{ item.name }}</v-list-item-title
                  >
                  <v-list-item-subtitle class="font-weight-light white--text">{{
                    item.time
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
            </v-list>
          </v-card>
        </div>
      </v-col>
    </v-row>
    <div>
      <v-container>
        <h4 class="orange--text text-h4 font-weight-light">
          Course Description
        </h4>
        <v-divider class="grey darken-1 mb-2"></v-divider>
        <p class="white--text font-weight-light">
          Just Updated for 2021! Become a Fullstack Web Developer by learning
          the most in demand skills! This is one of the fastest growing courses
          on Udemy with 10,000+ ⭐️⭐️⭐️⭐️⭐️in the last 6 months. Graduates
          of this course are now working at companies like Google, Tesla,
          Amazon, Apple, JP Morgan, Facebook + other top tech companies
          (...seriously). Join a live online community of over 350,000+
          developers and a course taught by an industry expert that has actually
          worked both in Silicon Valley and Toronto as a Senior Developer and
          Tech Lead.
        </p>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    // videoOptions: {
    //   autoplay: true,
    //   controls: true,
    //   height: "500",
    //   width: "900",
    //   responsive: true,
    //   sources: [
    //     {
    //       src: "http://vjs.zencdn.net/v/oceans.mp4",
    //       type: "video/mp4",
    //     },
    //   ],
    // },
    course: [
      { id: 1, name: "Introduction to the Web", time: "0:59" },
      { id: 2, name: "HTML5", time: "1:59" },
      { id: 3, name: "CSS3", time: "2:59" },
      { id: 4, name: "JavaScript", time: "5:59" },
      { id: 5, name: "APIs", time: "0:49" },
      { id: 6, name: "React.js + Redux", time: "5:05" },
      { id: 7, name: "Backend Introduction", time: "1:09" },
      { id: 8, name: "Node.js", time: "2:00" },
      { id: 9, name: "Express.js", time: "5:19" },
      { id: 10, name: "Databases Introduction", time: "3:40" },
      { id: 11, name: "MongoDB", time: "1:53" },
      { id: 12, name: "Mongoose", time: "3:20" },
      { id: 13, name: "Authentication with JWT", time: "1:20" },
      { id: 14, name: "Hooking up the frontend and backend", time: "4:04" },
      { id: 15, name: "Deploying to Heroku", time: "2:00" },
      { id: 16, name: "Summary", time: "4:04" },
    ],
  }),
  methods: {
    // goBack() {
    //   this.$router.go(-1);
    // },
  },
};
</script>

<style lang="scss">

.custom__video--overflow {
  overflow: hidden;
}
.cutom__card--overflow {
  overflow-x: hidden;
  overflow-y: auto;
}
.videoView {
  min-height: 100vh;
  //   background-size: cover;
  //   background-attachment: fixed;
}
// .player-container {
//     max-height: 200px !important;
//     min-width: 100%;
// }
.vjs-big-play-button {
  // color: orange !important;
  background-color: #2c3e50 !important;
}
</style>
