(()=>{"use strict";const e=document.getElementsByClassName("button")[0],t=new class{constructor(){this.element=void 0,this.header=void 0,this.body=void 0}init(){this.element=document.createElement("div"),this.element.classList.add("popover"),this.element.classList.add("hide"),this.element.innerHTML='\n            <div class="arrow"></div>\n            <h3 class="popover-header">Popover title</h3> \n            <div class="popover-body">And here\'s some amazing content. It\'s very engaging. Right?</div>',this.header=this.element.getElementsByClassName("popover-header")[0],this.body=this.element.getElementsByClassName("popover-body")[0]}showPop(e){this.element.classList.contains("hide")&&this.element.classList.remove("hide"),e.append(this.element),this.element.style.top=`calc(${-this.element.offsetHeight}px + (0.5rem + 1px) * -1)`}hidePop(){this.element.classList.contains("hide")||this.element.classList.add("hide"),this.element.remove()}editTextHeader(e){this.header.innerHTML=e}editTextBody(e){this.body.innerHTML=e}};t.init(),t.editTextHeader("Важное предупреждение"),t.editTextBody("Тут очень много текста"),e.addEventListener("click",(()=>t.showPop(e)))})();