import { useSubscribe } from "@seporaty/MVVM";
import * as React from "react";
import { BasicViewModel, Action } from "./basic.view.model";
import { connect } from "react-redux";
import { BasicModel } from "./basic.model";

class BasicComponent extends React.Component<{}, {name: string}> {
    private basicViewModel: BasicViewModel = new BasicViewModel(this);

    constructor(props: {}) {
        super(props);
        this.state = { name: "basic component" };
        this.basicViewModel.getName();
    }

    render() {
        return (
            <div>
                Seporaty-React Basic Component
                <p>Model Name : {this.state.name}</p>
                <button onClick={() => {this.basicViewModel.setName('new component')}}>Edit Name</button>
                <button onClick={() => {}}>View Name</button>
            </div>
        );
    }
}

// function commandToViewModel() {}

// function bindViewModel(Component: any) {
//     console.log();

//     return function (addProps: { name: string }) {
//         const NewComponet: React.FC<{ basicViewModel: BasicViewModel }> = (props) => {
//             return <Component {...{ ...props, ...addProps }}></Component>;
//         };
//         return NewComponet;
//     };
// }

export default BasicComponent;
