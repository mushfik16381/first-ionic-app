import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage class='scroll'>
      <IonCard class='card'>
      <img className='img' alt="Silhouette of mountains" src="https://i.pinimg.com/originals/81/d5/84/81d5847b73ba727637a549518c04233a.jpg" />
      <IonCardHeader>
        <IonCardTitle class='card_title'>The Avengers</IonCardTitle>
        <IonCardSubtitle class='sub_title'>Animated by TFPrime1114 on deviantART</IonCardSubtitle>
        </IonCardHeader>

      <IonCardContent class='dis_card'>Description these are all the avengers from the movie in an animated style from the show marvels Avengers Assemble</IonCardContent>
      </IonCard>
      <IonCard class='card'>
      <img className='img' alt="Silhouette of mountains" src="https://variety.com/wp-content/uploads/2021/08/Marvel-What-If-Animated.jpg?w=681&h=383&crop=1" />
      
        <IonCardTitle class='card_title'>The Avengers</IonCardTitle>
        <IonCardSubtitle class='sub_title'>Animated by TFPrime1114 on deviantART</IonCardSubtitle>
      

      <IonCardContent class='dis_card'>Description these are all the avengers from the movie in an animated style from the show marvels Avengers Assemble</IonCardContent>
      </IonCard>
      <IonCard class='card'>
      <img className='img' alt="Silhouette of mountains" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBXUKs893SSVTQuKUBunLioEJaeyKXtipMsQ&usqp=CAU" />
      
        <IonCardTitle class='card_title'>The Avengers</IonCardTitle>
        <IonCardSubtitle class='sub_title'>Animated by TFPrime1114 on deviantART</IonCardSubtitle>
      

      <IonCardContent class='dis_card'>Description these are all the avengers from the movie in an animated style from the show marvels Avengers Assemble</IonCardContent>
      </IonCard>
      <IonCard class='card'>
      <img className='img' alt="Silhouette of mountains" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO0EfG6dVclbThyszJhH_dAiEd9XyJU8_imQ&usqp=CAU" />
      
        <IonCardTitle class='card_title'>The Avengers</IonCardTitle>
        <IonCardSubtitle class='sub_title'>Animated by TFPrime1114 on deviantART</IonCardSubtitle>
      

      <IonCardContent class='dis_card'>Description these are all the avengers from the movie in an animated style from the show marvels Avengers Assemble</IonCardContent>
      </IonCard>
    </IonPage>
  );
};

export default Tab1;
