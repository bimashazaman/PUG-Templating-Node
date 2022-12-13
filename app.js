const express = require('express')

const app = express()

const bodyParser = require('body-parser')

app.set('view engine', 'pug')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }))

const users = []

app.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Home',
    path: '/',
  })
})

/* This is a route handler. It is listening for a request to the route `/users`. When it receives a
request, it renders the `users` template and passes it the `title`, `path`, and `users` variables. */
app.get('/users', (req, res, next) => {
  res.render('users', {
    title: 'Users',
    path: '/users',
    users: users,
  })
})

app.post('/create-user', (req, res, next) => {
  users.push({ name: req.body.name })
  res.redirect('/users')
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})
