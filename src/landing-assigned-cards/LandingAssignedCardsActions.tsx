import type { Dispatch } from "react";
import type { AnyAction } from "redux";

import { findAll } from "../api/loyalty-cards/assigned-cards/AssignedCards";
import type { FindQueryParams } from "../api/loyalty-cards/assigned-cards/AssignedCards";
import type { AssignedCard } from "../assigned-card/AssignedCard.interface";

export interface SetAssignedCardsAction extends AnyAction {
  type: 'SET_ASSIGNED_CARDS'
  cards: AssignedCard[]
}

export type LandingAssignedCardsAction =  SetAssignedCardsAction;

export const setAssignedCards 
  = (params?: FindQueryParams ) => async (dispatch:Dispatch<SetAssignedCardsAction>)
  : Promise<void> => {
  const cards = (await findAll(params)).data;
  dispatch(setAssignedCardsActionCreator(cards))
}

const setAssignedCardsActionCreator = (cards: AssignedCard[]):SetAssignedCardsAction => ({
  type: 'SET_ASSIGNED_CARDS',
  cards
} as SetAssignedCardsAction)
