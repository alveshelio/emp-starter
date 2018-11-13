import { connect } from "react-redux"
import { Dispatch } from "redux"

import { AppActions } from "../../actions/app/appActions"
import AppDisplay from "./AppDisplay"
import { StoreStateInterface } from "../../store/storeStateInterface"

const mapStateToProps = (state: StoreStateInterface) => ({
  firstName: state.app.firstName,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeFirstName(firstName: string) {
    dispatch(AppActions.changeFirstName(firstName))
  },
})

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppDisplay)

export default AppContainer
