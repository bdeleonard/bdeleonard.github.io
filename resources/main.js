function headerFollow(){
    const header = document.getElementsByTagName('header')[0];
    const main = document.getElementsByTagName('main')[0];
    let y = window.scrollY;
    let width = window.innerWidth;
    if(y > 1 && y > 43 && width >= 340) {
        header.style.backdropFilter = 'blur(8px)';
        header.style.backgroundColor = 'rgba(0,0,0,0.7)';
        header.style.position = 'fixed';
        header.style.width = '100%';
        header.style.borderBottom = '2px solid rgba(255,255,255,0.1)';
        main.style.marginTop = '83px';
    } else if (y > 1 && width >= 340){
        header.style.position = 'fixed';
        header.style.width = '100%';
        main.style.marginTop = '83px';
    } else {
        header.style.position = '';
        main.style.marginTop = '';
        header.style.backdropFilter = '';
        header.style.backgroundColor = '';
    }
}

window.addEventListener('scroll', headerFollow);

import {MarkdownBlock, MarkdownSpan, MarkdownElement} from "./md-block.js";