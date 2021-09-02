import { Reducer } from "react";
import { AnyAction } from "redux";

const landing: Reducer<any,any> = (state = {}, action: AnyAction ) => {
  switch (action.type) {
    case 'SET_ASSIGNED_CARDS':
      return {
        ...state,
        assignedCards: action.assignedCards
      }
    default:
      return state;
  }
}

export default landing;