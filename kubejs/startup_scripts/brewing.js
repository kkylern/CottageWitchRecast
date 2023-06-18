// priority: 0
MoreJSEvents.registerPotionBrewing((event) => {

    event.addCustomBrewing("hexerei:selenite_shard", "minecraft:glass_bottle", "hexerei:milk_bottle");

    event.addCustomBrewing("hexerei:moon_dust", Item.of('minecraft:potion', '{Potion:"minecraft:awkward"}'), Item.of('minecraft:potion', '{Potion:"goblintraders:levitation"}'));
});