import * as React from "react";
import { render } from "react-dom";
import { ModelView } from "@seporaty/MVVM";
import { BasicModel } from "./basic.model";

export class BasicViewModel extends ModelView {
    constructor(private basicModel : BasicModel){
        super();
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

}