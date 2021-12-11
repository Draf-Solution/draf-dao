import { Injectable, Logger } from '@nestjs/common';
import { Response } from '../dto/response.dto';
import { ethers, Wallet } from 'ethers';
import { mnemonicToSeedSync } from 'bip39';
import { timeStamp } from 'console';
import {JsonRpcProvider } from "@ethersproject/providers";
import * as hardhatConfig from "../../hardhat/hardhat_cfg.json"


@Injectable()
export class WalletService {

    static setupAdminWallet() : Wallet
    {
        Logger.debug('creating administrator wallet with key ==> ' + hardhatConfig.url);
        let objPrivateKey : string = hardhatConfig.admin_pk; 
        let provider : JsonRpcProvider = new ethers.providers.JsonRpcProvider(hardhatConfig.url);
        //let objPrivateKey : string = '119d17d02e7846ec8066fcbf2d2daaae4e774c892f4bfd5a58dc5288a93dce46';
        let objWallet = new ethers.Wallet(objPrivateKey,provider);
        return objWallet;
        
    }

    /**
     * Create the wallet with the system's provider and the respective private key.
     * @param strPrivateKey 
     * @returns 
     */

    static createWalletFromPK(strPrivateKey : string) : Wallet
    {
        Logger.debug('creating administrator wallet with key ==> ' + hardhatConfig.url);
        let provider : JsonRpcProvider = new ethers.providers.JsonRpcProvider(hardhatConfig.url);
        //let objPrivateKey : string = '119d17d02e7846ec8066fcbf2d2daaae4e774c892f4bfd5a58dc5288a93dce46';
        let objWallet = new ethers.Wallet(strPrivateKey, provider);
        return objWallet;
    }


    static createHDWallet(strMnemonic: string, strIdx : string) : Wallet
    {
        Logger.debug('creating administrator wallet with key ==> ' + hardhatConfig.url);
        let provider : JsonRpcProvider = new ethers.providers.JsonRpcProvider(hardhatConfig.url);
        //let objPrivateKey : string = '119d17d02e7846ec8066fcbf2d2daaae4e774c892f4bfd5a58dc5288a93dce46';
        //let mnemonic : string = String(strPhrase + SECRETSALT);    
        let objWallet : Wallet = ethers.Wallet.fromMnemonic(strMnemonic,"m/44'/60'/0'/0/" + strIdx);
        Logger.debug("objWallet.private (" + strIdx +")==> " + objWallet.privateKey);
        Logger.debug("objWallet.address (" + strIdx +")==> " + objWallet.address);
        Logger.debug("PKI => " + objWallet.privateKey);

        return objWallet;
    }

}