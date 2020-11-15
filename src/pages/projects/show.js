import React from "react"
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

import { useQuery, gql } from "@apollo/client"

const GET_PROJECT_QUERY = gql`
  query GetProject($id: Int!) {
    project: projects_by_pk(id: $id) {
      id
      title
    }
  }
`

const ProjectPage = ({ match }) => {
  const { loading, error, data } = useQuery(GET_PROJECT_QUERY, {
    variables: { id: match.params.id }
  })

  const project = data ? data.project : {}

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
