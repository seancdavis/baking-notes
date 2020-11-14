import React from "react"
import { Redirect, Route } from "react-router-dom"
import { IonApp, IonRouterOutlet } from "@ionic/react"
import { IonReactRouter } from "@ionic/react-router"
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from "@apollo/client"

import { HASURA_ADMIN_SECRET, HASURA_URL } from "./env"

import Home from "./pages/home"
import ViewMessage from "./pages/view-messages"
import NewProjectPage from "./pages/projects/new"

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css"

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css"
import "@ionic/react/css/structure.css"
import "@ionic/react/css/typography.css"

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css"
import "@ionic/react/css/float-elements.css"
import "@ionic/react/css/text-alignment.css"
import "@ionic/react/css/text-transformation.css"
import "@ionic/react/css/flex-utils.css"
import "@ionic/react/css/display.css"

/* Theme variables */
import "./theme/variables.css"

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: HASURA_URL,
      headers: {
        "X-Hasura-Admin-Secret": HASURA_ADMIN_SECRET,
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }),
    cache: new InMemoryCache()
  })
}

const App = () => {
  const client = createApolloClient()

  return (
    <ApolloProvider client={client}>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/home" component={Home} exact={true} />
            <Route path="/projects/new" component={NewProjectPage} exact={true} />
            <Route path="/message/:id" component={ViewMessage} exact={true} />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </ApolloProvider>
  )
}

export default App
