<template>
  <div class="white--text">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="4" md="6">
        <center>
          <img
            class="img"
            src="../static/12.png"
          >
          <h2 class="a black--text">
            วิทยาลัยเทคนิคชัยภูมิ
          </h2>

          <div class="bgm pa-4">
            <div>
              <span>อีเมล:</span>
              <span>kritsana@ccollege.ac.th</span>
            </div>
            <div>
              <span>เบอร์โทรศัพท์:</span>
              <span>0638423720</span>
            </div>
          </div>
          <v-btn class="ddd" color="rgb(10, 10, 182)" href="https://web.facebook.com/%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%E0%B9%80%E0%B8%97%E0%B8%84%E0%B8%99%E0%B8%B4%E0%B8%84%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%A0%E0%B8%B9%E0%B8%A1%E0%B8%B4-183915404985045">
            <v-icon large>
              mdi-facebook
            </v-icon>
          </v-btn>
        </center>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  layout: 'App'
}
</script>
<style>
.ddd {
margin-top: 20px;
}
.img {
width: 180px;
margin: 30px;
}
.bgm{
margin-top: 20px;
width: 250px;
background: rgb(53, 53, 189);
border-radius: 10px;
text-align: left;
}
</style>
