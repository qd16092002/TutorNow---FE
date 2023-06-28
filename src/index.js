import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import store from './redux/store'
import GlobalStyles from './components/GlobalStyles/GlobalStyles'

/*eslint no-undef: "off"*/
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </Provider>
  // </React.StrictMode>
)
