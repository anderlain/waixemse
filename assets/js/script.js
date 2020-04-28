document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          // lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {

  }
});

let add_buttons = document.getElementsByClassName('button-primary-outline'); 
let bl = add_buttons.length;
for (let i = 0; i < bl; i++) {
    add_buttons[i].addEventListener('click', function() { // 
        this.classList.toggle('added');
        if (this.classList.contains('added')) {
            this.textContent = "დამატებეულია";
        } else {
        	this.textContent = "დამატება";
        }
    });
}











