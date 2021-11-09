'use strict';

(function () {
    class Tab {
        // 1. constructor 에 셀렉터 선언 및 초기화 코드 선언
        constructor(opt){
            this.tab    = document.querySelector("." + opt.elmName);
            this.tabUl  = this.tab.firstElementChild;
            this.tabLi  = [...this.tabUl.children];
            this.parent = null;
            this.target = null;
            this.tabInfo = null;
            this.elm = null;
    
            this.active   = 'active';
            this.addSlide = 'addSlide';
            this.opts = opt.effect;
        }
        
        init() {
            // 2. li태그를 순회하여 첫번째 탭내용을 열어준다.
            this.tabLi.map(elm => {
                this.target = elm;
                this.mouseEvent();
                
                this.tabUl.firstElementChild.classList.add(this.active);
                
                // 3. 슬라이드 옵션이 있을시 클래스를 붙여준다.
                if (this.opts === 'slide') {
                    this.tabUl.firstElementChild.classList.add(this.addSlide)
                }
            });
        }

        // 4. 이벤트 리스너 (클릭)
        mouseEvent(){
            this.target.addEventListener('click', (e) => this.eventHandler(e));
        }
        eventHandler(e) {

            // 5. 현재 요소와 내용을 this객체에 저장
            this.parent = e.target.parentElement;
            this.tabInfo = e.target.nextElementSibling;
            
            // 6. active클래스 유무를 체크하여 탭버튼과 내용부분을 열어준다.
            if (!this.parent.classList.contains(this.active)) {
                this.tabLi.map(elm => {
                    this.elm = elm;
                    this.elm.classList.remove(this.active);
                    this.parent.classList.add(this.active);
        
                    if (this.opts === 'slide') this.slide();
                });
            }
        }
        // 7. slide 옵션이 있을경우 addSlide 클래스를 붙여 기능활성화를 해준다.
        slide(){
            this.elm.classList.remove(this.addSlide);
            this.parent.classList.add(this.addSlide);                    
        }
    }

    const tab = new Tab({
        elmName : 'tab',   // 탭 전체 부모 클래스
        effect  : 'slide', // 슬라이드 옵션 활성화 유무 ("sldie" OR " " 로 변경)
    });
    
    window.addEventListener("load", () => {
        tab.init();
    });
})();