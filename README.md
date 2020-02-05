# node-jest-sonarqube


```sh
docker run -d --name sonarqube -p 9000:9000 sonarqube:latest
```

```sh
npm run test:cover
npm run sonar:scanner
```

[http://localhost:9000/dashboard?id=romajs-demos%3Anode-jest-sonarqube]()
