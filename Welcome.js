window.addEventListener(
  "DOMContentLoaded",
  function (e) {
    let myForm = document.getElementById("form");
    let checkForm = function (e) {
      if (!this.terms.checked) {
        alert("MMM... If you are a real Epicoders please accepts our terms!");
        this.terms.focus();
        e.preventDefault(); // equivalent to return false
        return;
      }
    };

    // attach the form submit handler
    myForm.addEventListener("submit", checkForm, false);

    let myCheckbox = document.getElementById("field_terms");
    let myCheckboxMsg = "MMM... If you are a real Epicoders please accepts our terms!";

    // set the starting error message
    myCheckbox.setCustomValidity(myCheckboxMsg);

    // attach checkbox handler to toggle error message
    myCheckbox.addEventListener(
      "change",
      function (e) {
        this.setCustomValidity(this.validity.valueMissing ? myCheckboxMsg : "");
      },
      false
    );
  },
  false
);
