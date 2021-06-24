import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import UserInput from '../../components/userInput/UserInput';
import './InputPage.css'

const InputPage = () => {
    return (
        <div className="inputPage">
            <div className="inputPageWrapper">
            <Sidebar/>
            <UserInput />
            </div>
        </div>
    );
};

export default InputPage;