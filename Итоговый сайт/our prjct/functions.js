function isParity (x) {
	let sum
	while(x!=0){
		sum+=x%2
		x/=2
	}
	if(sum%2===0){
		return 2 * x
	}else{
		return 2 * x + 1
	}
}

function toEx(x){
	return x / 2
}

function Duplicate(x) {
	if(x % 2 === 0){
		return 2 * x
	}else{
		return 2 * x + 1
	}	
}

