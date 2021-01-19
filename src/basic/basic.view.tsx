import { useSubscribe } from "@seporaty/MVVM";
import * as React from "react";
import { BasicViewModel } from "./basic.view.model";
import { connect } from 'react-redux';


const BasicComponent: React.FC<{ basicViewModel: BasicViewModel, name: string }> = (props) => {
    console.log(props)
    
    return (
        <div>
            Seporaty-React Basic Component
            <p>Model Name : {props.name}</p>
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

const mapStateToProps = (state:any) =>{
    return {
        name: state.basicReducer.name
    }
}

const ConnectedBasicComponent = connect(mapStateToProps)(BasicComponent);

export default ConnectedBasicComponent;
