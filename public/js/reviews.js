let keyboard_name_1 = document.getElementById("keyboard_name_1")
let keyboard_name_2 = document.getElementById("keyboard_name_2")
let keyboard_name_3 = document.getElementById("keyboard_name_3")
let keyboard_content_1 = document.getElementById("keyboard_content_1")
let keyboard_content_2 = document.getElementById("keyboard_content_2")
let keyboard_content_3 = document.getElementById('keyboard_content_3')
let area_keyboard = document.getElementById("area_keyboard")
let btn_keyboard = document.getElementById("btn_keyboard")

let cube_name_1 = document.getElementById("cube_name_1")
let cube_name_2 = document.getElementById("cube_name_2")
let cube_name_3 = document.getElementById("cube_name_3")
let cube_content_1 = document.getElementById("cube_content_1")
let cube_content_2 = document.getElementById("cube_content_2")
let cube_content_3 = document.getElementById('cube_content_3')
let area_cube = document.getElementById("area_cube")
let btn_cube = document.getElementById("btn_cube")

let smartbook_name_1 = document.getElementById("smartbook_name_1")
let smartbook_name_2 = document.getElementById("smartbook_name_2")
let smartbook_name_3 = document.getElementById("smartbook_name_3")
let smartbook_content_1 = document.getElementById("smartbook_content_1")
let smartbook_content_2 = document.getElementById("smartbook_content_2")
let smartbook_content_3 = document.getElementById('smartbook_content_3')
let area_smartbook = document.getElementById("area_smartbook")
let btn_smartbook = document.getElementById("btn_smartbook")

let savetheprincess_name_1 = document.getElementById("savetheprincess_name_1")
let savetheprincess_name_2 = document.getElementById("savetheprincess_name_2")
let savetheprincess_name_3 = document.getElementById("savetheprincess_name_3")
let savetheprincess_content_1 = document.getElementById("savetheprincess_content_1")
let savetheprincess_content_2 = document.getElementById("savetheprincess_content_2")
let savetheprincess_content_3 = document.getElementById('savetheprincess_content_3')
let area_savetheprincess = document.getElementById("area_savetheprincess")
let btn_savetheprincess = document.getElementById("btn_savetheprincess")

let monuments_name_1 = document.getElementById("monuments_name_1")
let monuments_name_2 = document.getElementById("monuments_name_2")
let monuments_name_3 = document.getElementById("monuments_name_3")
let monuments_content_1 = document.getElementById("monuments_content_1")
let monuments_content_2 = document.getElementById("monuments_content_2")
let monuments_content_3 = document.getElementById('monuments_content_3')
let area_monuments = document.getElementById("area_monuments")
let btn_monuments = document.getElementById("btn_monuments")

document.addEventListener('DOMContentLoaded', function (e) {
    if (btn_keyboard) {
        axios.post('/reviews_keyboard', {}).then(function (res) {
            keyboard_name_1.innerHTML = res.data[res.data.length-1].username
            keyboard_name_2.innerHTML = res.data[res.data.length-2].username
            keyboard_name_3.innerHTML = res.data[res.data.length-3].username
            keyboard_content_1.innerHTML = res.data[res.data.length-1].content
            keyboard_content_2.innerHTML = res.data[res.data.length-2].content
            keyboard_content_3.innerHTML = res.data[res.data.length-3].content
            
        })
    }
    if (btn_cube) {
        axios.post('/reviews_cube', {}).then(function (res) {
            cube_name_1.innerHTML = res.data[res.data.length-1].username
            cube_name_2.innerHTML = res.data[res.data.length-2].username
            cube_name_3.innerHTML = res.data[res.data.length-3].username
            cube_content_1.innerHTML = res.data[res.data.length-1].content
            cube_content_2.innerHTML = res.data[res.data.length-2].content
            cube_content_3.innerHTML = res.data[res.data.length-3].content
            
        })
    }
    if (btn_smartbook) {
        axios.post('/reviews_smartbook', {}).then(function (res) {
            smartbook_name_1.innerHTML = res.data[res.data.length-1].username
            smartbook_name_2.innerHTML = res.data[res.data.length-2].username
            smartbook_name_3.innerHTML = res.data[res.data.length-3].username
            smartbook_content_1.innerHTML = res.data[res.data.length-1].content
            smartbook_content_2.innerHTML = res.data[res.data.length-2].content
            smartbook_content_3.innerHTML = res.data[res.data.length-3].content
            
        })
    }
    if (btn_savetheprincess) {
        axios.post('/reviews_savetheprincess', {}).then(function (res) {
            savetheprincess_name_1.innerHTML = res.data[res.data.length-1].username
            savetheprincess_name_2.innerHTML = res.data[res.data.length-2].username
            savetheprincess_name_3.innerHTML = res.data[res.data.length-3].username
            savetheprincess_content_1.innerHTML = res.data[res.data.length-1].content
            savetheprincess_content_2.innerHTML = res.data[res.data.length-2].content
            savetheprincess_content_3.innerHTML = res.data[res.data.length-3].content
            
        })
    }
    if (btn_monuments) {
        axios.post('/reviews_monuments', {}).then(function (res) {
            monuments_name_1.innerHTML = res.data[res.data.length-1].username
            monuments_name_2.innerHTML = res.data[res.data.length-2].username
            monuments_name_3.innerHTML = res.data[res.data.length-3].username
            monuments_content_1.innerHTML = res.data[res.data.length-1].content
            monuments_content_2.innerHTML = res.data[res.data.length-2].content
            monuments_content_3.innerHTML = res.data[res.data.length-3].content
            
        })
    }
})
if (btn_keyboard) {
    btn_keyboard.addEventListener('click', function (e) {
        axios.post('/new_keyboard', {name: JSON.parse(localStorage.getItem('user')).data.uusername, area: area_keyboard.value}).then(function (res) {
            console.log((area_keyboard.value))
            keyboard_name_1.innerHTML = res.data[res.data.length-1].username
            keyboard_name_2.innerHTML = res.data[res.data.length-2].username
            keyboard_name_3.innerHTML = res.data[res.data.length-3].username
            keyboard_content_1.innerHTML = res.data[res.data.length-1].content
            keyboard_content_2.innerHTML = res.data[res.data.length-2].content
            keyboard_content_3.innerHTML = res.data[res.data.length-3].content
            
        })
    })
}
if (btn_cube) {
    btn_cube.addEventListener('click', function (e) {
        axios.post('/new_cube', {name: JSON.parse(localStorage.getItem('user')).data.uusername, area: area_cube.value}).then(function (res) {
            console.log((area_cube.value))
            cube_name_1.innerHTML = res.data[res.data.length-1].username
            cube_name_2.innerHTML = res.data[res.data.length-2].username
            cube_name_3.innerHTML = res.data[res.data.length-3].username
            cube_content_1.innerHTML = res.data[res.data.length-1].content
            cube_content_2.innerHTML = res.data[res.data.length-2].content
            cube_content_3.innerHTML = res.data[res.data.length-3].content
            
        })
    })
}
if (btn_smartbook) {
    btn_smartbook.addEventListener('click', function (e) {
        axios.post('/new_smartbook', {name: JSON.parse(localStorage.getItem('user')).data.uusername, area: area_smartbook.value}).then(function (res) {
            console.log((area_smartbook.value))
            smartbook_name_1.innerHTML = res.data[res.data.length-1].username
            smartbook_name_2.innerHTML = res.data[res.data.length-2].username
            smartbook_name_3.innerHTML = res.data[res.data.length-3].username
            smartbook_content_1.innerHTML = res.data[res.data.length-1].content
            smartbook_content_2.innerHTML = res.data[res.data.length-2].content
            smartbook_content_3.innerHTML = res.data[res.data.length-3].content
            
        })
    })
}
if (btn_savetheprincess) {
    btn_savetheprincess.addEventListener('click', function (e) {
        axios.post('/new_savetheprincess', {name: JSON.parse(localStorage.getItem('user')).data.uusername, area: area_savetheprincess.value}).then(function (res) {
            console.log((area_savetheprincess.value))
            savetheprincess_name_1.innerHTML = res.data[res.data.length-1].username
            savetheprincess_name_2.innerHTML = res.data[res.data.length-2].username
            savetheprincess_name_3.innerHTML = res.data[res.data.length-3].username
            savetheprincess_content_1.innerHTML = res.data[res.data.length-1].content
            savetheprincess_content_2.innerHTML = res.data[res.data.length-2].content
            savetheprincess_content_3.innerHTML = res.data[res.data.length-3].content
            
        })
    })
}
if (btn_monuments) {
    btn_monuments.addEventListener('click', function (e) {
        axios.post('/new_monuments', {name: JSON.parse(localStorage.getItem('user')).data.uusername, area: area_monuments.value}).then(function (res) {
            console.log((area_monuments.value))
            monuments_name_1.innerHTML = res.data[res.data.length-1].username
            monuments_name_2.innerHTML = res.data[res.data.length-2].username
            monuments_name_3.innerHTML = res.data[res.data.length-3].username
            monuments_content_1.innerHTML = res.data[res.data.length-1].content
            monuments_content_2.innerHTML = res.data[res.data.length-2].content
            monuments_content_3.innerHTML = res.data[res.data.length-3].content
            
        })
    })
}