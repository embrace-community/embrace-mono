// SPDX-License-Identifier: MIT

pragma solidity >=0.8.17;

import {IEmbraceCommunities} from "../libraries/Interfaces.sol";
import "forge-std/Console.sol";
import "./App.sol";

contract AppSocials is App {
    struct Social {
        uint256 id;
        address lensWallet;
        string lensDefaultProfileId;
    }

    mapping(uint256 => Social) public communitySocials;

    event SocialCreated(
        uint256 indexed communityId, address indexed creator, address lensWallet, string indexed lensDefaultProfileId
    );

    constructor(address _embraceCommunitiesAddress) {
        embraceCommunities = IEmbraceCommunities(_embraceCommunitiesAddress);
    }

    // Only community admins can create a social
    function createSocial(uint256 _communityId, address _lensWallet, string memory _lensDefaultProfileId)
        public
        onlyAdmin(_communityId)
    {
        // Create new ERC721 collection contract
        Social memory social = Social(_communityId, _lensWallet, _lensDefaultProfileId);

        communitySocials[_communityId] = social;

        // Event for social creation
        emit SocialCreated(_communityId, msg.sender, _lensWallet, _lensDefaultProfileId);
    }

    function getSocial(uint256 _communityId) public view returns (Social memory) {
        return communitySocials[_communityId];
    }
}
