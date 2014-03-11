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

TodoView.$('window').trigger('swipeleft');
// → "Stop."
//view.$('window').trigger('tap');
// → "Hammer time!"

// Access the view's hammer instance
TodoView.hammer();
// → view.$el.hammer()