/* 
$('.wrapper') 		=> return jquery object
$('.wrapper')[0]	=> return javascript object
$($('.wrapper')[0])	=> return jquery object
$(document.querySelector('.wrapper'))	=> return jQuery object
*/

/* scores[0] = {
	name: '홍길동',
	kor: 80,
	eng: 90,
	math: 85,
	total: 255,
	avg: 85,
	rank: 2
} */


/* 글로벌 설정 */
var scores = []



/* 사용자 함수 */
function scoreRender() {
	//테이블에 점수를 등록
	var i, htmml
	$('.score-tb tbody').empty()
	for (i = 0; i < scores.length; i++) {

		html = '<tr>'
		html += '	<td>' + (i + 1) + '</td>'
		html += '	<td>' + scores[i].name + '</td>'
		html += '	<td>' + scores[i].kor + '점</td>'
		html += '	<td>' + scores[i].eng + '점</td>'
		html += '	<td>' + scores[i].math + '점</td>'
		html += '	<td>' + scores[i].total + '점</td>'
		html += '	<td>' + scores[i].avg + '점</td>'
		html += '	<td>등</td>'
		html += '	<td>'
		html += '		<button class="bt-change">수정</button>'
		html += '		<button class="bt-remove">삭제</button>'
		html += '	</td>'
		html += '</tr>'
		$('.score-tb tbody').append(html)
	}
}


/* 이벤트 등록 */



/* 이벤트 콜백 */
//데이터 저장
function onScoreSubmit(f) {
	var name = f.name.value.trim()/* 문자열 앞뒤의 공백을 없애줌 */
	var kor = f.kor.value.trim()
	var eng = f.eng.value.trim()
	var math = f.math.value.trim()
	if (name === '') {
		alert('이름을 입력하세요.')
		f.name.focus()
		return false /* 더이상 진행하지 않음 */
	}
	if (kor === '') {
		alert('국어점수를 입력하세요.')
		f.kor.focus()
		return false
	}
	if (eng === '') {
		alert('영어점수를 입력하세요.')
		f.eng.focus()
		return false
	}
	if (math === '') {
		alert('수학점수 입력하세요.')
		f.math.focus()
		return false
	}
	//데이터 수정
	kor = number(kor)
	eng = number(eng)
	math = number(math)
	total = kor + eng + math
	avg = Numer((total / 3).toFixed(2))

	//데이터 배열에 저장
	scores.push({
		name: name,
		kor: kor,
		eng: eng,
		math: math,
		total: total,
		avg: avg
	})

	console.log(scores)

	//form초기화
	f.reset()

	//데이터 화면
	scoreRender()

	return false
}



