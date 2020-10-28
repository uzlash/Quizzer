import axios from "axios";

export default {
  fetchCourses() {
    return axios
      .get("http://localhost:3000/course")
      .then((response) => response);
  },

  fetchSingleCourse(id) {
    return axios
      .get("http://localhost:3000/course/" + id)
      .then((response) => response);
  },
};
