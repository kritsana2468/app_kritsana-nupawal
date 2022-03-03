<template>
  <div>
    <v-row
      align="center"
      justify="center"
    >
      <v-app-bar>
        <h2>ADMIN</h2>
      </v-app-bar>
      <v-card
        class="card2 justify-center mt-5"
      >
        <v-data-table
          :headers="headers"
          :items="desserts"
          sort-by="calories"
          class="elevation-1"
        >
          <template #top>
            <v-toolbar
              class="tb black--text"
              color="blue"
              flat
            >
              <v-toolbar-title class="white--text">
                ข้อมูลการสมัครกิจกรรมพิเศษ
              </v-toolbar-title>
              <v-divider
                class="mx-4"
                inset
                vertical
              />
              <v-spacer />
              <v-dialog
                v-model="dialog"
                max-width="500px"
              >
                <template #activator="{ on, attrs }">
                  <v-btn
                    color="green"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4"
                        >
                          <v-text-field
                            v-model="editedItem.fname"
                            label="ชื่อ"
                          />
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4"
                        >
                          <v-text-field
                            v-model="editedItem.lname"
                            label="นามสกุล"
                          />
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4"
                        >
                          <v-text-field
                            v-model="editedItem.id"
                            label="รหัสนักศึกษา"
                          />
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4"
                        >
                          <v-text-field
                            v-model="editedItem.email"
                            label="อีเมล"
                          />
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4"
                        >
                          <v-text-field
                            v-model="editedItem.event"
                            label="กิจกรรม"
                          />
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer />
                    <v-btn
                      color="green"
                      text
                      @click="close"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      color="green"
                      text
                      @click="save"
                    >
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                  <v-card-title class="text-h5">
                    กด OK เพื่อยืนยันการลบเป้าหมาย
                  </v-card-title>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn color="green" text @click="closeDelete">
                      Cancel
                    </v-btn>
                    <v-btn color="green" text @click="deleteItemConfirm">
                      OK
                    </v-btn>
                    <v-spacer />
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template slot="item.actions" slot-scope="item">
            <v-icon
              small
              @click="deleteItem(item)"
            >
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-card>
    </v-row>
  </div>
</template>
<script>
import axios from 'axios'
export default {

  layout: 'App',
  data: () => ({
    interval: {},
    menu: false,
    modal: false,
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'ชื่อ',
        align: 'start',
        sortable: false,
        value: 'fname'
      },
      {
        text: 'นามสกุล',
        align: 'start',
        sortable: false,
        value: 'lname'
      },
      { text: 'รหัสนักศึกษา', value: 'id' },
      { text: 'อีเมลนักศึกษา', value: 'email' },
      { text: 'กิจกรรม', value: 'event' },
      { text: 'Actions', value: 'actions', sortable: false },
      {
        'vue/valid-v-slot': ['error', {
          allowModifiers: false
        }]
      }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      fname: '',
      lname: '',
      id: '',
      email: '',
      event: ''
    },
    defaultItem: {
      fname: '',
      lname: '',
      id: '',
      email: '',
      event: ''
    }
  }),
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'เพิ่มกิจกรรม' : 'แก้ไขกิจกรรม'
    }
  },

  editItem (item) {
    this.editedIndex = this.desserts.indexOf(item)
    this.editedItem = Object.assign({}, item)
    this.dialog = true
  },

  deleteItem (item) {
    this.editedIndex = this.desserts.indexOf(item)
    this.editedItem = Object.assign({}, item)
    this.dialogDelete = true
  },

  deleteItemConfirm () {
    this.desserts.splice(this.editedIndex, 1)
    this.closeDelete()
  },

  close () {
    this.dialog = false
    this.$nextTick(() => {
      this.editedItem = Object.assign({}, this.defaultItem)
      this.editedIndex = -1
    })
  },

  closeDelete () {
    this.dialogDelete = false
    this.$nextTick(() => {
      this.editedItem = Object.assign({}, this.defaultItem)
      this.editedIndex = -1
    })
  },

  save () {
    if (this.editedIndex > -1) {
      Object.assign(this.desserts[this.editedIndex], this.editedItem)
    } else {
      this.desserts.push(this.editedItem)
    }
    axios.post('/user', {
      name: this.editedItem.name,
      money: this.editedItem.money,
      time: this.editedItem.time
    })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    this.close()
  }
}

</script>
