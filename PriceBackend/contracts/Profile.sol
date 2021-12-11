pragma solidity ^0.8.0;

contract Profile {
    // [address user_address][string token_contract] -> Asset
    mapping(address => mapping(string => Asset)) profile;
    
    struct Asset {
        string token_symbol;    // e.g. "bnb"
        string token_contract;  // e.g. "0xB8c77482e45F1F44dE1745F52C74426C631bDD52"
        uint token_decimal;     // e.g. 18
        string standard;        // e.g. "erc20", "erc721", ...
        string network;         // e.g. "bsc"
        int amount;             // e.g. 100000000000000
        string description;     // e.g. "My First BNB Account"
    }

    function addAsset(
        Asset memory asset
    ) public {
        profile[msg.sender][asset.token_contract] = asset;
    }

    function getMyAssets(
        string memory token_contract
    ) public view returns(Asset memory) {
        return profile[msg.sender][token_contract];
    }
    
    function createAsset(
        string memory _token_symbol,
        string memory _token_contract,
        uint _token_decimal,
        string memory _standard,
        string memory _network,
        int _amount,
        string memory _description
    ) public pure returns(Asset memory) {
        return Asset(
            _token_symbol, 
            _token_contract, 
            _token_decimal, 
            _standard, 
            _network, 
            _amount, _description
        );
    }

}
