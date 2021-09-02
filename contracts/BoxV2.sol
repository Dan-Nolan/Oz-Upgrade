//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract BoxV2 is Initializable {
    uint public length;
    uint public width;

    function area() external view returns(uint) {
        return length * width;
    }
}
