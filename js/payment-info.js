let paymetInfo = (function() {

  let str = 'bar';
  let printMess = () => {
    console.log(str);
  }

  return {
    getGreeting: printMess
  }

})();
