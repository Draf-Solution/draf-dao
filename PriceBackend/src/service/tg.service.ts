import { Injectable } from "@nestjs/common";
import * as abiProfile from "../../hardhat/artifacts/contracts/Profile.sol/Profile.json"
import * as hardhatConfig from "../../hardhat/hardhat_cfg.json"
import * as config from "../../config.json"
import {WalletService} from "./wallet.service";
import {ethers, Wallet} from "ethers";
import axios from 'axios';
import * as lodash from "lodash"

@Injectable()
export class TgService {


  
  async sendMsg(strTgUsername : string, strMsg : string) : Promise<string>
  {
    let strChatID : string = await this.getChatID(strTgUsername);
    console.log("return chat id is ==> " + strChatID);
    /*
    let res : string = await axios.post(config.tgSendMsgUrl,{  
      chat_id: "885970649",
      text : strMsg
    });
    
    return res;
    */
    return "haha";
  }

  async getChatID(strTgUsername : string) : Promise<string>{
    console.log("inside getchatid");
    let res = await axios.get(config.tgGetUpdatesUrl);

    console.log(res.data);
    let objChatHistory = res.data.result[0].message;
    console.log(objChatHistory);
    let objUserChatHistory = lodash.filter(objChatHistory, x => {return(x.chat.username == strTgUsername)});
    console.log(objUserChatHistory);
    let objLatestChatHistory = lodash.maxBy(objUserChatHistory.update_id);
    let strChatID : string = objLatestChatHistory.message.chat.id;


    return strChatID;
  }

}
