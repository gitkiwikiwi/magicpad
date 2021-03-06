//promise wrapper for steganography canvas
const resolveImg = function(src){
	return new Promise(resolve => {
		const img = document.createElement('img');
		img.onload = function(){
			resolve(img);
			$(img).remove();
		}
		img.src = src;
	})
}

//add anon CORS
const resolveImgCORS = function(src){
	return new Promise(resolve => {
		const img = document.createElement('img');
		img.setAttribute('crossOrigin', 'anonymous');
		img.onload = function(){
			resolve(img);
			$(img).remove();
		}
		img.src = src;
	})
}

//promise wrapper for decrypting attachment
const resolveLoadFileText = function($type){
	const file = $type[0].files[0];
	return new Promise(resolve => {
		let reader = new FileReader();
		reader.onload = function(){
			resolve(reader.result);
		}
		if(file != undefined){
			reader.readAsText(file);
		}
	})
}

//promise wrapper for encrypting attachment
const resolveLoadFileBuffer = function($type){
	const file = $type[0].files[0];
	return new Promise(resolve => {
		let reader = new FileReader();
		reader.onload = function(){
			resolve(reader.result);
		}
		if(file != undefined){
			reader.readAsArrayBuffer(file);
		}
	})
}

//promise wrapper for importing steg key file
const resolveLoadFileURL = function($type){
	return new Promise(resolve => {
		 const file = $type[0].files[0];
		 let reader = new FileReader();
		 reader.onload = function(e){
			 const result = e.target.result;
			 const returnObj = {
				 file : file,
				 reader : reader,
				 result : result
			 }
			 resolve(returnObj);
		 }
		 if(file != undefined){
			 reader.readAsDataURL(file);
		 }
	})
}
