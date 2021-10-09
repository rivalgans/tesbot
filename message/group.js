const {
	MessageType
} = require("@adiwajshing/baileys");
const fs = require("fs-extra")
const axios = require("axios")
const { getBuffer } = require('../lib/myfunc')
const { color, bgcolor } = require('../lib/color')
const sendMediaURL = async(to, url, text="", mids=[]) =>{
           if(mids.length > 0){
           text = normalizeMention(to, text, mids)
}}
let setting = JSON.parse(fs.readFileSync('./setting.json'))

module.exports = welcome = async (Manik, anu) => {
	    const welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
	    const isWelcome = welkom.includes(anu.jid)
	    if (!isWelcome) return
		try {
			    mem = anu.participants[0]
			    console.log(anu)
                try {
                pp_user = await Manik.getProfilePicture(mem)
                } catch (e) {
                pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
                try {
                pp_grup = await Manik.getProfilePicture(anu.jid)
                } catch (e) {
                pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            if (anu.action == 'add' && mem.includes(Manik.user.jid)) {
            Manik.sendMessage(anu.jid, 'Halo! Terima Kasih sudah Mengundangku, Jika ingin Menggunakan Bot Ketik !menu', 'conversation')
            }
             if (anu.action == 'add' && !mem.includes(Manik.user.jid)) {
             if (!welkom.includes(anu.jid)) return
                mdata = await Manik.groupMetadata(anu.jid)
                memeg = mdata.participants.length
            	num = anu.participants[0]
                let v = Manik.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                teks = `╔═══ ❰ 「 *WELCOME* 」❱ ════
║ *@${num.split('@')[0]} intro*                            
║┣❥ Nama : 
║┣❥ Umur :
║┣❥ Askot :
║┣❥ Cewe/Cowo?
╚════ ⸨ *Vxc7 Bot* ⸩ ═════`
            let buff = await getBuffer(`https://api.lolhuman.xyz/api/base/welcome?apikey=${setting.lolkey}&img1=${pp_user}&img2=${pp_grup}&background=https://telegra.ph/file/9c41931cada0cfe68b8b7.jpg&username=${encodeURI(anu_user)}&member=${memeg}&groupname= ${encodeURI(mdata.subject)}`)

const welcomebutton = await Manik.prepareMessage(mdata.id, buff, MessageType.image) // change for file type

const buttonsss = [
  {buttonId: '#infogrup', buttonText: {displayText: 'InfoGroup'}, type: 1},
  {buttonId: 'snk', buttonText: {displayText: 'S&K'}, type: 1}
]
const buttonWelcome = {
    contentText: teks,
    buttons: buttonsss,
    footerText: 'Silahkan Baca Desk Dan S&K Disini Ya\nBot By @VallXcode7___',
    headerType: 4, // change for file type
    imageMessage: welcomebutton.message.imageMessage // change for file type
}
await Manik.sendMessage(mdata.id, buttonWelcome, MessageType.buttonsMessage, {contextInfo: {"mentionedJid": [num]}})
        }
            if (anu.action == 'remove' && !mem.includes(Manik.user.jid)) {
            if (!welkom.includes(anu.jid)) return
                mdata = await Manik.groupMetadata(anu.jid)
            	num = anu.participants[0]
                let w = Manik.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                memeg = mdata.participants.length
                out = `@${num.split('@')[0]}\n*Kalo Balik Bawain Gorengan Ya️*`
                buff = await getBuffer(`https://api.lolhuman.xyz/api/base/leave?apikey=${setting.lolkey}&img1=${pp_user}&img2=${pp_grup}&background=https://telegra.ph/file/9c41931cada0cfe68b8b7.jpg&username=${encodeURI(anu_user)}&member=${memeg}&groupname= ${encodeURI(mdata.subject)}`)
                Manik.sendMessage(mdata.id, buff, MessageType.image, {caption: out, contextInfo: {"mentionedJid": [num]}})
            }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	}
