export default {
	isMoile:function() {
        var sUserAgent = navigator.userAgent.toLowerCase(),
        	bIsIpad = sUserAgent.match(/ipad/i) == "ipad",
        	bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os",
        	bIsMidp = sUserAgent.match(/midp/i) == "midp",
        	bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4",
        	bIsUc = sUserAgent.match(/ucweb/i) == "ucweb",
        	bIsAndroid = sUserAgent.match(/android/i) == "android",
        	bIsCE = sUserAgent.match(/windows ce/i) == "windows ce",
        	bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
            return true;
        } return false;
    },
    deepCopy:function(obj,c){
    	var c = c || (obj instanceof Object?{}:[]); 
	    for (var i in obj) { 
	        if(!obj.hasOwnProperty(i)){ //只对本身属性和方法进行copy
	            continue;  
	        }  
	        if (obj[i] && typeof obj[i] === 'object') {  //Object or Array except null
	            c[i] = (obj[i].constructor === Array) ? [] : {};  
	            this.deepCopy(obj[i], c[i]);  
	        } else {  
	            c[i] = obj[i];  
	        }  
	    }  
	    return c;  
	},
	arrUnique:function(arr){
		var res = [];
 		var hash = {};
 		for(var i = 0; i < arr.length; i++){
 			if(!hash[arr[i]]){
 				res.push(arr[i]);
 				hash[arr[i]] = 1;
 			}
 		}
 		return res;	
	}
}