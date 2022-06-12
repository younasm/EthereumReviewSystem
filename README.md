# BLOCKCHAIN Powered Reviews & Rewards System

- Implemented a DApp to create a platform for Reviews & Rewards System on Ethereum Framework.

# GitHub Page

Local instance of (https://github.com/younasm/EthereumReviewSystem/)

# What it does:

- Any users, will be able to submit their reviews on any products/services.- They will be represented as Reviewers.
- Any users, who is reviewing those reviews & can up-vote or down-vote basis their opinions.
- If a reviews get Upvoted, then a minute fraction of ether(Say - 0.0001) will be transferred to "Original Reviewer" address.
- If a reviews get DownVoted, then nothing happens, except downvote count get increases. If Downvote limit reaches more than 50, then "original reviewers" will be deducted the minuet fraction of ether..(Say - 0.00001)
- Reviewers cannot upvote/downvote their own reviews, which helps eliminate fake review counts

# STEPS to Install / Setup

1. Clone the repositories https://github.com/younasm/EthereumReviewSystem.git using following command
   git clone https://github.com/younasm/EthereumReviewSystem.git
2. do run "npm install" command to ensure node packages are up-to-date & in sync
3. Ensure you have "Ganache" & It is running status
4. Ensure you have "MetaMask" extensions added into chrome & enabled custom RPC to sync the accounts with Ganache
5. Using below command to deploy the contract into Ganache
   truffle migrate --network ganache --compile-all --reset
6. Once it is migrated successfully, run below command to launch the server
   npm run dev
7. You can add "reviews" using "add my review", choose file(photos) & upload. this will upload your pic in IPFS & return back the hash key, once it is showing succesuflly upload. Click submit to add your reviews into Blockchain.
8. Now, choose anotherr account in metamask, now you can see two button enabled (upvote/downvote). if reviews are upvoted, then original "reviews provider" will get some ether(0.0001) as rewards
9. if downvotes, same will be reduced from user account.

# Challenges:

- Faced issues using Metamask,sometimes RPC error occured
- Installing "Embark Status" was quite challenging. So we ended up using traditional method.
- Test case debugging

# Implementation:

- Developed using Solidity and web3.js
  - used node.js, web3 and solc compiler
  - used Remix for contract testing
  - Used truffle framework in order to the ease developement process
- Testing of smart contracts was done on
  - Ganache (Private Local Blockchain)
- Testing was done using javascript instead of a solidity contract creation way.
- Javascript testing method used the Mocha framework

# Build With:

- Solidity,IPFS, MetaMask, Web3js, Truffle, Ganache, EVM Framework. JavaScript & JQuery,

# Future Work:

- cost efficient
- if facing issues with MetaMask check (Chain ID of MetaMask and Network ID of Ganche should be same)
