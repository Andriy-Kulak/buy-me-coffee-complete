# Buy Me A Coffee Hardhat Project

- We created a template so that you can follow along the tutorial without running into dependency issues with newer vs slightly older hardhat versions.
- to install dependencies, make sure you have node and npm installed and then run `npm i`


This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

On Top Of that, we added Next.js (a React framework), to help you interact with the contract on front-end. The tutorial uses replit, but for the purposes of this assignment, please add it to your code within this repo!

To start the front-end, run the following:
- `npm run dev`

### Documentation

- Youtube: https://www.youtube.com/watch?v=cxxKdJk55Lk
- blog: https://docs.alchemy.com/docs/how-to-build-buy-me-a-coffee-defi-dapp

### To Run test script:
`npx hardhat run scripts/buy-coffee.js`

### To Deploy Contract to Goerli:

- add appropriate configs to `.env`. You can use `.env.example` as template
- deploy using command: `npx hardhat run scripts/deploy.js --network goerli`
- example of deployed contract: https://goerli.etherscan.io/address/0x4FAFa128Bc4A9cEe4fB6197Dd0D6CdFbE56e00fA


### To Run Front-end
- `npm run dev`