<template>
<v-app class="grey lighten-4">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="8" sm="8">
          <span class="text-h4 font-weight-thin">Test</span>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  components: {},
  data: () => ({
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