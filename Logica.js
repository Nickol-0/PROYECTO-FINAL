// Lógica del juego de formas
let shapes = ['circle', 'square', 'triangle'];
function nextShape() {
    let randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    document.querySelectorAll('.shape').forEach(shape => {
        shape.style.display = (shape.id === randomShape) ? 'block' : 'none';
    });
}
function checkShape(shape) {
    if (shapes.includes(shape)) {
        document.getElementById('shape-feedback').innerText = '¡Bien hecho!';
    } else {
        document.getElementById('shape-feedback').innerText = 'Inténtalo de nuevo';
    }
    setTimeout(nextShape, 1000);
}

// Lógica del juego de números
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function nextNumber() {
    let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    document.getElementById('number-container').innerText = randomNumber;
}
function checkNumber(number) {
    if (numbers.includes(number)) {
        document.getElementById('number-feedback').innerText = '¡Bien hecho!';
    } else {
        document.getElementById('number-feedback').innerText = 'Inténtalo de nuevo';
    }
    setTimeout(nextNumber, 1000);
}

// Lógica del juego de colores
let colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];
function nextColor() {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelectorAll('.color').forEach(color => {
        color.style.display = (color.id === randomColor) ? 'block' : 'none';
    });
}
function checkColor(color) {
    if (colors.includes(color)) {
        document.getElementById('color-feedback').innerText = '¡Bien hecho!';
    } else {
        document.getElementById('color-feedback').innerText = 'Inténtalo de nuevo';
    }
    setTimeout(nextColor, 1000);
}

// Lógica del juego de exploración
let items = [
    {name: 'dog', img: 'images/dog.jpg'},
    {name: 'cat', img: 'images/cat.jpg'},
    {name: 'car', img: 'images/car.jpg'},
    {name: 'apple', img: 'images/apple.jpg'},
    {name: 'soccer', img: 'images/soccer.jpg'},
    {name: 'swimming', img: 'images/swimming.jpg'}
];
function nextItem() {
    let randomItem = items[Math.floor(Math.random() * items.length)];
    document.getElementById('explore-container').style.backgroundImage = `url(${randomItem.img})`;
    document.getElementById('explore-container').dataset.name = randomItem.name;
}
function checkItem(item) {
    if (document.getElementById('explore-container').dataset.name === item) {
        document.getElementById('explore-feedback').innerText = '¡Bien hecho!';
    } else {
        document.getElementById('explore-feedback').innerText = 'Inténtalo de nuevo';
    }
    setTimeout(nextItem, 1000);
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    nextShape();
    nextNumber();
    nextColor();
    nextItem();
});
