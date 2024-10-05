export default function createEmployeesObject(departmentName, employees) {
  function getEmployees(employees) {
    const newEmployees = [];
    for (const employee of employees) {
      newEmployees.push(employee);
    }
    return newEmployees;
  }
  const obj = {
    [`${departmentName}`]: getEmployees(employees),
  };
  return obj;
}
