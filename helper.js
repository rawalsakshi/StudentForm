(function(APP) {

  APP.helper = new function() {


    this.validateEmail = function(email) {
      var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

      if (!filter.test(email)) {
        return false;
      } else {
        return true;
      }
    }

    this.runScript = function(e) {
      if (e.keyCode == 13) {
        APP.validate();
        return false;
      }
    }

    this.isNumber = function(e) {
      var iKeyCode = (e.which) ? e.which : e.keyCode
      if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57)) {
        alert("Enter Number Only");
        return false;
      }
      return true;
    }

    this.runScriptForNum = function(e) {
      if (APP.helper.isNumber(e)) {
        APP.helper.runScript(e);
        return true;
      } else {
        return false;
      }
    }
  }

})(window.APP = window.APP || {})