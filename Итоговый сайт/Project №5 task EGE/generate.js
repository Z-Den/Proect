document.addEventListener('DOMContentLoaded', () =>{
	
	let quest = document.getElementById('qstbtn')
	let cont = document.getElementById('cont')
	let hintbn = document.getElementById('hintbtn')
	let error = document.getElementById('error_popup')
	let isOpen = false
	
	
	hintbn.addEventListener('click', ()=> {
		let hint = document.getElementById('hint')

		if(!isOpen){
			hint.style.display = 'block'
			hintbn.innerHTML = "Скрыть ответ"
		}
		else{
			hint.style.display = 'none'
			hintbn.innerHTML = "Посмотреть ответ"
		}

		isOpen = !isOpen
	})
	
	document.addEventListener('keypress',()=>{
		if(event.which || event.keyCode) {
			if ((event.which == 13) || (event.keyCode == 13)) {
			quest.click();
			return false;
			}
		}
		else {
			return true;
		}
	})

	quest.addEventListener('click',()=>{
		let n = document.getElementById('n').value
		let c = 0
		error = document.getElementById('error_popup')
		if(n <= 0){
			error.style.display = "inline"
		}else{
			cont.innerHTML = ''
			

			while (n){
				let s = pickPunkts()
				let l = pickConditonNumber()
				let x = getX()
				let random = getRandomItem()
				let task = getTask(s,random)
				let condition = getConditon(l,x)
				let text = generate(task,condition)
				let getN = {
					1: toN(x, 2),
					2: toN(x, 2),
					3: toN(x, 3),
				}
				
				let N = Math.floor(getN[s])
				let interR = {
					1: {
						1: spec(N, random),
						2: spec(N, random),
						3: spec(N, random),
						4: spec(N, random),
					},
					2:{
						1: duplicateXparity(N, s),
						2: Parity(N, s),
						3: parityXduplicate(N, s),
						4: Parity(N, s),
					},
					3:{
						1: duplicateXparity(N, s),
						2: Parity(N, s),
						3: Parity(N, s),
						4: duplicateXparity(N, s),
					},
				}
				let params = {N, random, s}
				let R = interR[s][random]
				c++
				cont.innerHTML +=
				`<div class = "row">
					<div class "col">
						<div class="card-panel">
							<span class="blue-text text-darken-2">
								№${c}. ${text} </br> Ответ: <div class="answer">${R}</div>
							</span>
						</div>
					</div>
				<div>`
				n--
			}
			cont.innerHTML += 
			`<div id = "answbtn">
				<button class="waves-effect waves-teal btn-flat" type="submit" name="action">
					посмотреть ответы
				</button>
			</div>` +

			`<div id = "addbtn">
				<button class="waves-effect waves-teal btn-flat" type="submit" name="action">
					Ввести ещё раз
				</button>
			</div>` +

			`<a href="#" title="Вернуться к началу" class="topbutton">НАВЕРХ</a>`

			let answbtn = document.getElementById("answbtn")
			let addbtn = document.getElementById("addbtn")

			answbtn.addEventListener('click',()=>{

				let ele = document.getElementsByClassName('answer')

				for (let i = 0; i < ele.length; i++ ) {
    				ele[i].style.display = "inline";
				}
				answbtn.innerHTML = ""
				answbtn.innerHTML = ''
			})

			

			addbtn.addEventListener('click',()=>{
				cont.innerHTML = ''
				kolz.style.display = "block"
				example.style.display = "block"
			})

			kolz.style.display = "none"
			example.style.display = "none"
		}
	})
	
	function generate(task,condition) {
		return `<p>На вход алгоритма подаётся натуральное число N. Алгоритм строит по нему новое число R следующим образом.</p> 
		<p> 1) Строится двоичная запись числа N. </br>
		${task}</p> <p>${condition}</p>`
	}

	function getTask(s,random) {
		if (s == 3){
			if (random == 1 || random == 4){
				return `
				2) К этой записи дописывается (дублируется) последняя цифра.</br>
				3) Затем справа дописывается бит чётности: 0, если в двоичном коде полученного числа
				 чётное число единиц, и 1, если нечётное.</br>
				4) К полученному результату дописывается ещё один бит чётности.`
			}
			if (random == 2 || random == 3){
				return `2)Складываются все цифры двоичной записи числа. Если сумма четная, то в конец
				 числа (справа) дописывается 0, а если нечетная, то дописывается 1. Например, запись
				  числа 10 преобразуется в запись 101;</br>
				3) К полученному результату применяется еще раз пункт 2 этого алгоритма.</br>
				4) К полученному результату дописывается ещё один бит чётности так, чтобы количество 
				единиц в двоичной записи полученного числа стало чётным.`
			}
		}
		if (s == 2){
			if (random == 2 || random == 4){
				return `2) К этой записи дописывается справа бит чётности: 0, если в 
				двоичном коде числа N было чётное число единиц, и 1, если нечётное.</br>
				3) К полученному результату дописывается ещё один бит чётности.`
			}

			if (random == 1){
				return `2) К этой записи дописывается (дублируется) последняя цифра.</br> 
				3) Затем справа дописывается бит чётности: 0, если в двоичном коде полученного
				 числа чётное число единиц, и 1, если нечётное.`
			}
			if (random == 3){
				return `2) Складываются все цифры двоичной записи числа.
				 Если сумма четная, то в конец числа (справа) дописывается 0, а если нечетная, 
				 то дописывается 1. Например, запись числа 10 преобразуется в запись 100;</br>
				3) К этой записи дописывается (дублируется) последняя цифра.`
			}
		}
		if (s == 1){
			if (random == 1 || random == 3){
				return `2) К этой записи дописываются справа ещё два разряда по следующему правилу: 
				если N чётное, в конец числа (справа) дописываются два нуля, в противном случае справа дописываются две единицы. 
				Например, двоичная запись 1001 числа 9 будет преобразована в 100111.`
			}
			if (random == 2 || random == 4){
				return `2) Затем справа дописываются два разряда: символы 01, если число N чётное, и 10, если нечётное.`
			}
		}
	}

	function getConditon(l,x) {
		if (l == 3){
			return `Укажите максимальное число R, меньшее ${x}, которое может быть получено 
			в результате работы этого алгоритма. В ответе это число запишите в десятичной системе.`
		}
		if (l == 2){
			return `Укажите минимальное число N, после обработки которого 
			автомат получает число, большее ${x}. В ответе это число запишите в десятичной системе.`
		}
		if (l == 1){
			return `Укажите минимальное число R, большее ${x}, которое 
			может быть получено в результате работы этого алгоритма. В ответе это число запишите в десятичной системе.`
		}
	}

	function getX() {
		let x = Math.floor((Math.random() * 1000) % (165 - 85) + 85)//x ∈ [85;165] 80 in total
		return x
	}

	function pickConditonNumber() {
		let l = Math.floor((Math.random() * 10) % (4 - 1) + 1)
		return l
	}

	function pickPunkts() {
		let s = Math.floor((Math.random() * 10) % (4 - 1) + 1)
		return s	
	}
	function getRandomItem() {
		let rand = Math.floor((Math.random() * 10) % (4 - 1) + 1)
		return rand
	}
})