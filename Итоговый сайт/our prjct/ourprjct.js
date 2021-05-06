document.addEventListener('DOMContentLoaded', () =>{

	let quest = document.getElementById('qstbtn')
	let cont = document.getElementById('cont')

	quest.addEventListener('click',()=>{
		let n = document.getElementById('n').value
		let c = 0
		cont.innerHTML = ''
		while (n != 0){
			let s = getPunkts()
			let l = getLast()
			let xy = getXY()
			let data1 = getData1(s,l)
			let data2 = getData2(l,xy)
			let text = generate(data1,data2)
			c++
<<<<<<< HEAD
			cont.innerHTML += `<p> <div class="num">${c}</div> <div class="nun">Задание 5</div> 
			${text} </br> <div id="answer"> <input type="number"> 
			<button id="answbtn">Ответить</button></div> </p>`
			n--
		}
		let answerbutton = document.getElementById('answbtn')
		let answer = document.getElementById('answer')
=======
			cont.innerHTML += `<div class="card-panel"> <span class="blue-text text-darken-2">№${c}. ${text} </br> <div id="answer"> <input type="number"> </span>
			</div></div>`
			n--
		}
		cont.innerHTML += `<button class="btn waves-effect waves-light" type="submit" name="action" id="answbtn">Ответить</button>`
		let answer = document.getElementById('answbtn')
		let answers = document.getElementById('answer')
>>>>>>> 469f8759dd8b30b3bca2421611ab7ab7937ca93d

		answerbutton.addEventListener('click',()=>{
			if(s == 4 && (l != 4 || l != 1)){

			}
			answer.innerHTML = "Неправильно, попробуй еще раз"		
		})
		kolz.style.display = "none"
	})
})
function generate(data1,data2) {
	return `<p>На вход алгоритма подаётся натуральное число N. Алгоритм строит по нему новое число R следующим образом.</p> 
	<p> 1) Строится двоичная запись числа N. </br>
	${data1}</p> <p>${data2}</p>`
}

function getData1(s,l) {
	if (s == 4){
		if (l == 4 || l ==1){
			return `
			2) К этой записи дописывается (дублируется) последняя цифра.</br>
			3) Затем справа дописывается бит чётности: 0, если в двоичном коде полученного числа
			 чётное число единиц, и 1, если нечётное.</br>
			4) К полученному результату дописывается ещё один бит чётности`
		}
		else{
			return `2)Складываются все цифры двоичной записи числа. Если сумма четная, то в конец
			 числа (справа) дописывается 1, а если нечетная, то дописывается 0. Например, запись
			  числа 10 преобразуется в запись 100;</br>
			3) К полученному результату применяется еще раз пункт 2 этого алгоритма.</br>
			4) К полученному результату дописывается ещё один бит чётности так, чтобы количество 
			единиц в двоичной записи полученного числа стало чётным.`
		}
	}
	if (s == 3){
		if (l == 2 || l == 4){
			return `2) К этой записи дописывается справа бит чётности: 0, если в 
			двоичном коде числа N было чётное число единиц, и 1, если нечётное.</br>
			3) К полученному результату дописывается ещё один бит чётности.`	
		}
		if(l == 1){
			return `2) К этой записи дописывается (дублируется) последняя цифра.</br> 
			3) Затем справа дописывается бит чётности: 0, если в двоичном коде полученного
			 числа чётное число единиц, и 1, если нечётное.`
		}else{
			return `2) Складываются все цифры двоичной записи числа.
			 Если сумма четная, то в конец числа (справа) дописывается 1, а если нечетная, 
			 то дописывается 0. Например, запись числа 10 преобразуется в запись 100;</br>
			3) К этой записи дописывается (дублируется) последняя цифра.`
		}
	}
	if (s == 2){
		if (l == 1 || l == 3){
			return `2) К этой записи дописываются справа ещё два разряда по следующему правилу: 
			если N чётное, в конец числа (справа) дописываются два нуля, в противном случае справа дописываются две единицы. 
			Например, двоичная запись 1001 числа 9 будет преобразована в 100111.`
		}
		else{
			return `2) Затем справа дописываются два разряда: символы 01, если число N чётное, и 10, если нечётное.`
		}
	}
}

function getData2(l,xy) {
	if (l == 4){
		return `Укажите максимальное число R, меньшее ${xy.x}, которое может быть получено 
		в результате работы этого алгоритма. В ответе это число запишите в десятичной системе.`
	}
	if (l == 3){
		return `Укажите количество чисел R, которые могут быть 
		получены в результате работы этого алгоритма, и лежат в диапазоне ${xy.x} ≤ R ≤ ${xy.y}.`
	}
	if (l == 2){
		return `Укажите минимальное число N, после обработки которого 
		автомат получает число, большее ${xy.x}. В ответе это число запишите в десятичной системе.`
	}
	if (l == 1){
		return `Укажите минимальное число R, большее ${xy.x}, которое 
		может быть получено в результате работы этого алгоритма. В ответе это число запишите в десятичной системе.`
	}
}

function getXY() {
	let x = Math.floor((Math.random() * 1000) % (255 - 175) + 85)
	let y = Math.floor((Math.random() * 1000) % (255 - 175) + 85) + 50
	return{
		y: y,
		x: x
	}
}

function getLast() {
	let l = Math.floor((Math.random() * 10) % (5 - 1) + 1)
	return l
}

function getPunkts() {
	let s = Math.floor((Math.random() * 10) % (4 - 1) + 2)
	return s	
}