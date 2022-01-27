export default class popover {
    constructor() {
        this.element = undefined
        this.header = undefined
        this.body = undefined
    }

    init() {
        this.element = document.createElement('div');
        this.element.classList.add('popover');
        this.element.classList.add('hide');
        this.element.innerHTML = `
            <div class="arrow"></div>
            <h3 class="popover-header">Popover title</h3> 
            <div class="popover-body">And here's some amazing content. It's very engaging. Right?</div>`;
        this.header = this.element.getElementsByClassName('popover-header')[0]
        this.body = this.element.getElementsByClassName('popover-body')[0]
    }

    showPop(element) {
        if (this.element.classList.contains('hide')) {
            this.element.classList.remove('hide');
        }

        element.append(this.element)
        this.element.style.top = `calc(${-this.element.offsetHeight}px + (0.5rem + 1px) * -1)`
        this.element.style.left = `${element.offsetWidth / 2 - this.element.offsetWidth / 2}px`;
    }

    hidePop() {
        if (!this.element.classList.contains('hide')) {
            this.element.classList.add('hide');
        }
        this.element.remove()
    }

    editTextHeader(text) {
        this.header.innerHTML = text
    }

    editTextBody(text) {
        this.body.innerHTML = text
    }

}