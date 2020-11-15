import React from "react"
import PropTypes from "prop-types"

import { IonItem, IonLabel, IonItemSliding, IonItemOption, IonItemOptions } from "@ionic/react"

const ProjectItem = ({ id, title }) => {
  return (
    <IonItemSliding>
      <IonItem routerLink={`/projects/${id}`}>
        <IonLabel>{title}</IonLabel>
      </IonItem>

      <IonItemOptions side="end">
        <IonItemOption color="danger" onClick={e => console.log("DELETE ME")}>
          Delete
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  )
}

ProjectItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export default ProjectItem
