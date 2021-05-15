import React from "react";
import UserInfo from "./containers/UserInfo";
import BaseTop from "./components/Layout/BaseTop"
import './App.css';

function App() {
    return (
        <>
            <BaseTop />
            <div className="App">
                <UserInfo />
            </div>
        </>
    );
}

export default App;
