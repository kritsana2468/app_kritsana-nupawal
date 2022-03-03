<template>
  <center>
    <div class="av">
      <v-icon color="white" class="white--text text-h1">
        {{ user.initials }}
      </v-icon>
      <div class="ad">
        <br>
        <h3 class="pa-2">
          ชื่อ: {{ user.fullName }}
        </h3>
        <p class="">
          อีเมล: {{ user.email }}
        </p>
        <p class="">
          รหัสนักศึกษา: {{ user.id }}
        </p>
        <br>
      </div>
    </div>
  </center>
</template>
<script>

export default {
  layout: 'App',
  data: () => ({
    user: {
      fullName: 'กฤษณะ ยวงทอง',
      email: 'kritsana@ccollege.ac.th',
      id: '63309010024'
    }
  })
}
</script>
<style>
.ad {
border-radius: 10px;
width: 300px;
background-color: blue;
}
.av1 {
  margin: 30px;
background-color: blue;
outline: 3px;
outline-color: blue;
}
</style>
