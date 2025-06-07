// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VulnerableBank {
    mapping(address => uint256) public balances;

    function deposit() external payable {
        balances[msg.sender] += msg.value;
    }

    function withdraw() external {
        uint256 amount = balances[msg.sender];
        require(amount > 0, "No funds");
        (bool sent,) = msg.sender.call{value: amount}("");
        require(sent, "Failed");
        balances[msg.sender] = 0;
    }
}
