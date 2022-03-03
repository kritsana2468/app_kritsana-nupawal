<template>
  <v-container>
    <v-row align="center" justify="center">
      <div class="wd">
        <div class="we pa-3">
          <v-icon large color="yellow">
            mdi-bullhorn
          </v-icon>
          <span style="font-size: 20px;">ประกาศกิจกรรมพิเศษ</span>
          <v-icon large color="yellow">
            mdi-spin mdi-star
          </v-icon>
        </div>
        <v-card
          :loading="loading"
          class="cd mx-auto my-12"
          max-width="375"
        >
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            />
          </template>
          <center>
            <img
              height="180"
              src="../static/262878849_3091107274484410_65187412942258791_n.png"
            >
          </center>
          <v-card-title>วันคล้ายวันสถาปนา</v-card-title>

          <v-card-text>
            <v-row
              align="center"
              class="mx-0"
            >
              <div class="my-4 text-subtitle-1">
                วันคล้ายวันสถาปนาวิทยาลัยเทคนิคชัยภูมิ ครบรอบ 83 ปี (20 ธันวาคม) ในวันที่ 30 ธันวาคม 2564
              </div>
              <h3
                class="white--text"
                size="14"
              >
                จำนวนผู้เข้าร่วมกิจกรรม
              </h3>

              <div class="green--text ms-4">
                (413/600)
              </div>
            </v-row>

            <!-- <div class="my-4 text-subtitle-1">

            </div> -->
          </v-card-text>

          <v-divider class="mx-4" />

          <v-card-title>กำหนดการ</v-card-title>

          <v-timeline
            align-top
            dense
          >
            <v-timeline-item
              color="teal lighten-3"
              small
            >
              <v-row class="pt-1">
                <v-col cols="5">
                  <strong>06.00น. ถึง 06.30น.</strong>
                </v-col>
                <v-col>
                  <strong>เข้าแถวรวมหน้าเสาธง</strong>
                  <div class="text-caption">
                    โดมใหญ่
                  </div>
                </v-col>
              </v-row>
            </v-timeline-item>

            <v-timeline-item
              color="teal lighten-3"
              small
            >
              <v-row class="pt-1">
                <v-col cols="5">
                  <strong>07.00น.</strong>
                </v-col>
                <v-col>
                  <strong>เริ่มพิธี</strong>
                  <div class="text-caption mb-2">
                    โดมใหญ่
                  </div>
                </v-col>
              </v-row>
            </v-timeline-item>

            <v-timeline-item
              color="teal lighten-3"
              small
            >
              <v-row class="pt-1">
                <v-col cols="5">
                  <strong>10.00น.</strong>
                </v-col>
                <v-col>
                  <strong>จบพิธี</strong>
                </v-col>
              </v-row>
            </v-timeline-item>
          </v-timeline>

          <v-card-actions>
            <v-btn
              color="primary lighten-2"
              outlined
              to="/Sign_event"
              @click="reserve"
            >
              ลงทะเบียน
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
      <div class="df pa-3">
        <center>
          <v-btn class="ddd" color="rgb(10, 10, 182)" href="https://www.facebook.com/NunnapatZz">
            <v-icon large>
              mdi-facebook
            </v-icon>
          </v-btn>
          <v-btn class="dd" color="red" href="https://www.youtube.com/channel/UCJ8L_nJEmpzdNEIt7MgUA2A">
            <v-icon large>
              mdi-youtube
            </v-icon>
          </v-btn>
        </center>
      </div>
    </v-row>
  </v-container>
</template>
<script>
export default {
  layout: 'App',
  data: () => ({
    loading: false,
    selection: 1
  }),

  methods: {
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    }
  }
}

</script>
<style>
.dd {
  left: 10px;
}
.ddd {
left: -10px;
}
.df {
width: 90%;
margin: 20px;
border-radius: 10px;
background-color: rgb(53, 53, 189);
}
.wd {
margin: 20px;
border-radius: 10px;
background: rgb(53, 53, 189);
}
</style>
