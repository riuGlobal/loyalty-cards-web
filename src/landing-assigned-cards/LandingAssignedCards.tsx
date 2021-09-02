import { IonContent, IonPage } from "@ionic/react";
import { connect } from "react-redux";

import AssignedCard from "../assigned-card/AssignedCard";
import type { AssignedCard as AssignedCardType } from "../assigned-card/AssignedCard.interface";

interface LandingAssignedCardsProps {
  cards: AssignedCardType[];
}

export const LandingAssignedCards: React.FC<LandingAssignedCardsProps> = ({
  cards,
}) => (
  <IonPage>
    <IonContent fullscreen>
      {cards.map((card) => (
        <AssignedCard assignedCard={card}></AssignedCard>
      ))}
    </IonContent>
  </IonPage>
);

const mapStateToProps = (state: any) => ({
  // cards: state.landing.assignedCards
  cards: [
    {
      id: "2",
      userId: "1",
      cardBluePrint: {
        title: "Loyalty card",

        maxPunches: 7,
        reward: {
          title: "product-a",
          url: "http://192.168.0.33:3000/category-a/product-a",
        },
      },
      punches: [{ id: 1, date: new Date("16/05/1993") }],
      redeemedMarks: [
        {
          id: 1,
          date: Date.now(),
          assignedCardId: 1,
        },
      ],
    },
  ],
});

export default connect<any, any, any>(
  mapStateToProps,
  {}
)(LandingAssignedCards);
