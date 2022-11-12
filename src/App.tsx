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
import {DialogsType, MessagesType, PostType} from './index';

type AppType = {
    posts: PostType[]
    dialogs: DialogsType[]
    messages: MessagesType[]
}
const App = (props: AppType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path="/profile" render={() => <Profile posts={props.posts}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
