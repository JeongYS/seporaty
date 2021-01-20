import { Model } from "./Model.Basic";

export class ViewModel{
    constructor(private model:Model){};

    protected renderer: any = null;

    injectRenderer(renderer: any) {
        this.renderer = renderer;
    }
}
