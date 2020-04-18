import React, { useEffect } from 'react';
import { getEmployeeList } from 'API/RESTful';
import Presenter from './presenter';

function Container() {
  useEffect(() => {
    getEmployeeList().then((response) => {
      console.log('response:', response);
    });
  }, []);

  return <Presenter />;
}

export default Container;
