// Task 1:
// let div = document.createElement('div');
//
// div.style.overflowY = 'scroll';
// div.style.width = '50px';
// div.style.height = '50px';
// div.style.background = 'yellow';
//
// document.body.append(div);
//
// let scrollWidth = div.offsetWidth - div.clientWidth;
//
// console.log('scrollWidth:', scrollWidth);

// Task 2:
const ball = document.querySelector('#ball');
const field = document.querySelector('#field');

ball.style.left = Math.floor(field.clientWidth / 2 - ball.offsetWidth / 2) + 'px';
ball.style.top = Math.floor(field.clientHeight / 2 - ball.offsetHeight / 2) + 'px';



