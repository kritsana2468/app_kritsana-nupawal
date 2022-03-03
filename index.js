
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const knex = require('knex')

const db = knex({
  client: 'mysql',
  connection: {
    host: process.env.MYSQL_HOST || '127.0.0.1',
    port: process.env.MYSQL_PORT || 3306,
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASS || '0931200187',
    database: process.env.MYSQL_DB || 'ctc',
    supportBigNumber: true,
    timezone: '+7:00',
    dateStrings: true,
    charset: 'utf8mb4_unicode_ci'
  }
})
const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send({ ok: 1 })
})

app.post('/Save', async (req, res) => {
  console.log('data=', req.body)
  try {
    const row = await db('register').insert({
      fullname: req.body.username,
      bacount: req.body.baccount,
      tell: req.body.mobile,
      email: req.body.email,
      password: req.body.passwd,
      name: req.body.passwd,
      money: req.body.passwd,
      time: req.body.passwd
    })
    res.send({
      status: 1
    })
  } catch (e) {
    console.log('error')
    console.log(e.message)
    res.send({
      status: 0,
      error: e.message
    })
  }
})

app.get('/list', async (req, res) => {
  console.log('list')
  const row = await db('register')
  res.send({
    data: row,
    status: 1
  })
})
app.get('/list_user', async (req, res) => {
  console.log(req.query.user)
  console.log(req.query.pass)
  try {
    const row = await db('users_student')
      .where({ student_id: req.query.user, major_id: req.query.pass })
      .then(rows => rows[0])
    if (!row) {
      throw new Error('user / pass ไม่ถูกต้อง')
    }
    res.send({
      status: 1,
      data: row
    })
  } catch (e) {
    console.log('error')
    console.log(e.message)
    res.send({
      status: 0,
      error: e.message
    })
  }
})

app.listen(7001, () => {
  console.log('ready:7001')
})
