import * as React from "react";
import { Component } from "react";

type SeporatyProps = {
}

export default class Seporaty extends Component<SeporatyProps> {
    constructor(props: SeporatyProps){
        super(props);
    }

    render() {
        return <>{this.props.children}</>
    }
}
