//https://testnets-api.opensea.io/api/v1/asset/0x375df763cd7b87e3ffb8efad812aae088553664c/1/?force_update=true
const axios = require("axios")

const url =
	"https://api.opensea.io/api/v1/asset/0x9712228ceeda1e2ddde52cd5100b88986d1cb49c/"
let startTokenID = 1000
const endTokenID = 2000

setInterval(async () => {
	if (startTokenID > endTokenID) return
	try {
		await axios.get(url + startTokenID + "/?force_update=true")
	} catch (error) {
		console.log(error)
		return
	}

	console.log("Wulfz #" + startTokenID + " complete")
	startTokenID++
}, 4000)
