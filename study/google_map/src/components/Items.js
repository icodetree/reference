// Component 역활의 파일들

import Component from "../core/component.js";

export default class Items extends Component {
    setup() {
        this.state = {
            food: [
                {
                    seq: 1,
                    src: "./img/A1.jpg",
                    name: "food",
                    posx: "33.590594",
                    posy: "130.408332",
                    title: "나카스 포장마차 거리",
                    contents:
                        "만화나 영화에서 볼법한 포장마차들이 매우 많다함! 여기서 저녁먹을겸 술 딱걸치고 숙소로 귀가~",
                    active: "",
                    disabled: "",
                },
                {
                    seq: 2,
                    src: "./img/A2.jpg",
                    name: "food",
                    posx: "33.591051",
                    posy: "130.381112",
                    title: "사누키우동 시나리",
                    contents:
                        "우동 인기만점 맛집! #미슐랭 웨이팅 한시간 걸려서 먹고 후회 안하는 맛집!",
                    active: "",
                    disabled: "",
                },
                {
                    seq: 3,
                    src: "./img/A3.jpg",
                    name: "food",
                    posx: "34.668443",
                    posy: "135.50344",
                    title: "미즈노 오코노미야끼",
                    contents:
                        "도톤보리 근처 오코노미야끼 맛집! 오사카 스타일 오코노미야키는 뭐가 다를까?",
                    active: "",
                    disabled: "",
                },
                {
                    seq: 4,
                    src: "./img/A4.jpg",
                    name: "food",
                    posx: "34.648261",
                    posy: "135.502002",
                    title: "키라쿠 라멘",
                    contents:
                        "오사카의 맛 라멘키라쿠(스카이빌딩)에 있다고함 일본에 갔는데 라멘은 먹어야지?",
                    active: "",
                    disabled: "",
                },
                {
                    seq: 5,
                    src: "./img/A5.jpg",
                    name: "food",
                    posx: "35.666224",
                    posy: "139.770776",
                    title: "스시잔마이 본점",
                    contents:
                        "리뷰 6천개 넘는 스시집! 더 설명이 필요한가..? 스시 먹어봐야지!",
                    active: "",
                    disabled: "",
                },
            ],
            place: [
                {
                    seq: 1,
                    src: "./img/B1.jpg",
                    name: "place",
                    posx: "33.586631",
                    posy: "130.376192",
                    title: "오호리 공원",
                    contents:
                        "공원 연못에 떠 있는 3개의 섬과 이 섬들을 이어주는 4개의 다리 역사를 느끼면서 자연을 즐길 수 있음.",
                    active: false,
                },
                {
                    seq: 2,
                    src: "./img/B2.jpg",
                    name: "place",
                    posx: "33.594536",
                    posy: "130.351329",
                    title: "모모치 해변 공원",
                    contents:
                        "근처에 후쿠오카 타워도 있어서 바다보고 사진도 찰칵찰칵 분위기 좋고 한적한 바닷가에서 여유를 즐겨보자",
                    active: false,
                },
                {
                    seq: 3,
                    src: "./img/B3.jpg",
                    name: "place",
                    posx: "33.604006",
                    posy: "130.397989",
                    title: "나미하노유 온천",
                    contents:
                        "온천에서 푹쉬고 주변 돌아다니면서 구경하자! 들어갈 생각만 해도 노곤노곤~",
                    active: false,
                },
                {
                    seq: 4,
                    src: "./img/B4.jpg",
                    name: "place",
                    posx: "33.593785",
                    posy: "130.408531",
                    title: "카와바타 상점가",
                    contents:
                        "후쿠오카를 대표하는 전통 재래시장이라함 다양한 먹거리와 생필품 기념품 등등 있다하니 들렸다가 사고싶은거 사고나서 집으로 고고씽 하면 될듯!",
                    active: false,
                },
                {
                    seq: 5,
                    src: "./img/B5.jpg",
                    name: "place",
                    posx: "34.668708",
                    posy: "135.503158",
                    title: "오사카 도톤보리",
                    contents:
                        "도톤보리 쇼핑몰 상가밀집 지역이기에 돌아다니며 구경 여행 왔으면 기념품 챙겨가야지~",
                    active: false,
                },
            ],
            theme: [
                {
                    seq: 6,
                    src: "./img/B6.jpg",
                    name: "place",
                    posx: "34.665627",
                    posy: "135.432434",
                    title: "유니버셜 스튜디오",
                    contents:
                        "일본 유니버셜 스튜디오는 꼭 가보라고 하는 말이 있어! 설명 안해도 알테니 스킵!",
                    active: false,
                },
                {
                    seq: 7,
                    src: "./img/B7.jpg",
                    name: "place",
                    posx: "34.687338",
                    posy: "135.525943",
                    title: "오사카성",
                    contents:
                        "오사카 랜드마크! 오사카를 왔는데 오사카 성을 안본다?",
                    active: false,
                },
                {
                    seq: 8,
                    src: "./img/B8.jpg",
                    name: "place",
                    posx: "33.589835",
                    posy: "130.411784",
                    title: "캐널시티 하카타",
                    contents:
                        "도시 극장 컨셉으로 개장한 커낼시티라는데 다양한 쇼핑몰과 식당 카페등등 모여 있고 일본 3대 라멘을 만나볼수있다함!",
                    active: false,
                },
                {
                    seq: 9,
                    src: "./img/B9.jpg",
                    name: "place",
                    posx: "35.981370",
                    posy: "139.753716",
                    title: "짱구 마을",
                    contents:
                        "마을 곳곳이 짱구 투성이! 짱구 덕후 다모여!! 짱구에 나왔던 곳들, 여러 테마 스토어들 구경해보자!",
                    active: false,
                },
            ],
            itemList: [
                // {
                //     title: "음식을 선택해주세요.",
                //     active: false,
                // },
            ],
        };
    }

    template() {
        const { food, place, theme, itemList } = this.state;

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
                            ${food
                                .map(
                                    ({
                                        seq,
                                        src,
                                        name,
                                        title,
                                        contents,
                                        posx,
                                        posy,
                                        active,
                                        disabled,
                                    }) => `
                            <li>
                                <a href="#" class="${name}" data-index="${seq}">
                                    <input type="checkbox" name="${name}${seq}" id="${name}${seq}" data-posX="${posx}" data-posY="${posy}" class="${active}" ${disabled} />
                                    <label for="${name}${seq}">
                                        <div class="photo"><img src="${src}" alt="" /></div>
                                        <dl>
                                            <dt>${title}</dt>
                                            <dd>${contents}</dd>
                                        </dl>
                                    </label>
                                </a>
                            </li>
                            `
                                )
                                .join("")}
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
                        ${place
                            .map(
                                ({
                                    seq,
                                    src,
                                    name,
                                    title,
                                    contents,
                                    posx,
                                    posy,
                                }) => `
                        <li>
                            <a href="#" class="${name}" data-index="${seq}">
                                <input type="checkbox" name="${name}${seq}" id="${name}${seq}" data-posX="${posx}" data-posY="${posy}" />
                                <label for="${name}${seq}">
                                    <div class="photo"><img src="${src}" alt="" /></div>
                                    <dl>
                                        <dt>${title}</dt>
                                        <dd>${contents}</dd>
                                    </dl>
                                </label>
                            </a>
                        </li>
                        `
                            )
                            .join("")}

                    </ul>
                </div>

                <!-- 테마별 -->
                <div class="list">
                    <h2>테마별</h2>
                    <ul>
                        ${theme
                            .map(
                                ({
                                    seq,
                                    src,
                                    name,
                                    title,
                                    contents,
                                    posx,
                                    posy,
                                }) => `
                        <li>
                            <a href="#" class="${name}" data-index="${seq}">
                                <input type="checkbox" name="${name}${seq}" id="${name}${seq}" data-posX="${posx}" data-posY="${posy}" />
                                <label for="${name}${seq}">
                                    <div class="photo"><img src="${src}" alt="" /></div>
                                    <dl>
                                        <dt>${title}</dt>
                                        <dd>${contents}</dd>
                                    </dl>
                                </label>
                            </a>
                        </li>
                        `
                            )
                            .join("")}
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
                        <dd class="setFoodList">
                            <ul>
                            ${itemList
                                .map(
                                    ({ seq, src, name, title, posx, posy }) => `
                                <li><strong>${title}</strong> 
                                    <span class=trash>
                                        <ion-icon name="remove-circle"></ion-icon>
                                    </span>
                                </li>
                                `
                                )
                                .join("")}
                            </ul>
                        </dd>
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
        this.addEvent("click", ".food > label", ({ target }) => {
            const { food, itemList } = this.state;
            const parentElm = target.closest(".food");
            const name = "food";
            const seq = Number(target.closest("[data-index]").dataset.index);
            const src = parentElm.querySelector("img").getAttribute("src");
            const title = parentElm.querySelector("dt").textContent;
            const input = parentElm.querySelector("input");
            const posx = input.getAttribute("data-posX");
            const posy = input.getAttribute("data-posY");

            const index = food.findIndex((v) => v.seq === seq);
            food[index].active = "active";
            food[index].disabled = "disabled";

            console.log(food[index].active);

            this.setState({
                food,
                itemList: [...itemList, { seq, name, src, title, posx, posy }],
            });
            console.log(food);
        });

        // 삭제
        this.addEvent("click", ".trash", ({ target }) => {
            const itemList = [...this.state.itemList];
            const seq = Number(target.closest("[data-index]").dataset.index);
            itemList.splice(
                itemList.findIndex((v) => v.seq === seq),
                1
            );
            this.setState({ itemList });
        });

        // 활성
        this.addEvent("click", ".check", ({ target }) => {
            const food = [...this.state.food];
            const seq = Number(target.closest("[data-seq]").dataset.seq);
            const index = food.findIndex((v) => v.seq === seq);
            food[index].active = !food[index].active;
            this.setState({ food });
        });
    }
}
