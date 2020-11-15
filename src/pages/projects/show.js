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
  IonTitle
  // useIonViewWillEnter
} from "@ionic/react"
import { home } from "ionicons/icons"
import { useQuery, gql } from "@apollo/client"

import NoteItem from "../../components/note-item"

const GET_PROJECT_QUERY = gql`
  query GetProject($id: Int!) {
    project: projects_by_pk(id: $id) {
      id
      title
    }

    notes(where: { project_id: { _eq: $id } }) {
      id
      body
    }
  }
`

const ProjectPage = ({ match }) => {
  const { loading, error, data } = useQuery(GET_PROJECT_QUERY, {
    variables: { id: match.params.id }
  })

  const project = data ? data.project : {}
  const notes = data ? data.notes : []

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

      <IonContent fullscreen>
        {notes.map(note => (
          <NoteItem {...note} key={note.id} />
        ))}
      </IonContent>
    </IonPage>
  )
}

export default ProjectPage
