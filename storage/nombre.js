import { env } from "../config.js";

const uri = `${env.ssl + env.hotsName}:${env.port}`;
const config = { method: undefined, headers: { "Content-Type": "application/json" } };


const validarExtructura = (data = {}) => {
    if (data.constructor.name !== "Object" || Object.keys(data).length == 0) return { status: 400, message: `Usuario envie los datos` };
    const {
        nombre = null,
        apellido = null,
    } = data;

    if (typeof nombre !== 'string') return { status: 400, message: `El nombre '${nombre}' no cumple con el formato` };
    if (typeof apellido !== 'string') return { status: 400, message: `El apellido '${apellido}' no cumple con el formato` };
    return data;
}
export const post = async (obj = {}) => {
    obj = validarExtructura(obj);
    if (obj.status) return obj;

    config.method = "POST";
    config.body = JSON.stringify(obj);
    let res = await (await fetch(`${uri}/nombre`, config)).json();
    return res;
}
export const getOne = async (id) => {
    config.method = "GET";
    // config.body = "";
    let res = await (await fetch(`${uri}/nombre/${id}`, config)).json();
    return res;
}
export const getAll = async () => {
    config.method = "GET";
    // config.body = "";
    let res = await (await fetch(`${uri}/nombre`, config)).json();
    return res;
}
export const Delete = async (id) => {
    config.method = "DELETE";
    let res = await (await fetch(`${uri}/nombre/${id}`, config)).json();
    return res;
}

//crear funcion para modificar datos
export const put = async (id, obj = {}) => {
    obj = validarExtructura(obj);
    if (obj.status) return obj;

    config.method = "PUT";
    config.body = JSON.stringify(obj);
    let res = await (await fetch(`${uri}/nombre/${id}`, config)).json();
    return res;
}




console.log(await post());