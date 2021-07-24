const ToggleBtn = document.getElementsByClassName('toggle-btn')
const AsideNavBar = document.querySelector('.aside')

for(var i=0; i<ToggleBtn.length; i++){
    ToggleBtn[i].addEventListener('click', () => {
        AsideNavBar.classList.toggle('active')
    })
}

