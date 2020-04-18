import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Employee } from 'stores/EmployeeStore';

import './Contact.scss';

type Props = {
  employeeList: Employee[];
};

function Presenter({ employeeList }: Props) {
  useEffect(() => {
    console.log(employeeList);
  }, [employeeList]);

  return (
    <div className="page-wrapper">
      Contact Page
      <Link to={'/about'}>Go to About</Link>
    </div>
  );
}

export default Presenter;
