// Import all of Bootstrap's JS
import 'bootstrap'

// Import our custom CSS
import './scss/style.scss'


import { footer } from './componentes/footer'
import { header } from './componentes/header'


// Importamos la vista por defecto (que será home)
async function cargarVista () {
  const componente = await import('./vistas/home')
  const vista = componente.default
  // Inyectamos la vista home
  document.querySelector('main').innerHTML = vista.template
}
cargarVista()

//Inyectamos el componente header
document.querySelector('header').innerHTML = header.template

//Inyectamos el componente footer
document.querySelector('footer').innerHTML = footer.template