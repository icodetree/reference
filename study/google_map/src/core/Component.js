// 구현에 필요한 코어파일

export default class Component {
    // props는 부모 컴포넌트가 자식 컴포넌트에게 상태 혹은 메소드를 넘겨주기 위해서이다.
    target;
    state;

    constructor(target) {
        this.target = target;
        this.setup();
        this.setEvent();
        this.render();
    }

    setup() {}
    template() {
        return "";
    }

    // mounted를 추가한 이유는 render 이후에 추가적인 기능을 수행하기 위해서이다.
    render() {
        this.target.innerHTML = this.template();
    }

    setEvent() {}

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.render();
    }

    // selector 에 명시한 것보다 더 하위 요소가 선택되는 경우가 있을때
    // closest를 이용해 처리한다.
    addEvent(eventType, selector, callback) {
        const children = [...this.target.querySelectorAll(selector)];
        const isTarget = (target) =>
            children.includes(target) || target.closest(selector);

        this.target.addEventListener(eventType, (event) => {
            if (!isTarget(event.target)) return false;
            callback(event);
        });
    }
}
