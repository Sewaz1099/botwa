const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, Browsers } = require('@adiwajshing/baileys')
const { color } = require('./lib/color')
const { qrcode, error } = require("qrcode-terminal")
const fs = require('fs')
const figlet = require('figlet')
const moment = require('moment-timezone')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)

let revoke = JSON.parse(fs.readFileSync('./src/antirevoke.json'))
let fakeimage = fs.readFileSync("./src/aqul.jpeg")
blocked = []
		
require('./index.js')
nocache('./index.js', module => console.log(color(`${module} is now updated!`)))

const starts = async (client = new WAConnection()) => {
  let authofile = './session.json'
  client.logger.level = 'warn'
  client.browserDescription=Browsers.appropriate("Firefox")
	console.log(color(figlet.textSync('WhatsApp Bot', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('[ Recode By Me ]'))
	client.on('qr', qr => {
        //qrcode.generate(qr, { small: true })
        console.log(color('[ BOT ]'), color('Scan Qr'))
    })
	fs.existsSync(authofile) && client.loadAuthInfo(authofile)
	client.on('connecting', () => {
		console.log(color('[ BOT ]', 'gold'), color('Connecting...', 'magenta'))
	})
	client.on('open', () => {
		console.log(color('[ BOT ]', 'gold'), color('Connect', 'aqua'))
	})
	await client.connect({timeoutMs: 30*1000})
    fs.writeFileSync(authofile, JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

client.on('chat-update', async (message) => {
        require('./index.js')(client, message)
    })
client.on('CB:Blocklist', json => {
      if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
client.on('CB:action,,battery', json => {
	global.batteryLevelStr = json[2][0][1].value
    global.batterylevel = parseInt(batteryLevelStr)
	baterai = batterylevel
    if (json[2][0][1].live == 'true') charging = true
    if (json[2][0][1].live == 'false') charging = false
        console.log(json[2][0][1])
		console.log(color('Baterai : ' + batterylevel+'%'))
	})
	global.batrei = global.batrei ? global.batrei : []
client.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
		})
client.on('message-delete', async (m) => {
    if (!revoke.includes(m.key.remoteJid)) return
    if (m.key.fromMe) return 
    jem = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    tgl = new Date
    time = tgl.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })
    krah = await client.sendMessage(m.key.remoteJid, `「 *ANTIDELETE* 」\n\n• *Name:* ${client.getName(m.participant, true)}\n• *Number:* @${m.participant.split("@")[0]}\n• *Time:* ${jem}\n• *Date:* ${time}\n\n_Pesan yg dihapus, terlampir di bawah_`, MessageType.text, {thumbnail: fakeimage, quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
     client.copyNForward(m.key.remoteJid, m.message, true, {quoted: krah, sendEphemeral:true, thumbnail:fakeimage}).catch(e => console.log(e, m))
    console.log(m.message)
    })
}
/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
