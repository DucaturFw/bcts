import { eth } from "."
import { IBlockchain } from "./blockchains/interfaces"
import { ITransaction as EthTx } from "./blockchains/eth"

let ethB: IBlockchain<EthTx, {}> = eth
