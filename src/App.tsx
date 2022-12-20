import React from 'react';
import './App.css';
import {Dialogs} from './componets/Dialogs/Dialogs';
import {Header} from './componets/Header/Header';
import {Navbar} from './componets/Navbar/Navbar';
import {Profile} from './componets/Profile/Profile';
import {News} from './componets/News/News';
import {Music} from './componets/Music/Music';
import {Settings} from './componets/Settings/Settings';
import {Route} from 'react-router-dom';
import {ActionsType, StateType} from './redux/state';

type appType = {
    state: StateType
    dispatch: (action: ActionsType ) => void
}
const App = (props: appType) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() =>
                    <Dialogs dialogs={props.state.dialogsPage.dialogs}
                             messages={props.state.dialogsPage.messages}/>}/>
                <Route path="/profile"
                       render={() =>
                           <Profile
                               profilePage={props.state.profilePage}
                               dispatch={props.dispatch}
                           />}
                />
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
}


export default App;
