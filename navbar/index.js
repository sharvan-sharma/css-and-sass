

const navToggler = () => {
    const toggler = document.querySelector('#toggle-btn')
    const icon = document.querySelector('#toggle-btn-icon')
    const list = document.querySelector('#toggle-list')


    toggler.addEventListener('click',() => {
        if (icon.classList[0] === 'icon-menu'){
            icon.classList.replace('icon-menu','icon-cancel')
            list.style.transform = 'translate(0)'
            list.style.animation = 'animateIN 1s ease'
        }else{
            icon.classList.replace('icon-cancel','icon-menu')
            list.style.transform = 'translate(-100%)'
            list.style.animation = 'animateOUT 1s ease'
        }
    })

}

const app = () => {
    navToggler()
}

app();