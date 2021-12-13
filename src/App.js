import React from "react";
import './App.css';
import TodoList from './Secreens/TodoList/FuncComp/TodoList' ;

import {useTranslation} from "react-i18next"
import changeLanguage from "./Helpers/Translate/changeLanguage";

const App =()=>{

    const {t, i18n} = useTranslation()
    const handleChangeLanguage=()=>{
        changeLanguage(i18n.language==='ar'?"en":'ar' ,i18n)
    }
    
    return (
        <div className="App">
        <button onClick={handleChangeLanguage}> {t('language')} </button>
            <TodoList translation={t} />
        </div>
    );
}

export default App;

