export default function createReportObject(employeesList) {
  const employeeData = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };

  return employeeData;
}
