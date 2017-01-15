import routie from 'libs/routie.js';
import {AboutComponent} from '../components/about.component.js';

let $page = document.getElementById('page');
// let $about = document.getElementById('template-about').innerHTML;

routie('o-mnie', controller);

export function controller() {
  AboutComponent.render({name: "Agnieszka Grędowska"}, $page);
}

//alternative
// export function controller() {
//   $page.innerHTML = "";
//   $page.innerHTML = Mustache.render($about, {name: 'Agnieszka Grędowska'});
// }
