import React, { useState } from "react"
// import { getMessage } from "../data/messages"
import {
  IonBackButton,
  IonButtons,
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonInput,
  IonLabel,
  IonItem
} from "@ionic/react"
// import { personCircle } from "ionicons/icons"
// import "./view-messages.css"

const NewProjectPage = () => {
  const [formData, setFormData] = useState({ title: "" })

  const handleSubmit = event => {
    event.preventDefault()
    console.log("SUBMIT FORM", formData)
  }

  return (
    <IonPage id="new-project">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons>
            <IonBackButton text="Back" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <form onSubmit={handleSubmit}>
          <IonItem>
            <IonLabel position="floating">Project Name</IonLabel>
            <IonInput
              required={true}
              onInput={e => setFormData({ ...formData, title: e.target.value })}
            />
          </IonItem>

          <IonButton size="block" type="submit">
            Create Project
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  )
}

export default NewProjectPage
