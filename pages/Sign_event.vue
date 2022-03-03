<template>
  <v-app>
    <div>
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="ชื่อ"
                required
              />
            </v-col>

            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="นามสกุล"
                required
              />
            </v-col>

            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              />
            </v-col>
            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="id"
                :rules="idRules"
                label="รหัสนักศึกษา"
                required
              />
            </v-col>
            <v-col
              cols="12"
              md="4"
            >
              <v-select
                v-model="select"
                :items="items"
                :error-messages="errors"
                label="เลื่อกกิจกรรม"
                data-vv-name="select"
                required
              />
            </v-col>
            <v-btn
              class="mr-4"
              type="submit"
              :disabled="invalid"
              to="/home"
            >
              submit
            </v-btn>
          </v-row>
        </v-container>
      </v-form>
    </div>
  </v-app>
</template>
<script>
export default {
  layout: 'App',
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    select: null,
    items: [
      'วันคล้ายวันสถาปนา'
    ],
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    id: '',
    idRules: [
      v => !!v || 'id is required',
      v => /[0-9]/.test(v) || 'id must be valid'
    ]
  }),
  methods: {
    submit () {
      this.$refs.observer.validate()
    }
  }
}
</script>
