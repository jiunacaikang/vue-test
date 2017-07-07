import api from "../config/api";
import axios from 'axios';

export default {
	getMock:function(url){
		return axios.get(url)
	},
	getApi:function(url,params){

	}
}