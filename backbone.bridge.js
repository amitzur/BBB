;(function() {
    
    Backbone.Widget = function(name, viewClass) {
        
        $.fn[name] = function(options) {
            if (arguments.length === 0) {
                return this.data(name);
            }
            
            return this.each(function() {
                var $this = $(this), instance = $this.data(name);
                
                if (instance instanceof Backbone.View) {
                    instance.stopListening();
                    instance.cleanup && prevValue.cleanup();
                }
                
                $(this).data(name, new viewClass(_.extend({ el: this }, options)));
            });
        };
        
    };
    
})();