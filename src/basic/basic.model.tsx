import { BasicData } from "./Interface/basic.interface";

export class BasicModel {
    private basicData : BasicData = {name: 'Basic Component!'};

    constructor () {}

    getName(): string{
        return this.basicData.name;
    }

    setName(name : string){
        this.basicData.name = name;
    }
}

