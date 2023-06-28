/* eslint-disable react-hooks/exhaustive-deps */
import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './redux/store'
import { WebRoutes } from './routes'
import { history } from './utils/history'
import { I18nextProvider } from 'react-i18next'
import i18n from './languages'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <ToastContainer />
      <I18nextProvider i18n={i18n}>
        <Suspense fallback={<div>Loading...</div>}>
          <BrowserRouter history={history}>
            <WebRoutes />
          </BrowserRouter>
        </Suspense>
      </I18nextProvider>
    </PersistGate>
  )
}

export default App
