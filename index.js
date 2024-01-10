const DAYS_OF_WEEK = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"]
const dateTime = new Date();

let currentDay = DAYS_OF_WEEK[dateTime.getDay()];
const dayOfWeek = document.getElementById("dayOfWeek");
dayOfWeek.innerHTML = currentDay;

let currentMonth = MONTHS[dateTime.getMonth()];
const currentDate = document.getElementById("currentDate");
currentDate.innerHTML = `${currentMonth} ${dateTime.getDate()}, ${dateTime.getFullYear()}`;

let button = document.getElementsByTagName('button')[0];
let inputElement = document.getElementsByClassName('search-input')[0];
let listWrapper = document.getElementsByClassName('listWrapper')[0];

// show array from local storage at the page 
const getTodoList = () => {
    return JSON.parse(localStorage.getItem('todoList'));
}
const toDoListData = getTodoList();
if (toDoListData?.length > 0) {
    for (let item of toDoListData) {
        generateListItem(item);
    };
};

// add tasks
button.onclick = function() {
    let arr = getTodoList();
    const newItem = {value: inputElement.value, id: new Date().getTime(),checked:false};

    generateListItem(newItem);
    if (arr?.length) {
        arr.push(newItem);
        localStorage.setItem('todoList', JSON.stringify(arr));
    } else {
        localStorage.setItem('todoList', JSON.stringify([newItem]))
    };
    inputElement.value = "";
    
};

// function for adding tasks and deleting
function generateListItem(item) {
    const listItem = document.createElement("div");
    const listItemValue = document.createElement('div');
    const listItemButton = document.createElement('button');
    listItemValue.innerHTML = item.value;
    listItemButton.innerHTML = "Delete";
    listItem.classList.add('listItem');
    listItemValue.classList.add('listItemValue');
    listItemButton.classList.add('listItemButton');

    listWrapper.append(listItem);
    listItem.append(listItemValue);
    listItem.append(listItemButton);

    listItemButton.onclick = function () {
        const todoList = getTodoList();
        const filteredArray = todoList.filter(elem => elem.id !== item.id)
        localStorage.setItem('todoList',JSON.stringify(filteredArray))
        listWrapper.removeChild(listItem);
    };
}; 



























// const toDoListData = JSON.parse(localStorage.getItem('todoList'));





























// if (toDoListData?.length > 0) {
//     for (let item of toDoListData) {
//         generateListItem(item);
//     }
// }

// button.onclick = function() {
//     const localStorageData = localStorage.getItem("todoList"); // GET STRINGIFIED ARRAY "["000", "123"]""
//     let arr = JSON.parse(localStorageData); // ['000','123]
//     generateListItem(inputElement.value);
//     if (arr?.length) {
//         arr.push(inputElement.value)
//         const stringifiedValue = JSON.stringify(arr);
//         localStorage.setItem('todoList', stringifiedValue);
//     } else {
//         localStorage.setItem('todoList',JSON.stringify([inputElement.value]))
//     };
// };







// else 
    // if (arr?.length) {
    //     arr.push(inputElement.value);
    //     localStorage.setItem("todoList",JSON.stringify(arr));
    // } else {
    //     localStorage.setItem("todoList",JSON.stringify([inputElement.value]));
    // }    console.log(arr);

