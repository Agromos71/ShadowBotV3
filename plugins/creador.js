function handler(m) {
this.sendContact(m.chat, global.agromos[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m)
this.sendContact(m.chat, '16178196212, 'Agromos - Creador - Oficial', m)}
handler.command = /^(contacto|agromos sp|creator|creador|propietario|dueño)$/i
module.exports = handler
