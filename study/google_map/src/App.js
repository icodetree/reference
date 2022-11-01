// ES module 의 entry File

import Items from "./components/Items.js";

class App {
    constructor() {
        const main = document.querySelector("#mainContents");
        new Items(main);
    }
}

new App();
