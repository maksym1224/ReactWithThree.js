let Moment = require('moment')

let TimeServices = {
  convertFromMinutesAfterMidnight: function(offsetInMinutes) {
    let hour = Math.floor(offsetInMinutes / 60)
    let minute = offsetInMinutes % 60

    return {
      hour: hour,
      minute: minute
    }
  },

  convertFromDaysAfterNewYear: function(offsetInDays) {
    let newYear = Moment(new Date('January 1, 2016')) // move to higher scope for caching?
    let newDate = newYear.add(offsetInDays, 'days')
    let date = {
      year: newDate.year(),
      month: newDate.month(),
      date: newDate.date()
    }
    return date
  },

  formattedTime: function(time) {
    let timeString = '',
        ampm = 'am',
        hour = time.hour,
        minute = time.minute

    if ( hour >= 12 ) ampm = 'pm'
    if ( hour > 12 ) hour = hour - 12
    if ( hour === 0 ) {
      hour = 12
      ampm = 'am'
    }

    hour = hour.toString()
    minute = minute.toString()

    if ( minute < 10) minute = '0' + minute

    timeString += hour + ':' + minute + ' ' + ampm

    return timeString
  },

  formattedDate: function(date) {
    // what can be precalculated here?
    let dateString = ''
    let months = Moment.months()
    dateString += months[date.month] + ' ' + (date.date + 1) + ', ' + date.year

    return dateString
  }

}

export default TimeServices