// ES module 의 entry File
import Component from "./core/Component.js";
import Items from "./components/Items.js";
import ItemAppender from "./components/ItemAppender.js";
import ItemFilter from "./components/ItemFilter.js";

export default class App extends Component {

    setup() {
        this.state = {
            isFilter: 0,
            items: [
                {
                    seq: 1,
                    contents: "할일목록입니다.",
                    active: false,
                },

            ],
        };
    }

    template() {
        return `
            <div data-component="item-appender" class="contents"></div>
            <div data-component="item-filter" class="filter"></div>
            <div data-component="items"></div>
        `;
    }

    // mounted에서 자식 컴포넌트를 마운트 해줘야 한다.
    mounted() {
        const { filteredItems, addItem, deleteItem, toggleItem, filterItem } = this;
        const itemAppender = this.target.querySelector('[data-component="item-appender"]');
        const itemFilter = this.target.querySelector('[data-component="item-filter"]');
        const items = this.target.querySelector('[data-component="items"]');

        // 하나의 객체에서 사용하는 메소드를 넘겨줄 bind 를 사용하여 this를 변경하거나
        // 다음과 같이 새로운 함수를 만들어줘야한다.
        // ex) { addItem: contents => addItem(contents) }

        new ItemAppender(itemAppender, {
            addItem : addItem.bind(this)
        });
        new ItemFilter(itemFilter, {
            filterItem : filterItem.bind(this)
        });
        new Items(items, {
            filteredItems,
            deleteItem : deleteItem.bind(this),
            toggleItem : toggleItem.bind(this),
        });
    }

    get filteredItems() {
        const { isFilter, items } = this.state;
        return items.filter(({ active }) =>
                (isFilter === 1 && active) ||
                (isFilter === 2 && !active) ||
                isFilter === 0);
    }

    addItem(contents) {
        const {items} = this.state;
        const seq = Math.max(0, ...items.map(v => v.seq)) + 1;
        const active = false;

        this.setState({
            items : [
                ...items,
                {seq, contents, active}
            ]
        });
    }

    // 삭제
    deleteItem(seq) {
        const items = [...this.state.items];
        items.splice(items.findIndex(v => v.seq === seq), 1);
        this.setState({ items });
    };

    // 활성
    toggleItem(seq) {
        const items = [...this.state.items];
        const index = items.findIndex(v => v.seq === seq);
        items[index].active = !items[index].active;
        this.setState({ items });
    };

    // 필터
    filterItem (isFilter) {
        this.setState({ isFilter });
    }
}