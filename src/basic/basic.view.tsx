import { useSubscribe } from "@seporaty/MVVM";
import * as React from "react";
import { BasicViewModel } from "./basic.view.model";

const BasicComponent: React.FC<{ basicViewModel: BasicViewModel }> = (props) => {
    const subscribe = useSubscribe(props.basicViewModel);
    
    return (
        <div>
            Seporaty-React Basic Component
            <p>Model Name : {props.basicViewModel.getName()}</p>
            <button
                onClick={() => {
                    props.basicViewModel.setName('New Name!!');
                }}
            >
                Edit Name
            </button>
            <button
                onClick={() => {
                }}
            >
                View Name
            </button>
        </div>
    );
};

export default BasicComponent;
