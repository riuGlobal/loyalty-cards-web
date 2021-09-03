import { IonCard, IonIcon, IonItem } from "@ionic/react";
import { checkboxOutline } from 'ionicons/icons'
import React from "react";
import './PunchBox.css'

// interface PunchedPunchBoxProps {
// }

const PunchedPunchBox: React.FC = () => {
  return (
    <IonCard>
      <IonItem>
        <IonIcon className='punch-box-icon' size='large' icon={checkboxOutline}/>
      </IonItem>
    </IonCard>
  );
}

export default PunchedPunchBox;