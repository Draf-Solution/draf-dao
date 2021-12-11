export interface IAsset{
    token_symbol : string,
    token_contract: string, 
    token_decimal: number,
    standard : string,
    network : string,
    amount : number,
    description : string
}

export interface IProfile{
    assets : IAsset,
    tg_username : string
}