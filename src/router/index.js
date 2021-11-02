import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact",
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
  },
  {
    path: "/projects/:name",
    name: "Project",
    props: true,
    component: () => import("../views/Project.vue"),
  },
  {
    path: "/spotify",
    name: "Profile",
    component: () => import("../views/Spotify/Profile.vue"),
  },
  {
    path: "/spotify/playlists",
    name: "Playlists",
    component: () => import("../views/Spotify/Playlists.vue"),
  },
  {
    path: "/spotify/tracks",
    name: "Top Tracks",
    component: () => import("../views/Spotify/Tracks.vue"),
  },
  {
    path: "/spotify/artists",
    name: "Top Artists",
    component: () => import("../views/Spotify/Artists.vue"),
  },
  {
    path: "/spotify/recent",
    name: "Recent",
    component: () => import("../views/Spotify/RecentTracks.vue"),
  },
  {
    path: "/spotify/recommendations/:id",
    name: "Recommendations",
    props: true,
    component: () => import("../views/Spotify/Recommendations.vue"),
  },
  {
    path: "/spotify/playlists/:id",
    name: "Single Playlist",
    props: true,
    component: () => import("../views/Spotify/SinglePlaylist.vue"),
  },
  {
    path: "/spotify/tracks/:id",
    name: "Single Track",
    props: true,
    component: () => import("../views/Spotify/SingleTrack.vue"),
  },
  {
    path: "/spotify/artists/:id",
    name: "Single Artist",
    props: true,
    component: () => import("../views/Spotify/SingleArtist.vue"),
  },
  {
    path: "/spotify/successful-login/:id",
    name: "Successful Login",
    props: true,
    component: () => import("../views/Spotify/LoggedIn.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
