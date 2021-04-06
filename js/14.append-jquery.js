/************ 전역설정 *************/


/************ 사용자 함수 *************/


/************ 이벤트 설정 *************/
$('.bt-append').on('click',onAppend)
$('.bt-remove').on('click',onRemove)

/************ 이벤트 콜백 *************/
function onAppend() {
    $('.stage').append('<dive class="box"></div>')
    $('.box').on('click',onRemoveBox)
}

function onRemove() {
    $('.stage').empty()
}

function onRemoveBox() {
    $(this).remove()
}


