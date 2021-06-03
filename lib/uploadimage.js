const fetch = require('node-fetch')
const { default: Axios } = require('axios')
const fs = require('fs')
const FormData = require('form-data')
const { fromBuffer } = require('file-type')

const uptotele = async (media) => new Promise(async (resolve, reject) => {
	try {
		let { ext } = await fromBuffer(media)
		console.log('Uploading image to server telegra.ph')
		let form = new FormData()
		form.append('file', media, 'tmp.' + ext)
		await fetch('https://telegra.ph/upload', {
			method: 'POST',
			body: form
		})
		.then(res => res.json())
		.then(res => {
			if (res.error) return reject(res.error)
			resolve('https://telegra.ph' + res[0].src)
			console.log('ok sukses')
		})
		.catch(err => reject(err))
	} catch (e) {
		return console.log(e)
	}
})

function uptonaufal (filename, name) {
    var image = fs.createReadStream(filename)
    var form = new FormData()
    form.append('image', image, name)
    const upload = fetch('https://storage.naufalhoster.xyz', {
        method: 'POST',
        body: form
    }).then((response) => response.json())
        .then((result) => {
            return result
        })
        .catch(e => {
            return e
        })
    return upload
}

const uploadFile = (path) => new Promise((resolve, reject) => {
     const {default: Axios} = require('axios')
     const FormData = require('form-data')
     const fd = new FormData()
     fd.append('sampleFile', fs.createReadStream(path))
     Axios({
          method: 'POST',
          url: 'https://pecundang.herokuapp.com/upload2',
          data: fd,
          headers: {
               'user-agent': 'MRHRTZ-ZONE :D',
               'content-type': `multipart/form-data; boundary=${fd._boundary}`
          }
     }).then(({ data }) => resolve(data)).catch(reject)
})

const uploadImages = (buffData, type) => {
    return new Promise(async (resolve, reject) => {
        const { ext } = fromBuffer(buffData)
        const filePath = 'sticker/sampah.' + ext
        fs.writeFile(filePath, buffData, { encoding: 'base64' }, (err) => {
            if (err) return reject(err)
            console.log('Uploading image to server telegra.ph')
            const fileData = fs.readFileSync(filePath)
            const form = new FormData()
            form.append('file', fileData, 'tmp.' + ext)
            fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
            .then(res => res.json())
            .then(res => {
                if (res.error) return reject(res.error)
                resolve('https://telegra.ph' + res[0].src)
            })
            .then(() => fs.unlinkSync(filePath))
            .catch(err => reject(err))
        })
    })
}
exports.uploadImages = uploadImages
exports.uptotele = uptotele
exports.uptonaufal = uptonaufal
exports.uploadFile = uploadFile