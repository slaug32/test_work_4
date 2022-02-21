import { actions } from "./auth_reducer";
import { actionsEvent } from "./event_reducer";

export const allActionsCreators = {
  ...actions,
  ...actionsEvent,
};
