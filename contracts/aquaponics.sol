// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract aquaponics is Ownable {

    constructor (address initialOwner)
        Ownable(initialOwner)
    {}

  struct plant_proposal {
      string plant_name;
      string proposer_name;
  }

  mapping (uint256 => plant_proposal) public Proposals;

  function issue_proposal (
      uint256 _id,
      string memory _plant_name,
      string memory _proposer_name) public onlyOwner {
          Proposals[_id] = plant_proposal(_plant_name, _proposer_name);
        //   emit issued(_id, _date);
      }
}
