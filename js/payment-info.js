let paymentInfo = (function() {

  let showHidePaymentOptions = (elm) => {
    let option = elm.find(":selected").val().split(' ').join('').toLowerCase();
     let $slectedDiv = elm.closest('fieldset').find('.' + option);
     // show that class
     $slectedDiv.show();
  }

  let validatePaymentInfo = () => {
     console.log('payment info validated');
  };

  return {
    getPaymentOptions: showHidePaymentOptions,
    validate: validatePaymentInfo
  }

})();
