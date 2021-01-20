import { useSubscribe } from "@seporaty/MVVM";
import * as React from "react";
import { BasicViewModel, Action } from "./basic.view.model";
import { connect } from "react-redux";

const BasicComponent: React.FC<{ basicViewModel: BasicViewModel }> = (props) => {

    const [state, setState] = React.useState(props.basicViewModel.createProperties());

    useSubscribe(props.basicViewModel);

    return (
        <div>
            Seporaty-React Basic Component
            <p>Model Name : {props.basicViewModel.getName()}</p>
            <button
                onClick={() => {
                    props.basicViewModel.setName('asd');
                }}
            >
                Edit Name
            </button>
            <button onClick={() => {}}>View Name</button>
        </div>
    );
};

function commandToViewModel() {

}

function bindViewModel(Component: any) {
    console.log()

    return function (addProps: { name: string }) {
        const NewComponet: React.FC<{basicViewModel: BasicViewModel}> = (props) => {
            return <Component {...{ ...props, ...addProps }}></Component>;
        };
        return NewComponet;
    };
}

export default bindViewModel(BasicComponent)({ name: "newName" });
