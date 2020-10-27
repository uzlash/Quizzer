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
            <!-- :to="{ name: 'CourseView', params: { id: item.id } }" -->
            <v-list v-for="item in course" :key="item.id" class="py-0">
              <v-list-item
                :to="{ name: 'CourseView', params: { id: item.id } }"
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
export default {
  data: () => ({
    course: [
      {
        id: 1,
        name: "Introduction to the Web",
        time: "0:59",
        src: "https://media.vued.vanthink.cn/sparkle_your_name_am360p.mp4",
      },
      {
        id: 2,
        name: "HTML5",
        time: "1:59",
        src:
          "https://media.vued.vanthink.cn/the_garden_of_words_trailer_english__1080p.mp4",
      },
      {
        id: 3,
        name: "CSS3",
        time: "2:59",
        src:
          "https://media.vued.vanthink.cn/y2mate.com%20-%20Weathering%20With%20You%20%5BOfficial%20Subtitled%20Trailer,%20GKIDS%5D_Q6iK6DjV_iE_1080p.mp4",
      },
      {
        id: 4,
        name: "JavaScript",
        time: "5:59",
        src: "https://media.vued.vanthink.cn/CJ7%20-%20Trailer.mp4",
      },
      {
        id: 5,
        name: "APIs",
        time: "0:49",
        src:
          "https://media.vued.vanthink.cn/5%20Centimeters%20Per%20Second%20Trailer%20HD.mp4",
      },
      {
        id: 6,
        name: "React.js + Redux",
        time: "5:05",
        src: "https://media.vued.vanthink.cn/sparkle_your_name_am360p.mp4",
      },
      {
        id: 7,
        name: "Backend Introduction",
        time: "1:09",
        src:
          "https://media.vued.vanthink.cn/y2mate.com%20-%20Weathering%20With%20You%20%5BOfficial%20Subtitled%20Trailer,%20GKIDS%5D_Q6iK6DjV_iE_1080p.mp4",
      },
      {
        id: 8,
        name: "Node.js",
        time: "2:00",
        src: "https://media.vued.vanthink.cn/CJ7%20-%20Trailer.mp4",
      },
      {
        id: 9,
        name: "Express.js",
        time: "5:19",
        src: "https://media.vued.vanthink.cn/CJ7%20-%20Trailer.mp4",
      },
      {
        id: 10,
        name: "Databases Introduction",
        time: "3:40",
        src:
          "https://media.vued.vanthink.cn/5%20Centimeters%20Per%20Second%20Trailer%20HD.mp4",
      },
      {
        id: 11,
        name: "MongoDB",
        time: "1:53",
        src: "https://media.vued.vanthink.cn/sparkle_your_name_am360p.mp4",
      },
      {
        id: 12,
        name: "Mongoose",
        time: "3:20",
        src:
          "https://media.vued.vanthink.cn/y2mate.com%20-%20Weathering%20With%20You%20%5BOfficial%20Subtitled%20Trailer,%20GKIDS%5D_Q6iK6DjV_iE_1080p.mp4",
      },
      {
        id: 13,
        name: "Authentication with JWT",
        time: "1:20",
        src: "https://media.vued.vanthink.cn/CJ7%20-%20Trailer.mp4",
      },
      {
        id: 14,
        name: "Hooking up the frontend and backend",
        time: "4:04",
        src:
          "https://media.vued.vanthink.cn/5%20Centimeters%20Per%20Second%20Trailer%20HD.mp4",
      },
      {
        id: 15,
        name: "Deploying to Heroku",
        time: "2:00",
        src: "https://media.vued.vanthink.cn/sparkle_your_name_am360p.mp4",
      },
      {
        id: 16,
        name: "Summary",
        time: "4:04",
        src:
          "https://media.vued.vanthink.cn/the_garden_of_words_trailer_english__1080p.mp4",
      },
    ],
  }),
  computed: {
    videoId() {
      return this.$route.params.id;
    },
  },
  methods: {
    // changeVideo() {
    //   location.href = location.href + "/" + this.$route.params.id;
    // },
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
  },
  created() {
    console.log(this.videoId);
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
