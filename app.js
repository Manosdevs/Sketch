const container = document.getElementById('container');
for (let i = 0; i < (16 * 16); i++) {
    
    let content = document.createElement('div');
    content.innerText = " ";
    container.appendChild(content).className = "grid-item";
    
    
};
let brush = 'red';

const btn = document.querySelectorAll('button');
btn.forEach(elem => elem.addEventListener('click', function(e){
 brush = e.target.innerText;
}));


const chng = document.querySelectorAll('.grid-item');
console.log(chng);
chng.forEach(elem => elem.addEventListener('mouseover', function (e)  {
    e.target.style.backgroundColor = brush;

}));
chng.forEach(elem => elem.addEventListener('click', function (e)  {
    e.target.style.backgroundColor = 'white';
}));   
