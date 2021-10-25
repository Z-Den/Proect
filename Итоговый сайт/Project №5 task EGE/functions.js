function count_digits(n) {
	let c = 0
	while(n >= 1){
		let y = n % 2
		if(y >= 1){ //(y % 2 >= 1)
			c++
		}
		n /= 2
	}
	return c
}

function Parity(n) {
	let r = n
	if(count_digits(r) % 2 >= 1){
		return 2 * r + 1
	}else{
		return r * 2
	}
}

function Duplicate(n) {
	if(n % 2 >= 0 && n % 2 < 1){
		return 2 * n
	}else{
		return 2 * n + 1
	}	
}

function TwoLastBits(n, rand) {
	if(rand % 2 >= 1){
		if(n % 2 >= 0 && n % 2 < 1){
			return n * 4
		}else{
			return n * 4 + 3
		}
	}else{
		if(n % 2 >= 0 && n % 2 < 1){
			return n * 4 + 1
		}else{
			return n * 4 + 2
		}
	}
}

function getRbyParity({s, N, x, l}){
	let R = N
	let S = s
	
	while(S){
		if(count_digits(R) % 2 >= 1){
			R = R * 2 + 1
		}else{
			R *= 2
		}
		S--
	}
	// debugger
	if(l == 3){
		if(R >= x){
			N--
			R = getRbyParity({s, N, x, l})
		}
		return R
	}
	if(l == 2){
		if(R <= x){
			N++
			R = getRbyParity({s, N, x, l})
		}
		return N
	}
	if(l == 1){
		if(R <= x){
			N++
			R = getRbyParity({s, N, x, l})
		}
		return R
	}
}

function getRbyDuplAndParity({s, N, x, l}){
	let R = N
	let S = s

	R = Duplicate(R)
	S--
	
	while(S){
		if(count_digits(R) % 2 >= 1){
			R = R * 2 + 1
		}else{
			R *= 2
		}
		S--
	}
	if(l == 3){
		if(R >= x){
			N--
			R = getRbyDuplAndParity({s, N, x, l})
		}
		return R
	}
	if(l == 2){
		if(R <= x){
			N++
			R = getRbyDuplAndParity({s, N, x, l})
		}
		return N
	}
	if(l == 1){
		if(R <= x){
			N++
			R = getRbyDuplAndParity({s, N, x, l})
		}
		return R
	}
}

function getRbyParityandDupl({N, x, l}){
	let R = N

	if(count_digits(R) % 2 >= 1){
		R = R * 2 + 1
	}else{
		R *= 2
	}
	R = Duplicate(R)

	if(l == 3){
		if(R >= x){
			N--
			R = getRbyParityandDupl({N, x, l})
		}
		return R
	}
	if(l == 2){
		if(R <= x){
			N++
			R = getRbyParityandDupl({N, x, l})
		}
		return N
	}
	if(l == 1){
		if(R <= x){
			N++
			R = getRbyParityandDupl({N, x, l})
		}
		return R
	}
}

function getRbyTwoLastBits({N, random, x, l}){
	let R = TwoLastBits(N, random)

	if(l == 3){
		if(R >= x){
			N--
			R = getRbyTwoLastBits({N, random, x, l})
		}
		return R
	}
	if(l == 2){
		if(R <= x){
			N++
			R = getRbyTwoLastBits({N, random, x, l})
		}
		return N
	}
	if(l == 1){
		if(R <= x){
			N++
			R = getRbyTwoLastBits({N, random, x, l})
		}
		return R
	}
}

function toN(R, s) {
	let n = R
	while(s){
		n /= 2
		s--
	}
	return n
}