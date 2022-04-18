
const cont = document.getElementById('cont');
const inp1 = document.getElementById('forminput');
const inp2 = document.getElementById('forminput2');
const clear = document.querySelector('.btn-dark');
const stc = document.body;
const go = document.getElementById('go');
const btn = document.querySelectorAll('.clr');

let prevrows = 16;
let prevcols = 16;
let brush = 'red';
let paint = true;

function sketch(rows,columns) {
    cont.style.setProperty('--grid-row', rows);
    cont.style.setProperty('--grid-column', columns);
    prevrows = rows;
    prevcols = columns;

    for (let i = 0; i < (columns * rows); i++) {
        
        let content = document.createElement('div');
        content.innerText = " ";
        content.classList.add('grid-item')
        cont.appendChild(content);
        
        
    };
};


function turnon(){
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
    clear.onclick = () => chng.forEach(elem => elem.style.backgroundColor = 'white');

    chng.forEach(elem => elem.addEventListener('click', function (e)  {
    e.target.style.backgroundColor = 'white';
}));  
}; 

function rmv() {
    for (let i = 0; i < (prevcols * prevrows); i++) {
        const content = document.querySelectorAll('.grid-item');
        content.forEach(elem => elem.remove());
    };
};

sketch(16,16);
turnon();

go.onclick = function () {
    

    rmv();
    sketch(inp1.value, inp2.value);
    turnon();

}



btn.forEach(elem => elem.addEventListener('click', function(e){
 brush = e.target.innerText;
}));


stc.addEventListener('keypress', () => {
    paint = !paint;
    console.log(paint);
});

 
