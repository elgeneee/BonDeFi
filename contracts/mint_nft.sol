//SPDX-License-Identifier: UNLICENSED
// Recieve a NFT and mint ERC-20 bond tokens

pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

//NFT inherits ERC721 token contract
contract MyNFT is ERC721URIStorage, Ownable {
    constructor() public ERC721("BonDefi", "BDF") {}
}