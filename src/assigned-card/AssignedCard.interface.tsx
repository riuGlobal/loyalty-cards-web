import { CardBluePrint } from "./CardBluePrint.interface";
import { CardPunch } from "./CardPunch.interface";

export interface AssignedCard {
  id: string;
  userId: string;
  dateAssigned?: Date;
  cardBluePrint: CardBluePrint;
  punches: CardPunch[];
  redeemedMarks: RedeemedMark[],
}

interface RedeemedMark {
  id: number;
  date: Date;
  assignedCardId: number;
  note?: string;

}