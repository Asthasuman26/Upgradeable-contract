// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/proxy/utils/Initializable.sol";

contract MyContractV2 is Initializable {
    uint256 public value;

    function initialize(uint256 _value) public initializer {
        value = _value;
    }

    function updateValue(uint256 _newValue) public {
        value = _newValue;
    }

    //New function in V2
    function doubleValue() public {
        value = value * 2;
    }
}
