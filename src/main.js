import './style.css'



const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu');
const menu = document.querySelector('.menu');

const botonInicio = document.querySelector('#botonInicio');
const botonMenu = document.querySelector('#botonMenu');
const botonUbicaciones = document.querySelector('#botonUbicaciones');
const botonHorarios = document.querySelector('#botonHorarios');
const botonReservas = document.querySelector('#botonReservas');
const BotonOrdenar = document.querySelector('#BotonOrdenar');




const cerrarMenu = () => {
  setTimeout(() => {
    menu.style.left = '-100rem';
  }, 500);
  menu.style.opacity = '0%';
}
const abrirMenu = () => {
  menu.style.left = '0';
  menu.style.opacity = '100%';
}


openMenu.addEventListener('click', () => {
  abrirMenu();
  
}
)
closeMenu.addEventListener('click', () => {

  cerrarMenu();
  
  
}
)

botonInicio.addEventListener('click', () => {

  cerrarMenu();
}
);
botonMenu.addEventListener('click', () => {

  cerrarMenu();
}
);
botonUbicaciones.addEventListener('click', () => {

  cerrarMenu();
}
);
botonHorarios.addEventListener('click', () => {

  cerrarMenu();
}
);
botonReservas.addEventListener('click', () => {

  cerrarMenu();
}
);
BotonOrdenar.addEventListener('click', () => {

  cerrarMenu();
}
);


document.querySelector('#app').innerHTML = `
  <div>
  </div>  
`


