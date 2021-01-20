import { useState } from "react"
import { ViewModel } from "../ViewModel.Basic";

export function useSubscribe(subscribe : ViewModel){
    const [count, RenderTrigger] = useState(0);
    
    function render(){
        RenderTrigger(count + 1);
    }

    subscribe.injectRenderer(render)
}