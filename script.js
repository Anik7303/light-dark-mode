const toggleSwitch = document.querySelector('input[type="checkbox"]')
const nav = document.getElementById('nav')
const toggleIcon = document.getElementById('toggle-icon')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')
const textBox = document.getElementById('text-box')

// dark or light images
function imageMode(mode) {
    image1.src = `images/undraw_proud_coder_${mode}.svg`
    image2.src = `images/undraw_feeling_proud_${mode}.svg`
    image3.src = `images/undraw_conceptual_idea_${mode}.svg`
}

// set theme
function setLightOrDarkModeStyles(isLight = false) {
    const replace = isLight ? 'fa-moon' : 'fa-sun'
    const replaceBy = isLight ? 'fa-sun' : 'fa-moon'
    toggleIcon.children[0].textContent = isLight ? 'Light Mode' : 'Dark Mode'
    toggleIcon.children[1].classList.replace(replace, replaceBy)
    imageMode(isLight ? 'light' : 'dark')
}

// set attribute to dom
function setAttributeToDOM(key, value) {
    document.documentElement.setAttribute(key, value)
}

// save item to local storage
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value)
}

// set theme
function setTheme(theme) {
    setAttributeToDOM('data-theme', theme)
    saveToLocalStorage('theme', theme)
    setLightOrDarkModeStyles(theme === 'light')
}

// switch theme dynamically
function switchTheme(event) {
    if (event.target.checked) {
        setTheme('dark')
    } else {
        setTheme('light')
    }
}

// event listeners
toggleSwitch.addEventListener('change', switchTheme)

// on load
const currentTheme = localStorage.getItem('theme') || 'light'
setAttributeToDOM('data-theme', currentTheme)

if (currentTheme === 'dark') {
    toggleSwitch.checked = true
    setLightOrDarkModeStyles()
}
