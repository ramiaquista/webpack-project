import _ from 'lodash';
import './style.css';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = 'My name is Ramiro!';
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
