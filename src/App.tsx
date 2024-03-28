import React from 'react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import { IonRouterOutlet } from '@ionic/react';
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';

const App: React.FC = () => (
 <IonReactRouter>
    <IonRouterOutlet>
      <Switch>
        <Route path="/login" component={LoginPage} exact />
        <Route path="/" component={HomePage} exact />
        <Redirect from="*" to="/" exact />
        
      </Switch>
    </IonRouterOutlet>
 </IonReactRouter>
);

export default App;
