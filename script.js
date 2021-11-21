const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');
const h1 = document.querySelector('h1');

// left side events
left.addEventListener('mouseenter', ()=> container.classList.add('hover-left'))
left.addEventListener('mouseleave', ()=> container.classList.remove('hover-left'))


// right side events
right.addEventListener('mouseenter', ()=> container.classList.add('hover-right'))
right.addEventListener('mouseleave', ()=> container.classList.remove('hover-right'))
