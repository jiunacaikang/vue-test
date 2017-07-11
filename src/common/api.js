var root = process.env.API_ROOT;
const API = {
	'dev-api':{
		h5:"h5.dev.com",
		pc:"pc.dev.com"
	},
	'test-api':{
		h5:"h5.test.com",
		pc:"pc.test.com"
	},
	'prod-api':{
		h5:"h5.prod.com",
		pc:"pc.prod.com"
	}
}
export default API[root]