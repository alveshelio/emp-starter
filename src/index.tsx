import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"

import { initialStoreState } from "./store/initialStoreState"
import configureStore from "./store/configureStore"
import AppContainer from "./components/app/AppContainer"

const store = configureStore(initialStoreState)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("app")
)
