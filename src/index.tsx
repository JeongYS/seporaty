import * as React from "react";
import { Component } from "react";
import * as ReactDOM from "react-dom";
import { BasicModel } from "./basic/basic.model";

import BasicComponent from "./basic/basic.view";
import { BasicViewModel } from "./basic/basic.view.model";

import { createStore } from "redux";
import basicReducers from "./basic/redux/basic.reducers";
import { Provider } from "react-redux";
import Seporaty from "@seporaty/Component/Seporaty";

const globalStore = createStore(basicReducers);

class Root extends Component {

    private basicViewModel : BasicViewModel = new BasicViewModel();
    private bindingView : React.Component = new BasicComponent({basicViewModel: this.basicViewModel})
    constructor(props: any) {
        super(props);
    }

    render() {
        const BindedBasicViewModel = ()=>{
            return bindViewModel(this.bindingView)(this.basicViewModel);
        } 

        return (
            <div>
                <p>React Start </p>
                <BasicComponent basicViewModel={this.basicViewModel}/>
            </div>
        );
    }
}

function bindViewModel(Component: React.Component) {
    return function (basicViewModel:BasicViewModel) {
        basicViewModel.bind(Component)

        return Component
    }
}

ReactDOM.render(<Seporaty><Root /></Seporaty> , document.getElementById("root"));
