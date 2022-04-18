

const cont = document.getElementById('cont');

let prevrows = 16;
let prevcols = 16;

function sketch(rows,columns) {
    cont.style.setProperty('--grid-row', rows);
    cont.style.setProperty('--grid-column', columns);

    for (let i = 0; i < (columns * rows); i++) {
        
        let content = document.createElement('div');
        content.innerText = " ";
        content.classList.add('grid-item')
        cont.appendChild(content);
        
        
    };
};

sketch(16,16);

const inp1 = document.getElementById('forminput');
const inp2 = document.getElementById('forminput2');
const go = document.getElementById('go');

go.onclick = function () {
    sketch(inp1.value, inp2.value);

}




let brush = 'white';
let paint = false;

const btn = document.querySelectorAll('.clr');
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

const clear = document.querySelector('.btn-dark');
clear.onclick = () => chng.forEach(elem => elem.style.backgroundColor = 'white');


chng.forEach(elem => elem.addEventListener('click', function (e)  {
    e.target.style.backgroundColor = 'white';
}));   
