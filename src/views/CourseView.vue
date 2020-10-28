<template>
  <div class="videoView grey darken-4 pt-16">
    <v-row no-gutters class="d-flex">
      <v-col cols="12" md="8" lg="8">
        <video
          @pause="pause"
          @timeupdate="timeUpdate"
          width="100%"
          height="100%"
          :src="current.src"
          class="black"
          controls
        ></video>
        <!-- <video :src="current.src" autoplay></video> -->
        <!-- <vue-core-video-player
            min-height="500"
            :cover="course.image"
            :src="current.src"
            @play="play"
            @change="change"
            @durationchange="durationChange"
            @ended="ended"
            @pause="pause"
            @playing="playing"
            @progress="progress"
            @seeked="seeked"
            @seeking="seeking"
            @timeupdate="timeUpdate"
          ></vue-core-video-player> -->
        <!-- src="https://media.vued.vanthink.cn/sparkle_your_name_am360p.mp4" -->
      </v-col>
      <v-col cols="12" md="4" lg="4">
        <div class="d-flex flex-column white--text primary">
          <div class="px-4 py-2">
            <h2 class="text-h6 font-weight-light">
              {{ course.title }}
            </h2>
            <span class="font-weight-light">{{ course.author }}</span>
          </div>
          <v-divider class="grey darken-1"></v-divider>
          <v-card
            tile
            max-height="512"
            color="transparent"
            class="cutom__card--overflow"
          >
            <!-- :to="{ name: 'CourseView', params: { id: item.id } }" -->
            <v-list
              v-for="item in course.courseData"
              :key="item.id"
              class="py-0"
            >
              <v-list-item
                @click="changeVideo(item)"
                active-class="orange--text"
                class="px-2 grey lighten-4"
              >
                <v-list-item-avatar color="orange--text" aria-dropeffect>
                  <v-icon color="orange">mdi-play-circle-outline</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title
                    class="font-weight-light body-1 text-wrap"
                    >{{ item.name }}</v-list-item-title
                  >
                  <v-list-item-subtitle class="font-weight-light">{{
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
// let singleCourse = DATA[this.courseId]
import courseApi from "../services/courseApi";
export default {
  props: ["id"],
  data: () => ({
    course: [],
    current: {},
    clicked: false
  }),
  // computed: {
  //   courseId() {
  //     return this.$route.params.id;
  //   },
  // },
  methods: {
    change(e) {
      console.log("CHANGE EVENT", e);
    },
    durationChange(e) {
      console.log("DURATION CHANGE EVENT", e);
    },
    ended(e) {
      console.log("ENDED EVENT", e);
    },
    pause(e) {
      console.log("PAUSE EVENT", e);
    },
    play(e) {
      console.log("PLAY EVENT", e);
    },
    playing(e) {
      console.log("PLAYING EVENT", e);
    },
    progress(e) {
      console.log("PROGRESS EVENT", e);
    },
    seeked(e) {
      console.log("SEEKED EVENT", e);
    },
    seeking(e) {
      console.log("SEEKING EVENT", e);
    },
    timeUpdate(e) {
      console.log("TIME UPDATE EVENT -- CURRENT TIME", e.target.currentTime);
    },
    changeVideo(e) {
      console.log(e);
      this.current = e
      this.clicked = true
    },
  },
  mounted() {
    console.log("LOCATION", location);
    courseApi
      .fetchSingleCourse(this.id)
      .then((response) => {
        console.log("Response", response.data.payload);
        this.course = response.data.payload;
        console.log("Course", this.course);
        this.current = this.course.courseData[0];
        console.log("CURRENT", this.current);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  beforeUpdate() {
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
