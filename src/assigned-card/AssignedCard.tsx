import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCol, IonGrid, IonIcon, IonRouterLink, IonRow, IonTitle } from "@ionic/react"
import { checkmark } from "ionicons/icons";
import React from "react";

import type { AssignedCard as AssignedCardType } from "./AssignedCard.interface";
import PunchedPunchBox from "./PunchedPunchBox";
import UnpunchedPunchBox from "./UnpunchedPunchBox";


interface AssignedCardProps {
  assignedCard: AssignedCardType
}



export const AssignedCard: React.FC<AssignedCardProps> = ({ assignedCard }) => {
  const {cardBluePrint, punches, redeemedMarks } = assignedCard;
  const { title, maxPunches, reward } = cardBluePrint;
  const unpunchedCards = maxPunches - punches.length;

  const redeemed = redeemedMarks.length > 0;
  return (
    <IonCard className={redeemed ? 'assigned-card-redeemed' : 'assigned-card-not-redeemed'}>
      <IonCardHeader>
      <IonTitle> {title} </IonTitle>
      {redeemed && (
       <>
        <IonCardSubtitle color='success'> {`Redeemed `} 
          <IonIcon icon={checkmark}/>
        </IonCardSubtitle>
        
        </>)
      }
      </IonCardHeader>
      <IonCardContent>
        <IonCard>
        <IonGrid className='punch-box-grid'>
          <IonRow>
            {
              punches.map(() => (
                <IonCol size='12' size-md='2'>
                  <PunchedPunchBox />
                </IonCol>
              ))}
            {[...Array(unpunchedCards)].map((element, index) => (
              <IonCol size='12' size-md='2' key={`punch-box-${index}`}>
                  <UnpunchedPunchBox />   
              </IonCol>
            ))}
            
          </IonRow>
        </IonGrid>
        </IonCard>
        <IonTitle>
          {`Get this prize when completing your card: `} 
            <IonRouterLink href ={reward.url}>
              {reward.title}
            </IonRouterLink>
        </IonTitle>
      </IonCardContent>
    </IonCard>
  );
}

export default AssignedCard;

// const AssignedCardContainer:React.FC = () => {
//   // const assignedCard:AssignedCardType = {
//   //   id: '1',
//   //   userId: '1',
//   //   cardBluePrint: {
//   //     title: 'Loyalty card',
//   //     maxPunches: 7,
//   //     reward: {
//   //       title: 'product-a',
//   //       url: 'http://192.168.0.33:3000/category-a/product-a'
//   //     }
//   //   },
//   //   punches: [ { id: 1, date: new Date('16/05/1993')}]
//   // }
//   return (
//     <AssignedCard assignedCard={assignedCard} />
//   );
// }

// export default AssignedCardContainer;