import { Container } from 'unstated';

import { getEmployeeList } from 'API/RESTful';

export type Employee = {
  id: string;
  employee_age: string;
  employee_name: string;
  employee_salary: string;
  profile_image: string;
};

export type EmployeeListState = {
  employeeList: Employee[];
  loading: boolean;
  error: boolean;
};

class EmployeesStore extends Container<EmployeeListState> {
  state = {
    employeeList: [],
    loading: true,
    error: false,
  };

  fetchEmployeeList = () => {
    getEmployeeList()
      .then((response) => {
        this.setState({
          employeeList: response.data,
          loading: false,
          error: false,
        });
      })
      .catch((e) => {
        console.error((e as Error).message);
        this.setState({ error: true });
      });
  };
}

export default EmployeesStore;
