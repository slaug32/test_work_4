import { allActionsCreators } from "./../redux/reducers/action_creators";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActionsCreators, dispatch);
};
