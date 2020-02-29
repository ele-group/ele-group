let express = require('express')
let bodyParser = require("body-parser")
let app = express()
let fs = require("fs")
app.use('/', express.static('public'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}


class Review {
  constructor(username, content) {
    this.username = username
    this.content = content
  }
}
class User {
    constructor(login, password, username, url_vk) {
      this.login = login
      this.password = password
      this.username = username
      this.url_vk = url_vk
    }
  }

let users = []
fs.readFile("users.json", function(err, data) {
  if (err) return console.log(err)
  users = JSON.parse(data.toString())
  console.log(users)
})

let reviews_keyboard = []
fs.readFile("reviews_keyboard.json", function(err, data) {
  if (err) return console.log(err)
  reviews_keyboard = JSON.parse(data.toString())
  console.log(reviews_keyboard)
})
app.post("/reviews_keyboard", function(req, res) {
  res.send(reviews_keyboard)
})
app.post("/new_keyboard", function(req, res) {
  let area_content = req.body.area
  let name_this = req.body.name
  console.log(name_this)
  reviews_keyboard.push(new Review(name_this, area_content))
  fs.writeFile("reviews_keyboard.json", JSON.stringify(reviews_keyboard), function(err) {
   if (err) return console.log(err)
  })
  console.log(reviews_keyboard)
  res.send(reviews_keyboard)
})

let reviews_cube = []
fs.readFile("reviews_cube.json", function(err, data) {
  if (err) return console.log(err)
  reviews_cube = JSON.parse(data.toString())
  console.log(reviews_cube)
})
app.post("/reviews_cube", function(req, res) {
  res.send(reviews_cube)
})
app.post("/new_cube", function(req, res) {
  let area_content = req.body.area
  let name_this = req.body.name
  console.log(name_this)
  reviews_cube.push(new Review(name_this, area_content))
  fs.writeFile("reviews_cube.json", JSON.stringify(reviews_cube), function(err) {
   if (err) return console.log(err)
  })
  console.log(reviews_cube)
  res.send(reviews_cube)
})

let reviews_smartbook = []
fs.readFile("reviews_smartbook.json", function(err, data) {
  if (err) return console.log(err)
  reviews_smartbook = JSON.parse(data.toString())
  console.log(reviews_smartbook)
})
app.post("/reviews_smartbook", function(req, res) {
  res.send(reviews_smartbook)
})
app.post("/new_smartbook", function(req, res) {
  let area_content = req.body.area
  let name_this = req.body.name
  console.log(name_this)
  reviews_smartbook.push(new Review(name_this, area_content))
  fs.writeFile("reviews_smartbook.json", JSON.stringify(reviews_smartbook), function(err) {
   if (err) return console.log(err)
  })
  console.log(reviews_smartbook)
  res.send(reviews_smartbook)
})

let reviews_savetheprincess = []
fs.readFile("reviews_savetheprincess.json", function(err, data) {
  if (err) return console.log(err)
  reviews_savetheprincess = JSON.parse(data.toString())
  console.log(reviews_savetheprincess)
})
app.post("/reviews_savetheprincess", function(req, res) {
  res.send(reviews_savetheprincess)
})
app.post("/new_savetheprincess", function(req, res) {
  let area_content = req.body.area
  let name_this = req.body.name
  console.log(name_this)
  reviews_savetheprincess.push(new Review(name_this, area_content))
  fs.writeFile("reviews_savetheprincess.json", JSON.stringify(reviews_savetheprincess), function(err) {
   if (err) return console.log(err)
  })
  console.log(reviews_savetheprincess)
  res.send(reviews_savetheprincess)
})

let reviews_monuments = []
fs.readFile("reviews_monuments.json", function(err, data) {
  if (err) return console.log(err)
  reviews_monuments = JSON.parse(data.toString())
  console.log(reviews_monuments)
})
app.post("/reviews_monuments", function(req, res) {
  res.send(reviews_monuments)
})
app.post("/new_monuments", function(req, res) {
  let area_content = req.body.area
  let name_this = req.body.name
  console.log(name_this)
  reviews_monuments.push(new Review(name_this, area_content))
  fs.writeFile("reviews_monuments.json", JSON.stringify(reviews_monuments), function(err) {
   if (err) return console.log(err)
  })
  console.log(reviews_monuments)
  res.send(reviews_monuments)
})

app.post("/register", function(req, res) {
    let login = req.body.login
    let password = req.body.password
    let username = req.body.username
    let url_vk = req.body.url_vk
    let user = {
      llogin: login, 
      ppassword: password, 
      uusername: username, 
      uurl_vk: url_vk
    };
    users.forEach(function(u) {
      if (u.login === login && u.password === password) {
        user.uusername = user.uusername + randomInteger(10, 99).toString()
      }
      console.log((u.uusername))
    });
    users.push(new User(user.llogin, password, username, url_vk))
    console.log(users)
    fs.writeFile("users.json", JSON.stringify(users), function(err) {
      if (err) return console.log(err)
    })
    res.send(user)
  })

app.post("/login", function(req, res) {
  let login = req.body.login
  let password = req.body.password
  users.forEach(function(u) {
    if (u.login === login && u.password === password) {
      user = {
        llogin: u.login, 
        ppassword: u.password, 
        uusername: u.username, 
        uurl_vk: u.url_vk
      };
    }
    console.log((u.login))
  });
  res.send(user)
})

app.listen(3000, function() {
    console.log('app run on 3000')
})