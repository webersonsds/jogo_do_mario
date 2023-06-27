const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const reset = document.querySelector('.reset')

const Jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
} 

const loop = setInterval(() => {

    const piposition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace ('px', '')


    if(piposition <= 120 && piposition > 0 && marioPosition < 90 ){
        pipe.style.animation = 'none'; 
        pipe.style.left = `${piposition}px`
 
         
        pipe.style.animation = 'none';  
        mario.style.bottom = `${marioPosition}px` 

        mario.src = './img/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        reset.style.display = 'block'

        
        clearInterval(loop)
    } 

},10);
 
document.addEventListener('keydown', Jump)

reset.addEventListener('click' ,() => {
    location.reload()
})
