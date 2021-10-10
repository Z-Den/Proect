document.addEventListener('DOMContentLoaded',() =>{
		function toN(R, s) {
		let n = R
		while(s){
			n /= 2
			s--
		}
		return n
	}

	function Digits_Count(n) {
		let c = 0
		while(n){
			let y = n % 2
			if(y % 2 === 1){
				c++
			}
			n /= 2
		}
		return c
	}

	function Parity(n) {
		let r = n
		if(Digits_Count(r) % 2 == 1){
			return 2 * r + 1
		}else{
			return r * 2
		}
	}

	function Duplicate(n) {
		if(n % 2 === 0){
			return 2 * n
		}else{
			return 2 * n + 1
		}	
	}

	function TwoLastBits(n, rand) {
		if(rand % 2 === 1){
			if(n % 2 === 0){
				return n * 4
			}else{
				return n * 4 + 3
			}
		}else{
			if(n % 2 === 0){
				return n * 4 + 1
			}else{
				return n * 4 + 2
			}
		}
	}
	let getRby3or2xParity(s, n){
		while(s){
			if(count_digits(n) % 2 === 1){
	            n = n * 2 + 1
	        }else{
	            n *= 2
	        }
	        s--
		}
		return n
	}
	let getrbyDupland2or1xParity(s, n){
		n = Duplicate(n)
		while(s){
			if(count_digits(n) % 2 === 1){
	            n = n * 2 + 1
	        }else{
	            n *= 2
	        }
	        s--
		}
		return n	
	}

	let getRbyParityandDupl(n){
		if(count_digits(n) % 2 === 1){
	        n = n * 2 + 1
	    }else{
	        n *= 2
	    }
	    n = Duplicate(n)

	    return n
	}

	let getRbyTwoLastBits(n, rand){
		n = TwoLastBits(n, rand)

		return n
	}

	let getN = {
		1: toN(1),
		2: toN(2),
		3: toN(3)
	}
	let getanswer = {

	}
})