import { AppTypes } from "../../actiontypes/appTypes"

export interface ChangeFirstName {
  type: AppTypes.CHANGE_FIRST_NAME
  firstName: string
}

export type AppAllowedActions = ChangeFirstName
