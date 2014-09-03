(function() {
  'use strict';

  enyo.ready(function() {
    xCore.registerExtension({
      name: 'Settings',
      loadSubList: function(extensionSubList){
        extensionSubList.createComponent({name: "SettingsModules", kind: "XV.SettingsSublist"});
        extensionSubList.render();
      },
      loadWorkspace: function(extensionWorkspace, item){
        extensionWorkspace.createComponent(item);
        extensionWorkspace.render();
      }
    });
  });
})();
