// handles focus on pageload
$( window ).on( "load", pageloadHandler );
   function pageloadHandler(evt){
      $('input#name').focus();
   }
// get the dropdown option value, and if its "Other" add an text field
$('select#title').change( function(evt) {
   evt.preventDefault();
   let option = $(evt.target).find(":selected").val().toLowerCase();
   (option === 'other') ? jobRole.addTextInputField(true): jobRole.addTextInputField(false);
});
// add color selector, get the design option, populate colors options in dropdown
$('select#design').change( function(evt) {
   evt.preventDefault();
   let option = $(evt.target).find(":selected").val().toLowerCase();
   var newstr = option.replace(/js/i, '').trim();

   shirtInfo.showColorsDropdown();
   shirtInfo.getColorOptions(newstr);
});

// event handlers
   // $('select#title').change( function(evt) {
   //    evt.preventDefault();
   //    jobRole.getGreeting();
   // });

   // shirtInfo.getGreeting();
   // activities.getGreeting();
   // paymetInfo.getGreeting();
