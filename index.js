const createEmployeeRecord = (employeeInfo) => {

    let employeeRecord = {
        'firstName': employeeInfo[0],
        'familyName': employeeInfo[1],
        'title': employeeInfo[2],
        'payPerHour': employeeInfo[3],
        'timeInEvents': [],
        'timeOutEvents': []

    }
    
    return employeeRecord;
}

const createEmployeeRecords = (employeeRecords) => {
    const arrayOfRecords = [];
    for (let employee of employeeRecords) {
        let individualRecord = createEmployeeRecord(employee)
        arrayOfRecords.push(individualRecord)
    }
    return arrayOfRecords
}

const createTimeInEvent = (employeeRecord, dateStamp) => {

    employeeRecord.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(dateStamp.slice(11,15), 10),
        date: dateStamp.slice(0,10)
    })
    
    return employeeRecord
}
const createTimeOutEvent = (employeeRecord, dateStamp) => {
    employeeRecord.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(dateStamp.slice(11,15), 10),
        date: dateStamp.slice(0,10)
    })
    
    return employeeRecord
}

const hoursWorkedOnDate = (employeeRecord, date) => {
    let timeIn = 0;
    let timeOut = 0;
    employeeRecord.timeInEvents.forEach(elem => {
        if (elem.date === date) {
            timeIn = elem.hour
        }

    })
    employeeRecord.timeOutEvents.forEach(elem => {
        if (elem.date === date) {
            timeOut = elem.hour
        }
    })
    return (timeOut - timeIn) / 100;
}

const wagesEarnedOnDate = (employeeRecord, date) => {
    return (hoursWorkedOnDate(employeeRecord, date) * employeeRecord.payPerHour)
}

const allWagesFor = (employeeRecord) => {
    let newArr = employeeRecord.timeInEvents.map(elem => elem.date)
    let arrayTotalPay = [];
    for (const i of newArr) {
        arrayTotalPay.push(wagesEarnedOnDate(employeeRecord, i))
    }
    let totalPay = arrayTotalPay.reduce(function(numb, total) {
        return numb + total}, 0)
    return totalPay;
}

const calculatePayroll = (empRecords) => {
    let arrayTotalPay = empRecords.map(elem => allWagesFor(elem));
    let totalPay = arrayTotalPay.reduce(((elem, total) => elem + total), 0)
    return totalPay
}
const findEmployeeByFirstName = (srcArray, firstName) => {
    let foundByName = srcArray.filter(elem => elem.firstName === firstName)
    return foundByName[0]
}
