import '../scss/index.scss';
$(document).ready(function () {
    let heightElementClose

    function isOpen(element) {
        return element.classList.contains('open')
    }
    function getScrollHeight(element) {
        return element.scrollHeight
    }
    function getOffsetHeight(element) {
        return element.offsetHeight
    }


    let cardsPlace = document.querySelectorAll('.fond-dobra-cards')
    cardsPlace.forEach((cards) => {
        cards.addEventListener("click", (evt) => {

        if(evt.target.classList.contains('elements-item-show-more__button')){
            evt.preventDefault()
            const text = evt.target.parentElement.parentElement.querySelectorAll('.elements-item-desc')
            text.forEach((item)=>{
                if (!isOpen(item)) {
                    heightElementClose = getOffsetHeight(item)
                    item.style.cssText = `height:${heightElementClose + 'px'}; -webkit-line-clamp: 5;`
                    item.classList.add('open')
                    item.style.cssText = `height:${getScrollHeight(item) + 'px'};-webkit-line-clamp: none;`
                    evt.target.textContent ='Свернуть'
                } else {
                    item.classList.remove('open')
                    item.style.cssText = `height:${heightElementClose + 'px'};-webkit-line-clamp: 5`
                    evt.target.textContent ='Развернуть'
                }

        })
    }

    });

});
});