import {Transfer as TransferEvent} from '../../generated/SLP/SLP';
import {categorizeTransfer} from '../entities/Transfer'
import {Account, Currency, NFT,Transfer} from '../../generated/schema';


export function handleTransfer(event:TransferEvent): void{
    categorizeTransfer(event);

}