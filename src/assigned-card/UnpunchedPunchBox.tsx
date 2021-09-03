import { IonCard, IonIcon, IonItem } from "@ionic/react";
import { squareOutline } from 'ionicons/icons'
import React from "react";
import './PunchBox.css'

// interface UnpunchedPunchBoxProps {
// }

const UnpunchedPunchBox: React.FC<unknown> = () => {
  return (
    <IonCard className='punch-box'>
      <IonItem>
        <IonIcon className='punch-box-icon' size='large' icon={squareOutline}/>
      </IonItem>
    </IonCard>
  );
}

export default UnpunchedPunchBox;