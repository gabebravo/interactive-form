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

$( window ).on( "load", pageloadHandler );

function pageloadHandler(evt){
   $('input#name').focus();
}

$(document).ready(function() {
   jobRole.getGreeting();
   shirtInfo.getGreeting();
   activities.getGreeting();
   paymetInfo.getGreeting();
});
