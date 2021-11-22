const left = document.querySelector('.left');
const right = document.querySelector('.right');
const splitContainer = document.querySelector('.split-container');
const h1 = document.querySelector('h1');

// left side events
left.addEventListener('mouseenter', ()=> splitContainer.classList.add('hover-left'))
left.addEventListener('mouseleave', ()=> splitContainer.classList.remove('hover-left'))


// right side events
right.addEventListener('mouseenter', ()=> splitContainer.classList.add('hover-right'))
right.addEventListener('mouseleave', ()=> splitContainer.classList.remove('hover-right'))
