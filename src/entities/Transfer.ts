import { ethereum,log } from '@graphprotocol/graph-ts';
//import {Transfer} from '../../generated/schema';

export function categorizeTransfer(event:ethereum.Event): void{
    log.debug('Event information: {}',[event.logIndex.toString()])
}