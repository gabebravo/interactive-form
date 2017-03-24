let paymentInfo = (function() {

// shows or hides payment options as dropdown
  let showHidePaymentOptions = (elm) => {
    let option = elm.find(":selected").val().split(' ').join('').toLowerCase();
     let $slectedDiv = elm.closest('fieldset').find('.' + option);
     // show that class
     $slectedDiv.show();
  }

// performs regex and input length validation
  let regexCheck = (ccInfo) => {
    let ccRegex = /^\d+$/;
      switch(ccInfo.length) {
        case 3:
            return ccRegex.test(ccInfo);
            break;
        case 5:
            return ccRegex.test(ccInfo);
            break;
        case 13:
        case 14:
        case 15:
        case 16:
            return ccRegex.test(ccInfo);
            break;
        default:
            return false;
      }
  }

// get checkable user input, check each field to see if its valid, display errors
  let validatePaymentInfo = () => {

     let $cardNumberInput = $('input#cc-num');
     let $cardNumberLabel = $cardNumberInput.prev();
     let $cardNumberVal = $cardNumberInput.val().split(' ').join('').replace(/[^\w\s]/gi, '');

     let $zipCodeInput = $('input#zip');
     let $zipCodeLabel = $zipCodeInput.prev();
     let $zipCodeVal = $zipCodeInput.val().split(' ').join('').replace(/[^\w\s]/gi, '');

     let $cvvNumberInput = $('input#cvv');
     let $cvvNumberLabel = $cvvNumberInput.prev();
     let $cvvNumberVal = $cvvNumberInput.val().split(' ').join('').replace(/[^\w\s]/gi, '');

     if( !regexCheck($cardNumberVal) ) {
       $cardNumberLabel.addClass('validation-error');
     }
     if( !regexCheck($zipCodeVal) ) {
       $zipCodeLabel.addClass('validation-error');
     }
     if( !regexCheck($cvvNumberVal) ) {
       $cvvNumberLabel.addClass('validation-error');
     }

  };

  return {
    getPaymentOptions: showHidePaymentOptions,
    validate: validatePaymentInfo
  }

})();
