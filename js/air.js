window.addEventListener("DOMContentLoaded", () => {
  hero_img.onclick = function() {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      hero_img.style.right = timePassed / 5 + 'px';

      if (timePassed > 6700) clearInterval(timer);

    }, 20);
  }

    
  });