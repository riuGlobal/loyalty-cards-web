import type { CardPunch } from "./CardPunch.interface";
import type { Reward } from "./Reward.interface";

export interface AssignedCard {
  id: number;
  userId: string;
  title: string;
  numberOfPunchBoxes: number;
  rewards: Reward[];
  punches: CardPunch[];
  redeemedMarks: RedeemedMark[];
}

interface RedeemedMark {
  id: number;
  assignedCardId: number;
  note: string

}