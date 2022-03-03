<template>
  <div>
    {{student}}
    <h1>แสดงข้อมูลนักเรียน</h1>
    <ul>
      <li v-for="st in student" :key="st.code">
        <div>{{ st.fullname }}</div>
        <div>{{ st.tel }}</div>
        <div>{{ st.email }}</div>
        <div>{{ st.password }}</div>
      </li>
    </ul>
    <v-btn color="success" class="mr-4" @click="Show">
      แสดงข้อมูล
    </v-btn>
  </div>
</template>
<script>
export default ({
  data: () => ({
    username: '',
    mobile: '',
    email: '',
    passwd: '',
    student: [
      { fullname: '', email: '' }
    ]
  }),
  created () {
    this.student.id = '11111'
  },
  methods: {
    async  Show () {
      console.log('show data')
      const res = await fetch('http://localhost:7001/list') // const ประกาศตัวแปร
      const data = res.json()
      this.student = data
      console.log(data.data)
    }
  }
})
</script>
