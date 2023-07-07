let fruits = ['apple', 'bannana', 'lemon', 'coconut', "mango"];
let container = document.getElementById('container');
for(let i = 0; i<fruits.length; i++){
    const h2 = document.createElement('h1');
    h2.innerHTML = fruits[i];
    h2.style.color = 'red';
    h2.style.background = 'teal';
    h2.style.textAlign = 'center';
    h2.style.maxWidth = '500px';
    h2.style.margin = '10px auto';
    // console.log(div);
    container.appendChild(h2);
};