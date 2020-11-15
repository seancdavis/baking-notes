import React, { useState } from "react"
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
  IonItem,
  IonTitle
} from "@ionic/react"

import { useHistory } from "react-router"
import { useMutation, gql } from "@apollo/client"

const CREATE_PROJECT_MUTATION = gql`
  mutation CreateProject($title: String!) {
    insert_projects_one(object: { title: $title }) {
      id
      title
    }
  }
`

const NewProjectPage = () => {
  const [formData, setFormData] = useState({ title: "" })

  const [createProject] = useMutation(CREATE_PROJECT_MUTATION)

  const history = useHistory()

  const handleSubmit = event => {
    event.preventDefault()
    console.log("SUBMIT FORM", formData)
    createProject({ variables: formData }).then(result => {
      console.log(result)
      console.log("TAKE ME SOMEWHERe, FUCK FACE")
      history.push("/")
    })
  }

  return (
    <IonPage id="new-project">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons>
            <IonBackButton text="Back" defaultHref="/home"></IonBackButton>
          </IonButtons>
          <IonTitle>New Project</IonTitle>
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
