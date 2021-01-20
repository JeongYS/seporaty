import { BasicModel } from "./basic.model";
import { SeporatyAction } from "@seporaty/Action/Action";
import { ViewModel } from "@seporaty/MVVM";

export const Action = {
    UPDATENAME: 'UpdateName',
    TESTB: 'TESTB'
}

export class BasicViewModel extends ViewModel {
    constructor(private basicModel : BasicModel){
        super(basicModel);
    }

    private element : any;

    command(action: SeporatyAction, name: string){
        switch (action.action){
            case Action.UPDATENAME :
                this.basicModel.setName(name);
        }
    }

    setName(name: string){
        if(this.renderer != null){
            this.renderer();
        }

        this.basicModel.setName(`${name} (modified)`)
    }


    getName(): string{
        return this.basicModel.getName();
    }

    createProperties() {
        return {name : this.basicModel.getName()}
    }

    bind(element: any){
        console.log(typeof element)
    }

}