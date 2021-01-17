import { useState } from "react"

export function useSubscibe(subscribe : any){
    const [count, RenderTrigger] = useState(0);
    function render(){
        RenderTrigger(count + 1);
    }

    subscribe.injectRenderer(render)
}