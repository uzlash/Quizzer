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
                    <v-col cols="12" md="4" class="custom__col">
                      <v-card-text class="white--text mt-15">
                        <h2 class="text-center display-1 font-weight-thin mb-4">
                          Hello, Students!
                        </h2>
                        <h3 class="text-center font-weight-light">
                          Already have Account
                        </h3>
                        <div class="text-center mt-4">
                          <v-btn
                            class="text-capitalize"
                            rounded
                            outlined
                            dark
                           
                            >Sign In</v-btn
                          >
                        </div>
                      </v-card-text>
                    </v-col>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center font-weight-thin text-h4 orange-darken-2"
                        >
                         <span class="orange--text">CREATE ACCOUNT</span> 
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
                          <v-card-text class="grey--text">
                            
                             <span >Or use your account for registration</span>
                          </v-card-text>
                        </div>
                       
                        <v-form >
                          <v-row justify="center" >
                             <v-col cols="8" class="pa-0 px-2" >
                              <v-text-field
                                v-model="email"
                                solo
                                class="mt-2"
                                label="Name"
                                name="Name"
                                prepend-inner-icon="person"
                                type="text"
                                color="#2C3E50"
                                
                              />
                            </v-col>
                            <v-col cols="8" class="pa-0 px-2">
                              <v-text-field
                                v-model="email"
                                solo
                                class=""
                                label="Email"
                                name="Email"
                                prepend-inner-icon="email"
                                type="text"
                                color="#2C3E50"
                                
                              />
                            </v-col>
                           
                            <v-col cols="8" class="pa-0 px-2">
                              <v-text-field
                                
                                solo
                                label="Password"
                                name="password"
                                prepend-inner-icon="lock"
                                color="#2C3E50"
                                
                              />
                            </v-col>
                          </v-row>
                        </v-form>
                      </v-card-text>
                      <div class="text-center ">
                        <v-btn
                          
                         
                          rounded
                          class="text-capitalize px-8 white--text"
                          color="#2C3E50"
                          >Sign Up</v-btn
                        >
                      </div>
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
   
  }),
  methods: {
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