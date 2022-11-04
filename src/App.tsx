import React from 'react';
import './App.css';
import {Dialogs} from './componets/Dialogs/Dialogs';
import {Header} from './componets/Header/Header';
import {Navbar} from './componets/Navbar/Navbar';
//import {Profile} from './componets/Profile/Profile';


const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Dialogs/>
            </div>
            {/*<Profile/>*/}
        </div>
    );
}


export default App;
