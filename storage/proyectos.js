import {env} from "../config.js";

const uri = `${env.ssl + env.hotsName}:${env.port}`;
const config = {method: undefined, headers: {"Content-Type": "application/json"}};


const validarExtructura = (data={})=>{
    if(data.constructor.name !== "Object" || Object.keys(data).length==0) return {status: 400, message: `Usuario envie los datos`};
    const {
        nombre=null
    } = data;
    if(typeof nombreP !== 'string') return {status: 400, message: `El nombre '${nombreP}' no cumple con el formato`};
    if(typeof descripcion !== 'string') return {status: 400, message: `El nombre '${descripcion}' no cumple con el formato`};
    if(typeof urlRepo !== 'string') return {status: 400, message: `La url'${urlRepo}'no es valida`}
    if(typeof urlDemo !== 'string') return {status: 400, message: `La url'${urlDemo}'no es valida`}
    if(typeof urlImg !== 'string') return {status: 400, message: `La url'${urlImg}'no es valida`}
    return data;
}
export const getOne = async(id)=>{
    config.method = "GET";
    // config.body = "";
    let res = await (await fetch(`${uri}/categoria/${id}`, config)).json();
    return (Object.keys(res).length>0) ? res : {status: 401, message: "La categoria no existe", id};
}
export const getAll = async()=>{
    config.method = "GET";
    // config.body = "";
    let res = await (await fetch(`${uri}/categoria`, config)).json();
    return res;
}
export const post = async(obj={})=>{
    obj = validarExtructura(obj);
    if(obj.status) return obj;
    
    config.method = "POST";
    config.body = JSON.stringify(obj);
    let res = await (await fetch(`${uri}/categoria`, config)).json();
    return res;
}
//necesito crear una funcion para modificar datos
export const put = async(id, obj={})=>{
    obj = validarExtructura(obj);
    if(obj.status) return obj;
    
    config.method = "PUT";
    config.body = JSON.stringify(obj);
    let res = await (await fetch(`${uri}/categoria/${id}`, config)).json();
    return res;
}

//necesto crear una funcion para eliminar datos
export const Delete = async(id)=>{
    config.method = "DELETE";
    let res = await (await fetch(`${uri}/categoria/${id}`, config)).json();
    return res;
}
