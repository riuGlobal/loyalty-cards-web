import type { Reducer } from "react";
import type { AnyAction } from "redux";

import type { AssignedCard } from "../assigned-card/AssignedCard.interface";

import { SetAssignedCardsAction } from "./LandingAssignedCardsActions";
import type { LandingAssignedCardsAction } from "./LandingAssignedCardsActions";

interface landingAssignedCardsState {
  assignedCards: AssignedCard[] | null
}

const initialState:landingAssignedCardsState = {
  assignedCards: null
} 


const landingAssignedCards: 
  Reducer<landingAssignedCardsState,LandingAssignedCardsAction> 
  = (state = initialState, action: LandingAssignedCardsAction ) => {
  switch (action.type) {
    case 'SET_ASSIGNED_CARDS':
      return {
        ...state,
        assignedCards: action.cards
      }
    default:
      return state;
  }
}

export default landingAssignedCards;