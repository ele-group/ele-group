let btn_registration = document.getElementById("btn_registration")
let btn_exit = document.getElementById("btn_exit")
let btn_login = document.getElementById("btn_sign_in")
let error = document.getElementById("error")
let login = document.getElementById("login")
let password = document.getElementById("password")
let login_input = document.getElementById("login_input")
let password_input = document.getElementById("password_input")
let username = document.getElementById("name")
let url_vk = document.getElementById("url_vk")
let username_account = document.getElementById("name_account")
let url_vk_account = document.getElementById('url_vk_account')

if (btn_registration) {
    btn_registration.addEventListener('click', function (e) {
        axios.post('/register', { login: login.value, password: password.value, username: username.value, url_vk: url_vk.value }).then(function (res) {
            if (res.uusername === 'qwe') {
                error.innerHTML = 'ffdsfdfsdf'
            } else {
                localStorage.setItem('user', JSON.stringify(res))
                localStorage.setItem('register', 'true')
                localStorage.setItem('login', 'false')
                localStorage.setItem('flag', 'true')
                window.location.replace("./index.html")
            }
        })
    })
}
if (btn_login) {
    btn_login.addEventListener('click', function (e) {
        axios.post('/login', { login: login_input.value, password: password_input.value}).then(function (res) {
            if (res) {
                localStorage.setItem('user', JSON.stringify(res))
                localStorage.setItem('flag', 'true') 
                localStorage.setItem('login', 'true')  
                localStorage.setItem('register', 'false')  
                window.location.replace("./index.html")
            }
        })
    })
}

if (btn_exit) {
    btn_exit.addEventListener('click', function (e) {
        localStorage.removeItem('user')
        localStorage.setItem('flag', 'false')
        localStorage.removeItem('login')
        localStorage.removeItem('register')
    })
}
