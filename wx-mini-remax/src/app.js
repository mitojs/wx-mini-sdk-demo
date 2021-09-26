import './app.css';
import React from 'react';
import { init } from '@mitojs/wx-mini';
import { MitoProvider } from '@mitojs/react';
import { useAppEvent } from 'remax/macro';

const MitoInstance = init({
  dsn: 'http://localhost:5000',
  maxBreadcrumbs: 100,
  debug: true,
  configReportWxRequest(event) {
    console.log('configReportWxRequest', event);
    return {
      header: {
        'Content-Type': 'text/plain; charset=UTF-8',
      },
      dataType: 'text',
    };
  },
});

const App = (props) => {
  useAppEvent('onUnhandledRejection', (options) => {
    // 不会触发  remax对原生微信小程序做了封装 导致 onUnhandledRejection不会被触发
    console.log('onUnhandledRejection', options);
  });
  useAppEvent('onLaunch', (options) => {
    console.log('app onLaunch');
  });
  return (
    <MitoProvider MitoInstance={MitoInstance}>{props.children}</MitoProvider>
  );
};

export default App;
