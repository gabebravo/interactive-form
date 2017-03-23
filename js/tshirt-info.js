let shirtInfo = (function() {

  let str = 'world';
  let printMess = () => {
    console.log(str);
  }

  return {
    getGreeting: printMess
  }

})();
