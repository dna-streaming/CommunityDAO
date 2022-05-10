import { BigInt } from "@graphprotocol/graph-ts"
import {
  SLP,
  AdminChanged,
  AdminRemoved,
  Approval,
  BreedingPotionCheckpoint,
  MinterAdded,
  MinterRemoved,
  Paused,
  SpenderUnwhitelisted,
  SpenderWhitelisted,
  Transfer,
  Unpaused
} from "../generated/SLP/SLP"
import { ExampleEntity } from "../generated/schema"

export function handleAdminChanged(event: AdminChanged): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity._oldAdmin = event.params._oldAdmin
  entity._newAdmin = event.params._newAdmin

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.admin(...)
  // - contract.allowance(...)
  // - contract.approve(...)
  // - contract.approveAndCall(...)
  // - contract.balanceOf(...)
  // - contract.burn(...)
  // - contract.burnFrom(...)
  // - contract.cappedSupply(...)
  // - contract.checkpoint(...)
  // - contract.dailyPotionLimit(...)
  // - contract.decimals(...)
  // - contract.getCheckpoint(...)
  // - contract.isMinter(...)
  // - contract.mint(...)
  // - contract.minter(...)
  // - contract.minters(...)
  // - contract.name(...)
  // - contract.paused(...)
  // - contract.symbol(...)
  // - contract.totalSupply(...)
  // - contract.transfer(...)
  // - contract.transferFrom(...)
  // - contract.whitelisted(...)
}

export function handleAdminRemoved(event: AdminRemoved): void {}

export function handleApproval(event: Approval): void {}

export function handleBreedingPotionCheckpoint(
  event: BreedingPotionCheckpoint
): void {}

export function handleMinterAdded(event: MinterAdded): void {}

export function handleMinterRemoved(event: MinterRemoved): void {}

export function handlePaused(event: Paused): void {}

export function handleSpenderUnwhitelisted(event: SpenderUnwhitelisted): void {}

export function handleSpenderWhitelisted(event: SpenderWhitelisted): void {}

export function handleTransfer(event: Transfer): void {}

export function handleUnpaused(event: Unpaused): void {}
