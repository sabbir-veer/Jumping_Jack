const guy = document.querySelector('.jumping_guy')
const alien = document.querySelector('.alien')
const num = document.querySelector('.number')
document.addEventListener('keydown', event => {
    if(event.code === 'Space') {
        guy.classList.add('animate')
        setTimeout(()=>{
            guy.classList.remove('animate')
        },500)
    }
})
let score = 0
let checkDead = setInterval(() => {
    let guyBottom = parseInt(window.getComputedStyle(guy).getPropertyValue('bottom'))
    let alienLeft = parseInt(window.getComputedStyle(alien).getPropertyValue('left'))
    let status = true
    if(guyBottom <= 50 && alienLeft <=100) {
        alert('Game Over!')
        guy.style.animation = 'none'
        alien.style.animation = 'none'
        status = false
        clearInterval(checkDead)
    }
    if(status) {
        score++
        num.textContent = score
    }
}, 50); 


