import { IonContent, IonPage } from "@ionic/react";
import _IsEqual from 'lodash/isEqual';
import queryString from 'query-string';
import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import type { RouteComponentProps } from "react-router";

import AssignedCard from "../assigned-card/AssignedCard";
import type { AssignedCard as AssignedCardType } from "../assigned-card/AssignedCard.interface";

import { setAssignedCards } from "./LandingAssignedCardsActions";

interface LandingAssignedCardsProps {
  cards: AssignedCardType[];
}

export const LandingAssignedCards: 
  React.FC<LandingAssignedCardsProps> = ({cards}) => {
  return (
  <IonPage>
    <IonContent fullscreen>
      {cards.map((card) => (
        <AssignedCard assignedCard={card}></AssignedCard>
      ))}

    </IonContent>
  </IonPage>
)};

const mapStateToProps = (state: any) => ({
  cards: state.landingAssignedCards.assignedCards || []
  // cards: [
  //   {
  //     id: "2",
  //     userId: "1",
  //     cardBluePrint: {
  //       title: "Loyalty card",

  //       maxPunches: 7,
  //       reward: {
  //         title: "product-a",
  //         url: "http://192.168.0.33:3000/category-a/product-a",
  //       },
  //     },
  //     punches: [{ id: 1, date: new Date("16/05/1993") }],
  //     redeemedMarks: [
  //       {
  //         id: 1,
  //         date: new Date("16/05/1993"),
  //         assignedCardId: 1,
  //       },
  //     ],
  //   },
  // ],
});

const LandingAssignedCardsContainer:React.FC<RouteComponentProps> = ({location}) => {
  const { userId } = queryString.parse(location.search) as {userId: string}

  const dispatch = useDispatch();
  useEffect( () => {
    dispatch(setAssignedCards({userId}))
  });
  const props = useSelector(mapStateToProps, _IsEqual);
  return <LandingAssignedCards {...props} />
}

export default LandingAssignedCardsContainer;

// export default connect<any, any, any>(
//   mapStateToProps,
//   {}
// )(LandingAssignedCards);
