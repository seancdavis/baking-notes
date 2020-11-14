import MessageListItem from "../components/message-list-item"
import React, { useState } from "react"
import { getMessages } from "../data/messages"
import {
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  IonItem,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonLabel,
  useIonViewWillEnter
} from "@ionic/react"
import { addOutline } from "ionicons/icons"
import "./home.css"

const Home = () => {
  const [messages, setMessages] = useState([])

  useIonViewWillEnter(() => {
    const msgs = getMessages()
    setMessages(msgs)
  })

  const refresh = e => {
    setTimeout(() => {
      e.detail.complete()
    }, 3000)
  }

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inbox</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonButtons slot="primary">
              <IonButton routerLink="/projects/new">
                <IonIcon icon={addOutline} />
              </IonButton>
            </IonButtons>

            <IonTitle>Inbox</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          <IonItemSliding>
            <IonItem routerLink="/projects/new">
              <IonLabel>New Message</IonLabel>
            </IonItem>

            <IonItemOptions side="end">
              <IonItemOption color="danger" onClick={e => console.log("DELETE ME")}>
                Delete
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          {messages.map(m => (
            <MessageListItem key={m.id} message={m} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default Home
