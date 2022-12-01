import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {onPostChange, StateType} from './redux/state'
import {addPost} from './redux/state'
import {BrowserRouter} from 'react-router-dom';

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 onPostChange={onPostChange}
            />
        </BrowserRouter>,
        document.getElementById('root'));
}


