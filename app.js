// function loadScripts(){
//    let directory = 'js/';
//    let extension = '.js';
//    let files = ['job-role', 'tshirt-info', 'register-activities', 'payment-info'];
//    for (let file of files){
//        let path = (`${directory}${file}${extension}`);
//        $('body').append(`<script type="text/javascript" src="${path}"></script>`);
//    }
// }
//loadScripts();

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


// event handlers
   // $('select#title').change( function(evt) {
   //    evt.preventDefault();
   //    jobRole.getGreeting();
   // });

   // shirtInfo.getGreeting();
   // activities.getGreeting();
   // paymetInfo.getGreeting();
