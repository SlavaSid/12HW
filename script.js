/* // 1.Запросите у пользователя его имя. Выведите в окошке (с помощью функции alert) фразу: Привет, Николай! (вместо Николай должно показываться имя, которое ввел пользователь)

let name = prompt('Какое у Вас имя');
alert ('Привет, ' + name);

//2/Запросите у пользователя число. Затем запросите степень, в которую нужно возвести это число. Выведите в консоль результат.

let numb = prompt('Введите любое число');
let numb1 = prompt('Введите степень числа');
console.log(numb ** numb1)

//4. Создать произвольную переменную, присвоить ей произвольное строковое значение (например, "my text"). C помощью if написать условие: если значение переменной равно “some text”, присвоить ей значение “another text”, иначе - “some text”.

let rating = 'my text';
if(rating != 'some text') {
   rating = 'sone text';
   } else{
    rating = 'another text';}

//5.Создать переменную и присвоить ей число.
//Записать условие:
//- если переменная равна нулю, присвоить ей 1;
//- если меньше нуля - строку “less then zero”;
//- если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let a = 5;


if(a < 0){
    a ='aless then zero';
} 
else if(0 < a){
    a *= 10; 
 }
 else {
    a = 1;}
  
   */
 

//6. Запросите у пользователя число и запишите его в переменную. (Не забывайте, что от пользователя мы всегда получаем строку).
//Создайте переменную-результат и присвойте ей значение: если введенное пользователем число меньше 5, то результат будет '0', если больше -  '1'. Выведите результат в консоль.

let str = +prompt('задайте любое число');
let fly;
if(str < 5){
    fly = '0';
}
else{
    fly = '1';   
}
console.log(fly);
    

/* 
//7.Попросить пользователя ввести одно число, следом - второе число. Вывести в консоль максимальное из чисел (наибольшее) с текстом: Большее число: 7 (вместо 7 будет максимальное число из введенных пользователем).* предусмотреть вариант ввода одинаковых чисел

    let strim = +prompt('задайте любое число');
    let strom = +prompt('задайте любое число');
   
    if(strim > strom){
        console.log(`Наибольшее число: ${strim}`);
    }
        else if(strim < strom){
           console.log(`Наибольшее число: ${strom}`);
       }
        else{ 
           console.log('Числа одинаковые');
       }

//.8 Определить, является ли введенное пользователем число num1 кратным введенному числу num2. Обе переменные запрашиваем у пользователя, ответ выводим в консоль.
    
let num1 = +prompt('задайте любое число ');
let num2 = +prompt('задайте любое число ');
let num3 = num1 % num2;
if(num3 != 0){
    console.log('Не является кратным');
}
    else{
        console.log('Является кратным');
    }

//9.Запросить у пользователя средний балл, записать в переменную. Если средний балл 1-4 - вывести в консоль "Двоечник, иди учись!", если 5-8 - "Неплохо, но давай еще поднажмем!", если 9-10 - "Ого, да ты настоящий отличник!" (можно другие фразы - по желанию).

let set = +prompt('средний балл');


if(set >= 1 && set <= 4){
    console.log("Двоечник, иди учись!");
}
if(set >= 5 && set <= 8){
    console.log('Неплохо, но давай еще поднажмем!');
}
if(set >= 9 && set <= 10){
console.log('Ого, да ты настоящий отличник!');
}

//10.Запросить у пользователя ответы на 2 вопроса:
//- балл за экзамен (от 0 до 100)
//- количество выполненных проектов (от 0 и больше)
//Вывести в консоль общий выпускной балл в соответствии с этими значениями:
//- 100, если балл за экзамен более 90 или количество проектов более 10.
//- 90, если балл за экзамен более 75 и количество проектов не менее 5.
//- 75, если балл за экзамен более 50 и количество проектов не менее 2.
//- 0 во всех других случаях.

let n = +prompt('балл за экзамен');
let m = +prompt('количество выполненных проектов');


if(90 < n && n <= 100 || 10 < m){
    console.log('Общий балл - 100');
}
else if(75 < n && n <= 90 || 5 <= m && m < 10){
    console.log('Общий балл - 75');
}
else if(50 < n && n <= 75 || 2 <= m && m < 5){
    console.log('Общий балл - 50');
}
else if(0 <= n && n <= 50 || 0 <= m && m < 2){
   console.log('Общий балл - 0');
}

// 11.День аренды автомобиля стоит $40. При аренде на 7 или больше дней вы получаете общую итоговую скидку $50. Если вы арендуете авто на 3 или более дней, ваша общая скидка составит $20.Количество дней, на которые нужно арендовать авто, запрашиваются с помощью prompt. Напишите программу, рассчитывающую общую стоимость аренды на запрашиваемое количество дней.

/* let day = +prompt('На сколько дней будет аренда?');
const aren = 40;
let disc3d = 0.2;
let disc7d = 0.5;
let payment;

if(0 < day &&  day <= 2){
   payment = aren * day;
}
else if(2 < day && day <= 6){
    payment = day * aren - (romm * aren) * disc3d;
}
else if(6 < day){
   payment = day * aren - (day * aren) * disc7d;
} */


 