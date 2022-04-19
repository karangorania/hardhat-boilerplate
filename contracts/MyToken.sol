// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.4;


import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract MyToken is ERC20 {

    constructor(uint256 initialSupply) ERC20('MyToken' ,'MYT') {
        _mint(msg.sender, initialSupply);

    }

}

