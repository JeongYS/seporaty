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
    constructor(props: any) {
        super(props);
    }

    // componentWillReceiveProps(newProps: rootProps) {
    //     console.log("Here!!");
    //     if (this.props.store.name != newProps.store.name) {
    //         console.log("Here!!");
    //         this.setState({ store: newProps });
    //     }
    // }

    render() {
        return (
            <div>
                <p>React Start </p>
                <BasicComponent />
            </div>
        );
    }
}

ReactDOM.render(<Seporaty><Root /></Seporaty> , document.getElementById("root"));
