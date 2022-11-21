let div = document.createElement('div');

div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';
div.style.background = 'yellow';

document.body.append(div);

let scrollWidth = div.offsetWidth - div.clientWidth;

console.log('scrollWidth:', scrollWidth);

