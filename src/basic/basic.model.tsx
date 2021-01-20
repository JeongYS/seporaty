import { Model, REST } from "@seporaty/MVVM/Model.Basic";
import { AxiosResponse } from "axios";
import { BasicData } from "./Interface/basic.interface";

export class BasicModel extends Model {
    public basicData: BasicData = { name: "Basic Component!" };

    constructor() {
        super();
    }

    getName(): string {
        return this.basicData.name;
    }

    setName(name: string) {
        // this.useAPI("http://localhost:8080", {}, REST.GET, (value: AxiosResponse) => {
        //     console.log(value.data);
        // });

        this.basicData.name = name;
    }
}
