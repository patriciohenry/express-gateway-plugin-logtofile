// Author: Patricio Henry Gajardo Rojas
// Mail: patricio.henry@gmail.com
// Date: 28-02-2002

const fs = require('fs')


module.exports = {
  name: 'filelog',
  schema: {
    $id: '9208b270-4946-484c-a6ef-fdd928c6da77',
    properties: {
      enableLOG: {
        type: 'boolean',
      },
      fileLOG: {
        type: 'string'
      },
      textLOG: {
        type: 'string'
      },
      identity: {
        type: 'object',
        properties: {
          source: { type: 'string', enum: ['headers', 'query'] },
          identityTemplate: { type: 'string' }
        }
      }
    },
  required: ['enableLOG', 'fileLOG', 'textLOG'] 
  },
  policy: (actionParams) => {
    return (req, res, next) => {
      if (actionParams.enableLOG) {

        fs.writeFile(actionParams.fileLOG, eval(actionParams.textLOG) + '\r\n', {
          flag: 'a' 
        }, (err) => {
          if (err) {
            console.log("ERROR WRITE LOG FILE: ", err)
          }
        })	
      }
		
      
      next();
    };
  }
};
