// Create the observer
var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the CSS class that has the animation
            entry.target.classList.add('typewriter-animation');
            return;
        }
  
    })
  });
  
  // Observe the element
  var element = document.getElementsByClassName('typewriter');
  for(var i = 0; i < element.length; i++){
    observer.observe(element[i]);
  }