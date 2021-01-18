import { useState } from "react"

export function useSubscribe(subscribe : any){
    const [count, RenderTrigger] = useState(0);
    function render(){
        RenderTrigger(count + 1);
    }

    subscribe.injectRenderer(render)
}