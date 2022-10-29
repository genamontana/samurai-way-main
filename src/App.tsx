import React from 'react';
import './App.css';


const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img
                    src="https://www.adobe.com/express/create/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=jpeg&optimize=medium"
                    alt="logo-company"/>
            </header>
            <nav>
                <div><a>Profile</a></div>
                <div><a>Messages</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
                <div><a>Setting</a></div>
            </nav>
            <div className="content">
                <div><img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                    alt="image"/></div>
                <div>ava + description</div>
                <div>My posts
                    <div>New post</div>
                    <div>post_1</div>
                    <div>post_2</div>
                </div>
            </div>
        </div>
    );
}


export default App;
