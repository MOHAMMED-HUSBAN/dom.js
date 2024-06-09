
/////////////////////////////////////////////////////////////////////////////////1
// let fruits = ['cherry', 'passion', 'Peach', 'pineapple', 'watermelon'];
// let fruitsList = document.getElementById('5fruit');
// let ul = document.createElement('ul');

// for (let i = 0; i < fruits.length; i++) {
  
//     let li = document.createElement('li');
//     let img = document.createElement('img');
//     let imgf = [
//         "/cherry.png" , "/passion.png" , "/Peach.png" , "/pineapple.png", "/watermelon.png" 
//     ];

//     img.src = imgf[i];
//     img.setAttribute('style', 'width: 100px; height: 100px;'); 
//     li.setAttribute('style', 'display: inline-block; margin: 15px;'); 

//     li.appendChild(img);
//     ul.appendChild(li);
// }

// fruitsList.appendChild(ul);




/////////////////////////////////////////////////////////////////////////////////2
function findIndex(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i; 
        }
    }
    return -1; 
}


const array = [5, 10, 15, 20, 25];
const valueToFind = prompt("Enter a value to search for:");
const index = findIndex(array, parseInt(valueToFind)); 
if (index !== -1) {
    alert("Value " + valueToFind + " found at index " + index);
} else {
    alert("Value " + valueToFind + " not found in the array");
}
