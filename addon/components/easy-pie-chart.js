import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['percentage'],
  attributeBindings: ['dataPercent:data-percent'],

  dataPercent: 0,
  percentText: 0,
  percentSign: '%',

  initEasyPie: function() {
    this._super();

    this.$().easyPieChart({
  		barColor: this.get('barColor'),
  		trackColor: this.get('trackColor'),
  		scaleColor: this.get('scaleColor'),
  		scaleLength: Number(this.get('scaleLength')),
  		lineCap: this.get('lineCap'),
  		lineWidth: Number(this.get('lineWidth')),
  		size: Number(this.get('size')),
  		rotate: Number(this.get('rotate')),
  		animate: this.get('animate'),
  		easing: this.get('easing')
    });

  }.on('didInsertElement'),

  destroyEasyPie: function() {
    this.get('easy-pie-chart').destroy();
  }.on('willDestroyElement'),
});