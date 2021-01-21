import { Model, REST } from "@seporaty/MVVM/Model.Basic";
import { AxiosResponse } from "axios";
import { BasicData } from "./Interface/basic.interface";

export class BasicModel extends Model {
    public basicData: BasicData = { name: "Basic Component!" };

    constructor() {
        super();
    }

    async getName() {
        return fetch("http://localhost:8080")
            .then((response) => response.text())
            .then((text)=>{return text});


        // this.useAPI("http://localhost:8080", {}, REST.GET, (value: AxiosResponse) => {
        //     return value.data;
        // });
    }

    async setName(name: string) {}
}
