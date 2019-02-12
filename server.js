const express = require('express');

const app = express();

app.get('/', (req, res)=> {
  res.send('this is working!')
})

app.post('/signin', (req, res) => {
  res.send('sign in')
})

app.listen(3000, () => {
  console.log('app is running!');
})

/*
  / --> res = this is working
  /signin --> POST success/fail
  /singup --> POST = user
  /profile/:userId --> GET = user
  /image --> PUT = user
*/
