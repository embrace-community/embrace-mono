// SPDX-License-Identifier: MIT
pragma solidity >=0.8.17;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./App.sol";
import "forge-std/Console.sol";

contract AppCreationsCollection is App, ERC721Enumerable, ERC721URIStorage {
    using Counters for Counters.Counter;

    Counters.Counter private _creationId;

    event CreationCreated(
        uint256 indexed communityId, address indexed creator, address indexed collectionContractAddress, uint256 tokenId
    );

    uint256 private communityId;

    string private baseUri;

    struct TokenData {
        uint256 tokenId;
        string tokenURI;
        address owner;
    }

    constructor(
        IEmbraceCommunities _embraceCommunities,
        uint256 _communityId,
        string memory _name,
        string memory _symbol
    ) ERC721(_name, _symbol) {
        communityId = _communityId;
        embraceCommunities = _embraceCommunities;
        _setBaseURI("ipfs://");
    }

    // Only admins can create a collection
    function mint(string memory _tokenURI) public onlyAdmin(communityId) {
        _creationId.increment(); // First creation is 1

        uint256 newCreationId = _creationId.current();

        _mint(msg.sender, newCreationId);

        if (bytes(_tokenURI).length > 0) {
            super._setTokenURI(newCreationId, _tokenURI);
        }

        // Event for when a creation is minted
        emit CreationCreated(communityId, msg.sender, address(this), newCreationId);
    }

    function tokenURI(uint256 tokenId) public view virtual override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function getAllTokens() public view returns (uint256[] memory) {
        uint256[] memory tokens = new uint256[](totalSupply());
        for (uint256 i = 0; i < totalSupply(); i++) {
            tokens[i] = tokenByIndex(i);
        }
        return tokens;
    }

    function getAllTokensData() public view returns (TokenData[] memory) {
        TokenData[] memory tokenData = new TokenData[](totalSupply());
        for (uint256 i = 0; i < totalSupply(); i++) {
            tokenData[i] = TokenData({
                tokenId: tokenByIndex(i),
                tokenURI: tokenURI(tokenByIndex(i)),
                owner: ownerOf(tokenByIndex(i))
            });
        }
        return tokenData;
    }

    function _burn(uint256 tokenId) internal virtual override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function _mint(address to, uint256 tokenId) internal virtual override(ERC721) {
        super._mint(to, tokenId);
    }

    function _setBaseURI(string memory _uri) internal {
        baseUri = _uri;
    }

    function _baseURI() internal view virtual override(ERC721) returns (string memory) {
        return baseUri;
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId, /* firstTokenId */ uint256 batchSize)
        internal
        virtual
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
