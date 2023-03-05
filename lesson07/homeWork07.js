/*Эмулировать игру в кубики, 2 человека по очереди бросают кубик, каждый в итоге по 3 раза. 
У кого сумма трех бросков будет наибольшей - тот выиграл. Если суммы равны то ничья.*/

function dropCube(number) {
    return Math.ceil(Math.random() * number);
}
let kick11 = dropCube(6);
let kick21 = dropCube(6);
let kick12 = dropCube(6);
let kick22 = dropCube(6);
let kick13 = dropCube(6);
let kick23 = dropCube(6);



let sumPlayer1 = kick11 + kick12 + kick13;
console.log (sumPlayer1)
let sumPlayer2 = kick21 + kick22 + kick23;
console.log (sumPlayer2)

if (sumPlayer1>sumPlayer2) {
    console.log ('Победил Игрок 1. Выпали кубики: ' +kick11, +kick12, kick13) 
}
else if (sumPlayer1<sumPlayer2){
console.log( 'Победил Игрок 2. Выпали кубики: ' +kick21, +kick22, +kick23)
}
else 
console.log('Ничья :)')


//2. Подсчитать количество Пятниц 13-ого с 01/01/2000 до сегодня. 

let friday13Count = 0;
let start = new Date("2000-01-13");
let end = new Date();
for (let i = start; i <= end; i.setMonth(i.getMonth() + 1)) {
  if (i.getDay() === 5 && i.getDate() === 13) {
    friday13Count++;
  }
}
console.log("Количество пятниц 13-го с 01.01.2000г. : " + friday13Count);

/*3. Напишите код который будет разбивать число на заданное количество рандомных чисел сумма которых будет равна изначальному числу. 
Пример: разбить 15 на 3 части (сумма четырех чисел будет равна 15) (4,6,5)
а. числа изначальное число целое, числа разбивки - целые (4,6,5)*/

const divideOnRandomNumbers = (num, parts) => {
    let result = [];
    for (let i = 0; i < parts - 1; i++) {
      let randomNum = Math.floor(Math.random() * num);
      result.push(randomNum);
      num -= randomNum;
    }
    result.push(num);
    return result;
  };
  
  console.log(divideOnRandomNumbers(15, 3));

  //б. числа разбивки дробные с 2 знаками после запятой (4.55, 5.20, 5.25)

  const divideOnRandomNumberFloat = (num, parts) => {
    let result = [];
    for (let i = 0; i < parts - 1; i++) {
      let randomNum = (Math.random() * (num-0)).toFixed(2);
      num -= randomNum;
      result.push(randomNum);
    }
    result.push(num.toFixed(2));
    return result;
  };
  
  console.log(divideOnRandomNumberFloat(15, 3));