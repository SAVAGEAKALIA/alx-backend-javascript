/* eslint-disable */
export default function createReportObject(employeesList) {
  const obj = {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      let count = 0;
      for (const index in employeesList) {
        count += 1;
      }
      return count;
    },
  };
  return obj;
}
