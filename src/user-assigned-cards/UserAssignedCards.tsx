import { IonContent, IonPage } from "@ionic/react";
import { RouteComponentProps } from "react-router";
import { AssignedCard } from "../assigned-card/AssignedCard";
import { AssignedCard as AssignedCardType} from "../assigned-card/AssignedCard.interface";



interface UserAssignedCardsProps {
  assignedCards: AssignedCardType[]
}

export const UserAssignedCards:React.FC<UserAssignedCardsProps> = ({assignedCards}) => (
  <IonPage>
    <IonContent fullscreen>
      {assignedCards.map((assignedCard) => (
        <AssignedCard assignedCard={assignedCard}/>
      ))}
    </IonContent>
  </IonPage>
);

interface UserAssignedCardsContainerProps extends RouteComponentProps<{
  userId: 'string'
}> {}

const UserAssignedCardsContainer: React.FC<UserAssignedCardsContainerProps> = ({match}) => {
  const userId = match.params.userId;
  console.log('---user id from page---', userId)
  const assignedCards: AssignedCardType[] = [
    {
      id: '1',
      userId: '1',
      cardBluePrint: {
        title: 'Loyalty card',
        maxPunches: 7,
        reward: {
          title: 'product-a',
          url: 'http://192.168.0.33:3000/category-a/product-a'
        }
      },
      punches: [ { id: 1, date: new Date('16/05/1993')}],
      redeemed: false
    },
    {
      id: '2',
      userId: '1',
      cardBluePrint: {
        title: 'Loyalty card',
        maxPunches: 7,
        reward: {
          title: 'product-a',
          url: 'http://192.168.0.33:3000/category-a/product-a'
        }
      },
      punches: [ { id: 1, date: new Date('16/05/1993')}],
      redeemed: true
    }
  ]

  return (
    <UserAssignedCards assignedCards={assignedCards}/>
  )
}
export default UserAssignedCardsContainer;