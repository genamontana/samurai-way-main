import React from 'react';
import './App.css';
import {Dialogs} from './componets/Dialogs/Dialogs';
import {Header} from './componets/Header/Header';
import {Navbar} from './componets/Navbar/Navbar';
import {Profile} from './componets/Profile/Profile';
import {News} from './componets/News/News';
import {Music} from './componets/Music/Music';
import {Settings} from './componets/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';
import {StateType} from './redux/state';

type appType={
    state:StateType
}
const App = (props:appType) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <Dialogs dialogs={props.state.messagesPage.dialogs} messages={props.state.messagesPage.messages}/>}/>
                    <Route path="/profile" render={() => <Profile posts={props.state.profilePage.posts}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
