let jobRole = (function() {

  let str = 'hello';
  let printMess = () => {
    console.log(str);
  }

  return {
    getGreeting: printMess
  }

})();
