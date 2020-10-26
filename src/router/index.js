import Vue from "vue";
import VueRouter from "vue-router";
import Test from "../views/Test.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Test",
    component: Test,
    meta: {
      showHeader: true,
    },
  },
  {
    path: "/library",
    name: "Library",
    component: () =>
      import(/* webpackChunkName: "Library" */ "../views/LibraryView.vue"),
    meta: {
      showHeader: true
    },
    children: [
      {
        path: '',
        component: () => import('../views/Library.vue'),
        meta: {
          showHeader: true
        }
      },
      {
        path: 'course/:id',
        name: 'CourseView',
        component: () => import('../views/CourseView.vue'),
        meta: {
          showHeader: false
        }
      },
    ]
  },
  {
    path: "/exam",
    name: "Exams",
    component: () =>
      import(/* webpackChunkName: "Exam" */ "../views/Exams.vue"),
    meta: {
      showHeader: true,
    },
  },
  {
    path: "/analytic",
    name: "Analytics",
    component: () =>
      import(/* webpackChunkName: "Analytics" */ "../views/Analytics.vue"),
    meta: {
      showHeader: true,
    },
  },
  {
    path: "/signin",
    name: "Signin",
    component: () =>
      import(/* webpackChunkName: "Signin" */ "../views/Signin.vue"),
    meta: {
      showHeader: false,
    },
  },
  {
    path: "/signup",
    name: "Signup",
    component: () =>
      import(/* webpackChunkName: "Signup" */ "../views/Signup.vue"),
    meta: {
      showHeader: false,
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
