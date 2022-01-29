// Your code here
function createEmployeeRecord(arr) {
  const obj = {};
  obj["firstName"] = arr[0];
  obj["familyName"] = arr[1];
  obj["title"] = arr[2];
  obj["payPerHour"] = arr[3];
  obj["timeInEvents"] = [];
  obj["timeOutEvents"] = [];
  return obj;
}

function createEmployeeRecords(arr) {
  //   const employeeRecords = [];
  return arr.map((employee) => createEmployeeRecord(employee));
}

function createTimeInEvent(employeeRecord, date) {
  let bpRecord = createEmployeeRecord(employeeRecord);
  let updatedBpRecord = createTimeInEvent(date);
}
