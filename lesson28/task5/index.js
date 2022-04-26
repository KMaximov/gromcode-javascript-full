const shmoment = date => {
    let fullDate = date.getTime();
    const calc = {
        add(typeOfDate, value) {
            if(typeOfDate == 'years') {
                let yearsDate = new Date(fullDate)
                yearsDate.setFullYear(yearsDate.getFullYear() + value)
                fullDate = yearsDate.getTime()
            }
            if(typeOfDate == 'months') {
                let monthsDate = new Date(fullDate)
                monthsDate.setMonth(monthsDate.getMonth() + value)
                fullDate = monthsDate.getTime()
            }
            if(typeOfDate == 'days') {
                fullDate += 86400000 * value;
            }
            if(typeOfDate == 'hours') {
                fullDate += 3600000 * value;
            }
            if(typeOfDate == 'minutes') {
                fullDate += 60000 * value;
            }
            if(typeOfDate == 'seconds') {
                fullDate += 1000 * value;
            }
            if(typeOfDate == 'milliseconds') {
                fullDate += value;
            }
            return this;
        },
        subtract(typeOfDate, value) {
            if(typeOfDate == 'years') {
                let yearsDate = new Date(fullDate)
                yearsDate.setFullYear(yearsDate.getFullYear() - value)
                fullDate = yearsDate.getTime()
            }
            if(typeOfDate == 'months') {
                let monthsDate = new Date(fullDate)
                monthsDate.setMonth(monthsDate.getMonth() - value)
                fullDate = monthsDate.getTime()
            }
            if(typeOfDate == 'days') {
                fullDate -= 86400000 * value;
            }
            if(typeOfDate == 'hours') {
                fullDate -= 3600000 * value;
            }
            if(typeOfDate == 'minutes') {
                fullDate -= 60000 * value;
            }
            if(typeOfDate == 'seconds') {
                fullDate -= 1000 * value;
            }
            if(typeOfDate == 'milliseconds') {
                fullDate -= value;
            }
            return this;
        },
        result() {
            return new Date(fullDate)
        }
    }
    return calc
}

console.log(shmoment(new Date(2020, 0, 7, 17, 17, 17, 0)).add('months', 12).add('months', 5).result())