
// main div
let Maindiv = document.createElement('div')
Maindiv.setAttribute('class', 'parent')
Maindiv.setAttribute('name', 'maindiv')
let main = document.querySelector('main')
main.appendChild(Maindiv)



//buttons

//RESULT
let result = document.createElement('input')
result.setAttribute('placeholder', '0')
result.setAttribute('id', 'result')
result.setAttribute('type', 'text')
result.setAttribute('value', '')
Maindiv.appendChild(result)


//CLEAR
let clear = document.createElement('div')
clear.setAttribute('class', 'clear')
Maindiv.appendChild(clear)

let buttonClear = document.createElement('button')
buttonClear.textContent = 'C'
clear.appendChild(buttonClear)



clear.addEventListener("click", (e) => {
    result.value = ''
    result.setAttribute('placeholder', '0')
})




//%
let perc = document.createElement('div')
perc.setAttribute('class', 'perc')
Maindiv.appendChild(perc)

let percent = document.createElement('button')
percent.textContent = '%'
percent.setAttribute('value', '%')
perc.appendChild(percent)


//+/-
let com = document.createElement('div')
com.setAttribute('class', 'com')
Maindiv.appendChild(com)

let Combutton = document.createElement('button')
Combutton.textContent = '.'
Combutton.setAttribute('value', '.')
com.appendChild(Combutton)



//ONE
let one = document.createElement('div')
one.setAttribute('class', 'one')
Maindiv.appendChild(one)

let button1 = document.createElement('button')
button1.textContent = '1'
button1.setAttribute('value', '1')
one.appendChild(button1)



//TWO
let two = document.createElement('div')
two.setAttribute('class', 'two')
Maindiv.appendChild(two)

let button2 = document.createElement('button')
button2.textContent = '2'
button2.setAttribute('value', '2')
two.appendChild(button2)




//THREE
let three = document.createElement('div')
three.setAttribute('class', 'three')
Maindiv.appendChild(three)

let button3 = document.createElement('button')
button3.textContent = '3'
three.appendChild(button3)



//FOUR
let four = document.createElement('div')
four.setAttribute('class', 'four')
Maindiv.appendChild(four)

let button4 = document.createElement('button')
button4.textContent = '4'
four.appendChild(button4)



//FIVE
let five = document.createElement('div')
five.setAttribute('class', 'five')
Maindiv.appendChild(five)

let button5 = document.createElement('button')
button5.textContent = '5'
five.appendChild(button5)



//SIX
let six = document.createElement('div')
six.setAttribute('class', 'six')
Maindiv.appendChild(six)

let button6 = document.createElement('button')
button6.textContent = '6'
six.appendChild(button6)



//SEVEN
let seven = document.createElement('div')
seven.setAttribute('class', 'seven')
Maindiv.appendChild(seven)

let button7 = document.createElement('button')
button7.textContent = '7'
seven.appendChild(button7)



//EIGHT
let eight = document.createElement('div')
eight.setAttribute('class', 'eight')
Maindiv.appendChild(eight)

let button8 = document.createElement('button')
button8.textContent = '8'
eight.appendChild(button8)



//NINE
let nine = document.createElement('div')
nine.setAttribute('class', 'nine')
Maindiv.appendChild(nine)

let button9 = document.createElement('button')
button9.textContent = '9'
nine.appendChild(button9)



//ZERO
let zero = document.createElement('div')
zero.setAttribute('class', 'zero')
Maindiv.appendChild(zero)

let button0 = document.createElement('button')
button0.textContent = '0'
zero.appendChild(button0)



//PLUS
let plus = document.createElement('div')
plus.setAttribute('class', 'plus')
Maindiv.appendChild(plus)

let buttonPlus = document.createElement('button')
buttonPlus.textContent = '+'
plus.appendChild(buttonPlus)



//MINUS
let minus = document.createElement('div')
minus.setAttribute('class', 'minus')
Maindiv.appendChild(minus)

let buttonMinus = document.createElement('button')
buttonMinus.textContent = '-'
minus.appendChild(buttonMinus)



//MULTIPLY
let multiply = document.createElement('div')
multiply.setAttribute('class', 'multiply')
Maindiv.appendChild(multiply)

let buttonMultiply = document.createElement('button')
buttonMultiply.textContent = '*'
multiply.appendChild(buttonMultiply)



//DIVIDE
let divide = document.createElement('div')
divide.setAttribute('class', 'divide')
Maindiv.appendChild(divide)

let buttonDivide = document.createElement('button')
buttonDivide.textContent = '/'
divide.appendChild(buttonDivide)



//EQUALS
let equals = document.createElement('div')
equals.setAttribute('class', 'equals')

Maindiv.appendChild(equals)

let buttonEquals = document.createElement('button')
buttonEquals.textContent = '='
equals.appendChild(buttonEquals)






//DISPLAY NUMBERS
let allButtons = document.querySelectorAll("button")
for (const i of allButtons) {
    i.addEventListener("click", function (event) {

        if (event.target.innerText != '=') {
            result.value += event.target.innerText;
        }
      
        console.log(event.target.innerText)
    })
}

console.log(result.value)



equals.addEventListener("click", (e) => {

    function computeResult(str) {
        return Function('return ' + str)()
    }

    const a = result.value
    console.log(computeResult(a)) 
    result.value = computeResult(a)
})

