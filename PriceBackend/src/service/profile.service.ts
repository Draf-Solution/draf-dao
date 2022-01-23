import { Injectable } from "@nestjs/common";
import * as abiProfile from "../../hardhat/artifacts/contracts/Profile.sol/Profile.json"
import * as hardhatConfig from "../../hardhat/hardhat_cfg.json"
import {WalletService} from "./wallet.service";
import {ethers, Wallet} from "ethers";

@Injectable()
export class ProfileService {


  
  createUser(strTgUsername : string) : string{
    
    let objAdmWallet : Wallet = WalletService.setupAdminWallet();
    let contractProfile = new ethers.Contract(hardhatConfig.profile, abiProfile.abi, objAdmWallet);
    contractProfile.setTgUsername(strTgUsername);
    
    return "test";
  }

  getUser(strTgUsername : string) : string{
    let objAdmWallet : Wallet = WalletService.setupAdminWallet();
    let contractProfile = new ethers.Contract(hardhatConfig.profile, abiProfile.abi, objAdmWallet);
    let strUsername = contractProfile.getTgUsername(objAdmWallet.address);
    
    return strUsername;
  }

}
