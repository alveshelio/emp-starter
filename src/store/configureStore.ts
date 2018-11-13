import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

import rootReducer from "../reducers"
import { StoreStateInterface } from "./storeStateInterface"

export default (initialState: StoreStateInterface) => {
  const middleware = []

  if (process.env.NODE_ENV !== "production") {
    middleware.push(logger, thunk)
  } else {
    middleware.push(thunk)
  }

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducers", () => {
      const nextRootReducer = require("../reducers").default
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
