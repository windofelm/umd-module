var myModule = (function () {
    return {
        sayHello: function (name) {
            return "Hello " + name + " TWO"
        }
    }
})();

module.exports = myModule;