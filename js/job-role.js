
let jobRole = (function() {

  let html = '<input type="text" id="other-title" placeholder="Your Job Role">';
  // if other is selected, add the text field input, else remove it
  let addTextInput = (otherIsSelected) => {
    (otherIsSelected) ? $('select#title').after(html):
      $('input#other-title').remove();
  }

  return {
    addTextInputField: addTextInput
  }

})();
