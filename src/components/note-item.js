import React from "react"
import PropTypes from "prop-types"

import { IonItem, IonLabel, IonItemSliding, IonItemOption, IonItemOptions } from "@ionic/react"

const NoteItem = ({ id, body }) => {
  return (
    <IonItemSliding>
      <IonItem routerLink={`/projects/${id}`}>
        <IonLabel>
          Note #{id}: {body}
        </IonLabel>
      </IonItem>

      <IonItemOptions side="end">
        <IonItemOption color="danger" onClick={e => console.log("DELETE ME")}>
          Delete
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  )
}

NoteItem.propTypes = {
  id: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired
}

export default NoteItem
