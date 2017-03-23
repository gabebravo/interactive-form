
let jobRole = (function() {

  let html = '<input type="text" id="other-title" placeholder="Your Job Role">';
  let addTextInput = (otherIsSelected) => {
    (otherIsSelected) ? $('select#title').after(html): $('input#other-title').remove();
  }

  return {
    addTextInputField: addTextInput
  }

})();
