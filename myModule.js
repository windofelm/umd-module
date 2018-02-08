
// var myModule = (function () {
//     return {
//         sayHello: function (name) {
//             return "Hello " + name + " OTHER"
//         }
//     }
// })();
//
// module.exports = myModule;

////

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory();
    } else {
        // Browser globals (Note: root is window)
        root.myModule = factory();
    }
}(this, function () {

    // Exposed public methods
    return {
        sayHello: function (name) {
            return "Hello " + name + " OTHER"
        }
    }
}));