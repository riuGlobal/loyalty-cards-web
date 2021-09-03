import type { AxiosResponse } from 'axios';
import axios from 'axios'

import type { AssignedCard } from "../../../assigned-card/AssignedCard.interface";
import { HOST } from '../LoyaltyCardsApiConstants';

import assignedCardsMock from './AssignedCardsMock.json';

export interface FindQueryParams {
  userId?: string;
}

const ASSIGNED_CARDS_SLUG = '/assigned-cards'

export const findAll = async (params?: FindQueryParams): Promise<AxiosResponse<AssignedCard[]>> => {
  // return Promise.resolve({
  //   data: assignedCardsMock,
  //   status: 200,
  //   headers: null,
  //   config: {},
  //   statusText: 'OK'
  // })
  console.log('======', `${HOST}${ASSIGNED_CARDS_SLUG}`)
  return axios.get(`${HOST}${ASSIGNED_CARDS_SLUG}`, { params });
}
