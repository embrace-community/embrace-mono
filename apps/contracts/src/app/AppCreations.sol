// SPDX-License-Identifier: MIT

pragma solidity >=0.8.17;

import "forge-std/Console.sol";
import "./AppCreationsCollection.sol";
import {IEmbraceCommunities} from "../libraries/Interfaces.sol";
import "./App.sol";

contract AppCreations is App {
    struct Collection {
        uint128 id;
        address contractAddress;
        string name;
    }

    mapping(uint256 => Collection[]) public communityCollections;
    mapping(uint256 => uint64) public communityToCollectionCount;

    event CollectionCreated(uint256 indexed communityId, address indexed creator, Collection collection);

    constructor(address _embraceCommunitiesAddress) {
        embraceCommunities = IEmbraceCommunities(_embraceCommunitiesAddress);
    }

    // Only community admins can create a collection
    function createCollection(uint256 _communityId, string memory _name, string memory _symbol)
        public
        onlyAdmin(_communityId)
    {
        // Create new ERC721 collection contract
        AppCreationsCollection newCollection = new AppCreationsCollection(
            embraceCommunities,
            _communityId,
            _name,
            _symbol
        );

        // Increment collection count for community
        // Used for collection id - we start at 1, so we increment before pushing to array
        communityToCollectionCount[_communityId]++;

        Collection memory collection = Collection({
            id: communityToCollectionCount[_communityId],
            contractAddress: address(newCollection),
            name: _name
        });

        communityCollections[_communityId].push(collection);

        // Event for collection creation
        emit CollectionCreated(_communityId, msg.sender, collection);
    }

    function getCollection(uint256 _communityIdId, uint128 _id) public view returns (Collection memory) {
        uint128 index = _id - 1;
        return communityCollections[_communityIdId][index];
    }

    function getCollectionCount(uint256 _communityIdId) public view returns (uint64) {
        return communityToCollectionCount[_communityIdId];
    }

    function getCollections(uint256 _communityIdId) public view returns (Collection[] memory) {
        return communityCollections[_communityIdId];
    }
}
