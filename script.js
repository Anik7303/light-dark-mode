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

// dark mode styles
function darkMode() {
    toggleIcon.children[0].textContent = 'Dark Mode'
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    imageMode('dark')
}

// light mode styles
function lightMode() {
    toggleIcon.children[0].textContent = 'Light Mode'
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
    imageMode('light')
}

// switch theme dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark')
        darkMode()
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light')
        lightMode()
    }
}

// event listeners
toggleSwitch.addEventListener('change', switchTheme)

// on load
const currentTheme = localStorage.getItem('theme') || 'light'
document.documentElement.setAttribute('data-theme', currentTheme)

if (currentTheme === 'dark') {
    toggleSwitch.checked = true
    darkMode()
}
