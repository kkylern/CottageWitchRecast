EntityEvents.spawned('minecraft:item', event => {
    if (event.entity.item == 'bakery:strawberry') {
        event.entity.setItem('neapolitan:strawberries')
        console.log(event.entity)
    }
})