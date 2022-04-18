const cont = document.getElementById('cont');
for (let i = 0; i < (16 * 16); i++) {
    
    let content = document.createElement('div');
    content.innerText = " ";
    content.classList.add('grid-item')
    cont.appendChild(content);
    
    
};
let brush = 'red';
let paint = false;

const btn = document.querySelectorAll('.btn');
btn.forEach(elem => elem.addEventListener('click', function(e){
 brush = e.target.innerText;
}));



const chng = document.querySelectorAll('.grid-item');
console.log(chng);
chng.forEach(elem => elem.addEventListener('mouseover', function (e)  {
   if (paint === true) {
   e.target.style.backgroundColor = brush;
   document.getElementById('cont').style.cursor = 'crosshair';
   }else {
    document.getElementById('cont').style.cursor = 'default';
   }
})); 

const stc = document.body;
stc.addEventListener('keypress', () => {
    paint = !paint;
    console.log(paint);
});




chng.forEach(elem => elem.addEventListener('click', function (e)  {
    e.target.style.backgroundColor = 'white';
}));   
