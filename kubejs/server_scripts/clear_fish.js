ServerEvents.loaded(event => {
    const server = event.server
    server.scheduleInTicks(1, () => { 
    server.runCommandSilent('/kill @e[type=minecraft:item,name="High-finned Blue"]')
    })  
}) 