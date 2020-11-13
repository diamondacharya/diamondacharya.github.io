let theme = localStorage.getItem('theme')

if (theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme_dot')

for (var i = 0; i < themeDots.length; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode
        console.log('clidked ', mode)
        setTheme(mode)
    })
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme_style').href = 'default.css'
    }
    if (mode == 'blue') {
        document.getElementById('theme_style').href = 'blue.css'
    }
    if (mode == 'green') {
        document.getElementById('theme_style').href = 'green.css'
    }
    if (mode == 'red') {
        document.getElementById('theme_style').href = 'red.css'
    }
    localStorage.setItem('theme', mode)
}