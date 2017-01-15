import routie from 'libs/routie.js';
import {WriteComponent} from '../components/write.component.js';

let $page = document.getElementById('page');

routie('napisz', controller);

export function controller() {
    WriteComponent.render({}, $page);
}
