import Component from "../core/Component.js";

export default class ItemFilter extends Component {
    template () {
        return `
            <button class="filterBtn" data-is-filter="0"><span><ion-icon name="layers"></ion-icon></span>전체</button>
            <button class="filterBtn" data-is-filter="1"><span><ion-icon name="radio-button-on"></ion-icon></span>완료</button>
            <button class="filterBtn" data-is-filter="2"><span><ion-icon name="radio-button-off"></ion-icon></span>미완료</button>  
        `;
    }

    setEvent() {
        const { filterItem } = this.props;
        this.addEvent('click', '.filterBtn', ({ target }) => {
            filterItem(Number(target.dataset.isFilter));
        });
    }
}