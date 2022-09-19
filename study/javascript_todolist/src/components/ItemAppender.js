import Component from "../core/Component.js";

export default class ItemAppender extends Component {
    template() {
        return `<input type="text" name="inText" id="inText" class="addText" placeholder="Please enter your work to do"/>`;
    }

    setEvent() {
        const { addItem } = this.props;
        this.addEvent("keyup", ".addText", ({ key, target }) => {
            if(key != 'Enter') return;

            addItem(target.value);
        });
    }
}