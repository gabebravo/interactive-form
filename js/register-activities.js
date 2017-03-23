let activities = (function() {

  let totalAmt = 0, numArr = [];

  let disableCheckboxes = (arr) => {
    arr.map(function(index) {
        if(!$(arr[index]).is(":checked")) {
           $(arr[index]).attr("disabled", true);
           $(arr[index]).closest('label').addClass('disabledCheckbox');
        }
    });
  }

  let enableCheckboxes = (arr) => {
    arr.map(function(index) {
        $(arr[index]).removeAttr("disabled");
        $(arr[index]).closest('label').removeClass('disabledCheckbox');
    });
  }

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

  return {
    disableEvents: disableCheckboxes,
    resetEvents: enableCheckboxes,
    showAddedTotal: addAndDisplayTotal,
    showSubtractedTotal: subtractAndDisplayTotal
  }

})();
