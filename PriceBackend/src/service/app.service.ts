import { Injectable } from "@nestjs/common";
import * as abiProfile from "../../hardhat/artifacts/contracts/Profile.sol/Profile.json"
import {ethers} from "ethers";

@Injectable()
export class AppService {
  createUser(strTgUsername : string) : string{

    let provider = new ethers.providers.JsonRpcProvider("https://data-seed-prebsc-1-s1.binance.org:8545/");
    const signer = provider.getSigner();
    let contractProfile = new ethers.Contract("0xDd9BfD202Ce26600E55896c40F24cd6215De75dC", abiProfile.abi, provider);
    contractProfile.setTgUsername(signer.getAddress, strTgUsername);
    return "test";
  }
}
