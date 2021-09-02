import { IonCard, IonIcon, IonItem } from "@ionic/react";
import React from "react";
import { checkboxOutline } from 'ionicons/icons'
import './PunchBox.css'

interface PunchedPunchBoxProps {
}

const PunchedPunchBox: React.FC<PunchedPunchBoxProps> = () => {
  return (
    <IonCard>
      <IonItem>
        <IonIcon className='punch-box-icon' size='large' icon={checkboxOutline}/>
      </IonItem>
    </IonCard>
  );
}

export default PunchedPunchBox;