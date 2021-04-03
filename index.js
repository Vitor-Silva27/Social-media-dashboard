const switchButton = document.querySelector('[name=switch]');
const darkItems = document.querySelectorAll('.canBeDark');

function handleClick(){
    runFuncInArray(darkItems, toggleDarkMode);
}
 
const runFuncInArray = (list, func) => list.forEach(item => func(item));
const toggleDarkMode = item => item.classList.toggle('dark-mode');
