describe("First Tests", ()=>{
    it("a should equal five", ()=>{
        let a = 5;
        let b = [1,2,3,4];
        let total = 0
        for(let i = 0; i<b.length;i++){
            total +=b[i];
        }
            
        expect(a).toBe(5);
        expect(a).not.toBe(10);
    });

    it("The 'toBeDefined' matcher compares against `undefined`", function () {
        var a = {
            foo: "foo",
            bar: undefined
        };
    
        expect(a.foo).toBeDefined();
        expect(a.bar).not.toBeDefined();
    });

    it("works for finding an item in an Array", function () {
        var a = ["foo", "bar", "baz"];
    
        expect(a).toContain("bar");
        expect(a).not.toContain("quux");
    });

    it("The 'toBeCloseTo' matcher is for precision math comparison", function () {
        var pi = 3.1415926,
            e = 2.78;
    
        expect(pi).not.toBeCloseTo(e, 2); // rounding pi to 3.14 and e to 2.78 (2 decimal places)
        expect(pi).toBeCloseTo(e, 0); // rounding pi to 3 and e to 3 (0 decimal places)
    });

    it("The 'toThrow' matcher is for testing if a function throws an exception", function () {
        var foo = function () {
            return 1 + 2;
        };
        /*var bar = function () {
            return a + 1;
        };*/
        var baz = function () {
            throw 'what';
        };
    
        expect(foo).not.toThrow();
        //expect(bar).toThrow();
        expect(baz).toThrow('what');
    });

    it("The 'toThrowError' matcher is for testing a specific thrown exception", function () {
        var foo = function () {
            throw new TypeError("foo bar baz");
        };
    
        expect(foo).toThrowError("foo bar baz");
        expect(foo).toThrowError(/bar/);
        expect(foo).toThrowError(TypeError);
        expect(foo).toThrowError(TypeError, "foo bar baz");
    });

    var foo = function (x, callBack) {
        if (x) {
            callBack();
        }
    };
    
    it("should not call the callBack", function () {
        expect(foo).toBeTruthy();
        foo(false, function () {
            fail("Callback has been called");
        });
    });
});