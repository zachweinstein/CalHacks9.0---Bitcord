pragma solidity >=0.7.0 < 0.9.0;

contract Bitcord {

    function emitMyMessage(address intendedRecipient, uint32 nonce) public returns (uint64 sequence){
        sequence = core_bridge.publishMessage(nonce, "My Message to " + intendedRecipient, 1);
    }

    mapping(address => Server) servers;

    struct Server{
        Message[] messages;
    }
    struct Message{
        string username;
        string message;
        address sender;
    }

    function checkUserExists(address pubkey) public{

    }

    function createAccount(bytes32 username) public{

    }

    function getUsername(address pubkey) public{

    }
}