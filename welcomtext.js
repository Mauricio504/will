const mdata = await client.groupMetadata(anu.jid)
const samudesc = `${mdata.subject}`
const samYperry = '```' 
const welcome = (number, groupname) => {
    return `_👋¡Hola! *@${number}* te doy la bienvenida a *${groupname}* recuerda siempre seguir la reglas y mantener una formalidad respetuosa_
${samYperry}${samudesc}${samYperry}`
}
exports.welcome = welcome

const bye = (number) => {
    return `@${number}`
}
exports.bye = bye
