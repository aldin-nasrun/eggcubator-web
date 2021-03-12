import React, { Component } from 'react'
import {db} from '../sevices/fbconfig'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonText, IonList, IonAvatar } from '@ionic/react';
import '@ionic/react/css/core.css';
import './dashboard.css'
import incLogo from '../assets/inkubasi-icon.svg'
import humLogo from '../assets/kelembaban-icon.svg'
import tempLogo from '../assets/temperetur-icon.svg'


export default class dashboard extends Component {

    constructor (props){
        super(props);
        this.state = {
            fData : [],
            myDate : ''
        }
        this.myRef = React.createRef();
        this.mDate = 0;
    
    }    


    async componentDidMount() {
        try {
            db.ref("FirebaseIOT").on("value", snapshot => {
             
                let x = snapshot.val();
                // console.log(x);
                this.setState({fData : x})
                console.log(snapshot.val());
                const xyx = snapshot.child('mightyDay').val(); 
                let mightyDay = new Date(this.state.fData['mightyDay']);
                let day = new Date();
                let totalDif = day.getTime() - mightyDay.getTime();
                this.setState({myDate : Math.floor( totalDif / (1000 * 60 * 60 * 24))});
                // this.setState({mDate : this.state.fData['mightyDay']});
                console.log(xyx);

            });
        } catch (error) {
            
        }
    }

    render() {
        return (
            <IonPage className="phone" mode="ios">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>eggcubator</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                <IonCard className="card" mode="ios"> 
                    <IonCardHeader>
                        <IonCardTitle color="light" mode="ios">
                        Telur Kamu akan menetas dalam {21 - this.state.myDate} hari
                        </IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>

                    </IonCardContent>
                </IonCard>
                
                <IonList className="list">

                    <IonItem>
                    <IonAvatar><img src={incLogo} alt="icon" /></IonAvatar>
                        <IonLabel>Inkubasi : {this.state.myDate}hari</IonLabel>
                    </IonItem>

                    <IonItem>
                    <IonAvatar><img src={tempLogo} alt="icon"/></IonAvatar>
                        <IonLabel>Temperatur: {this.state.fData['temperature']}&#176;C</IonLabel>
                    </IonItem>

                    <IonItem>
                        <IonAvatar><img src={humLogo} alt="icon" /></IonAvatar>
                        <IonLabel>Kelembaban: {this.state.fData['humidity']}%</IonLabel>
                    </IonItem>

                </IonList>
            

                </IonContent>

            </IonPage>
        )
    }
}
