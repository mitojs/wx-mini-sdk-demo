import './app.css';
import React from 'react'
import { init } from '@mitojs/wx-mini'
import { MitoProvider } from '@mitojs/react'

const MitoInstance = init({
  dsn: '/upload',
  maxBreadcrumbs: 100,
})

const App = props =><MitoProvider MitoInstance={MitoInstance}>{props.children}</MitoProvider> ;

export default App;
