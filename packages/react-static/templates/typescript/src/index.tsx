import React from 'react'
import ReactDOM from 'react-dom'
import { setConfig } from 'react-hot-loader'

// Your top level component
import App from './App'

// Export your top level component as JSX (for static rendering)
export default App

// Render your app
if (typeof document !== 'undefined') {
  const renderMethod = module.hot
    ? ReactDOM.render
    : ReactDOM.hydrate || ReactDOM.render

  const render = (Comp: Function) => {
    renderMethod(<Comp />, document.getElementById('root'))
  }

  // Render!
  render(App)

  // Hot Module Replacement
  if (module.hot) {
    module.hot.accept('./App', () => render(require('./App').default))
  }

  setConfig({
    ignoreSFC: true, // RHL will be __completely__ disabled for SFC
    pureRender: true, // RHL will not change render method
  })
}
