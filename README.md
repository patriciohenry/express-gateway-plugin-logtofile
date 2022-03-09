# express-gateway-plugin-logtofile

This plugin for [Express Gateway](https://express-gateway.io) adds a local, persistent, File LOG TXT.

## Installation

Simply type from your shell environment:

```bash
eg plugin install express-gateway-plugin-logtofile
```

## Quick start

1. Make sure the plugin is listed in [system.config.yml file](https://www.express-gateway.io/docs/configuration/system.config.yml/).
This is done automatically for you if you used the command above.

2. Add the configuration keys to [gateway.config.yml file](https://www.express-gateway.io/docs/configuration/gateway.config.yml/).

```yaml
policies:
      - filelog:
          - action:
			  enableLOG: true
              fileLOG: /var/log/mylogfile.log
              textLOG: (new Date().toISOString()) + res.statusCode + res.get('content-length') + req.connection.remoteAddress + req.method + req.headers['my_var'] + req.originalUrl + (end_time-start_time)

```

3. Add to System File

```yaml
plugins:

  filelog:
  
    package: express-gateway-plugin-logtofile
```


## Want to make your own plugin?

There are 2 general purpose variables to write to the LOG file, which contain the start datetime of the request and the end datetime of the response to the client.


The variables are "end_time" and "start_time".  See the example. 

(end_time-start_time)   will have as a result the milliseconds that the request-response process took.


Just check out our [plugin development guide](https://www.express-gateway.io/docs/plugins/).
We can't wait to see your custom stuff in the Gateway!
