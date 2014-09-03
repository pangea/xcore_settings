Overview
========
We don't want to assume this Settings module will be the Settings module xCore Gui  will ever use. In order to decouple the settings managment from the application we encourage all modules to register their settings in the global variable `xCore.data.settings` and to adhere to the following base format.
  xCore.data.settings.push({ name: "Custom Fields", kind: "XV.CustomFieldsList", order: 1 });
Other Setting modules can extend on this format or choose to do away with it altogether but in order to safely assume all Settings modules that may be created will at least share some compatibilty it's encouraged the above interface be used.

The settings module should have the highest loadOrder of all your extensions. This is so every other extension has a change to register their settings with the global variable. Then the Settings module can build the collection with each modules settings included.

