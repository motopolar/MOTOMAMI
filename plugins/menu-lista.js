import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
//let userr = global.db.data.users[m.sender]
//userr.registered = false
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
//let _uptime = process.uptime() * 1000
//let _muptime
//if (process.send) {
//process.send('uptime')
//let uptime = clockString(_uptime)

let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 

wm = global.wm
vs = global.vs
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
//let name = await conn.getName(m.sender)
const sections = [
{
title: `πππππΌ πΏπππππππΌπ½ππ | πΏπππ-πΏπππ ππππ`,
rows: [
      {title: "π πΎπππΌπΏπππΌ : πΎπππΌπππ π", description: null, rowId: `${usedPrefix}creadora`},
      {title: "π πΏπππΌπ : πΏπππΌππ π", description: null, rowId: `${usedPrefix}donar`},
      {title: "π πππππΌππΌπ ππΌππΌ π½ππ : πππππΌππ πΎπΌπ π½ππ π", description: null, rowId: `${usedPrefix}instalarbot`},
      {title: "π€ πππ πππ½π½ππ : ππ π¦π¨π ππ’π§ π€", description: null, rowId: `${usedPrefix}jadibot`},
      {title: "π πππππΎππΏπΌπΏ : πππππΏ π", description: null, rowId: `${usedPrefix}ping`},
      {title: "π ππππ πΎπππππππ : ππππ ππππ π", description: null, rowId: `${usedPrefix}allmenu`},
      {title: "π πππππππΌπΎπππ : ππππ ππππ π", description: null, rowId: `${usedPrefix}infomenu`},
      {title: "π ππππΌππππ πππππππ : πππππππ πππππ π", description: null, rowId: `${usedPrefix}listprem`},
      {title: "ποΈ πππ πππππππ : π½π πππππππ ποΈ", description: null, rowId: `${usedPrefix}pase premium`},
      {title: "π πππ ππππΏππΌπ πΎππΌπππππΎπΌπππππΌ π", description: null, rowId: `${usedPrefix}top`},
      {title: "π£οΈ ππππππππ : ππππππππ π£οΈ", description: null, rowId: `${usedPrefix}inventario 3`},
      {title: "πͺ πππππΏπΌ ππΌππΌ πΎπππππΌπ πͺ", description: null, rowId: `${usedPrefix}buy`}, 
      {title: "π πππππππΌπππ : πππππππππ π", description: null, rowId: `${usedPrefix}buy`}, 
      {title: "π‘ ππππππ πΏπππΌπππΎππ : ππΌπππ π‘", description: null, rowId: `${usedPrefix}juegosmenu`},
      {title: "π ππππ πΏπ πΌππΏπππ : πΌππΏπππ π", description: null, rowId: `${usedPrefix}audios`},
      {title: "π§° ππππ πππΏππππΎπΌπΏππ πΏπ πΌππΏππ π§°", description: null, rowId: `${usedPrefix}audioefectomenu`},
      {title: "π° ππππ πΏπ πππππ : πππππ π°", description: null, rowId: `${usedPrefix}grupomenu`},
      {title: "βοΈ πΎπππππ πΏπ πΎππππππππΌπΎπππ βοΈ", description: null, rowId: `${usedPrefix}on`}, 
      {title: "π ππππ ππππΎπππ π πππππππ π", description: null, rowId: `${usedPrefix}stickermenu`},
      {title: "π°οΈ ππππ πΎππππππππΏππ : πΎππππππππ π°οΈ", description: null, rowId: `${usedPrefix}convertidormenu`},
      {title: "β¨ ππππ ππππΎπππ π πππππ β¨", description: null, rowId: `${usedPrefix}makermenu`}, 
      {title: "π ππππ ππππ 2 π", description: null, rowId: `${usedPrefix}menulogos2`},
      {title: "π² ππππ πΏπ πΏπππΎπΌπππΌπ : πΏππππππΌπΏ ππππ π²", description: null, rowId: `${usedPrefix}descargasmenu`},
      {title: "π ππππ πΏπ π½ππππππΏπΌπ : πππΌππΎπ ππππ π", description: null, rowId: `${usedPrefix}buscarmenu`},
      {title: "β©οΈ ππΌππΏππ ππππ : πΌππππ β©οΈ", description: null, rowId: `${usedPrefix}randommenu`},
      {title: "π ππππ πΎπππΌππΏππ +18 : πΎππππΌππΏπ +18 π", description: null, rowId: `${usedPrefix}hornymenu`},
      {title: "βοΈ ππππ πππ βοΈ", description: null, rowId: `${usedPrefix}rpgmenu`},
      {title: "π πππππ πΏπ πππππΌπ : πππππ ππ πππππ π", description: null, rowId: `${usedPrefix}listas`},
      {title: "π ππππ ππππππππΌπππ(πΌ) : ππππ πππππ π", description: null, rowId: `${usedPrefix}ownermenu`},
      {title: "π ππππππππ, πΎπππΏππΎπππππ π πππππΌπΎππΏπΌπΏ π", description: null, rowId: `tΓ©rminos`},
      

]}, ]
 
let name = await conn.getName(m.sender)
let pareja = global.db.data.users[m.sender].pasangan 
let enlace = { contextInfo: { externalAdReply: {title: wm, body: 'support group' , sourceUrl: nna, thumbnail: await(await fetch(img)).buffer() }}}
//let name = conn.getName(m.sender)
const listMessage = {
text: `β­ββββββββββββββββββββ\nβ${ucapan()}\nβπΒΈ.β’ *${name}* β’.ΒΈπ\nβ°ββββββββββββββββββββ
β­ββγ *${wm}* γβββ¬£
ββͺ *Tiempo Actual | Current Time*	    
ββΊ ${time}   
β   βββββββββββββββββ
ββͺ *Activa durante | Active during* 
ββΊ ${uptime}
β   βββββββββββββββββ
ββͺ *VersiΓ³n de GataBot-MD π *
ββΊ ${vs}
β   βββββββββββββββββ
ββͺ *Usuario(s) | Users*
ββΊ ${Object.keys(global.db.data.users).length} 
β   βββββββββββββββββ
ββͺ *Modo | Mode*
ββΊ ${global.opts['self'] ? 'πππππΌπΏπ - πππππΌππ' : 'πππ½πππΎπ - πππ½πππΎ'}
β   βββββββββββββββββ
ββͺ *Chat(s) Prohibido(s) | Chats Denied*
ββΊ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
β   βββββββββββββββββ
ββͺ *Usuario(s) Prohibido(s) | Denied Users*
ββΊ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
β°βββββββββββββββββββ¬£`, footer: `*π£π?πΏπ²π·π? βΊ ${pareja ? `${name} π ${conn.getName(pareja)}` : `πΊ Sin Pareja`}*`, //${name} ${ucapan()}
title: null,
buttonText: "πππππΌ πΏπ ππππ : ππππ ππππ", 
sections }

let imagen = './media/menus/Menu3.jpg'
let ftroli = { key: { fromMe: false, "participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us" }, "message": { orderMessage: { itemCount: 6546464643, status: 200, thumbnail: imagen, surface: 200, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' }}, contextInfo: { "forwardingScore": 999, "isForwarded": true}, sendEphemeral: true}  

const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu|menΓΊ|memu|memΓΊ|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
//handler.register = true
handler.exp = 50
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = "π *BIENVENIDO(A) | WELCOME* π"
  if (time >= 4) {
    res = "π *Buenos DΓ­as | Good Morning* β"
  }
  if (time >= 11) {
    res = "ποΈ *Buenas Tardes | Good Afternoon* π€οΈ"
  }
  if (time >= 15) {
    res = "π *Buenas tardes | Good Afternoon* π₯οΈ"
  }
  if (time >= 17) {
    res = "π *Buenas noches | Good Evening* π«"
  }
  return res
} 



/*import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
//let userr = global.db.data.users[m.sender]
//userr.registered = false
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
//let _uptime = process.uptime() * 1000
//let _muptime
//if (process.send) {
//process.send('uptime')
//let uptime = clockString(_uptime)

let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 

wm = global.wm
vs = global.vs
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
//let name = await conn.getName(m.sender)

let name = await conn.getName(m.sender)
//let name = conn.getName(m.sender)

let menu = `β­ββββββββββββββββββββ\nβ${ucapan()}\nβπβ’.ΒΈπΒΈ.β’ *${name}* β’.ΒΈπΒΈ.β’π\nβ°ββββββββββββββββββββ
β­ββγ *${wm}* γβββ¬£
ββͺ *Tiempo Actual | Current Time*	    
ββΊ ${time}   
β   ββββββββββββββββββββ
ββͺ *Activa durante | Active during* 
ββΊ ${uptime}
β   ββββββββββββββββββββ
ββͺ *VersiΓ³n de GataBot-MD*
ββΊ ${vs}
β   ββββββββββββββββββββ
ββͺ *Usuario(s) | Users*
ββΊ ${Object.keys(global.db.data.users).length} 
β   ββββββββββββββββββββ
ββͺ *Modo | Mode*
ββΊ ${global.opts['self'] ? 'πππππΌπΏπ - πππππΌππ' : 'πππ½πππΎπ - πππ½πππΎ'}
β   ββββββββββββββββββββ
ββͺ *Chat(s) Prohibido(s) | Forbidden Chats*
ββΊ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
β   ββββββββββββββββββββ
ββͺ *Usuario(s) Prohibido(s) | Prohibited Users*
ββΊ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
β°ββββββββββββββββββββ¬£`
//menulista
let menulista = `
β­ββββββββββββββββββββ¬£
β β‘ πππππΌ πΏπ ππππ β‘
β π ${name}
β°ββββββββββββββββββββ¬£
${readMore}
β­ββββββββββββββββββββ¬£
β π πΎπππΌπΏπππΌ | πΎπππΌπππ π
β _${usedPrefix}creadora_
β   ββββββββββββββββββββ
β π πΏπππΌπ | πΏπππΌππ π
β _${usedPrefix}donar_
β   ββββββββββββββββββββ
β π πππππΎππΏπΌπΏ | πππππΏ π
β _${usedPrefix}ping_
β   ββββββββββββββββββββ
β π ππππ πΎπππππππ | ππππ ππππ π
β _${usedPrefix}allmenu_
β   ββββββββββββββββββββ
β π πππππΌ πΏπ πΎππΌπππππΎπΌπππππΌ π
β _${usedPrefix}top_
β   ββββββββββββββββββββ
β π πππππππΌπΎπππ | ππππ ππππ π
β _${usedPrefix}infomenu_
β   ββββββββββββββββββββ
β π‘ ππππππ πΏπππΌπππΎππ | ππΌπππ π‘
β _${usedPrefix}juegosmenu_
β   ββββββββββββββββββββ
β π ππππ πΏπ πΌππΏπππ | πΌππΏπππ π
β _${usedPrefix}audios_
β   ββββββββββββββββββββ
β π§° ππππ πππΏππππΎπΌπΏππ πΏπ πΌππΏππ π§°
β _${usedPrefix}audioefectomenu_
β   ββββββββββββββββββββ
β π° ππππ πΏπ πππππ | πππππ π°
β _${usedPrefix}grupomenu_
β   ββββββββββββββββββββ
β βοΈ πΎπππππ πΏπ πΎππππππππΌπΎπππ βοΈ
β _${usedPrefix}on_
β   ββββββββββββββββββββ
β π ππππ ππππΎπππ π πππππππ π
β _${usedPrefix}stickermenu_
β   ββββββββββββββββββββ
β π°οΈ ππππ πΎππππππππΏππ | πΎππππππππ π°οΈ
β _${usedPrefix}convertidormenu_
β   ββββββββββββββββββββ
β β¨ ππππ ππππΎπππ π πππππ β¨
β _${usedPrefix}makermenu_
β   ββββββββββββββββββββ
β π² ππππ πΏπ πΏπππΎπΌπππΌπ | πΏππππππΌπΏ π²
β _${usedPrefix}descargasmenu_
β   ββββββββββββββββββββ
β π ππππ πΏπ π½ππππππΏπΌπ | πππΌππΎπ π
β _${usedPrefix}buscarmenu_
β   ββββββββββββββββββββ
β β©οΈ ππΌππΏππ ππππ | πΌππππ β©οΈ
β _${usedPrefix}randommenu_
β   ββββββββββββββββββββ
β π ππππ +18 | πΎππππΌππΏπ +18 π
β _${usedPrefix}hornymenu_
β   ββββββββββββββββββββ
β βοΈ ππππ πππ βοΈ
β _${usedPrefix}rpgmenu_
β   ββββββββββββββββββββ
β π ππππ ππππππππΌπππ(πΌ) | πππππ π
β _${usedPrefix}ownermenu_
β   ββββββββββββββββββββ
β π ππππππππ, πΎπππΏππΎπππππ 
β π πππππΌπΎππΏπΌπΏ π
β _TΓ©rminos_
β°ββββββββββββββββββββ¬£`

const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
} 
await conn.sendMessage(m.chat, { text: menu, mentions: [m.sender] }, { quoted: fkontak, m })
await conn.sendMessage(m.chat, { text: menulista, mentions: [m.sender] }, { quoted: fkontak, m })
	
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu|menΓΊ|memu|memΓΊ|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
//handler.register = true
handler.exp = 50
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = "π *BIENVENIDO(A) | WELCOME* π"
  if (time >= 4) {
    res = "π *Buenos DΓ­as | Good Morning* β"
  }
  if (time >= 11) {
    res = "ποΈ *Buenas Tardes | Good Afternoon* π€οΈ"
  }
  if (time >= 15) {
    res = "π *Buenas tardes | Good Afternoon* π₯οΈ"
  }
  if (time >= 17) {
    res = "π *Buenas noches | Good Evening* π«"
  }
  return res
}*/

