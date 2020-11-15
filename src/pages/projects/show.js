import React, { useState } from "react"
import {
  // IonBackButton,
  IonButtons,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonToolbar,
  // IonInput,
  // IonLabel,
  // IonItem,
  IonTitle,
  useIonViewWillEnter
} from "@ionic/react"
import { home } from "ionicons/icons"

// import { useHistory } from "react-router"
// import { useMutation, gql } from "@apollo/client"

// const CREATE_PROJECT_MUTATION = gql`
//   mutation CreateProject($title: String!) {
//     insert_projects_one(object: { title: $title }) {
//       id
//       title
//     }
//   }
// `

const ProjectPage = ({ match }) => {
  const [project, setProject] = useState({})

  useIonViewWillEnter(() => {
    // const msg = getMessage(parseInt(match.params.id, 10))
    // setMessage(msg)
    setProject({ id: 1, title: "FPO PROJECT" })
  })

  return (
    <IonPage id="new-project">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons>
            <IonButton routerLink="/home" routerDirection="back">
              <IonIcon icon={home} slot="start" />
              Home
            </IonButton>
          </IonButtons>
          <IonTitle>{project.title || "Loading ..."}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>Content goes here ...</IonContent>
    </IonPage>
  )
}

export default ProjectPage
