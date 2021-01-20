import { client, responseMessageProcess } from "../client";

export const authrequest = {

    login: (payload, success = null, failed = null) => {
        client().post('ibps/entityUser/login', payload)
            .then(response => {
                
                const {status, data: result} = response;

                if(status == 200){
                    if(typeof success === 'function'){
                        success(result.data)
                    }
                }

            }).catch(error => {
                if(typeof failed === 'function'){
                    failed(error)
                }
            })
    }
}


