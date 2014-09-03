enyo.kind({
  name: 'XM.Setting',
  kind: 'enyo.Model',
  primaryKey: 'id',
  defaultSource: 'localStorage',
  published: {
    name: ''
  }
});

enyo.kind({
  name: 'XM.SettingCollection',
  kind: 'enyo.Collection',
  model: 'XM.Setting',
  url: 'settings',
  defaultSource: 'localStorage',
});
