'use strict';

function lowerFooter() {
  const clientHeight = document.documentElement.clientHeight,
        footer = document.querySelector('footer'),
        wrapper = document.querySelector('body .wrapper');
        
  wrapper.style.minHeight = clientHeight - footer.offsetHeight + 'px';
}

lowerFooter();

//При изменении высоты окна прижимаем footer
window.addEventListener('resize', function(event) {
  lowerFooter();
});

