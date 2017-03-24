
let jobRole = (function() {

  let html = '<input type="text" id="other-title" placeholder="Your Job Role">';
  // if other is selected, add the text field input, else remove it
  let addTextInput = (otherIsSelected) => {
    (otherIsSelected) ? $('select#title').after(html):
      $('input#other-title').remove();
  }

  let validateEmail = (email) => {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

// get Basic Info input and label and do validation checks
  let validateBasicInfo = () => {

    let $inputNameElm = $('input#name');
    let basicInfoNameVal = $inputNameElm.val();
    let $inputNameLabel = $inputNameElm.prev();
    $inputNameLabel.text('Name:'); // reset label

    if(!basicInfoNameVal) {
      $inputNameLabel.text('Name: (please provide your name)');
      $inputNameLabel.addClass('validation-error');
    }

    let $inputEmailElm = $('input#mail');
    let basicInfoEmailVal = $inputEmailElm.val();
    let $inputEmailLabel = $inputEmailElm.prev();
    $inputEmailLabel.text('Email:');

    if (!basicInfoEmailVal) {
      $inputEmailLabel.text('Email: (please provide an email address)');
      $inputEmailLabel.addClass('validation-error');
    } else if (!validateEmail(basicInfoEmailVal)){
      $inputEmailLabel.text('Email: (please provide a correctly formatted email address)');
      $inputEmailLabel.addClass('validation-error');
    }

	};

  return {
    addTextInputField: addTextInput,
    validate: validateBasicInfo
  }

})();
