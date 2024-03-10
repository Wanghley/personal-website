# Deployment Instructions

## Prerequisites
- [ ] Install [Node.js](https://nodejs.org/en/download/)
- [ ] Install [npm](https://www.npmjs.com/get-npm)
- [ ] Install [Git](https://git-scm.com/downloads)

## Deployment
1. create build
   ```bash
    npm run build
    ```
2. deploy build to server with SFTP
   ```bash
    sftp -oPort=1373 wanghley@tommy2.heliohost.org
    ```
3. upload build to server with server.js file
4. install dependencies on server side
   ```bash
    npm install express
    ```
5. restart server

## Additional Information
- [ ] [Server Information](https://www.heliohost.org/)

## Troubleshooting
You may have issues with the deployment process. If you do, please refer to the [Deployment Troubleshooting](#)