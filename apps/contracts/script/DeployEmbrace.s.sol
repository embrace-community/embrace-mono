// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.19;

import "forge-std/Console.sol";
import {Script} from "forge-std/Script.sol";
import {EmbraceCommunities} from "../src/EmbraceCommunities.sol";
import {EmbraceCommunity} from "../src/EmbraceCommunity.sol";
import {AppCreations} from "../src/app/AppCreations.sol";
import {AppSocials} from "../src/app/AppSocials.sol";

/// @dev See the Solidity Scripting tutorial: https://book.getfoundry.sh/tutorials/solidity-scripting
contract Deploy is Script {
    address internal deployer;
    EmbraceCommunities internal embraceCommunities;
    EmbraceCommunity internal embraceCommunity;
    AppCreations internal appCreations;
    AppSocials internal appSocials;

    struct Apps {
        string name;
        address contractAddress;
        bool enabled;
    }

    Apps[] public apps;

    function setUp() public virtual {
        string memory mnemonic = vm.envString("MNEMONIC");
        (deployer,) = deriveRememberKey(mnemonic, 0);
    }

    function run() public {
        // TODO: Run through each of the Embrace contracts to deploy
        vm.startBroadcast(deployer);

        embraceCommunity = new EmbraceCommunity();

        embraceCommunities = new EmbraceCommunities(
            "EMBRACE",
            "EMBRACE_COMMUNITY",
            address(embraceCommunity)
        );

        // embraceApps = new EmbraceApps();

        appCreations = new AppCreations(address(embraceCommunities));
        appSocials = new AppSocials(address(embraceCommunities));

        console.log("CONTRACT_ADDRESS_COMMUNITY=\"%s\"", address(embraceCommunity));
        console.log("CONTRACT_ADDRESS_COMMUNITIES=\"%s\"", address(embraceCommunities));
        // console.log("CONTRACT_ADDRESS_APPS=\"%s\"", address(embraceApps));
        console.log("CONTRACT_ADDRESS_APP_CREATIONS=\"%s\"", address(appCreations));
        console.log("CONTRACT_ADDRESS_APP_SOCIALS=\"%s\"", address(appSocials));

        createApps();

        vm.stopBroadcast();
    }

    function createApps() internal {
        // apps = [
        //     Apps("Social", address(appSocials), true),
        //     Apps("Creations", address(appCreations), true),
        //     Apps("Chat Server", address(0), true),
        //     Apps("Streaming", address(0), true),
        //     Apps("Courses", address(0), false),
        //     Apps("Pages", address(0), false),
        //     Apps("Marketplace", address(0), false),
        //     Apps("Discussions", address(0), true)
        // ];

        // for (uint256 i = 0; i < apps.length; i++) {
        //     embraceApps.createApp(apps[i].name, apps[i].contractAddress, apps[i].enabled);
        // }
    }
}
