import './index.css';
import state, {subscribe} from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {onPostChange} from './redux/state'
import {addPost} from './redux/state'
import {BrowserRouter} from 'react-router-dom';

const rerenderEntireTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 onPostChange={onPostChange}
            />
        </BrowserRouter>,
        document.getElementById('root'));
}

rerenderEntireTree();
subscribe(rerenderEntireTree);

