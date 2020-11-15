import React from "react"
import { useQuery, gql } from "@apollo/client"
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar
} from "@ionic/react"
import { addOutline } from "ionicons/icons"

import ProjectItem from "../components/project-item"

import "./home.css"

const GET_PROJECTS_QUERY = gql`
  query GetProjects {
    projects {
      id
      title
    }
  }
`

const Home = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS_QUERY)
  const projects = data ? data.projects || [] : []

  const refresh = e => {
    setTimeout(() => {
      e.detail.complete()
    }, 3000)
  }

  return (
    <IonPage id="home-page">
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader>
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
          {projects.map(project => (
            <ProjectItem {...project} key={project.id} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default Home
