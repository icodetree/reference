// Component 역활의 파일들

// 이렇게 Items 컴포넌트가 무언가 많은 일을 하게 되었다. 
// 이럴 경우 코드를 관리하기 힘들고, 컴포넌트라는 이름이 무색하게 컴포넌트 단위로 활용할 수 없는 상태가 되어버린다.
// 기본적으로 컴포넌트 라는 것은 "재활용"이 목적이다. 
// 그러기 위해선 하나의 컴포넌트가 최대한 작은 단위의 일을 하도록 만들어야 한다.

import Component from "../core/Component.js";

export default class Items extends Component {

    template() {
        const { filteredItems } = this.props;
        return `
            <section class="listbox">
                ${filteredItems.map(({ contents, active, seq }) =>`
                    <article class="msgbox" data-seq="${seq}">
                        <header class="msg_header">
                            <div class="number">No. ${seq}</div>
                            <!--<div class="date">2022-01-01</div>-->
                        </header>
                        <p class="list ${active ? 'active' : ''}">
                            ${contents}
                        </p>
                        <footer class="msg_footer">
                            <span class="check ${active ? 'active' : ''}">
                                ${active ? 
                                    '<ion-icon name="checkmark-done"></ion-icon>' : 
                                    '<ion-icon name="checkmark-outline"></ion-icon>'
                                }
                            </span>
                            <span class="trash"><ion-icon name="trash-outline"></ion-icon></span>
                        </footer>
                    </article>
                `).join('')}
            </section>
        `;
    }

    setEvent() {

        const { deleteItem, toggleItem } = this.props;

        // 삭제
        this.addEvent("click", ".trash", ({ target }) => {
            deleteItem(Number(target.closest('[data-seq]').dataset.seq));
        });

        // 활성
        this.addEvent("click", ".check", ({ target }) => {
            toggleItem(Number(target.closest('[data-seq]').dataset.seq));
        });
    }
}
