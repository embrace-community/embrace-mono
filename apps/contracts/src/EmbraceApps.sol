// SPDX-License-Identifier: MIT

pragma solidity >=0.8.17;
// NOTE: This may now be redundant

import "@openzeppelin/contracts/utils/Counters.sol";

contract EmbraceApps {
    using Counters for Counters.Counter;

    Counters.Counter private _appIdCounter;

    // App struct for all apps - added by Embrace
    struct App {
        uint256 id;
        string name;
        address contractAddress;
        bool enabled;
    }

    App[] public apps;
    mapping(bytes32 => uint256) public nameToId;

    address public owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function.");
        _;
    }

    modifier uniqueAppName(string memory _appName) {
        require(nameToId[keccak256(bytes(_appName))] == 0, "App name already exists.");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function createApp(
        string memory _name,
        address _contractAddress,
        // string memory _metadata,
        bool _enabled
    ) public onlyOwner uniqueAppName(_name) {
        _appIdCounter.increment(); // So we start at 1

        uint256 id = _appIdCounter.current();
        App memory app = App({id: id, name: _name, contractAddress: _contractAddress, enabled: _enabled});

        apps.push(app);

        nameToId[keccak256(bytes(_name))] = id;
    }

    function setApp(uint128 _appId, App calldata _app) public onlyOwner {
        require(_appId > 0, "App does not exist.");

        apps[_appId - 1] = _app;
    }

    function getApps() public view returns (App[] memory) {
        return apps;
    }

    function getAppById(uint128 _appId) public view returns (App memory) {
        // The appId, will always be the index + 1
        if (_appId > 0) {
            return apps[_appId - 1];
        }

        revert("App not found.");
    }

    function getAppByName(string memory _name) public view returns (App memory) {
        uint256 _appId = nameToId[keccak256(bytes(_name))];
        if (_appId > 0) {
            return apps[_appId - 1];
        }
        revert("App not found.");
    }
}
