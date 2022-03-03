<template>
  <v-app id="home" class="">
    <!-- <v-app-bar>กิจกรรมพิเศษ</v-app-bar> -->
    <v-main class="mainCL">
      <Nuxt />
    </v-main>
    <v-navigation-drawer
      v-model="drawer"
      app
      bottom
      color="#0322af"
      class="menu"
    >
      <v-list-item class="">
        <v-list-item-content>
          <v-list-item-title class="title">
            <h2>เมนู</h2>
          </v-list-item-title>
          <!-- <v-list-item-subtitle>
          </v-list-item-subtitle> -->
        </v-list-item-content>
      </v-list-item>

      <v-divider color="white" />

      <v-list
        dense
        nav
        class=""
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-bottom-navigation
      app
      class="appB"
    >
      <v-btn @click="drawer = !drawer">
        <v-icon>
          menu
        </v-icon>
        <p style="margin-bottom:-3px;">
          เมนู
        </p>
      </v-btn>
      <v-btn to="/home">
        <v-icon>
          home
        </v-icon>
        <p style="margin-bottom:-3px;">
          หน้าหลัก
        </p>
      </v-btn>

      <v-menu
        bottom
        min-width="200px"
        rounded
        offset-y
      >
        <template #activator="{ on }">
          <v-btn
            icon
            x-large
            v-on="on"
          >
            <v-avatar
              color="white"
              size="40"
            >
              <v-icon color="green" class="white--text text-h5">
                {{ user.initials }}
              </v-icon>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar
                color="white"
              >
                <v-icon color="green" class="white--text text-h5">
                  {{ user.initials }}
                </v-icon>
              </v-avatar>
              <h3>{{ user.fullName }}</h3>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-3" />
              <v-btn
                depressed
                rounded
                text
                to="/account"
              >
                Edit Account
              </v-btn>
              <v-divider class="my-3" />
              <v-btn
                depressed
                rounded
                text
                to="/login"
              >
                Disconnect
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>

      <v-btn to="/login">
        <v-icon>
          logout
        </v-icon>
        <p style="margin-bottom:-1px;">
          ออก
        </p>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    user: {
      initials: 'mdi-account',
      fullName: 'กฤษณะ ยวงทอง',
      email: 'kritsana@ccollege.ac.th'
    },
    drawer: null,
    items: [
      { title: 'ปฎิทิน', icon: 'mdi-calendar', to: '/calendar' },
      { title: 'ติดต่อเรา', icon: 'mdi-phone', to: '/contact' }
    ]
  })
}
</script>
<style>
.menu {
}
.img1 {
width: 50px;
position: absolute;
left: 85%;
top: 2%;
}
.appB {
  background: linear-gradient(to top right,#0322af,#0322af,#0f33d3);
}
.mainCL {
background-color: #ffffff;
}
</style>
