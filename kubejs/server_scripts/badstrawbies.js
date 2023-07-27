EntityEvents.spawned('minecraft:item', event => {
    if (event.entity.item == 'bakery:strawberry') {
        event.entity.setItem('neapolitan:strawberries')
        console.log(event.entity)
    }
})

/*
PlayerEvents.inventoryChanged(event => {
    const {item, player, slot} = event
    const itemsToCheck = ['tarotcards:the_empress']
    if (!itemsToCheck.includes(item.id)) return
    let oldItem = player.inventory.extractItem(slot, item.maxStackSize, false)
    let newItem = Item.of('2x minecraft:diamond').withCount(oldItem.count)
    let leftovers = player.inventory.insertItem(slot, newItem, false)
    // leftovers should be empty unless max stack differs
    if (!leftovers.isEmpty()) { player.give(leftovers) }
    player.sendInventoryUpdate()
})*/