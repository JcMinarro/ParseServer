# Parse Server

This project help you to deploy a [Parse-server](https://github.com/ParsePlatform/parse-server) on your own server.

## Setup
1. `git clone https://github.com/JcMinarro/ParseServer.git`
1. `cd ParseServer`
1. `npm install`
1. Set the necessary [environment variables](https://github.com/JcMinarro/ParseServer/blob/master/config/default.json#L2-L7).
1. `npm start`


## Using it

You can use the REST API, the JavaScript SDK, and any of our open-source SDKs:

Example request to a server running locally:

```
curl -X POST \
  -H "X-Parse-Application-Id: myAppId" \
  -H "Content-Type: application/json" \
  -d '{"score":1337,"playerName":"Sean Plott","cheatMode":false}' \
  http://localhost:8080/parse/classes/GameScore
  
curl -X POST \
  -H "X-Parse-Application-Id: myAppId" \
  -H "Content-Type: application/json" \
  -d '{}' \
  http://localhost:8080/parse/functions/hello
```
