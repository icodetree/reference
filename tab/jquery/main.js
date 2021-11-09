'use strict';

// 1. 셀렉터 찾아 변수에 저장 
var $tabWrap = $(".tab"),
	$li = $tabWrap.find("li"),
	$target = $li.find("a"),
	clickBool = true;

// 2. 즉시실행 함수로 초기화 셋팅
(function init () {
	$li.first().addClass("active");
	$li.first().find(".tabInfo").slideDown();
}());

// 3. li를 each함수로 순회하여 타겟을 클릭 
$li.each(function (index, elements) {
	// 클릭 핸들러함수로 이동하여 실행
	$(this).on({
		click : clickHandler
	});
});

function clickHandler (e) {
	// 4.중복 클릭을 방지할 clickBool 설정 (false일경우 리턴)
	if (!clickBool) return;
	// 5. 진입시 false로 변경해준다.
	clickBool = false;
	
	var $target = $(e.currentTarget);

	// 6. active클래스 유무를 체크하여 탭버튼과 내용부분을 열어준다.
	if (!$target.hasClass("active")) {
		$target.addClass("active").siblings().removeClass("active");
		$target.siblings().find(".tabInfo").hide();
		$target.find(".tabInfo").slideDown(500 , function () {
			// 7. 클릭이벤트가 종료되면 콜백함수로 ture로 설정
			clickBool = true;
		});
	}
}

