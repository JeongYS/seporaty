export class ModelView{
    constructor(){};

    protected renderer: any = null;

    injectRenderer(renderer: any) {
        this.renderer = renderer;
    }
}
