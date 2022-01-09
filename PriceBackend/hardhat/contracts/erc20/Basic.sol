// contracts/Basic.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC20.sol";

contract Basic is ERC20 {
    constructor(uint256 initialSupply) ERC20("Basic Token", "BASIC") {
        _mint(msg.sender, initialSupply);
    }
}