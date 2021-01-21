import { useSubscribe } from "@seporaty/MVVM";
import * as React from "react";
import { BasicViewModel, Action } from "./basic.view.model";
import { connect } from "react-redux";
import { BasicModel } from "./basic.model";

class BasicComponent extends React.Component<{basicViewModel: BasicViewModel}, any> {
    constructor(props: {basicViewModel: BasicViewModel}) {
        super(props);
        props.basicViewModel.bind(this)
    }

    render() {
        return (
            <div>
                Seporaty-React Basic Component
                <p>Model Name : {this.state.name}</p>
                <button onClick={() => {this.props.basicViewModel.setName('new component')}}>Edit Name</button>
                <button onClick={() => {}}>View Name</button>
            </div>
        );
    }
}

// function commandToViewModel() {}



export default BasicComponent;
