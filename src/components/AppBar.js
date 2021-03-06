import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon
} from '@ionic/react';
import { volumeHigh, volumeMute, arrowBackOutline } from 'ionicons/icons';
import { connect } from 'react-redux';
import { setMuteState } from '../actions';

const AppBar = ({ muted, setMuteState, showVolumeButton, showBackButton }) => {
  const history = useHistory();
  
  return (
    <IonToolbar>
      {showBackButton && <IonButtons slot="start">
        <IonButton onClick={() => history.goBack()}>
          <IonIcon slot="icon-only" icon={arrowBackOutline} />
        </IonButton>
      </IonButtons>}
      <IonTitle>Gramin Mitra</IonTitle>
      { showVolumeButton && <IonButtons slot="end">
        <IonButton
          onClick={() => {
            setMuteState(!muted);
          }}
        >
          <IonIcon slot="icon-only" icon={!muted ? volumeHigh : volumeMute} />
        </IonButton>
      </IonButtons> }
    </IonToolbar>
  );
};

const mapStateToProps = (state) => {
  const { muted } = state.audio;
  return {
    muted
  };
};

export default connect(mapStateToProps, { setMuteState })(AppBar);
