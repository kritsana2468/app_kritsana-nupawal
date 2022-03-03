<template>
  <center>
    <div class="bg">
      <div class="text-center">
        <v-dialog
          v-model="dialog"
          width="500"
        >
          <v-card>
            <v-card-title class="text-h5 green lighten">
              Status Login
            </v-card-title>

            <v-card-text>
              SUCCESS  LOGIN
            </v-card-text>

            <v-divider />

            <v-card-actions>
              <v-spacer />
              <v-btn
                color="primary"
                text
                @click="dialog = false"
              >
                I accept
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <div class="text-center">
        <v-dialog
          v-model="dialog_false"
          width="500"
        >
          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              Status Login
            </v-card-title>

            <v-card-text>
              ERROR  LOGIN
            </v-card-text>

            <v-divider />

            <v-card-actions>
              <v-spacer />
              <v-btn
                color="primary"
                text
                @click="dialog_false = false"
              >
                I accept
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>

      <v-row justify="center" align="center">
        <v-col cols="12">
          <div
            class="ab pa-7 white rounded-circle d-inline-block"
          >
            <img
              class=""
              src="../static/12.png"
            >
          </div>
        </v-col>
      </v-row>
      <h1 style="margin-top:150px;">
        กิจกรรมพิเศษ
      </h1>
      <h3>วิทยาลัยเทคนิคชัยภูมิ</h3>
      <v-form>
        <div class="ass">
          <v-text-field
            v-model="id"
            label="รหัสนักศึกษา"
            placeholder="กรุณากรอกรหัสนักศึกษา"
            filled
            rounded
            dense
          />
          <v-text-field
            v-model="pass"
            label="รหัสผ่าน"
            placeholder="กรุณากรอกรหัส"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            filled
            rounded
            dense
            @click:append="show1 = !show1"
          />
        </div>
        <v-btn class="btn1" @click="onSave">
          <span class="txt1">LOG IN</span>
        </v-btn>
        <div class="ls">
          <!-- <p>Forgot password?</p> -->
          <p>
            สมัครบัญชีผู้ใช้  <v-btn to="/signup">
              Sign Up
            </v-btn>
          </p>
        </div>
      </v-form>
    </div>
  </center>
</template>

<script>
export default {
  data: () => ({
    id: '',
    pass: '',
    email: '',
    dialog: true,
    dialog_false: false
  }),
  methods: {
    async  onSave () {
      console.log('onSave')
      const res = await fetch('http://localhost:7001/list_user?id=' +
      this.id + '&pass=' + this.pass)
      const result = await res.json()
      try {
        console.log('data=', result.data.status)
        if (result.status > 0) {
          console.log('Login ok')
          if (result.data.status === 'user') {
            this.$router.push('/Home')
          } else if (result.data.status === 'admin') {
            this.$router.push('/admin/admin_event')
          }
        }
      } catch (error) {
        console.log('Error Login' + error)
        this.dialog_false = true
        setInterval(() => {
          this.dialog_false = false
          this.$router.push('/login')
        }, 3000)
      }
    }
  }
}

</script>

<style>
.ass {
margin: 20px;
}
.ab {
width: 100%;
height: 120px;
background: #0322af;
}
.bg {
width: 100%;
height: 100%;
background: #ffffff;
}
.pa-7{
  margin-top: 20px;
}
h3 {
  margin-bottom: 50px;
}
.txt1{
  color:brown;
}
.btn1{
   background: linear-gradient(to bottom,#FFEB3B,#FFC107);
   margin-bottom: 40%;
}
.box{
  background-color:white;
  padding: 5px;
  border-radius: 25px;
  font-size: 18px;
}
.ls {
margin-bottom: -20px;
}
</style>
