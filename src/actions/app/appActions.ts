import { ChangeFirstName } from "../../types/app/appTypes"
import { AppTypes } from "../../actiontypes/appTypes"

const changeFirstName = (firstName: string): ChangeFirstName => ({
  type: AppTypes.CHANGE_FIRST_NAME,
  firstName,
})

export const AppActions = {
  changeFirstName,
}
