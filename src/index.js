"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_dom_1 = require("react-dom");
var configureStore_1 = require("./state/configureStore");
var root_1 = require("./components/root");
require("./main.scss");
var appStore = configureStore_1.configureStore();
react_dom_1.render(React.createElement(root_1.RootComponent, { store: appStore }), document.getElementById('main'));
//# sourceMappingURL=index.js.map