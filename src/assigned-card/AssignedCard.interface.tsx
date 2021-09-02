import { CardBluePrint } from "./CardBluePrint.interface";
import { CardPunch } from "./CardPunch.interface";

export interface AssignedCard {
  id: string;
  userId: string;
  dateAssigned?: Date;
  cardBluePrint: CardBluePrint;
  punches: CardPunch[];
  redeemed: boolean;
}