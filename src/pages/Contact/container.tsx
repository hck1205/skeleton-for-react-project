import React, { useEffect } from 'react';

import { Subscribe } from 'unstated';
import { EmployeeStore } from 'stores';

import Presenter from './presenter';

function Container() {
  useEffect(() => {}, []);

  return (
    <Subscribe to={[EmployeeStore]}>
      {({ state, fetchEmployeeList }: EmployeeStore) => {
        (state.loading || state.error) && fetchEmployeeList();
        return (
          <div>
            <Presenter employeeList={state.employeeList} />
          </div>
        );
      }}
    </Subscribe>
  );
}

export default Container;
