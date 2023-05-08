
window.onload = function() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Thank you for the feedback!");
      return false;
   };
};