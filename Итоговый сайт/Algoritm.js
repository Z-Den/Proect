document.addEventListener('DOMContentLoaded', () =>{

	let quest = document.getElementById('qstbtn')
	let cont = document.getElementById('cont')

	quest.addEventListener('click',()=>{
		let n = document.getElementById('n').value
		console.log(n)
		let data = getData()
		let text = generate(data)
		while (n != 0){
			cont.innerHTML += `<div> ${text} </div>`
			n --
		}
	})
})
function generate(data) {
	return `Фотокамера делает снимки каждые ${data.t} секунд(-ы), cодержащее ${data.k} оттенков. 
	Размер составляет ${data.w} * ${data.h} пикселей. 
	Все полученные изображения и коды пикселей внутри одного изображения записываются подряд, никакая дополнительная информация не сохраняется, данные не сжимаются.
	Сколько Мбайтов нужно выделить для хранения всех изображений, полученных за сутки?`
}

function getData() {
	let pwp = Math.floor((Math.random() * 10) % (9 - 5) + 6)
	let pww = Math.floor((Math.random() * 10) % (10 - 6) + 5)
	let pwh = Math.floor((Math.random() * 10) % (10 - 6) + 5)
	let k = Math.pow(2,pwp)
	let t = Math.floor((Math.random() * 10) % (9 - 4) + 4)
	let w = Math.pow(2,pww) + k
	let h = Math.pow(2,pwh) + Math.pow(2,t)
	return {
		t: t,
		w: w,
		h: h,
		k: k
	}
}