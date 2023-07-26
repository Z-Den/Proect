///document.addEventListener('DOMContentLoaded',() =>{
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
	function Duplicate(n) {
		if(n % 2 === 0){
			return 2 * n
		}else{
			return 2 * n + 1
		}	
	}
	function Parity(n, s){
		while(s){
			if(Digits_Count(n) % 2 === 1){
	            n = n * 2 + 1
	        }else{
	            n *= 2
	        }
	        s--
		}
		return n
	}
	function duplicateXparity(n, s){
		n = Duplicate(n)
		n = Parity(s, n)

		return n	
	}
	function parityXduplicate(n, s){
		n = Parity(s, n)
	    n = Duplicate(n)

	    return n
	}
	function spec(n, random){
		if(random % 2 === 1){
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
	function isright(obj)
	{
		if (obj.value>100) obj.value=100; 
	}

///})