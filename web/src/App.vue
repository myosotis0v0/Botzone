<template>
  <NavBar />
  <router-view></router-view>
</template>

<script>
import NavBar from './components/NavBar.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import $ from 'jquery'

export default {
  components: {
    NavBar
  },
  setup() {
    $.ajax({
    //   url: "http://127.0.0.1:3000/user/account/token/",
    //   type: "post",
    //   data: {
    //     username: 'hty',
    //     password: "phty",
    //   },
    //   success(resp) {
    //     console.log(resp);
    //   },
    //   error(resp) {
    //     console.log(resp);
    //   }
    // });

    // $.ajax({
    //   url: "http://127.0.0.1:3000/user/account/info/",
    //   type: "get",
    //   headers: {
    //     Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJiM2MzMWUwMWUzMzE0NmY0YTdlZWY3ZDJlOTk4MzNhNyIsInN1YiI6IjEiLCJpc3MiOiJzZyIsImlhdCI6MTY3NjcxNzQ2NCwiZXhwIjoxNjc3OTI3MDY0fQ.ig0uG0XUKgbN1ZuSleyOG8ZjG4Ua0kQXaJVfQUqYLUc"
    //   },
    //   success(resp) {
    //     console.log(resp);
    //   },
    //   error(resp) {
    //     console.log(resp);
    //   }
    // });

    // $.ajax({
    //   url: "http://127.0.0.1:3000/user/account/register/",
    //   type: "post",
    //   data: {
    //     username: 'hty3',
    //     password: "phty3",
    //     confirmedPassword: "phty3",
    //   },
    //   success(resp) {
    //     console.log(resp);
    //   },
    //   error(resp) {
    //     console.log(resp);
    //   }
    });
  }
}
</script>

<style>
body {
  background-size: cover;
  background-color:aliceblue;
}
</style>
