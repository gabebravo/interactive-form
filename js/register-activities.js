let activities = (function() {

  let str = 'foo';
  let printMess = () => {
    console.log(str);
  }

  return {
    getGreeting: printMess
  }

})();
