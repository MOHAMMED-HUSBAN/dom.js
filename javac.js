
let fruits = ['cherry', 'passion', 'Peach', 'pineapple', 'watermelon'];
let fruitsList = document.getElementById('5fruit');
let ul = document.createElement('ul');

for (let i = 0; i < fruits.length; i++) {
  
    let li = document.createElement('li');
    let img = document.createElement('img');
    let imgf = [
        "/cherry.png" , "/passion.png" , "/Peach.png" , "/pineapple.png", "/watermelon.png" 
    ];

    img.src = imgf[i];
    img.setAttribute('style', 'width: 100px; height: 100px;'); 
    li.setAttribute('style', 'display: inline-block; margin: 15px;'); 

    li.appendChild(img);
    ul.appendChild(li);
}

fruitsList.appendChild(ul);

