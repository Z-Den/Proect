document.addEventListener('DOMContentLoaded', () =>{

	let quest = document.getElementById('qstbtn')
	let cont = document.getElementById('cont')

	quest.addEventListener('click',()=>{
		let n = document.getElementById('n').value
		let data = getData()
		let text = generate(data)
		showMessage(n)
	})
})
function generate(data) {
	return `Фотокамера делает снимки каждые ${data.t} секунд(-ы), cодержащие ${data.k} оттенков. 
	Размер составляет ${data.w} * ${data.h} пикселей. 
	Все полученные изображения и коды пикселей внутри одного изображения записываются подряд, никакая дополнительная информация не сохраняется, данные не сжимаются.
	Сколько Мбайтов нужно выделить для хранения всех изображений, полученных за сутки?`
}

function getData() {
	let pwp = Math.floor((Math.random() * 10) % (9 - 5) + 6)
	let pww = Math.floor((Math.random() * 10) % (10 - 6) + 5)
	let pwh = Math.floor((Math.random() * 10) % (10 - 6) + 5)
	let k = Math.pow(2,pwp)
	let t = Math.floor((Math.random() * 10) % (9 - 3) + 3)
	let w = Math.pow(2,pww) + k
	let h = Math.pow(2,pwh) + Math.pow(2,t)
	return {
		t: t,
		w: w,
		h: h,
		k: k
	}
}

function showMessage(k) {
	let text = generate(getData())
	cont.innerHTML += `<div> ${text} </br> <input type="number"> <button id="answbtn">Ответить</button> </div>`
	if (k != 1){
		showMessage(--k)
	}
}