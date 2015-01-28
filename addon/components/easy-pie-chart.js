import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['percentage'],
	attributeBindings: ['dataPercent:data-percent'],

	easyPie: null,
	dataPercent: 0,
	percentText: 0,
	percentSign: '%',

	initEasyPie: function() {
		this._super();
		var chart = this.$().easyPieChart({
			barColor: this.get('barColor'),
			trackColor: this.get('trackColor'),
			scaleColor: this.get('scaleColor'),
			scaleLength: this.get('scaleLength'),
			lineCap: this.get('lineCap'),
			lineWidth: this.get('lineWidth'),
			size: this.get('size'),
			rotate: this.get('rotate'),
			animate: this.get('animate'),
			easing: this.get('easing')
		});
		this.set('easyPie', chart);
	}.on('didInsertElement'),

	easyPieDidChange: function() {
		this.get('easyPie').data('easyPieChart').update(this.get('dataPercent'));
	}.observes('dataPercent'),

	destroyEasyPie: function() {
		this.destroy();
	}.on('willDestroyElement'),
});
