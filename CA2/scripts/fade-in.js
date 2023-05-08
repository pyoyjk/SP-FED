
// --------------------------Up--------------------------

// Create the observer
var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the CSS class that has the animation
            entry.target.classList.add('fade-in-up');
            return;
            }

    })
});

// Observe the element
var element = document.getElementsByClassName('fade-up');

for(var i = 0; i < element.length; i++){
    observer.observe(element[i]);
  }

// --------------------------Down--------------------------

// Create the observer
var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the CSS class that has the animation
            entry.target.classList.add('fade-in-down');
            return;
        }

    })
});

// Observe the element
var element = document.getElementsByClassName('fade-down');
for(var i = 0; i < element.length; i++){
observer.observe(element[i]);
}

// --------------------------Left--------------------------

// Create the observer
var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the CSS class that has the animation
            entry.target.classList.add('fade-in-left');
            return;
            }

    })
});

// Observe the element
var element = document.getElementsByClassName('fade-left');
for(var i = 0; i < element.length; i++){
  observer.observe(element[i]);
}

// --------------------------Right--------------------------

// Create the observer
var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the CSS class that has the animation
            entry.target.classList.add('fade-in-right');
            return;
        }

    })
});

// Observe the element
var element = document.getElementsByClassName('fade-right');

for(var i = 0; i < element.length; i++){
observer.observe(element[i]);
}


// --------------------------Appear--------------------------

// Create the observer
var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the CSS class that has the animation
            entry.target.classList.add('fade-in-appear');
            return;
        }

    })
});

// Observe the element
var element = document.getElementsByClassName('fade-appear');

for(var i = 0; i < element.length; i++){
    observer.observe(element[i]);
}