const switchButton = document.querySelector('[name=switch]');
const darkItems = document.querySelectorAll('.canBeDark');

function handleClick(){
    const switchModeFunction = switchButton.checked? addDarkMode: removeDarkMode;
    runFuncInArray(darkItems, switchModeFunction)
}
 
const runFuncInArray = (list, func) => list.forEach(item => func(item));
const removeDarkMode = item => item.classList.remove('dark-mode');
const addDarkMode = item =>  item.classList.add('dark-mode');

