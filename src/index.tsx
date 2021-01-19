import * as React from "react";
import * as ReactDOM from "react-dom"
import { BasicModel } from "./basic/basic.model";

import BasicComponent from "./basic/basic.view";
import { BasicViewModel } from "./basic/basic.view.model";

import  { createStore } from 'redux'
import basicReducers from './basic/redux/basic.reducers'
import { Provider } from "react-redux";

const globalStore = createStore(basicReducers);

const Root: React.FC = () =>{
    const basicModel: BasicModel = new BasicModel();
    const basicViewModel: BasicViewModel = new BasicViewModel(basicModel);

    return <div><p>React Start</p>
        <BasicComponent basicViewModel={basicViewModel}/>
    </div>
}

ReactDOM.render (
    <Provider store={globalStore}><Root /></Provider>, document.getElementById('root')
)
