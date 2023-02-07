/*Эмулировать игру в кубики, 2 человека по очереди бросают кубик, каждый в итоге по 3 раза. У кого сумма трех бросков будет наибольшей - тот выиграл. Если суммы равны то ничья.*/

function random(number) {
    return Math.ceil(Math.random() * number);
}
let kick11 = random(6);
let kick21 = random(6);
let kick12 = random(6);
let kick22 = random(6);
let kick13 = random(6);
let kick23 = random(6);



let sumPlayer1 = kick11 + kick12 + kick13;
console.log (sumPlayer1)
let sumPlayer2 = kick21 + kick22 + kick23;
console.log (sumPlayer2)

if (sumPlayer1>sumPlayer2) {
    console.log ('Победил Игрок 1. Выпали кубики') // ВОПРОС: почему не могу вывести какие кубики выпали через ${}
}
else if (sumPlayer1<sumPlayer2){
console.log( 'Победил Игрок 2. Выпали кубики')
}
else 
console.log('Ничья :)')