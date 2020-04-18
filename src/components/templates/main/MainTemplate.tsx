import React from 'react';

type Props = {
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

function MainTemplate({ header, children, footer }: Props) {
  return (
    <div>
      {header}
      <main>{children}</main>
      {footer}
    </div>
  );
}

export default MainTemplate;
