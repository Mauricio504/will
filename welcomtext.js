const welcome = (number, groupname, groupdesk) => {
    return `_👋¡Hola! *@${number}* te doy la bienvenida a *${groupname}* recuerda siempre seguir la reglas y mantener una formalidad respetuosa *(Solo🔥Activos)*_
${groupdesk} `
}
exports.welcome = welcome

const bye = (number) => {
    return `@${number}`
}
exports.bye = bye
