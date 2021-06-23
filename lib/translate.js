const translate = require('translate-google-api')
const tld = 'cn'

module.exports = doing = (text, lang) => new Promise((resolve, reject) => {
    console.log(`Translating to ${lang}...`)
    translate(text, {tld, to: lang})
    .then((res) => resolve(res[0]))
    .catch((err) => reject(err))
})