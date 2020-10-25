<template>
  <v-app>
    <v-main class="grey lighten-4 custom__container custom__bg">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class tile>
              <v-window v-model="changeStep">
                <v-window-item :value="1">
                  <v-row class="mx-0">
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center font-weight-thin text-h4 orange-darken-2"
                        >
                          SIGN IN
                        </h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" color="blue" fab small outlined>
                            <v-icon>fab fa-facebook-f</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" color="red" fab small outlined>
                            <v-icon>fab fa-google-plus-g</v-icon>
                          </v-btn>
                          <v-btn
                            class="mx-2"
                            color="blue darken-4"
                            fab
                            small
                            outlined
                          >
                            <v-icon>fab fa-linkedin-in</v-icon>
                          </v-btn>
                        </div>
                        <v-form @submit.prevent ref="form">
                          <v-row justify="center">
                            <v-col cols="8">
                              <v-text-field
                                v-model="email"
                                solo
                                class="mt-4"
                                label="Email"
                                name="Email"
                                prepend-icon="email"
                                type="text"
                                color="#00A368"
                                :rules="[rules.required, rules.email]"
                              />
                            </v-col>
                            <v-col cols="8">
                              <v-text-field
                                v-model="password"
                                :append-icon="
                                  showPassword ? 'mdi-eye' : 'mdi-eye-off'
                                "
                                :type="showPassword ? 'text' : 'password'"
                                solo
                                label="Password"
                                name="password"
                                prepend-icon="lock"
                                color="#00A368"
                                @click:append="showPassword = !showPassword"
                                :rules="[rules.required, rules.password]"
                              />
                            </v-col>
                          </v-row>
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn
                          @click="signIn()"
                          :loading="signInLoading"
                          :disabled="signInDisabled"
                          rounded
                          class="text-capitalize px-8 white--text"
                          color="#2C3E50"
                          >Sign In</v-btn
                        >
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="custom__col">
                      <v-card-text class="white--text mt-12">
                        <h2 class="text-center display-1 font-weight-thin mb-4">
                          Hello, Students!
                        </h2>
                        <h3 class="text-center font-weight-light">
                          Create an account, and start your quiz
                          with us.
                        </h3>
                        <div class="text-center mt-4">
                          <v-btn
                            class="text-capitalize"
                            rounded
                            outlined
                            dark
                            @click="createAccountStep()"
                            >Create Account</v-btn
                          >
                        </div>
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="custom__col">
                      <v-card-text class="white--text mt-12">
                        <h2 class="text-center display-1 font-weight-thin">
                          Welcome Back!
                        </h2>
                        <h3 class="text-center font-weight-light">
                          Sign in, and continue your research work.
                        </h3>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn
                          class="text-capitalize"
                          rounded
                          outlined
                          dark
                          @click="signInStep"
                          >Sign In</v-btn
                        >
                      </div>
                    </v-col>
                    <v-col cols="12" md="8" class="py-0">
                      <v-card
                        class="custom__scrollable__div"
                        height="500"
                        flat
                        color="transparent"
                      >
                      </v-card>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="3">
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import axios from "axios";
export default {
  components: {
    
  },
  data: () => ({
    rules: {
      required: (v) => !!v || "Field is required",
      counter: (v) => (v && v.length >= 3) || "Minimum length is 3 characters",
      email: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
      password: (value) =>
        (value && value.length >= 6) || "Minimum length is 6 characters",
    },
  }),
  methods: {
    signIn() {
      const signInData = {
        username: this.email,
        password: this.password,
      };
      if (this.$refs.form.validate()) {
        this.$store.dispatch("SIGN_IN", signInData);
      }
    }
  }
}
</script>

<style>
.custom__bg {
  background-image: url("../assets/background.svg");
  background-size: cover;
  background-attachment: fixed;
}
.custom__col {
  background-color: #ffbb01;
}
.custom__scrollable__div {
  overflow-x: hidden;
  overflow-y: auto;
}
</style>