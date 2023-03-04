// SPDX-License-Identifier: MIT
pragma solidity >=0.8.19;

import {IEmbraceCommunities} from "../libraries/Interfaces.sol";

error ErrorOnlyAdmin(uint256 communityId, address memberAddress);

abstract contract App {
    IEmbraceCommunities public embraceCommunities;

    modifier onlyAdmin(uint256 _communityId) {
        if (!isAdmin(_communityId, msg.sender) && !isFounder(_communityId, msg.sender)) {
            revert ErrorOnlyAdmin(_communityId, msg.sender);
        }
        _;
    }

    function isAdmin(uint256 _communityId, address _address) public view returns (bool) {
        return embraceCommunities.isAdmin(_communityId, _address);
    }

    function isFounder(uint256 _communityId, address _address) public view returns (bool) {
        return embraceCommunities.isFounder(_communityId, _address);
    }
}
