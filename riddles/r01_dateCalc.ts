// 1) Explain what is the meaning of the number which this code prints in the end

const dateOne = new Date(); // <-- new Date() returns current date-time, i.e. now
var dateTwo = new Date(dateOne.getFullYear(), 11, 25);

if (dateOne.getMonth() == 11 && dateOne.getDate() > 25) {
  dateTwo.setFullYear(dateTwo.getFullYear() + 1);
}

var secondsInOneDay = 1000 * 60 * 60 * 24;
console.log(
  Math.ceil((dateTwo.getTime() - dateOne.getTime()) / secondsInOneDay)
);
