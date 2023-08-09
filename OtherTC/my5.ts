type Department = {
  name: string
}

type Employee = {
  name: string,
  age: number
}

class TeslaCompany {
  private static role = "Admin"
  private readonly credentials: string = ""
  private departments: (Department)[] = []
  private employees: (Employee)[] = []

  constructor(cred: string) {
    this.credentials = cred
  }

  addDepartment(value: Department) {
    this.departments = [...this.departments, value];
  }

  addEmployee(value: Employee) {
    this.employees = [...this.employees, value]
  }  

}

class TeslaEmployee extends TeslaCompany {
  private new_employee: Employee = { name: '', age: 0}

  public setName(name: Employee): void {
    this.new_employee = name

  }  
}

const newTeslaEmployee = new TeslaEmployee('123456')
newTeslaEmployee.setName({ name: 'Kevin Odongo', age: 36 })
newTeslaEmployee.addDepartment({ name: 'Finance' })
newTeslaEmployee.addEmployee({ name: 'Kevin Odongo', age: 36 })
console.log(newTeslaEmployee)


