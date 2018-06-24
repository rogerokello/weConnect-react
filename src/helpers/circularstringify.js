export default stringify = (x) => {
    let simpleObj={};

		for (let prop in object){
				if (!object.hasOwnProperty(prop)){
						continue;
				}
				if (typeof(object[prop]) === 'object'){
						continue;
				}
				simpleObj[prop] = object[prop];
		}

		return JSON.stringify(simpleObj)
};