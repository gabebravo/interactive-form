let shirtInfo = (function() {

// member-wide private arrays for the dropdown option values
  let punsColors = ["Cornflower Blue","Dark Slate Grey","Gold"];
  let heartColors = ["Tomato", "Steel Blue", "Dim Grey"];
  let $colorSelect = $('select#color');

// display hidden element
  let showColorOptions = () => {
    $('div#colors-js-puns').show();
  }

// empty the select, and based on the theme, print the correct options
  let populateOptionColors = (theme) => {
    $colorSelect.empty();
    if( theme === 'select theme') {
      printSelectColorMessage();
    } else {
      (theme === 'puns') ? printColorsToHTML(punsColors) : printColorsToHTML(heartColors);
    }
  }

// prints out the correct colors to the page
  let printColorsToHTML = (arr) => {
    for(let option of arr){
      let html = '<option value="'+ option.toLowerCase() + '">'+ option +'</option>';
      $colorSelect.append(html);
    }
  }
  
// print default message
  let printSelectColorMessage = () => {
    let html = '<option><-- Please select a T-shirt theme</option>';
      $colorSelect.append(html);
  }

  return {
    showColorsDropdown: showColorOptions,
    getColorOptions: populateOptionColors
  }

})();
