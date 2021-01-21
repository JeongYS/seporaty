import { BasicModel } from "./basic.model";
import { SeporatyAction } from "@seporaty/Action/Action";
import { ViewModel } from "@seporaty/MVVM";

export const Action = {
    UPDATENAME: "UpdateName",
    TESTB: "TESTB",
};

export class BasicViewModel{
    private view: React.Component|null = null;
    constructor() {
    }

    bind(view: React.Component) {
        this.view = view;
        let name;
        this.getName().then((value)=>name = value)
        this.view.state = {name : name}
    }

    private basicModel = new BasicModel();

    private element: any;

    async setName(name: string) {
        this.view?.setState({
            name: `${name} (modified)`,
        });
    }

    async getName() {
        let tt = await this.basicModel.getName();
        this.view?.setState({
            name: `${tt} (modified)`,
        });
    }

    // createProperties() {
    //     return {name : this.basicModel.getName()}
    // }

    // bind(element: any){
    //     console.log(typeof element)
    // }
}
