// Author: Patricio Henry Gajardo Rojas
// Mail: patricio.henry@gmail.com
// Date: 28-02-2002

module.exports = {
  version: '1.2.0',
  init: function (pluginContext) {
    pluginContext.registerPolicy(require('express-gateway-plugin-logtofile/policies/filelog-policy'));

  },
  policies: ['filelog'] 
};
