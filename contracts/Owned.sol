pragma solidity >=0.4.11;

contract Owned {
  // State variables
  address payable owner;

  //modifiers
  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

  // constructor
  constructor() public{
    owner = msg.sender;
  }
}
