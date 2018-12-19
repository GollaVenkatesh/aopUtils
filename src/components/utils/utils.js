globalUtils.service("AoUtils", AoUtils);

/* @ngInject */
function AoUtils($window, $document) {
  var service = this;

  // UTILITY METHODS
  service.stripNonNumeric = stripNonNumeric;
  service.formatTime = formatTime;

  function formatTime(value) {
    if (!value) {
      value = "";
    }
    value = value.replace(":", "");
    value = value.replace(/\D/g, "");
    if (value.length > 2) {
      value = value.substring(0, 4);
      value = value.substring(0, 2) + ":" + value.substring(2);
    }
    return value;
  }

  function stripNonNumeric(value) {
    if (value) {
      return value.replace(/\D/g, "");
    }
    return "";
  }

  function sum(a, b) {
    return a+b;
  }

}
