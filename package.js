Package.describe({
  summary: "Geometry Utils for JointJS.",
  version: "0.9.2",
  name: "santteegt:geometry",
  git: "https://github.com/santteegt/meteor-geometry"
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.3.1');
  //api.use('backbone', 'client');
  //api.use('stevezhu:lodash@1.0.2', 'client');
  api.add_files(['geometry.js'], 'client');
});

Package.onTest(function (api) {
});
