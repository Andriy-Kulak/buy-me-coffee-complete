# Buy Me A Coffee Hardhat Project

- We created a hardhat and front-end template so that you can follow along the tutorial without running into dependency issues with newer vs slightly older package versions.
- to install dependencies, make sure you have `node` and `npm` installed and then run `npm i` within directory
- You should then be able to follow along the tutorial and commit all the working code with the repo!


### Hardhat Basics

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks (for hardhat):

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

### Front-end using Next.js
- later in the tutorial you will notice a front-end component
- We added Next.js (a popular React framework), to help you interact with the contract on front-end. Don't worry about mastering Next.js, we mainly want you to focus on the principles of connecting your wallet and interacting with the contract which are mostly the same no matter which framework you use.

**The tutorial uses replit, but for the purposes of this assignment, please add front-end code in your repo when submitting the project!**

To start the front-end, run the following:
- `npm run dev`

### Tutorial Documentation

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