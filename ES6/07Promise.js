// Promise是一个构造函数，自己身上有all,reject,resolve,race方法，原型上有then、catch等方法
let p = new Promise((resolve,reject)=>{
	// 做一些异步操作
	setTimeout(()=>{
	/* 	let res = {
			ok:1,
			data:{
				name:"张三"
			}
		} */
		let res = {
			ok:0,
			error:new Error('有错')
		}
		if(res.ok === 1){
			resolve(res.data);
		}else{
			reject(res.error.message)
		}

	}, 1000)
})


p.then((data)=>{
	console.log(data);
    return data;
},(error)=>{
	console.log(error)
}).then(data=>{
    console.log(data);
})
