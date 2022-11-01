// Component 역활의 파일들

import Component from "../core/component.js";

export default class Items extends Component {
    get filteredItems() {
        const { isFilter, food } = this.state;
        return food.filter(
            ({ active }) =>
                (isFilter === 1 && active) ||
                (isFilter === 2 && !active) ||
                isFilter === 0
        );
    }
    setup() {
        this.state = {
            isFilter: 0,
            food: [
                {
                    seq: 1,
                    src: "./img/A1.jpg",
                    name: "food",
                    posx: "33.590594",
                    posy: "130.408332",
                    title: "나카스 포장마차 거리",
                    contents: "만화나 영화에서 볼법한 포장마차들이 매우 많다함! 여기서 저녁먹을겸 술 딱걸치고 숙소로 귀가~",
                    active: false,
                },
                {
                    seq: 2,
                    src: "./img/A2.jpg",
                    name: "food",
                    posx: "33.591051",
                    posy: "130.381112",
                    title: "사누키우동 시나리",
                    contents: "우동 인기만점 맛집! #미슐랭 웨이팅 한시간 걸려서 먹고 후회 안하는 맛집!", 
                    active: false,
                },
                {
                    seq: 3,
                    src: "./img/A3.jpg",
                    name: "food",
                    posx: "34.668443",
                    posy: "135.50344",
                    title: "미즈노 오코노미야끼",
                    contents: "도톤보리 근처 오코노미야끼 맛집! 오사카 스타일 오코노미야키는 뭐가 다를까?", 
                    active: false,
                },
                {
                    seq: 4,
                    src: "./img/A4.jpg",
                    name: "food",
                    posx: "34.648261",
                    posy: "135.502002",
                    title: "키라쿠 라멘",
                    contents: "오사카의 맛 라멘키라쿠(스카이빌딩)에 있다고함 일본에 갔는데 라멘은 먹어야지?", 
                    active: false,
                },
                {
                    seq: 5,
                    src: "./img/A5.jpg",
                    name: "food",
                    posx: "35.666224",
                    posy: "139.770776",
                    title: "스시잔마이 본점",
                    contents: "리뷰 6천개 넘는 스시집! 더 설명이 필요한가..? 스시 먹어봐야지!", 
                    active: false,
                },

            ],
        };
    }
    template() {
        return `
            <section class="content">
                <!-- 음식별 -->
                <section class="foodList">
                    <div class="list">
                        <h2>
                            음식별
                            <span>(음식을 2개선택해주세요! 최대 2개까지만 선택가능)</span>
                        </h2>
                        <ul>
                            ${this.filteredItems.map(({ seq, src, name, title, contents, posx, posy }) => `
                            <li>
                                <a href="#" class="food" data-index="${seq}">
                                    <input type="checkbox" name="${name}" id="${name}${seq}" data-posX="${posx}" data-posY="${posy}" />
                                    <label for="${name}${seq}">
                                        <div class="photo"><img src="${src}" alt="" /></div>
                                        <dl>
                                            <dt>${title}</dt>
                                            <dd>${contents}</dd>
                                        </dl>
                                    </label>
                                </a>
                            </li>
                            `).join("")}
                        </ul>
                    </div>
                </section>

                <section class="placeList">
                <!-- 장소별 -->
                <div class="list">
                    <h2>
                        장소별
                        <span>(장소와 테마를 2개 이상 선택하세요! 최대 4개까지 선택가능)</span>
                    </h2>
                    <ul>
                    </ul>
                </div>

                <!-- 테마별 -->
                <div class="list">
                    <h2>테마별</h2>
                    <ul>
                    </ul>
                    </div>
                </section>
            </section>

            <!-- 오른쪽 -->
            <aside class="aside">
                <!-- 여행일수 선택 -->
                <div class="side_01">
                    <h2>여행 일수를 선택하세요!</h2>
                    <select class="form-select" aria-label="select">
                        <option selected="selected">
                            당일치기 (긴 일정은 추가 예정)
                        </option>
                    </select>
                </div>

                <!-- 선택된 리스트 -->
                <div class="select_list selectList">
                    <dl>
                        <dt>음식</dt>
                        <dd class="setFoodList"></dd>
                    </dl>
                    <dl>
                        <dt>장소/테마</dt>
                        <dd class="setPlaceList"></dd>
                    </dl>
                </div>

                <!-- 버튼 -->
                <div class="btn_set">
                    <a href="/articles">계획 구경하기</a>
                    <a href="#confirm">완성</a>
                </div>
            </aside>
        `;
    }

    setEvent() {
        // list 추가
        this.addEvent("keyup", ".addText", ({ key, target }) => {
            if (key != "Enter") return;

            const { food } = this.state;
            const seq = Math.max(0, ...food.map((v) => v.seq)) + 1;
            const contents = target.value;
            const active = false;

            // document.querySelector(".addText").focus();
            this.setState({
                food: [...food, { seq, contents, active }],
            });
        });

        // 삭제
        this.addEvent("click", ".trash", ({ target }) => {
            const food = [...this.state.food];
            const seq = Number(target.closest("[data-seq]").dataset.seq);
            food.splice(
                food.findIndex((v) => v.seq === seq),
                1
            );
            this.setState({ food });
        });

        // 활성
        this.addEvent("click", ".check", ({ target }) => {
            const food = [...this.state.food];
            const seq = Number(target.closest("[data-seq]").dataset.seq);
            const index = food.findIndex((v) => v.seq === seq);
            food[index].active = !food[index].active;
            this.setState({ food });
        });

        this.addEvent("click", ".filterBtn", ({ target }) => {
            console.log(target.dataset);
            this.setState({ isFilter: Number(target.dataset.isFilter) });
        });
    }
}
