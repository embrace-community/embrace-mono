// SPDX-License-Identifier: MIT
pragma solidity >=0.8.19;

import "./Types.sol";

interface IEmbraceCommunities {
    function ownerOf(uint256 _tokenId) external view returns (address);

    function isFounder(uint256 _communityId, address _address) external view returns (bool);
    function isAdmin(uint256 _communityId, address _address) external view returns (bool);
}

interface IEmbraceCommunity {
    function initialize(
        string memory _name,
        string memory _symbol,
        address _founderAddress,
        address _communitiesContractAddress,
        uint256 _communityId,
        CommunityData memory _communityData
    ) external;

    function setCommunityData(CommunityData memory _communityData) external;

    function setCommunitiesContractAddress(address _communitiesContractAddress) external;

    function isAdmin(address _address) external view returns (bool);
}
