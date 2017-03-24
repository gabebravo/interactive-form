let registration = (function() {

// some member-wide private variables
  let totalAmt = 0, numArr = [];

// disables checkboxes if they are in the same timeslot
  let disableCheckboxes = (arr) => {
    arr.map(function(index) {
        if(!$(arr[index]).is(":checked")) {
           $(arr[index]).attr("disabled", true);
           $(arr[index]).closest('label').addClass('disabledCheckbox');
        }
    });
  }

// re-enables checkboxes if a checbox previously checked is unchecked
  let enableCheckboxes = (arr) => {
    arr.map(function(index) {
        $(arr[index]).removeAttr("disabled");
        $(arr[index]).closest('label').removeClass('disabledCheckbox');
    });
  }

// these two functions calculate the registration total
  let addAndDisplayTotal = (amt) => {
    numArr.push(amt);
    totalAmt += amt;

    let $totalElm = $('.totalCost');
    $totalElm.text('Total: $' + totalAmt);
  }

  let subtractAndDisplayTotal = (amt) => {
    numArr.pop(amt);
    totalAmt -= amt;

  let $totalElm = $('.totalCost');
    $totalElm.text('Total: $' + totalAmt);
  }

// validates that at least one checkbox is clicked
  let validateRegistrationInfo = function() {
    // reset validation error message
    $('fieldset.activities legend').css('margin-bottom', '1.125em')
    $('p.validation-error').remove();
    let checkboxIsChecked = $('input[type="checkbox"]').is(":checked");
    // display validation error message
      if(!checkboxIsChecked){
        $('fieldset.activities legend').css('margin-bottom', '0')
        let $firstLabel =  $('fieldset.activities label:nth-of-type(1)');
        $( '<p class="validation-error">Please select an activity</p>' ).insertBefore( $firstLabel );
      }
  };

  return {
    disableEvents: disableCheckboxes,
    resetEvents: enableCheckboxes,
    showAddedTotal: addAndDisplayTotal,
    showSubtractedTotal: subtractAndDisplayTotal,
    validate: validateRegistrationInfo
  }

})();
