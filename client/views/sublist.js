enyo.kind({
  name: 'XV.SettingsSublist',
  kind: 'XV.Sublist',
  create: enyo.inherit(function(sup) {
    return function() {
      this.items = xCore.getSettings();
      sup.apply(this, arguments);
    };
  })
});
