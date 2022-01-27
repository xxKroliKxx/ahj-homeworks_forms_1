import Popover from './popover'
const area = document.getElementsByClassName('area')[0];

const pop = new Popover()
pop.init()
pop.editTextHeader('Важное предупреждение')
pop.editTextBody('Тут очень много текста')

pop.showPop(area);
setTimeout(()=>pop.hidePop(), 2000)
setTimeout(()=>pop.showPop(area), 4000)


