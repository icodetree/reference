class Travel {
  constructor () {
    this.setup ();
    this.setEvent ();
    this.saveEvent ();
  }
  setup () {}
  setEvent () {}
}

class Category extends Travel {
  setup () {
    this.arrFood = [];
    this.arrPlace = [];
    this.inputAll = document.querySelectorAll ('input');
    this.foodInput = document.querySelectorAll ('.foodList input');
    this.placeInput = document.querySelectorAll ('.placeList input');
    this.aside = document.querySelector ('.aside');
    this.foodList = this.aside.querySelector ('.setFoodList');
    this.placeList = this.aside.querySelector ('.setPlaceList');
    this.btnSave = this.aside.querySelector ('.save');
    this.popupWrap = document.querySelector ('.popupWrap');
    this.popClose = document.querySelector ('.close');

    this.foodIdx = 0;
    this.placeIdx = 0;
    this.clickBool = true;
    this.name = null;
    this.arrName = null;
    this.nameCheck = null;
    this.maxLeng = null;
  }

  setEvent () {
    [...this.inputAll].forEach ((item, idx) => {
      item.addEventListener ('change', e => this.checkEvent (item, idx));
    });
  }

  checkEvent (item, idx) {
    this.name;
    this.arrName;
    this.nameCheck = item.parentElement.className;
    this.maxLeng;

    if (this.nameCheck === 'food') {
      this.arrName = this.arrFood;
      this.name = '음식';
      this.maxLeng = 2;
    } else {
      this.arrName = this.arrPlace;
      this.name = '장소/테마';
      this.maxLeng = 4;
    }

    if (item.checked) {
      if (this.arrName.length >= this.maxLeng) {
        alert (`${this.name}별 리스트는 최대 ${this.maxLeng}개까지 선택가능합니다.`);
        item.checked = false;
        return false;
      }
      this.addItem (item, idx);
    } else {
      this.removeItem (item, idx);
    }
  }

  addItem (input) {
    if (!this.clickBool) return false;
    this.clickBool = false;

    let foodObj = {};
    let placeObj = {};

    let label = input.nextElementSibling;
    let src = label.querySelector ('img').getAttribute ('src');
    let title = label.querySelector ('dt').innerText;
    let posX = Number (input.getAttribute ('data-posx'));
    let posY = Number (input.getAttribute ('data-posy'));

    // console.log ('addItem', this.nameCheck);
    // input.disabled = true;

    if (this.nameCheck === 'food') {
      foodObj.src = src;
      foodObj.title = title;
      foodObj.posX = posX;
      foodObj.posY = posY;

      input.setAttribute ('data-index', this.foodIdx++);

      // 배열추가
      this.arrFood.push (foodObj);

      // 오른쪽 리스트에 추가
      this.foodList.insertAdjacentHTML (
        'beforeEnd',
        `<li>${foodObj.title}</li>`
      );
      //   console.log ('food', this.arrFood, title);
    } else {
      placeObj.src = src;
      placeObj.title = title;
      placeObj.posX = posX;
      placeObj.posY = posY;

      input.setAttribute ('data-index', this.placeIdx++);

      // 배열추가
      this.arrPlace.push (placeObj);

      // 오른쪽 리스트에 추가
      this.placeList.insertAdjacentHTML (
        'beforeEnd',
        `<li>${placeObj.title}</li>`
      );
      //   console.log ('place', this.arrPlace, input.getAttribute ('data-index'));
    }
    this.clickBool = true;
  }

  removeItem (input) {
    // 음식별 삭제
    if (!this.clickBool) return false;
    this.clickBool = false;

    if (this.nameCheck === 'food') {
      let fIdx = input.getAttribute ('data-index') * 1;
      let fBtns = [...this.foodList.querySelectorAll ('li')];

      console.log ('fIdx : ', fIdx);
      if (this.arrFood.length === 1) {
        console.log ('adfadsasdf', fIdx);
        fIdx = 0;
      }
      console.log ('before', this.arrFood, fBtns, fIdx);

      this.arrFood.splice (fIdx - 1, 1);
      this.foodIdx = this.foodIdx - 1;

      fBtns[fIdx].remove ();
      fBtns.splice (fIdx, 1);
      console.log ('after', this.arrFood, fBtns, fIdx);
    } else {
      // 장소별 삭제
      let index;
      let pIdx = input.getAttribute ('data-index') * 1;
      let inputTit = input.nextElementSibling.querySelector ('dt').textContent;
      let pBtns = [...this.placeList.querySelectorAll ('li')];

      for (let i = 0; i < pBtns.length; i++) {
        if (pBtns[i].textContent === inputTit) {
          pBtns[i].remove ();
          pBtns.splice (i, 1);

          this.arrPlace.splice (i, 1);
          this.placeIdx = this.placeIdx - 1;

          i--;
        }
      }

      console.log ('after', this.arrPlace, pBtns, pIdx);
    }

    this.clickBool = true;
  }

  saveEvent () {
    this.btnSave.addEventListener ('click', e => {
      e.preventDefault ();
      this.saveCheck ();
    });
  }

  saveCheck () {
    const liList = this.aside.querySelectorAll ('li');
    const foodLi = this.foodList.querySelectorAll ('li');
    const placeLi = this.placeList.querySelectorAll ('li');

    if (foodLi.length < 2) {
      alert (`2개 항목을 선택해주세요!`);
      return;
    } else if (placeLi.length < 2) {
      alert (`장소/테마는 2개 ~ 4개 항목을 선택해주세요!`);
      return;
    } else {
      this.popupWrap.classList.add ('active');
      this.popHanler ();
    }
  }

  popHanler () {
    this.popClose.addEventListener ('click', () => {
      console.log ('popHanler');
      this.popupWrap.classList.remove ('active');
    });
  }

  saveStorage () {
    console.log ('saveStorage');
    // localStorage.setItem(
    //     "TravelData",
    //     JSON.stringify({ food: this.arrFood, place: this.arrPlace })
    // );
  }
}

const category = new Category ();
