import './style.css'



const openMenu = document.querySelector('#open-menu')
const closeMenu = document.querySelector('#close-menu')
const menu = document.querySelector('.menu')

openMenu.addEventListener('click', () => {
  menu.style.left = '0';
  menu.style.opacity = '100%';
}
)
closeMenu.addEventListener('click', () => {

  setTimeout(() => {
    menu.style.left = '-100rem';
  }, 500);
  
  menu.style.opacity = '0%';
}
)


document.querySelector('#app').innerHTML = `
  <div>
  </div>  
`


