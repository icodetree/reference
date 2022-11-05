/*
 @ A 카테고리는 무조건 2개만 선택
 @ B 카테고리는 2개 이상 4개 이하 선택

 @ 계산방식
    A1과 A2에서 선택된 B까지의 이동시간을 구한다.
    B에 도착하는 A1 과 A2 의 이동시간 의 평균 중 가장 짧은 값을 구한다.
    그 값을 A1 과 A2 사이에 넣고 A2 에서 가장 짧은 이동시간을 가진 B를 A2 뒤에 넣는다.

 @ ex) A1,A2 B1,B2,B3,B4 가 선택되었을 때
    A1 > B1 시간 : 10 분
    A2 > B1 시간 : 20분 일 경우
    B1 의 도착하는 평균 시간은 15분

@ 위 방식으로 B1,2,3,4 중 가장 짧은 평균시간을 가진 B를 구한다.
    가장 짧은 평균시간을 가진 B가 B2일 경우 : A1>B2>A2
    그 후 A2 에서 가장 짧은 이동시간을 가진 B를 찾아 A2 뒤에 입력한다
*/
const container = document.querySelector ('#mainContents');
const allitems = container.querySelectorAll ('li > a');
const aside = container.querySelector ('.aside');

let asideList;
let arrName;
let clickBool = true;
let itemsIdx = 0;

let listArr = {
  food: [],
  place: [],
};

function init () {
  setList ();
  sum ();
}

function setList () {
  [...allitems].forEach (item => {
    let input = item.firstElementChild;
    let title = item.querySelector ('dt').textContent;
    let photo = item.querySelector ('.photo');
    let posX = Number (item.getAttribute ('data-posX'));
    let posY = Number (item.getAttribute ('data-posY'));

    // 체크 이벤트 리스너
    input.addEventListener ('change', () => {
      if (!clickBool) return false;
      clickBool = false;
      setCheckList (input);
    });
  });
}

function setCheckList (input) {
  let nameCheck = input.parentElement.className;
  let name;
  let maxLeng;
  let title;

  if (nameCheck === 'food') {
    arrName = listArr.food;
    name = '음식';
    maxLeng = 2;
    asideList = aside.querySelector ('.setFoodList');
  } else {
    arrName = listArr.place;
    name = '장소/테마';
    maxLeng = 4;
    asideList = aside.querySelector ('.setPlaceList');
  }

  if (arrName.length >= maxLeng) {
    alert (`${name}별 리스트는 최대 ${maxLeng}개까지 선택가능합니다.`);
    input.checked = false;
    return;
  }

  if (input.checked) {
    input.disabled = true;
    input.setAttribute ('data-index', ++itemsIdx);

    arrName.push (input);

    for (let i in arrName) {
      title = arrName[i].nextElementSibling.querySelector ('dt').textContent;
    }

    // 오른쪽 리스트에 추가
    asideList.insertAdjacentHTML (
      'beforeEnd',
      `<li><strong>${title}</strong> <span class=minus><ion-icon name="remove-circle"></ion-icon></span></li>`
    );
  }
  removeList ();
  clickBool = true;
}

function removeList () {
  let li = [...asideList.querySelectorAll ('li')];

  li.forEach ((item, idx) => {
    item.addEventListener ('click', function () {
      console.log (this.querySelector ('strong'));
      arrName[idx].disabled = false;
      arrName[idx].checked = false;
      arrName.splice (idx, 1);
      itemsIdx = itemsIdx - 1;
      item.parentElement.remove ();
    });
    // let delIdx = idx + 1;
    // let elmIndex = arrName[idx].getAttribute("data-index") * 1;

    // // 체크 이벤트 리스너
    // item.addEventListener("click", (e) => {
    //     if (arrName.length === 0) return;
    //     console.log(arrName, item);
    //     // arrName[idx].disabled = false;
    //     // arrName[idx].checked = false;
    //     // arrName.splice(idx, 1);
    //     // item.parentElement.remove();
    //     // itemsIdx = itemsIdx - 1;
    // });
  });
}

function sum () {
  const startLoc = new google.maps.LatLng (33.590594, 130.408332);
  const endLoc = new google.maps.LatLng (33.586631, 130.376192);
  const distance = google.maps.geometry.spherical.computeDistanceBetween (
    startLoc,
    endLoc
  );

  const diff = parseInt (distance / 1000);
  console.log (diff + 'km'); // Distance in Kms.
}
init ();