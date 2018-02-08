(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['myModule'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(require('./myModule'));
    } else {
        // Browser globals (Note: root is window)
        root.umdModule = factory(root.myModule);
    }
}(this, function (myModule) {

    // Methods
    function hello(name){
        return "Hello " + name;
    } // A public method because it's returned (see below)
    function _otherHello(name) {
        return myModule.sayHello(name);
    }

    // Exposed public methods
    return {
        hello: hello,
        otherHello: _otherHello
    }
}));