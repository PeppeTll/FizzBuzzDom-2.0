let boxContainer = document.querySelector('ul')
for (let i = 1; i <= 100; i++) {
    let box = document.createElement('li')
    box.innerHTML = i
    box.classList.add('box')
    if (i % 15 === 0) {
        box.innerHTML = 'FizzBuzz'
        box.classList.add('fizzbuzz', 'fs-3');
    } else if (i % 3 === 0) {
        box.innerHTML = 'Fizz'
        box.classList.add('fizz');
    } else if (i % 5 === 0) {
        box.innerHTML = 'Buzz'
        box.classList.add('buzz');
    }
    boxContainer.appendChild(box)
}