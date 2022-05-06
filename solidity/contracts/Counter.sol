// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Counter {
    uint count = 0;
    constructor() {
        console.log("Initialized the contract...");
    }

    function increment() public {
        count++;
        console.log("%s has incremented", msg.sender);
    }

    function getCount() public view returns(uint) {
        return count;
    }
}