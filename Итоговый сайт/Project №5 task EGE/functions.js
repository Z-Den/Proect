function toN(R, s){
	let n = R
	while(s){
		n /= 2
		s--
	}
	return n
}

function Digits_Count(n) {
	let c = 0
	while(r){
		let y = n % 2
		if(y % 2 === 1){
			c++
		}
		n /= 2
	}
	return c
}

function Parity(N) {
	let r = N
	if(digits_count(r) % 2 == 1){
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