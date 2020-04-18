import client from 'lib/client';

export const getEmployeeList = async () => {
  const employeesList = await client.get('/employees');

  return employeesList;
};

export const getEmployeeById = async (id: number) => {
  return await client.get(`/employees/${id}`);
};
