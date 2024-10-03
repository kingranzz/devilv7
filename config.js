/* 

 - Created by : Anggazyy
 - Base by : Siputzxx - Ziyo
 - Thanks : RxhL - Alwaysaqio - X Developer
 
 */

const fs = require('fs')
const { color } = require('./lib/myfunc')

global.owner = '6281210473431'
global.nomerowner = ["6283137657067"]
global.packname = 'Di Buat Oleh'
global.author = '𝐗 Ruzzy'
global.urldb = ''; // kosongin aja
global.linkfoto = 'https://iili.io/d6eMtv2.md.jpg'
global.namaowner = 'X Ruzzy'
global.idsaluran = '120363301756685796@newsletter'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
