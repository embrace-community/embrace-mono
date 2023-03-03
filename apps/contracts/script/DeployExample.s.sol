// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.19;

import { Script } from "forge-std/Script.sol";
import { Example } from "../src/Example.sol";

/// @dev See the Solidity Scripting tutorial: https://book.getfoundry.sh/tutorials/solidity-scripting
contract DeployFoo is Script {
    address internal deployer;
    Example internal example;

    function setUp() public virtual {
        string memory mnemonic = vm.envString("MNEMONIC");
        (deployer, ) = deriveRememberKey(mnemonic, 0);
    }

    function run() public {
        vm.startBroadcast(deployer);
        example = new Example();
        vm.stopBroadcast();
    }
}