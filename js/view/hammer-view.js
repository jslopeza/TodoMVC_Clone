var view = new Backbone.View.extend({
  hammerEvents: {
    'swipeleft window': 'handleSwipe',
    'tap window': 'handleTap'
  },
  hammerOptions: {
    tap: true
  },
  handleSwipe: function(){
    console.log('Stop.');
  },
  handleTap: function(){
    console.log('Hammer time!');
  }
});

view.$('window').trigger('swipeleft');
// → "Stop."
//view.$('window').trigger('tap');
// → "Hammer time!"

// Access the view's hammer instance
view.hammer();
// → view.$el.hammer()