window.addEventListener(
  "DOMContentLoaded",
  function (e) {
    var myForm = document.getElementById("example4");
    var checkForm = function (e) {
      if (!this.terms.checked) {
        alert("MMM... If you are a real Epicoders please accepts our terms!");
        this.terms.focus();
        e.preventDefault(); // equivalent to return false
        return;
      }
    };

    // attach the form submit handler
    myForm.addEventListener("submit", checkForm, false);

    var myCheckbox = document.getElementById("field_terms");
    var myCheckboxMsg = "MMM... If you are a real Epicoders please accepts our terms!";

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
