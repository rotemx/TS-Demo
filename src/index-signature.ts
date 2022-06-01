
interface IArtistProfile {
	name:string
	age:number
}

interface IArtists_API_Response {
	General:IArtistProfile,
	[artistName:string]:IArtistProfile
}

let API_Response_Dictionary:IArtists_API_Response = {
	eminem    : {
		name: "Marshall Mathers",
		age : 54
	},
	tupac     : {
		name: "Marshall Mathers",
		age : 54
	},
	FiftyCents: {
		name: "Marshall Mathers",
		age : 54
	},
	KanyeWest : {
		name: "Marshall Mathers",
		age : 54
	},
	General   : {
		name: "General",
		age : 54
	}
}
