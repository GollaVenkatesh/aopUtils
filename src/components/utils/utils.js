globalUtils.service("AoUtils", AoUtils);

/* @ngInject */
function AoUtils() {
  var service = this;

  // UTILITY METHODS
  service.stripNonNumeric = stripNonNumeric;
  service.formatTime = formatTime;
  service.formatDateToMoment = formatDateToMoment;
  service.formatDateTimeToMoment = formatDateTimeToMoment;
  service.isDateInFuture = isDateInFuture;
  service.isDateToday = isDateToday;
  service.isTimeInFuture = isTimeInFuture;


  function stripNonNumeric(value) {
    if (value) {
      return value.replace(/\D/g, "");
    }
    return "";
  }

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

  function formatDateToMoment(date) {
    var dmom = moment(new Date(date));
    if ( dmom ) {
      var value = dmom.format("MM-DD-YYYY");
      return moment(value, "MM-DD-YYYY");
    }

    return undefined;
  }

  function formatDateTimeToMoment(date, time) {
    var dmom = moment(new Date(date));
    var tmom = moment(new Date(time));

    if ( date && time ) {
      var value = dmom.format("MM-DD-YYYY") + " " + tmom.format("HH:mm:ss");
      return moment(value, "MM-DD-YYYY HH:mm:ss");
    }

    return undefined;
  }

  function isDateInFuture(date) {
    var mom = formatDateToMoment(date);
    if ( mom ) {
      var days = mom.diff(moment(), 'days', true);
      if ( days > 0 ) {
        return true;
      }
    }
    return false;
  }

  function isDateToday(date) {
    var mom = formatDateToMoment(date);
    if ( mom ) {
      var edm = mom.format("DD");
      var tod = moment().format("DD");
      return edm == tod;
    }
    return false;
  }

  function isTimeInFuture(date, time, maxFutureMinutes) {
    var mom = formatDateTimeToMoment(date, time);
    if ( mom ) {
      var minutes = mom.diff(moment(), 'minutes', true);
      var max = 0;
      if ( maxFutureMinutes && maxFutureMinutes > 0 ) {
        max = maxFutureMinutes;
      }
      if ( minutes > max ) {
        return true;
      }
    }
    return false;
  }
}
