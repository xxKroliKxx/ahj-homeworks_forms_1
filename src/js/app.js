import Popover from './popover'
const button = document.getElementsByClassName('button')[0];

const pop = new Popover()
pop.init()
pop.editTextHeader('Важное предупреждение')
pop.editTextBody('Тут очень много текста')

button.addEventListener( "click" , () => pop.showPop(button));



