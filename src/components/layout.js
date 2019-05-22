import React from 'react';

import { headerData } from './headerData';

import Header from './Header';

function Layout(props) {
  const { location, title, children } = props;

  return (
    <div>
      <Header menuItems={headerData.menuItems} />
      <main
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {children}
      </main>
    </div>
  );
}


export default Layout;
