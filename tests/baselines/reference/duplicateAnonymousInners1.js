//// [duplicateAnonymousInners1.ts]
module Foo {

    class Helper {

    }
    
    class Inner {}
    // Inner should show up in intellisense
    
    export var Outer=0;
}


module Foo {
    
    // Should not be an error
    class Helper {

    }
    
    // Inner should not show up in intellisense
    // Outer should show up in intellisense

}


//// [duplicateAnonymousInners1.js]
var Foo;
(function (Foo) {
    var Helper = (function () {
        function Helper() {
        }
        return Helper;
    })();
    var Inner = (function () {
        function Inner() {
        }
        return Inner;
    })();
    // Inner should show up in intellisense
    Foo.Outer = 0;
})(Foo || (Foo = {}));
var Foo;
(function (Foo) {
    var Helper = (function () {
        function Helper() {
        }
        return Helper;
    })();
})(Foo || (Foo = {}));
