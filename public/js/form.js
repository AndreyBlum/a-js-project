let list = [];


const add = () => {
const name = document.querySelector('#nameInput').value;
const age = document.querySelector('#ageInput').value
const email = document.querySelector('#emailInput').value;
const date = document.querySelector('#dateInput').value
const person  = {
        name: name,
        age: age,
        email: email,
        date: date
    }
    list.push(person);
    listData();
    cleanData();
}

const listData = () => {
    document.querySelector('#list').innerHTML = '';
    list.forEach(person => {
        document.querySelector('#list').innerHTML +=
        '<tr>' +
        '<td>' + person.name + '</td>' +
        '<td>' + person.age + '</td>' +
        '<td>' + person.email + '</td>' +
        '<td>' + person.date + '</td>' 
    })
}

const cleanList = () => {
    list = ''
    listData();
}

const cleanData = () => {
    list = []
    const name = document.querySelector('#nameInput').value = ''
    const age = document.querySelector('#ageInput').value = ''
    const email = document.querySelector('#emailInput').value = ''
    const date = document.querySelector('#dateInput').value = ''
}