import Component from "../core/Component.js";

export default class ItemFilter extends Component {
    template () {
        return `
            <span><ion-icon name="layers"></ion-icon><button class="filterBtn" data-is-filter="0">전체</button></span>
            <span><ion-icon name="radio-button-on"></ion-icon><button class="filterBtn" data-is-filter="1">완료</button></span>
            <span><ion-icon name="radio-button-off"></ion-icon><button class="filterBtn" data-is-filter="2">미완료</button></span>
        `;
    }

    setEvent() {
        const { filterItem } = this.props;
        this.addEvent('click', '.filterBtn', ({ target }) => {
            filterItem(Number(target.dataset.isFilter));
        });
    }
}