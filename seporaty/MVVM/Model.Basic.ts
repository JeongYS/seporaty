import axios from 'axios'

export const REST = {
    PUT: 'put',
    GET: 'get',
    POST: 'post',
    DELETE: 'delete'
}

export class Model{
    constructor(){}


    async useAPI(domain:string, praram:object,rest = REST.GET, callback:Function){
        switch (rest){
            case REST.GET:
                callback(await axios.get(domain, praram));
                break;
            case REST.POST:
                callback(await axios.post(domain, praram));
                break;    
            case REST.PUT:
                callback(await axios.put(domain, praram));
                break;    
            case REST.DELETE:
                callback(await axios.delete(domain, praram));
                break;    
        }
    }
}