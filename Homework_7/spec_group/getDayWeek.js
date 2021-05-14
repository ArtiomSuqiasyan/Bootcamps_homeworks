function getDayWeek(date) {
    const days = ['sn', 'mn', 'tw', 'wd', 'th', 'fr', 'st'];
  
    return days[date.getDay()];
  }
const myBirthDay = new Date(1997, 0, 14)
console.log(getDayWeek(myBirthDay))