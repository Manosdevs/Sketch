const container = document.getElementById('container');
for (let i = 0; i < (16 * 16); i++) {
    
    let content = document.createElement('div');
    content.innerText = (i + 1);
    container.appendChild(content).className = "grid-item";
    
    
};

