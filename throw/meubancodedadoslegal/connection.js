const mongoose = required('mongoose');

function connection(){
    

    let usuario = process.env.NODE_USER
    let senha = process.env.NODE_PASS

    if(process.env.NODE_ENV!=='producao'){
        require('dotenv').config();
        let usuario = process.env.NODE_USER
        let senha = process.env.NODE_PASS
    }else{
        let usuario = process.env.NODE_USER
        let senha = process.env.NODE_PASS
    }
    cost URL = `mongodb://localhost:27017`
}
