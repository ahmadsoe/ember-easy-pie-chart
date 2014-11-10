'use strict';

module.exports = {
  name: 'ember-easy-pie-chart',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/jquery.easy-pie-chart/dist/jquery.easypiechart.js');
  }
};
