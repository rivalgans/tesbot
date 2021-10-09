exports.gameMenu = (prefix) => {
    return `
 * GAME-MENU *
 
> ${prefix}slot
> ${prefix}limitgame
> ${prefix}gelud @tag
> ${prefix}tictactoe @tag
> ${prefix}siapaaku
> ${prefix}family100
> ${prefix}kuismath
> ${prefix}asahotak
> ${prefix}tebaklirik
> ${prefix}tebaklagu
> ${prefix}tebakkata
> ${prefix}susunkata
> ${prefix}kimiakuis
> ${prefix}caklontong
> ${prefix}tebakjenaka
> ${prefix}tebakanime
> ${prefix}tebaktebakan
> ${prefix}tebakgambar
> ${prefix}tebakbendera
> ${prefix}suit *batu/kertas/gunting*
`
}
exports.funMenu = (prefix) => {
    return `
   # FUN-MENU

> ${prefix}mining
> ${prefix}togel
> ${prefix}cekwatak
> ${prefix}cekmati [nama]
> ${prefix}wangy [nama]
> ${prefix}citacita
> ${prefix}toxic
> ${prefix}truth
> ${prefix}dare
> ${prefix}apakah
> ${prefix}bisakah
> ${prefix}kapankah
> ${prefix}rate
> ${prefix}jadian
> ${prefix}cantik
> ${prefix}ganteng
> ${prefix}beban
> ${prefix}babi
> ${prefix}cekganteng
> ${prefix}cekcantik

`
}
exports.otherMenu = (prefix) => {
    return `
  #  OTHER-MENU 

> ${prefix}brainly *query*
> ${prefix}shopee *product*
> ${prefix}playstore *query*
> ${prefix}ssweb *query*
> ${prefix}google *query*
> ${prefix}image *query*
> ${prefix}pinterest *query*
> ${prefix}nulis *teks*
> ${prefix}iguser *ussername*
> ${prefix}igstalk *username*
> ${prefix}githubstalk *username*
> ${prefix}tiktokstalk *ussername*
> ${prefix}img2url *reply foto*
> ${prefix}ytsearch *query*

`
}
exports.stickerMenu = (prefix) => {
    return `
  # STICKER-MENU

> ${prefix}dadu
> ${prefix}doge
> ${prefix}toimg
> ${prefix}patrick
> ${prefix}garwgura
> ${prefix}ttg *teks*
> ${prefix}attp *teks*
> ${prefix}stickeranime
> ${prefix}semoji *emoji*
> ${prefix}sticker *reply foto/video*
> ${prefix}smeme *teks|teks*
> ${prefix}swm *pack|author*
> ${prefix}take *pack|author* 
> ${prefix}tovideo *reply sgif*

`
}
exports.wibuMenu = (prefix) => {
    return `
  # WIBU-MENU

> ${prefix}loli
> ${prefix}manga
> ${prefix}anime 
> ${prefix}lolivideo
> ${prefix}husbu
> ${prefix}waifu
> ${prefix}milf
> ${prefix}neko
> ${prefix}kanna
> ${prefix}sagiri
> ${prefix}hentai
> ${prefix}cosplay
> ${prefix}wallnime
> ${prefix}kusonime
> ${prefix}megumin
> ${prefix}otakudesu
> ${prefix}doujindesu
> ${prefix}storyanime
> ${prefix}nakanomiku
> ${prefix}nakanonino
> ${prefix}nakanoitsuki
> ${prefix}otakuongoing
> ${prefix}nhentai *code*
> ${prefix}nekopoi *link*
> ${prefix}nekopoi3d
> ${prefix}nekopoicosplay
> ${prefix}nekopoisearch

`
}
exports.antiMenu = (prefix) => {
    return `
  # ANTI-MENU
> ${prefix}antigay [ 0 / 1 ] 
> ${prefix}antibocil [ 0 / 1 ] 
> ${prefix}antiwibu [ 0 / 1 ] 
> ${prefix}antijawa [ 0 / 1 ] 
> ${prefix}antivirusmenu

`
}
exports.ownerMenu = (prefix) => {
    return `
  # OWNER-MENU

> ${prefix}bc *teks*
> ${prefix}term
> ${prefix}eval
> ${prefix}reset
> ${prefix}clearall
> ${prefix}leaveall
> ${prefix}join *link gc*
> ${prefix}shutdown
> ${prefix}getquoted
> ${prefix}addupdate *fiturnya*
> ${prefix}exif *nama|author*
> ${prefix}sewa add/del *waktunya*
> ${prefix}premium add @tag|nomor
> ${prefix}premium del @tag|nomor

`
}

exports.groupMenu = (prefix) => {
    return`
  # GROUP-MENU

> ${prefix}groupsetting
> ${prefix}afk *alasan*
> ${prefix}ceksewa
> ${prefix}kickall
> ${prefix}infogrup
> ${prefix}promote
> ${prefix}demote
> ${prefix}listonline
> ${prefix}tagall *teks*
> ${prefix}leave
> ${prefix}kick *reply*
> ${prefix}add *+62xxxxxx*
> ${prefix}setgrupname
> ${prefix}setppgrup
> ${prefix}setdesc
> ${prefix}sider *reply chat bot*
> ${prefix}hidetag *teks/reply teks*
> ${prefix}${prefix}antigay [ 0 / 1 ] 
> ${prefix}${prefix}antibocil [ 0 / 1 ] 
> ${prefix}${prefix}antiwibu [ 0 / 1 ] 
> ${prefix}${prefix}antijawa [ 0 / 1 ] 
> ${prefix}antivirtex
> ${prefix}antialakazam
> ${prefix}antixvirus
> ${prefix}antivirustebel
> ${prefix}anticollosal
> ${prefix}antiviruschina

`
}
exports.antivirusMenu = (prefix) => {
    return`
  # ANTI VIRUS-MENU
> ${prefix}antivirtex
> ${prefix}antialakazam
> ${prefix}antixvirus
> ${prefix}antivirustebel
> ${prefix}anticollosal
> ${prefix}antiviruschina

`
}
exports.downloadMenu = (prefix) => {
    return `
  *DOWNLOAD-MENU*

> ${prefix}fb 
> ${prefix}igdl 
> ${prefix}igdl2 
> ${prefix}twitter 
> ${prefix}tiktok 
> ${prefix}play 
> ${prefix}ythd 
> ${prefix}ytmp3 
> ${prefix}ytmp4 
> ${prefix}soundcloud 
> ${prefix}tiktoknowm 
> ${prefix}tiktokaudio
> ${prefix}mediafire 
> ${prefix}nhentaipdf *code*

`
}
exports.rulesBot = (prefix) => {
    return `
 ManikBot merupakan suatu program bot whatsapp, yang menggunakan engine nodejs v14.x.x
Adapun ketentuan untuk memakai ManikBot. :
*1.* Pengguna dapat menggunakan semua perintah/command dengan batasan limit sebanyak 25 setiap pengguna terkecuali user premium dengan limit tanpa batas/unlimited, dan tidak melakukan spam terhadap bot.
*2.* Limit akan di reset oleh owner satu kali 24 jam
*3.* Bot dapat memblokir pengguna/user melanggar rules yang ada di bot ini, rules yang harus dipatuhi oleh pengguna antara lain :
  • Tidak melakukan panggilan telepon/video call terhadap Bot
  • Tidak melakukan spam perintah/command yang ada dalam bot ini
*4.* Dilarang keras mengirim pesan V dan semacamnya yang membuat server down ataupun bot crash
*5.* Pengguna yang mengirim hal atau data pribadi tidak akan disimpan oleh bot ini, dan tidak akan bertanggung jawab atas data pribadi tersebut!

_Note : Bot ini menggunakan autoread atau langsung membaca pesan yang pengguna kirim_

Regards : AryaManik
Owner  Bot:
wa.me/6285737134572
`
}
exports.infoMenu = (prefix) => {
return `
  # INFO-MENU
  
> ${prefix}update
> ${prefix}level
> ${prefix}rules
> ${prefix}profile
> ${prefix}waktu
> ${prefix}botstat
> ${prefix}sewabot
> ${prefix}listsewa
> ${prefix}owner
> ${prefix}ping
> ${prefix}runtime
> ${prefix}donasi
> ${prefix}leaderboard
> ${prefix}cekpremium
> ${prefix}listpremium
> ${prefix}sourcecode
> ${prefix}bugreport *keluhan*

`
} 
