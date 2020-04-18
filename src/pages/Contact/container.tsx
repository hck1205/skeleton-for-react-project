import React, { useEffect } from 'react';
import { getEmployeeList } from 'API/RESTful';
import { useLaunchListQuery } from 'API/GraphQL';

import Presenter from './presenter';

function Container() {
  const { data, error, loading } = useLaunchListQuery();

  useEffect(() => {
    getEmployeeList().then((response) => {
      console.log('response:', response);
    });

    console.log('data', data);
  }, [loading]);

  return <Presenter />;
}

export default Container;
