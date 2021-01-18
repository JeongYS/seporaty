import { Model } from "./Model.Basic";

export class ModelView{
    constructor(private model:Model){};

    protected renderer: any = null;

    injectRenderer(renderer: any) {
        this.renderer = renderer;
    }
}
