import { IonContent, IonPage } from "@ionic/react"
import AssignedCard from "../assigned-card/AssignedCard"
import { AssignedCard as AssignedCardType  } from "../assigned-card/AssignedCard.interface"

interface LandingAssignedCardsProps {
 cards: AssignedCardType[]
}

export const LandingAssignedCards: React.FC<LandingAssignedCardsProps> = ({cards}) => (
  <IonPage>
    <IonContent fullscreen>
      {cards.map((card) => (
        <AssignedCard assignedCard={card}></AssignedCard>
      ))}
    </IonContent>
  </IonPage>
)
