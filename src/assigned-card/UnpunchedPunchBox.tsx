import { IonCard, IonIcon, IonItem } from "@ionic/react";
import React from "react";
import { squareOutline } from 'ionicons/icons'
import './PunchBox.css'

interface UnpunchedPunchBoxProps {
}

const UnpunchedPunchBox: React.FC<UnpunchedPunchBoxProps> = () => {
  return (
    <IonCard className='punch-box'>
      <IonItem>
        <IonIcon className='punch-box-icon' size='large' icon={squareOutline}/>
      </IonItem>
    </IonCard>
  );
}

export default UnpunchedPunchBox;