<template>
  <div>
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Status Login
          </v-card-title>

          <v-card-text>
            SUCCESS  LOGIN  {{ fname }}
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

    <center>
      <div class="rounded-xl white text-center">
        <p class="txt1">
          สมัครใช้งาน
        </p>
        <v-form>
          <v-container>
            <v-text-field
              v-model="id"
              label="ID"
              placeholder="กรอกรหัสนักศึกษา"
              outlined
              dense
              class="text-green"
            />
            <v-text-field
              v-model="username"
              label="Name"
              placeholder="กรอกชื่อ"
              outlined
              dense
              class="text-green"
            />
            <v-text-field
              v-model="phone"
              label="Mobile phone number"
              placeholder="กรอกเบอร์โทรศัพท์"
              outlined
              dense
              class="text-green"
            />
            <v-text-field
              v-model="email"
              label="Email"
              placeholder="กรอกอีเมล"
              outlined
              dense
              class="text-green"
            />
            <v-text-field
              v-model="pass"
              label="Password"
              placeholder="กรอกรหัสผ่าน"
              outlined
              dense
              class="text-green"
            />
            <!-- <v-checkbox
          label="By signing up, you agree to
Bank’s Term of Use & Privacy Policy."
          color="info"
          value="red darken-3"
          class="black-label"
        /> -->
            <input type="checkbox" name="checkbox" m-model="chk" value="checkbox">
            <label class="lbl">ยืนยันการสมัครสมาชิก</label>
          </v-container>
          <v-row>
            <v-col md="12">
              <v-btn
                small
                class="btn1"
                @click="Save"
              >
                <span class="txt3">SIGN UP </span>
              </v-btn>
              <v-btn
                small
                outlined
                color="indigo"
                onclick="Clear"
                to="/login"
              >
                <span class="txt3">CANCEL</span>
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </div>
    </center>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data: () => ({
    id: '',
    username: '',
    phone: '',
    email: '',
    pass: '',
    chk: '',
    dialog: false,
    dialog_false: false
  }),
  methods: {
    clr () {
      this.id = ''
      this.name = ''
      this.phone = ''
      this.email = ''
      this.passwd = ''
    },
    async Save () {
      const std = {
        id: this.id,
        username: this.username,
        phone: this.phone,
        email: this.email,
        pass: this.pass,
        chk: this.chk
      }
      console.log('user:', std)
      const res = await axios.post('http://localhost:7001/save', std)
      console.log(res.data)
      try {
        if (res.data.status > 0) {
          console.log('บันทึกสำเร็จ')
          this.dialog = true
          this.clr()
          setInterval(() => {
            this.dialog = false
            this.$router.push('/login')
          }, 3000)
        } else {
          this.dialog_false = true
          this.clr()
          setInterval(() => {
            this.dialog_false = false
            this.$router.push('/login')
          }, 3000)
        }//  end if
      } catch (error) {
        console.log('Error Login')
      }
    }
  }
}

</script>
<style>
.btn1{
   background: linear-gradient(to bottom,#FFEB3B,#FFC107);
}
.txt1{
    color: #5462ff;
    padding-top: 20px;
}
.txt2{
    color: #5462ff;
    font-size: 8px;
}
  .v-text-field--outlined fieldset {
    color: #A6A6A4 !important;
    height: 40px;
  }
  .text-green input {
        color: #A6A6A4 !important;
  }
 .black--text /deep/ label {
      color: black;
  }
  .v-text-field{
      width: 250px;
}
  .txt3{
    color: #411F1F;
  }
  .rounded-xl{
    padding-bottom:35px;
  }
  .black-label label {
    color: rgba(0, 0, 0) !important;
    font-size: 12px;
}
.lbl{
  color:black;
  font-size: 12px;
}
</style>
