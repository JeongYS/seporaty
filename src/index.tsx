import * as React from "react";
import * as ReactDOM from "react-dom"
import { BasicModel } from "./basic/basic.model";

import BasicComponent from "./basic/basic.view";
import { BasicViewModel } from "./basic/basic.view.model";


const Root: React.FC = () =>{
    const basicModel: BasicModel = new BasicModel();
    const basicViewModel: BasicViewModel = new BasicViewModel(basicModel);

    return <div><p>React Start</p>
        <BasicComponent basicViewModel={basicViewModel}/>
    </div>
}

ReactDOM.render (
    <Root/>, document.getElementById('root')
)
