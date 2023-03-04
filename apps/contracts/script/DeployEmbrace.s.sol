// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.19;

import {Script} from "forge-std/Script.sol";
import {EmbraceApps} from "../src/EmbraceApps.sol";

/// @dev See the Solidity Scripting tutorial: https://book.getfoundry.sh/tutorials/solidity-scripting
contract Deploy is Script {
    address internal deployer;
    EmbraceApps internal embraceApps;

    function setUp() public virtual {
        string memory mnemonic = vm.envString("MNEMONIC");
        (deployer,) = deriveRememberKey(mnemonic, 0);
    }

    function run() public {
        // TODO: Run through each of the Embrace contracts to deploy
        vm.startBroadcast(deployer);

        embraceApps = new EmbraceApps();

        //To get address of contract = address(embraceAccounts)

        //   const embraceCommunity = await _deployEmbraceCommunity(deployer, ethers);
        //   const embraceCommunities = await _deployEmbraceCommunities(
        //     deployer,
        //     ethers,
        //     accountsContract.address,
        //     embraceCommunity.address,
        //   );

        //   const creationsContract = await _deployCreations(deployer, ethers, embraceCommunities.address);
        //   const socialsContract = await _deploySocials(deployer, ethers, embraceCommunities.address);

        //   _createApps(ethers, appsContract, creationsContract);

        vm.stopBroadcast();
    }
}
