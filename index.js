// Your code here
// dataEmployees = [
//     ["Thor", "Odinsson", "Electrical Engineer", 45],
//     ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
//     ["Natalia", "Romanov", "CEO", 150],
//     ["Darcey", "Lewis", "Intern", 15],
//     ["Jarvis", "Stark", "CIO", 125],
//     ["Anthony", "Stark", "Angel Investor", 300],
//     ["Byron", "Poodle", "Mascot", 3],
//     ["Julius", "Caesar", "General", 27],
//     ["Rafiki", "", "Aide", 10],
//     ["Simba", "", "King", 100]
//   ]


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

// createEmployeeRecords(dataEmployees)