var app = app || {};
Backbone.Model.prototype.toJSON = function(){
return this._parseDates(this.attributes);
};

Backbone.Model.prototype._parseDates = funtion(attrs){
attrs = _.clone(attrs);
var newDate = attrs.dueDate.split(“/“).reverse().join(“/“);
attrs.dueDate = new Date(newDate).toISOString();

return attars;
};