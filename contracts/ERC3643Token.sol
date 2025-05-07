// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ERC3643Token is ERC20, Ownable {
    constructor(
        string memory name_,
        string memory symbol_,
        uint256 initialSupply
    ) ERC20(name_, symbol_) Ownable(msg.sender) {
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }

    function decimals() public view virtual override returns (uint8) {
        return 18;
    }

    // Placeholder for ERC-3643 specific functionalities
}