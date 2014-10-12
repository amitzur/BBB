describe("Backbone Bridge", function() {
    it("initializes widget", function() {
        var el = $("<div>"), obj = { func: function() {} };
        
        spyOn(obj, "func");
        
        Backbone.Widget("test", Backbone.View.extend({
            initialize: function() {
                obj.func();
            }
        }));
        
        el.test({});
        
        expect(obj.func).toHaveBeenCalled();
    });
});