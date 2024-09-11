var age = +prompt("Введите свой возраст")
if (age <= 17) {
    alert("Вы ещё молоды. Вам нужна учиться")
} else if (age <= 18) {  
    alert("Вам нужна работать")
} else if (age <= 50) {
    alert("Вам нужна работать")
} else if (age <= 60) {
    alert("Вам скоро на пенсию")
} else if (age <= 80) {
    alert("Вы пенсионер")
} else {
   alert("неправильная информация")
}
var oclock = +prompt("Введите время")
if (oclock <= (10)) {
    alert(" 10 Часов утра")
} else if (oclock <= (11)) {
    alert(" 11 Часов утра")
} else if (oclock <= (12)) {
    alert(" 12 Час дня")
} else if (oclock <= (13)) {
    alert(" 13 Обед")
} else if (oclock <= (15)) {
    alert(" 15 После обеда")
} else if (oclock <= (23)) {
    alert(" 23 Часов вечера")
} else {
   alert("неправильная время")
}
let a = +prompt("Введите первое число")
let b = +prompt("Введите втарое число")
let c = +prompt("Введите третие число")

if (a < b && b < c || c < b && b < a) {
    console.log("Среднее число " + b);
}
else if (b < a && a < c || c < a && a < b) {
    console.log("Среднее число " + a);
}
else if (a < c && c < b || b < c && c < a) {
    console.log("Среднее число " + c);
}alert(`Cреднее число ${b || a || c}`)