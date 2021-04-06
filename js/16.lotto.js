['a', 'b', 'c', 'd', 'e'].indexOf('a') // 배열.indexOf()


/***************** 글로벌 설정 *******************/



/***************** 사용자 함수 *******************/



/***************** 이벤트 등록 *******************/
$('#bt-lotto').on('click', onLotto)



/***************** 이벤트 콜백 *******************/
function onLotto() {
	var numbers = [],  n
	while (numbers.length < 6) {
		n = Math.floor(Math.random() *45) + 1;
		if(numbers.indexOf(n) === -1){
			numbers.push(n)
		}
	}
	// numbers.sort(function(a, b) { return a - b }) 오름차순
	// numbers.sort(function(a, b) { return b - a }) 내림차순
	numbers.sort(function(a,b) {return a - b})
	$('.display').empty()
	for(i=0; i<6; i++){
		if(numbers[i] <= 10) { color = 'yellow' }
		else if(numbers[i] <= 20) { color = 'blue' }
		else if(numbers[i] <= 30) { color = 'red' }
		else if(numbers[i] <= 40) { color = 'grey' }
		else { color = 'green' }
	$('.display').append('<li class="ball '+color+'">'+numbers[i]+'</li>');
	}
}