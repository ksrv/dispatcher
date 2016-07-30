Package.describe({
  name: 'ksrv:dispatcher',
  version: '0.0.2',
  summary: 'Simple event dispatcher.',
  git: 'git@github.com:ksrv/dispatcher.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4');
  api.use('ecmascript');
  api.use('check');
  api.use('mongo@1.1.9');
  api.export('Dispatcher');
  api.mainModule('dispatcher.js');
});
