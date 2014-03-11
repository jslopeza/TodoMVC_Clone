var view = new Backbone.View({
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

view.$('h1').trigger('swipeleft');
// → "Stop."
view.$('h1').trigger('tap');
// → "Hammer time!"

// Access the view's hammer instance
view.hammer();
// → view.$el.hammer()