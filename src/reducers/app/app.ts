import appInitialState from "./appInitialState"
import { AppState } from "./appStateInterface"
import { AppAllowedActions } from "../../types/app/appTypes"
import { AppTypes } from "../../actiontypes/appTypes"

export default (state: AppState = appInitialState, action: AppAllowedActions) => {
  switch (action.type) {
    case AppTypes.CHANGE_FIRST_NAME:
      return { ...state, firstName: action.firstName }
    default:
      return state
  }
}
