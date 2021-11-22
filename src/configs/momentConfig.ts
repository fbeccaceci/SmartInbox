import moment from 'moment'

moment.updateLocale('en', {
  relativeTime : {
      future: "in %s",
      past: "%s ago",
      s  : 'a moment',
      ss : '%d seconds',
      m:  "a minute",
      mm: "%d minutes",
      h:  "an hour",
      hh: "%d hours",
      d:  "a day",
      dd: "%d days",
      w:  "a week",
      ww: "%d weeks",
      M:  "a month",
      MM: "%d months",
      y:  "a year",
      yy: "%d years"
  }
});