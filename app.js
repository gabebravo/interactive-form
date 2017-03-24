// handles focus on pageload
$( window ).on( "load", pageloadHandler );
   function pageloadHandler(evt){
      $('input#name').focus();
   }

// JOB ROLE : get the dropdown option value, and if its "Other" add an text field
$('select#title').change( function(evt) {
   evt.preventDefault();
   let option = $(evt.target).find(":selected").val().toLowerCase();
   (option === 'other') ? jobRole.addTextInputField(true): jobRole.addTextInputField(false);
});

// SHIRT INFO : add color selector, get the design option, populate colors options in dropdown
$('select#design').change( function(evt) {
   evt.preventDefault();
   let option = $(evt.target).find(":selected").val().toLowerCase();
   var design = option.replace(/js/i, '').trim();

   shirtInfo.showColorsDropdown();
   shirtInfo.getColorOptions(design);
});

// REGISTER FOR ACTIVITIES : do not allow multiple selection at same time slot, and calculate total
$('.activities input').on("click", function () {
// grab matching elements by class
    let $elm = $(this);
    let elmClass = '.' + $elm.attr('class');
    let elmArr = $elm.closest('fieldset').find(elmClass);

// check to see if the selection is currently checked, and either disable or reset the events
   (!$elm.is(":checked")) ? registration.resetEvents(elmArr) : registration.disableEvents(elmArr);

   let activityText = $elm.closest('label').text();
   let indexOf$ = activityText.indexOf('$') + 1;
   let cost = Number(activityText.split('').splice(indexOf$, 3).join(''));
// check to see if the selection is currently checked, and either add or subtract the total
   (!$elm.is(":checked")) ? registration.showSubtractedTotal(cost) : registration.showAddedTotal(cost);

});

// PAYMENT INFO : hide everything, get payment option, show/hide the respective divs accordingly
$('select#payment').change( function(evt) {
   evt.preventDefault();
   $('.payment-option').hide();
   // pass the selected element to a function to hanlde hide/show
   let $elem = $(evt.target);
     paymentInfo.getPaymentOptions($elem);
});

let validateForm = () => {
   return new Promise( function(resolve,reject){
      { resolve(jobRole.validate()) };
   } );
}

let handleErrors = () => {
   console.log('errors');
}

$('button').on('click', function(evt) {
   evt.preventDefault();
   $('label').removeClass('validation-error');

   validateForm()
      .then( function validateShirtInfo(){
   		return shirtInfo.validate();
   	} )
      .then( function validateRegistration(){
   		return registration.validate();
   	} )
      .then( function validatePaymetInfo(){
   		return paymentInfo.validate();
   	} )
   	.catch( handleErrors );
});
