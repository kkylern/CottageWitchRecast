import crafttweaker.api.tag.MCTag;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.ingredient.IIngredient;
import crafttweaker.api.item.ItemDefinition;
import crafttweaker.api.predicate.ItemPredicate;
import stdlib.List;
import crafttweaker.api.recipe.BlastFurnaceRecipeManager;
import crafttweaker.api.recipe.FurnaceRecipeManager;
import crafttweaker.api.recipe.SmithingRecipeManager;
import crafttweaker.api.item.enchantment.Enchantment;
import crafttweaker.api.ingredient.transform.type.TransformDamage;
import crafttweaker.api.food.FoodProperties;
import crafttweaker.api.block.Block;
import mods.create.CompactingManager;
import mods.jeitweaker.Jei;
import crafttweaker.api.GenericRecipesManager;

var air = <item:minecraft:air>;


// Adds tags to Brooms
<tag:items:crafttweaker:brooms>.add(<item:hexerei:mahogany_broom>, <item:hexerei:witch_hazel_broom>, <item:hexerei:willow_broom>);

// Adds compostable tag to make things able to be made into Compost

<tag:items:crafttweaker:compostable>.add(
<item:hexerei:mugwort_flowers>,
<item:hexerei:mugwort_leaves>,
<item:hexerei:yellow_dock_flowers>,
<item:hexerei:yellow_dock_leaves>,
<item:hexerei:belladonna_flowers>,
<item:hexerei:belladonna_berries>,
<item:hexerei:mandrake_root>,
<item:hexerei:mandrake_flowers>,
<item:hexerei:dried_sage>,
<item:hexerei:dried_belladonna_flowers>,
<item:hexerei:dried_mandrake_flowers>,
<item:hexerei:dried_mugwort_flowers>,
<item:hexerei:dried_mugwort_leaves>,
<item:hexerei:dried_yellow_dock_flowers>,
<item:hexerei:dried_yellow_dock_leaves>,
<item:farmersdelight:tree_bark>,
<item:minecraft:rotten_flesh>
);

// Adds dirt tag to a bunch of dirt
<tag:items:crafttweaker:dirts>.add(
<item:minecraft:dirt>,
<item:minecraft:coarse_dirt>,
<item:minecraft:rooted_dirt>,
<item:minecraft:podzol>
);

// Change Compost recipe
craftingTable.remove(<item:farmersdelight:organic_compost>);
craftingTable.addShapeless("witchycompost", <item:farmersdelight:organic_compost> * 2, [<tag:items:crafttweaker:dirts>, <tag:items:supplementaries:straw>, <tag:items:supplementaries:straw>, <item:minecraft:bone_meal>, <item:minecraft:bone_meal>, <tag:items:crafttweaker:compostable>, <tag:items:crafttweaker:compostable>, <tag:items:crafttweaker:compostable>, <tag:items:crafttweaker:compostable>]);

// Add rope tags
<tag:items:supplementaries:ropes>.add(<item:farmersdelight:rope>);

// Add milk tags just in case
<tag:items:forge:cheese_or_milk>.add(<item:hexerei:milk_bottle>);
<tag:items:forge:milk>.add(<item:hexerei:milk_bottle>);
<tag:items:forge:milk/milk_bottle>.add(<item:hexerei:milk_bottle>);



// Hides powerless building gadgets

var removeGadgets = [
<item:buildinggadgets:gadget_building>,
<item:buildinggadgets:gadget_exchanging>,
<item:buildinggadgets:gadget_copy_paste>,
<item:buildinggadgets:gadget_destruction>
] as IItemStack[];

for rgadget in removeGadgets {
craftingTable.remove(rgadget);
Jei.hideIngredient(rgadget);
}

// Makes Building Gadgets Accessible without power

var bgMain = <item:buildinggadgets:gadget_building>.withTag({state: {serializer: "buildinggadgets:dummy_serializer" as string, state: {Name: "minecraft:air" as string}, data: {}}, energy: 500000.0 as double});

var exgMain = <item:buildinggadgets:gadget_exchanging>.withTag({state: {serializer: "buildinggadgets:dummy_serializer" as string, state: {Name: "minecraft:air" as string}, data: {}}, energy: 500000.0 as double});

var copasMain = <item:buildinggadgets:gadget_copy_paste>.withTag({mode: 0 as byte, template_id: [700466076, -453686443, -2126732122, 1992073322], energy: 500000.0 as double});

var desMain = <item:buildinggadgets:gadget_destruction>.withTag({overlay: 1 as byte, fuzzy: 1 as byte, energy: 1000000.0 as double});

craftingTable.addShaped("fullbuildinggadget", bgMain, [[<item:minecraft:iron_ingot>, <item:minecraft:redstone>, <item:minecraft:iron_ingot>], [<item:minecraft:diamond>, <item:minecraft:redstone>, <item:minecraft:diamond>], [<item:minecraft:iron_ingot>, <item:minecraft:lapis_lazuli>, <item:minecraft:iron_ingot>]]);

craftingTable.addShaped("fullexchanging", exgMain, [[<item:minecraft:iron_ingot>, <item:minecraft:redstone>, <item:minecraft:iron_ingot>], [<item:minecraft:diamond>, <item:minecraft:lapis_lazuli>, <item:minecraft:diamond>], [<item:minecraft:iron_ingot>, <item:minecraft:lapis_lazuli>, <item:minecraft:iron_ingot>]]);

craftingTable.addShaped("fullcopypaste", copasMain, [[<item:minecraft:iron_ingot>, <item:minecraft:redstone>, <item:minecraft:iron_ingot>], [<item:minecraft:emerald>, <item:minecraft:redstone>, <item:minecraft:emerald>], [<item:minecraft:iron_ingot>, <item:minecraft:lapis_lazuli>, <item:minecraft:iron_ingot>]]);

craftingTable.addShaped("fulldestruction", desMain, [[<item:minecraft:iron_ingot>, <item:minecraft:redstone>, <item:minecraft:iron_ingot>], [<item:minecraft:ender_pearl>, <item:minecraft:redstone>, <item:minecraft:ender_pearl>], [<item:minecraft:iron_ingot>, <item:minecraft:lapis_lazuli>, <item:minecraft:iron_ingot>]]);


var addGadgets = [
    bgMain,
    exgMain,
    copasMain,
    desMain
] as IItemStack[];

for agadget in addGadgets {
Jei.addIngredient(agadget);
}

// Akashic Tome Stuff
var aTomeFull = <item:akashictome:tome>.withTag({ingredients: {item0: "block.minecraft.air", length: 3, item2: "item.patchouli.guide_book", item1: "item.akashictome.tome"}, "akashictome:data": {hexerei: {Count: 1, id: "hexerei:book_of_shadows", tag: {bookmarks: {}, chapter: 0, opened: 0, page: 0}}, create_central_kitchen: {ForgeCaps: {Parent: {}}, Count: 1, id: "create_central_kitchen:cooking_guide"}, ars_nouveau: {Count: 1, id: "ars_nouveau:worn_notebook"}, ftbquests: {Count: 1, id: "ftbquests:book"}, twilightdelight: {id: "patchouli:guide_book", Count: 1, tag: {"patchouli:book": "twilightdelight:twilight_guide"}}, create_central_kitchen_0: {ForgeCaps: {Parent: {NeedWater: 0}}, Count: 1, id: "create_central_kitchen:brewing_guide", tag: {"akashictome:definedMod": "create_central_kitchen_0"}}, extradelight: {Count: 1, id: "patchouli:guide_book", tag: {"patchouli:book": "extradelight:cookbook"}}, lexicon: {Count: 1, id: "patchouli:guide_book", tag: {"patchouli:book": "lexicon:lexicon"}}}});

craftingTable.addShapeless("akashicfull", aTomeFull, [<item:minecraft:book>, <item:minecraft:stick>]);

// Remove Smelting Recipes

var removeSmelting = [
    <item:delightful:animal_fat>,
    <item:delightful:animal_oil_bottle>
] as IItemStack[];
for item in removeSmelting {
blastFurnace.remove(item);
furnace.remove(item);
}

// Remove Crafting Table Recipes & Hide from JEI

var removeNope = [
    <item:enigmaticgraves:grave_finder>,
    <item:ftbquests:barrier>,
    <item:gildedarmor:gilded_enderite_helmet>,
    <item:gildedarmor:gilded_enderite_chestplate>,
    <item:gildedarmor:gilded_enderite_leggings>,
    <item:gildedarmor:gilded_enderite_boots>,
    <item:ftbquests:missing_item>,
    <item:ftbquests:stage_barrier>,
    <item:ftbquests:detector>,
    <item:ftbquests:loot_crate_opener>,
    <item:ftbquests:screen_1>,
    <item:ftbquests:screen_3>,
    <item:ftbquests:screen_5>,
    <item:ftbquests:screen_7>,
    <item:ftbquests:custom_icon>,
    <item:itemfilters:always_true>,
    <item:itemfilters:always_false>,
    <item:itemfilters:or>,
    <item:itemfilters:and>,
    <item:itemfilters:not>,
    <item:itemfilters:xor>,
    <item:itemfilters:tag>,
    <item:itemfilters:mod>,
    <item:itemfilters:item_group>,
    <item:itemfilters:id_regex>,
    <item:itemfilters:damage>,
    <item:itemfilters:block>,
    <item:itemfilters:max_count>,
    <item:itemfilters:strong_nbt>,
    <item:itemfilters:weak_nbt>,
    <item:itemfilters:custom>,
    <item:prefab:item_swift_blade_wood>,
    <item:prefab:item_swift_blade_gold>,
    <item:prefab:item_sickle_wood>,
    <item:prefab:item_sickle_stone>,
    <item:prefab:item_sickle_gold>,
    <item:prefab:item_sickle_iron>,
    <item:prefab:item_sickle_diamond>,
    <item:prefab:item_sickle_netherite>,
    <item:prefab:item_clutch_of_eggs>,
    <item:prefab:block_boundary>,
    <item:prefab:item_crate_of_beets>,
    <item:prefab:item_bunch_of_beets>,
    <item:prefab:item_bunch_of_carrots>,
    <item:prefab:item_bunch_of_potatoes>,
    <item:prefab:item_wooden_crate>,
    <item:prefab:item_crate_of_potatoes>,
    <item:prefab:item_crate_of_carrots>,
    <item:prefab:item_swift_blade_netherite>,
    <item:prefab:item_swift_blade_diamond>,
    <item:prefab:item_swift_blade_steel>,
    <item:prefab:item_swift_blade_obsidian>,
    <item:prefab:item_swift_blade_osmium>,
    <item:prefab:item_swift_blade_iron>,
    <item:prefab:item_swift_blade_bronze>,
    <item:prefab:item_swift_blade_stone>,
    <item:prefab:item_swift_blade_copper>,
    <item:quark:beetroot_crate>,
    <item:quark:potato_crate>,
    <item:quark:carrot_crate>,
    <item:supplementaries:rope>,
    <item:hexerei:milk_bottle>,
    <item:delightful:animal_fat>,
    <item:delightful:animal_oil_bottle>,
    //<item:pipez:fluid_pipe>,
    <item:pipez:energy_pipe>,
    <item:pipez:gas_pipe>,
    <item:pipez:universal_pipe>,
    <item:artifacts:flippers>,
    <item:artifacts:golden_hook>,
    <item:artifacts:feral_claws>,
    <item:artifacts:helium_flamingo>,
    <item:artifacts:everlasting_beef>,
    <item:artifacts:eternal_steak>,
    <item:artifacts:snorkel>,
    <item:artifacts:umbrella>,
    <item:quark:feeding_trough>,
    <item:neapolitan:milk_bottle>,
    <item:finsandtails:armored_gopjet_jetpack>,
    <item:finsandtails:gopjet_jetpack>,
    <item:prefab:item_carton_of_eggs>,
    <item:sophisticatedstorage:feeding_upgrade>,
    <item:sophisticatedstorage:advanced_feeding_upgrade>,
    <item:toms_storage:ts.polymorphic_item_filter>,
    <item:sophisticatedstorage:pump_upgrade>,
    <item:sophisticatedstorage:advanced_pump_upgrade>,
    <item:sophisticatedstorage:xp_pump_upgrade>,
    <item:structure_gel:red_gel>,
    <item:structure_gel:blue_gel>,
    <item:structure_gel:green_gel>,
    <item:structure_gel:cyan_gel>,
    <item:structure_gel:orange_gel>,
    <item:structure_gel:yellow_gel>,
    <item:structure_gel:data_handler>,
    <item:structure_gel:dynamic_spawner>,
    <item:structure_gel:building_tool>,
    <item:crittersandcompanions:diamond_dragonfly_armor>,
    <item:crittersandcompanions:gold_dragonfly_armor>,
    <item:crittersandcompanions:iron_dragonfly_armor>,
    <item:sophisticatedstorage:jukebox_upgrade>,
    <item:sophisticatedstorage:debug_tool>,
    <item:delightful:cooked_venison_chops>,
    <item:twilightforest:raw_venison>,
    <item:twilightforest:cooked_venison>,
    <item:twilightdelight:raw_venison_rib>,
    <item:twilightdelight:cooked_venison_rib>,
    <item:environmental:cherry_crate>,
    <item:vinery:apple_crate>,
    <item:environmental:cherries>,
    <item:toms_storage:ts.open_crate>,
    <item:sophisticatedstorage:shulker_box>,
    <item:sophisticatedstorage:iron_shulker_box>,
    <item:sophisticatedstorage:gold_shulker_box>,
    <item:sophisticatedstorage:diamond_shulker_box>,
    <item:sophisticatedstorage:netherite_shulker_box>,
    <item:sophisticatedstorage:shulker_box>.withTag({mainColor: 16383998, accentColor: 16383998}),
    <item:sophisticatedstorage:shulker_box>.withTag({mainColor: 16351261, accentColor: 16351261}),
    <item:sophisticatedstorage:shulker_box>.withTag({mainColor: 13061821, accentColor: 13061821}),
    <item:sophisticatedstorage:shulker_box>.withTag({mainColor: 3847130, accentColor: 3847130}),
    <item:sophisticatedstorage:shulker_box>.withTag({mainColor: 16701501, accentColor: 16701501}),
    <item:sophisticatedstorage:shulker_box>.withTag({mainColor: 8439583, accentColor: 8439583}),
    <item:sophisticatedstorage:shulker_box>.withTag({mainColor: 15961002, accentColor: 15961002}),
    <item:sophisticatedstorage:shulker_box>.withTag({mainColor: 4673362, accentColor: 4673362}),
    <item:sophisticatedstorage:shulker_box>.withTag({mainColor: 10329495, accentColor: 10329495}),
    <item:sophisticatedstorage:shulker_box>.withTag({mainColor: 1481884, accentColor: 1481884}),
    <item:sophisticatedstorage:shulker_box>.withTag({mainColor: 8991416, accentColor: 8991416}),
    <item:sophisticatedstorage:shulker_box>.withTag({mainColor: 3949738, accentColor: 3949738}),
    <item:sophisticatedstorage:shulker_box>.withTag({mainColor: 8606770, accentColor: 8606770}),
    <item:sophisticatedstorage:shulker_box>.withTag({mainColor: 6192150, accentColor: 6192150}),
    <item:sophisticatedstorage:shulker_box>.withTag({mainColor: 11546150, accentColor: 11546150}),
    <item:sophisticatedstorage:shulker_box>.withTag({mainColor: 1908001, accentColor: 1908001}),
    <item:sophisticatedstorage:shulker_box>.withTag({mainColor: 16701501, accentColor: 8439583}),
    <item:sophisticatedstorage:iron_shulker_box>.withTag({mainColor: 16383998, accentColor: 16383998}),
    <item:sophisticatedstorage:iron_shulker_box>.withTag({mainColor: 16351261, accentColor: 16351261}),
    <item:sophisticatedstorage:iron_shulker_box>.withTag({mainColor: 13061821, accentColor: 13061821}),
    <item:sophisticatedstorage:iron_shulker_box>.withTag({mainColor: 3847130, accentColor: 3847130}),
    <item:sophisticatedstorage:iron_shulker_box>.withTag({mainColor: 16701501, accentColor: 16701501}),
    <item:sophisticatedstorage:iron_shulker_box>.withTag({mainColor: 8439583, accentColor: 8439583}),
    <item:sophisticatedstorage:iron_shulker_box>.withTag({mainColor: 15961002, accentColor: 15961002}),
    <item:sophisticatedstorage:iron_shulker_box>.withTag({mainColor: 4673362, accentColor: 4673362}),
    <item:sophisticatedstorage:iron_shulker_box>.withTag({mainColor: 10329495, accentColor: 10329495}),
    <item:sophisticatedstorage:iron_shulker_box>.withTag({mainColor: 1481884, accentColor: 1481884}),
    <item:sophisticatedstorage:iron_shulker_box>.withTag({mainColor: 8991416, accentColor: 8991416}),
    <item:sophisticatedstorage:iron_shulker_box>.withTag({mainColor: 3949738, accentColor: 3949738}),
    <item:sophisticatedstorage:iron_shulker_box>.withTag({mainColor: 8606770, accentColor: 8606770}),
    <item:sophisticatedstorage:iron_shulker_box>.withTag({mainColor: 6192150, accentColor: 6192150}),
    <item:sophisticatedstorage:iron_shulker_box>.withTag({mainColor: 11546150, accentColor: 11546150}),
    <item:sophisticatedstorage:iron_shulker_box>.withTag({mainColor: 1908001, accentColor: 1908001}),
    <item:sophisticatedstorage:iron_shulker_box>.withTag({mainColor: 16701501, accentColor: 8439583}),
    <item:sophisticatedstorage:netherite_shulker_box>.withTag({mainColor: 16701501, accentColor: 8439583}),
    <item:sophisticatedstorage:netherite_shulker_box>.withTag({mainColor: 1908001, accentColor: 1908001}),
    <item:sophisticatedstorage:netherite_shulker_box>.withTag({mainColor: 11546150, accentColor: 11546150}),
    <item:sophisticatedstorage:netherite_shulker_box>.withTag({mainColor: 6192150, accentColor: 6192150}),
    <item:sophisticatedstorage:netherite_shulker_box>.withTag({mainColor: 8606770, accentColor: 8606770}),
    <item:sophisticatedstorage:netherite_shulker_box>.withTag({mainColor: 3949738, accentColor: 3949738}),
    <item:sophisticatedstorage:netherite_shulker_box>.withTag({mainColor: 13061821, accentColor: 13061821}),
    <item:sophisticatedstorage:netherite_shulker_box>.withTag({mainColor: 3847130, accentColor: 3847130}),
    <item:sophisticatedstorage:netherite_shulker_box>.withTag({mainColor: 16701501, accentColor: 16701501}),
    <item:sophisticatedstorage:netherite_shulker_box>.withTag({mainColor: 8439583, accentColor: 8439583}),
    <item:sophisticatedstorage:netherite_shulker_box>.withTag({mainColor: 15961002, accentColor: 15961002}),
    <item:sophisticatedstorage:netherite_shulker_box>.withTag({mainColor: 4673362, accentColor: 4673362}),
    <item:sophisticatedstorage:netherite_shulker_box>.withTag({mainColor: 10329495, accentColor: 10329495}),
    <item:sophisticatedstorage:netherite_shulker_box>.withTag({mainColor: 1481884, accentColor: 1481884}),
    <item:sophisticatedstorage:netherite_shulker_box>.withTag({mainColor: 8991416, accentColor: 8991416}),
    <item:sophisticatedstorage:netherite_shulker_box>.withTag({mainColor: 16351261, accentColor: 16351261}),
    <item:sophisticatedstorage:netherite_shulker_box>.withTag({mainColor: 16383998, accentColor: 16383998}),
    <item:sophisticatedstorage:diamond_shulker_box>.withTag({mainColor: 16701501, accentColor: 8439583}),
    <item:sophisticatedstorage:diamond_shulker_box>.withTag({mainColor: 1908001, accentColor: 1908001}),
    <item:sophisticatedstorage:diamond_shulker_box>.withTag({mainColor: 11546150, accentColor: 11546150}),
    <item:sophisticatedstorage:diamond_shulker_box>.withTag({mainColor: 6192150, accentColor: 6192150}),
    <item:sophisticatedstorage:diamond_shulker_box>.withTag({mainColor: 8606770, accentColor: 8606770}),
    <item:sophisticatedstorage:diamond_shulker_box>.withTag({mainColor: 3949738, accentColor: 3949738}),
    <item:sophisticatedstorage:diamond_shulker_box>.withTag({mainColor: 8991416, accentColor: 8991416}),
    <item:sophisticatedstorage:diamond_shulker_box>.withTag({mainColor: 16351261, accentColor: 16351261}),
    <item:sophisticatedstorage:diamond_shulker_box>.withTag({mainColor: 13061821, accentColor: 13061821}),
    <item:sophisticatedstorage:diamond_shulker_box>.withTag({mainColor: 3847130, accentColor: 3847130}),
    <item:sophisticatedstorage:diamond_shulker_box>.withTag({mainColor: 8439583, accentColor: 8439583}),
    <item:sophisticatedstorage:diamond_shulker_box>.withTag({mainColor: 16701501, accentColor: 16701501}),
    <item:sophisticatedstorage:diamond_shulker_box>.withTag({mainColor: 15961002, accentColor: 15961002}),
    <item:sophisticatedstorage:diamond_shulker_box>.withTag({mainColor: 4673362, accentColor: 4673362}),
    <item:sophisticatedstorage:diamond_shulker_box>.withTag({mainColor: 10329495, accentColor: 10329495}),
    <item:sophisticatedstorage:diamond_shulker_box>.withTag({mainColor: 1481884, accentColor: 1481884}),
    <item:sophisticatedstorage:gold_shulker_box>.withTag({mainColor: 16383998, accentColor: 16383998}),
    <item:sophisticatedstorage:gold_shulker_box>.withTag({mainColor: 16351261, accentColor: 16351261}),
    <item:sophisticatedstorage:gold_shulker_box>.withTag({mainColor: 13061821, accentColor: 13061821}),
    <item:sophisticatedstorage:gold_shulker_box>.withTag({mainColor: 3847130, accentColor: 3847130}),
    <item:sophisticatedstorage:gold_shulker_box>.withTag({mainColor: 16701501, accentColor: 16701501}),
    <item:sophisticatedstorage:gold_shulker_box>.withTag({mainColor: 8439583, accentColor: 8439583}),
    <item:sophisticatedstorage:gold_shulker_box>.withTag({mainColor: 15961002, accentColor: 15961002}),
    <item:sophisticatedstorage:gold_shulker_box>.withTag({mainColor: 4673362, accentColor: 4673362}),
    <item:sophisticatedstorage:gold_shulker_box>.withTag({mainColor: 10329495, accentColor: 10329495}),
    <item:sophisticatedstorage:gold_shulker_box>.withTag({mainColor: 1481884, accentColor: 1481884}),
    <item:sophisticatedstorage:gold_shulker_box>.withTag({mainColor: 3949738, accentColor: 3949738}),
    <item:sophisticatedstorage:gold_shulker_box>.withTag({mainColor: 8991416, accentColor: 8991416}),
    <item:sophisticatedstorage:gold_shulker_box>.withTag({mainColor: 8606770, accentColor: 8606770}),
    <item:sophisticatedstorage:gold_shulker_box>.withTag({mainColor: 6192150, accentColor: 6192150}),
    <item:sophisticatedstorage:gold_shulker_box>.withTag({mainColor: 11546150, accentColor: 11546150}),
    <item:sophisticatedstorage:gold_shulker_box>.withTag({mainColor: 1908001, accentColor: 1908001}),
    <item:sophisticatedstorage:gold_shulker_box>.withTag({mainColor: 16701501, accentColor: 8439583}),
    <item:sophisticatedstorage:diamond_shulker_box>.withTag({mainColor: 16383998, accentColor: 16383998}),
    <item:vinery:apple_pie_slice>,
    <item:vinery:apple_pie>,
    <item:delightful:zinc_knife>,
    <item:ends_delight:purpur_knife>,
    <item:ends_delight:end_stone_knife>,
    <item:ends_delight:dragon_egg_shell_knife>,
    <item:farmersdelight:golden_knife>
] as IItemStack[];

for item in removeNope {
recipes.remove(item);
Jei.hideIngredient(item);
}

// Time in a Bottle

craftingTable.remove(<item:tiab:time_in_a_bottle>);
craftingTable.addShaped("timeinabottle", <item:tiab:time_in_a_bottle>, [[<item:minecraft:gold_ingot>, <item:minecraft:gold_ingot>, <item:minecraft:gold_ingot>], [<item:minecraft:diamond>, <item:minecraft:clock>, <item:minecraft:diamond>], [<item:minecraft:lapis_lazuli>, <item:quark:bottled_cloud>, <item:minecraft:lapis_lazuli>]]);

// Ars Nouveau Novice Spellbook

craftingTable.addShaped("novicebook", <item:ars_nouveau:novice_spell_book>, 
[[air, <item:minecraft:gold_ingot>, air],
[<item:minecraft:gold_ingot>, <item:ars_nouveau:worn_notebook>, <item:minecraft:gold_ingot>],
[air, <item:minecraft:gold_ingot>, air]]);

// Pearl Necklace Balancing

var pearlnecklaces = [
    <item:crittersandcompanions:pearl_necklace_2>,
    <item:crittersandcompanions:pearl_necklace_3>
] as IItemStack[];

for item in pearlnecklaces {
craftingTable.remove(item);
}

craftingTable.addShapeless("pearl2", <item:crittersandcompanions:pearl_necklace_2>, [<item:crittersandcompanions:pearl_necklace_1>, <item:minecraft:ender_pearl>]);

craftingTable.addShapeless("pearl3", <item:crittersandcompanions:pearl_necklace_3>, [<item:crittersandcompanions:pearl_necklace_2>, <item:mermod:glowing_pearl_modifier>]);

// Burger recipes

var burgers = [
<item:farmersdelight:hamburger>,
<item:delightful:cheeseburger>,
<item:delightful:deluxe_cheeseburger>
] as IItemStack[];

for item in burgers {
    craftingTable.remove(item);
}


craftingTable.addShapeless("burger", <item:farmersdelight:hamburger>, [
    <item:minecraft:bread>,
    <tag:items:forge:salad_ingredients>,
    <item:farmersdelight:onion>,
    <item:farmersdelight:tomato>,
    <tag:items:forge:cooked_beef>
]);

craftingTable.addShapeless("cheeseburgercon", <item:delightful:cheeseburger>, [
    <item:farmersdelight:hamburger>,
    <tag:items:forge:cheese>
]);

craftingTable.addShapeless("cheeseburger", <item:delightful:cheeseburger>, [
    <item:minecraft:bread>,
    <tag:items:forge:salad_ingredients>,
    <item:farmersdelight:onion>,
    <item:farmersdelight:tomato>,
    <tag:items:forge:cooked_beef>,
    <tag:items:forge:cheese>
]);

craftingTable.addShapeless("ultraburger", <item:delightful:deluxe_cheeseburger>, [
    <item:minecraft:bread>,
    <tag:items:forge:salad_ingredients>,
    <item:farmersdelight:onion>,
    <item:farmersdelight:tomato>,
    <tag:items:forge:cooked_beef>,
    <tag:items:forge:cooked_beef>,
    <tag:items:forge:cheese>,
    <tag:items:forge:cheese>,
    <item:farmersdelight:cooked_bacon>
]);

craftingTable.addShapeless("ultraburgercon", <item:delightful:deluxe_cheeseburger>, [
    <item:delightful:cheeseburger>,
    <tag:items:forge:cooked_beef>,
    <tag:items:forge:cheese>,
    <item:farmersdelight:cooked_bacon>
]);

// Tom's Tags

<tag:items:crafttweaker:invcable>.add(
    <item:toms_storage:ts.inventory_cable>,
    <item:toms_storage:ts.inventory_cable_framed>
);

<tag:items:crafttweaker:connector>.add(
    <item:toms_storage:ts.inventory_cable_connector_filtered>,
    <item:toms_storage:ts.inventory_cable_connector>,
    <item:toms_storage:ts.inventory_cable_connector_framed>
);


// Nature's Compass recipe

craftingTable.remove(<item:naturescompass:naturescompass>);

craftingTable.addShaped("naturescompass", <item:naturescompass:naturescompass>, [[<tag:items:minecraft:saplings>, <tag:items:minecraft:logs>, <tag:items:minecraft:saplings>], [<tag:items:minecraft:logs>, <item:hexerei:dowsing_rod>, <tag:items:minecraft:logs>], [<tag:items:minecraft:saplings>, <tag:items:minecraft:logs>, <tag:items:minecraft:saplings>]]);

// Chest recipe?!

craftingTable.addShaped("chestwtf", <item:minecraft:chest>, [[<tag:items:minecraft:planks>, <tag:items:minecraft:planks>, <tag:items:minecraft:planks>], [<tag:items:minecraft:planks>, air, <tag:items:minecraft:planks>], [<tag:items:minecraft:planks>, <tag:items:minecraft:planks>, <tag:items:minecraft:planks>]]);

// ladder recipe?!

craftingTable.addShaped("ladderwtf", <item:minecraft:ladder> * 4, [
    [<item:minecraft:stick>, air, <item:minecraft:stick>], 
    [<item:minecraft:stick>, <tag:items:minecraft:planks>, <item:minecraft:stick>], 
    [<item:minecraft:stick>, air, <item:minecraft:stick>]]);

//making more heat sources work with farmer's delight

// Inventory Remotes

//<tag:items:crafttweaker:remotes>.add(
//    <item:storagenetwork:crafting_remote>,
//    <item:storagenetwork:inventory_remote>
//);

// Eyes
<tag:items:crafttweaker:eyes>.add(
    <item:endrem:evil_eye>,
    <item:endrem:cursed_eye>,
    <item:endrem:rogue_eye>,
    <item:endrem:old_eye>,
    <item:endrem:nether_eye>,
    <item:endrem:lost_eye>,
    <item:endrem:corrupted_eye>,
    <item:endrem:cold_eye>,
    <item:endrem:black_eye>,
    <item:endrem:guardian_eye>,
    <item:endrem:magical_eye>,
    <item:endrem:wither_eye>,
    <item:endrem:witch_eye>,
    <item:endrem:undead_eye>,
    <item:endrem:exotic_eye>
);

craftingTable.addShapeless("endeyestopearl", <item:minecraft:ender_pearl> * 4, [<tag:items:crafttweaker:eyes>]);

// Add uses for Selenite

brewing.addRecipe(<item:hexerei:milk_bottle>, <item:hexerei:selenite_shard>, <item:minecraft:glass_bottle>);

craftingTable.addShaped("seleniteglass", <item:minecraft:glass> * 8, [[<tag:items:forge:stained_glass>, <tag:items:forge:stained_glass>, <tag:items:forge:stained_glass>], [<tag:items:forge:stained_glass>, <item:hexerei:selenite_shard>, <tag:items:forge:stained_glass>], [<tag:items:forge:stained_glass>, <tag:items:forge:stained_glass>, <tag:items:forge:stained_glass>]]);

// Mandrake as Poppet
craftingTable.addShaped("mandraketotem", <item:minecraft:totem_of_undying>, [
[<item:twilightforest:red_thread>, 
<item:endrem:evil_eye>, 
<item:twilightforest:red_thread>], 
[<item:hexerei:moon_dust>, 
<item:hexerei:mandrake_root>, 
<item:hexerei:moon_dust>], 
[<item:twilightforest:red_thread>, 
<item:twilightforest:charm_of_life_1>, 
<item:twilightforest:red_thread>]
]);


// Change Ring of Enderchest Recipe

craftingTable.remove(<item:ring_of_enderchest:ring_of_enderchest>);

craftingTable.addShaped("ringofenderchest", <item:ring_of_enderchest:ring_of_enderchest>, [
[<item:minecraft:iron_ingot>, <item:minecraft:ender_pearl>, <item:minecraft:iron_ingot>],
[<item:minecraft:iron_ingot>, <item:minecraft:ender_chest>, <item:minecraft:iron_ingot>],
[<item:minecraft:iron_ingot>, <item:minecraft:ender_pearl>, <item:minecraft:iron_ingot>]
]);


// Making Knives compatible across mods

<tag:items:forge:fillet_knife>.add(
    <item:delightful:copper_knife>,
    <item:delightful:tin_knife>,
    <item:delightful:silver_knife>,
    <item:delightful:lead_knife>,
    <item:delightful:fiery_knife>,
    <item:delightful:ironwood_knife>,
    <item:delightful:knightmetal_knife>,
    <item:delightful:steeleaf_knife>,
    <item:farmersdelight:flint_knife>,
    <item:farmersdelight:iron_knife>,
    <item:farmersdelight:diamond_knife>,
    <item:farmersdelight:netherite_knife>,
    <item:farmersdelight:golden_knife>
);


// Pet Beds

<tag:items:crafttweaker:petbeds>.add(
    <item:domesticationinnovation:pet_bed_white>,
    <item:domesticationinnovation:pet_bed_orange>,
    <item:domesticationinnovation:pet_bed_magenta>,
    <item:domesticationinnovation:pet_bed_light_blue>,
    <item:domesticationinnovation:pet_bed_yellow>,
    <item:domesticationinnovation:pet_bed_green>,
    <item:domesticationinnovation:pet_bed_brown>,
    <item:domesticationinnovation:pet_bed_blue>,
    <item:domesticationinnovation:pet_bed_purple>,
    <item:domesticationinnovation:pet_bed_cyan>,
    <item:domesticationinnovation:pet_bed_light_gray>,
    <item:domesticationinnovation:pet_bed_gray>,
    <item:domesticationinnovation:pet_bed_pink>,
    <item:domesticationinnovation:pet_bed_lime>,
    <item:domesticationinnovation:pet_bed_red>,
    <item:domesticationinnovation:pet_bed_black>
);

// egg carton to eggs

craftingTable.addShapeless("cartontoegg", <item:minecraft:egg> * 9, [<item:prefab:item_carton_of_eggs>]);

// Remove all recipes in MC Story Mode Armors
craftingTable.removeByModid("mcsa");

<tag:items:crafttweaker:diaknife>.add(<item:farmersdelight:diamond_knife>);

craftingTable.remove(<item:supplementaries:pancake>);

craftingTable.addShapeless("pancake", <item:supplementaries:pancake>, [<tag:items:forge:flour>, <tag:items:forge:sugar>, <tag:items:forge:eggs>, <tag:items:forge:milk>]);

// Uncompress honeycomb

craftingTable.addShapeless("honeytocomb", <item:minecraft:honeycomb> * 4, [<item:minecraft:honeycomb_block>]);

// Add tags to Mushroom Colonies for quest purposes
<tag:items:crafttweaker:mushcolony>.add(<item:farmersdelight:red_mushroom_colony>, 
<item:farmersdelight:brown_mushroom_colony>,
<item:twilightdelight:mushgloom_colony>,
<item:collectorsreap:portobello_colony>);


<tag:items:crafttweaker:netmushcolony>.add(<item:nethersdelight:crimson_fungus_colony>);
<tag:items:crafttweaker:netmushcolony>.add(<item:nethersdelight:warped_fungus_colony>);

// Add Eye tags
<tag:items:crafttweaker:end_eyes>.add(
    <item:minecraft:ender_eye>,
    <item:endrem:black_eye>,
    <item:endrem:cold_eye>,
    <item:endrem:corrupted_eye>,
    <item:endrem:lost_eye>,
    <item:endrem:nether_eye>,
    <item:endrem:old_eye>,
    <item:endrem:rogue_eye>,
    <item:endrem:cursed_eye>,
    <item:endrem:evil_eye>,
    <item:endrem:guardian_eye>,
    <item:endrem:magical_eye>,
    <item:endrem:wither_eye>,
    <item:endrem:undead_eye>,
    <item:endrem:witch_pupil>
);

//Overweight crops tags
<tag:items:crafttweaker:overcrops>.add(
    <item:overweight_farming:overweight_cabbage_block>,
    <item:overweight_farming:overweight_onion_block>,
    <item:overweight_farming:overweight_apple_block>,
    <item:overweight_farming:overweight_poisonous_potato_block>,
    <item:overweight_farming:overweight_nether_wart_block>,
    <item:overweight_farming:overweight_potato_block>,
    <item:overweight_farming:overweight_cocoa_block>,
    <item:overweight_farming:overweight_carrot_block>,
    <item:overweight_farming:overweight_beetroot_block>
);

// Add tome tags

<tag:items:crafttweaker:tomes>.add(<item:quark:ancient_tome>);

// Tags for Ritual Tablets

<tag:items:crafttweaker:ritualtablets>.add(
    <item:ars_nouveau:ritual_flight>,
    <item:ars_nouveau:ritual_sunrise>,
    <item:ars_nouveau:ritual_overgrowth>,
    <item:ars_nouveau:ritual_moonfall>,
    <item:ars_nouveau:ritual_fertility>,
    <item:ars_nouveau:ritual_binding>,
    <item:ars_nouveau:ritual_wilden_summon>,
    <item:ars_nouveau:ritual_scrying>,
    <item:ars_nouveau:ritual_awakening>,
    <item:ars_nouveau:ritual_burrowing>,
    <item:ars_nouveau:ritual_challenge>,
    <item:ars_nouveau:ritual_cloudshaping>,
    <item:ars_nouveau:ritual_disintegration>,
    <item:ars_nouveau:ritual_warping>,
    <item:ars_nouveau:ritual_restoration>
);

// Tags for Lilies

<tag:items:crafttweaker:lilies>.add(
    <item:cnb:pink_waterlily>,
    <item:cnb:light_pink_waterlily>,
    <item:cnb:yellow_waterlily>,
    <item:cnb:pink_minipad_flower>,
    <item:cnb:light_pink_minipad_flower>,
    <item:cnb:yellow_minipad_flower>,
    <item:cnb:pink_minipad_flower_glow>,
    <item:cnb:light_pink_minipad_flower_glow>,
    <item:cnb:yellow_minipad_flower_glow>
);

var hotBlocks = [
    <block:create:blaze_burner>,
    <block:decorative_blocks:brazier>,
    <block:decorative_blocks:soul_brazier>,
    <block:vinery:stove>,
    <block:farmersdelight:stove>
] as Block[];

for item in hotBlocks {
    <tag:blocks:farmersdelight:heat_sources>.add(item);
    <tag:blocks:brewinandchewin:hot_blocks>.add(item);
    <tag:blocks:vinery:allows_cooking_pot_on>.add(item);
}

<tag:items:forge:seeds>.add(<item:farmersrespite:tea_seeds>,
<item:culturaldelights:eggplant_seeds>,
<item:culturaldelights:corn_kernels>,
<item:culturaldelights:cucumber_seeds>);

craftingTable.remove(<item:pipez:item_pipe>);

craftingTable.addShaped("itempipe", <item:pipez:item_pipe> * 16, [
    [<item:minecraft:copper_ingot>, <item:minecraft:copper_ingot>, <item:minecraft:copper_ingot>],
    [<item:minecraft:redstone>, <item:minecraft:redstone>, <item:minecraft:redstone>],
    [<item:minecraft:copper_ingot>, <item:minecraft:copper_ingot>, <item:minecraft:copper_ingot>]]);

<tag:items:forge:wrenches>.add(<item:supplementaries:wrench>);

//Sculk crafting
craftingTable.addShaped("sculkcatalyst", <item:minecraft:sculk_catalyst>, [[<item:minecraft:echo_shard>, <item:minecraft:echo_shard>, <item:minecraft:echo_shard>],[<item:minecraft:echo_shard>, <item:minecraft:end_stone>, <item:minecraft:echo_shard>], [<item:minecraft:end_stone>, <item:minecraft:end_stone>, <item:minecraft:end_stone>]]);

// balance tarot deck curio
craftingTable.remove(<item:tarotcards:tarot_deck>);

craftingTable.addShaped("tarotdeck", <item:tarotcards:tarot_deck>,
[
    [<item:create:golden_sheet>, <item:minecraft:dragon_egg>, <item:create:golden_sheet>],
    [<item:create:golden_sheet>, <item:minecraft:nether_star>, <item:create:golden_sheet>],
    [<item:create:golden_sheet>, <item:tarotcards:justice>, <item:create:golden_sheet>]
]);

// Fishing Rod Tags

<tag:items:forge:fishing_rods>.add(
    <item:minecraft:fishing_rod>
);

// Dried Sage Recipe

craftingTable.addShaped("driedsagebundle", <item:hexerei:dried_sage_bundle>, [
    [<item:hexerei:dried_sage>, <item:hexerei:dried_sage>, <item:hexerei:dried_sage>],
    [<item:hexerei:dried_sage>, <item:minecraft:string>, <item:hexerei:dried_sage>],
    [<item:hexerei:dried_sage>, <item:hexerei:dried_sage>, <item:hexerei:dried_sage>]
]);

// Add recipe Warp scroll < Warp Stone

craftingTable.addShaped("scrolltostone", <item:waystones:warp_stone>,
[[air, <item:waystones:warp_scroll>, air],
[<item:waystones:warp_scroll>, <item:minecraft:emerald>, <item:waystones:warp_scroll>],
[air, <item:waystones:warp_scroll>, air]]);

// Convert Waystones to Sharestones

craftingTable.addShapeless("waystonetosharestone", <item:waystones:sharestone>,
[<item:waystones:waystone>]);

craftingTable.addShapeless("sharestonetowaystone", <item:waystones:waystone>,
[<item:waystones:sharestone>]);

craftingTable.addShapeless("mossywaystonetosharestone", <item:waystones:sharestone>,
[<item:waystones:mossy_waystone>]);


craftingTable.addShapeless("sandywaystonetosharestone", <item:waystones:sharestone>,
[<item:waystones:sandy_waystone>]);

//Quark Azalea Wood Recipes

<tag:items:crafttweaker:azalea_logs>.add(<item:ecologics:flowering_azalea_log>,
<item:ecologics:azalea_log>);

<tag:items:crafttweaker:azalea_wood>.add(<item:ecologics:azalea_wood>, 
<item:ecologics:flowering_azalea_wood>);

<tag:items:crafttweaker:azalea_planks>.add(<item:ecologics:azalea_planks>, 
<item:ecologics:flowering_azalea_planks>);

craftingTable.addShapeless("quarkazalog", <item:quark:azalea_log>, [<item:minecraft:moss_block>, <tag:items:crafttweaker:azalea_logs>]);

craftingTable.addShapeless("quarkazawood", <item:quark:azalea_wood>, [<item:minecraft:moss_block>, <tag:items:crafttweaker:azalea_wood>]);

craftingTable.addShapeless("quarkazaplanks", <item:quark:azalea_planks>, [<item:minecraft:moss_block>, <tag:items:crafttweaker:azalea_planks>]);

craftingTable.addShapeless("quarkazastriplog", <item:quark:stripped_azalea_log>, [<item:minecraft:moss_block>, <item:ecologics:stripped_azalea_log>]);

craftingTable.addShapeless("quarkazastripwood", <item:quark:stripped_azalea_wood>, [<item:minecraft:moss_block>, <item:ecologics:stripped_azalea_wood>]);

// Mermod Crafting Changes

craftingTable.remove(<item:mermod:sea_crystal>);

craftingTable.addShapeless("seacrystal", <item:mermod:sea_crystal> * 4, [<item:endrem:guardian_eye>, <item:minecraft:heart_of_the_sea>]);

// Apple crate tags

<tag:items:crafttweaker:crates>.add(
    <item:applecrates:oak_crate>,
    <item:applecrates:birch_crate>,
    <item:applecrates:spruce_crate>,
    <item:applecrates:acacia_crate>,
    <item:applecrates:jungle_crate>,
    <item:applecrates:dark_oak_crate>,
    <item:applecrates:crimson_crate>,
    <item:applecrates:warped_crate>
);

// Add Create support for Cheeses

// HauntingManager.addRecipe(name as string, outputs as Percentaged<IItemStack>[], input as IIngredient, duration as int) as void

<recipetype:create:haunting>.addRecipe("hauntedflaxencheese", [<item:brewinandchewin:flaxen_cheese_wheel> % 100], <item:brewinandchewin:unripe_flaxen_cheese_wheel>, 200);

<recipetype:create:haunting>.addRecipe("hauntedscarletcheese", [<item:brewinandchewin:scarlet_cheese_wheel> % 100], <item:brewinandchewin:unripe_scarlet_cheese_wheel>, 200);

//Make Cheese Compactable

// CompactingManager.addRecipe(name as string, heat as HeatCondition, outputs as Percentaged<IItemStack>[], itemInputs as IIngredientWithAmount[], fluidInputs as FluidIngredient[], duration as int) as void

<recipetype:create:compacting>.addRecipe("compactedflaxencheese", <constant:create:heat_condition:heated>, [<item:brewinandchewin:unripe_flaxen_cheese_wheel> % 100], [<item:minecraft:brown_mushroom> * 2, <item:minecraft:sugar>], [<fluid:minecraft:milk> * 1000], 4000);

<recipetype:create:compacting>.addRecipe("compactedscarletcheese", <constant:create:heat_condition:heated>, [<item:brewinandchewin:unripe_scarlet_cheese_wheel> % 100], [<item:minecraft:crimson_fungus> * 2, <item:minecraft:sugar>], [<fluid:minecraft:milk> * 1000], 4000);


// Add Cheese Wheel Tags

<tag:items:crafttweaker:cheeses>.add(
    <item:brewinandchewin:unripe_flaxen_cheese_wheel>,
    <item:brewinandchewin:unripe_scarlet_cheese_wheel>
);

//Dough tags

<tag:items:minecraft:dough>.add(<item:culturaldelights:corn_dough>);
<tag:items:forge:dough>.add(<item:culturaldelights:corn_dough>, <item:vinery:dough>);

// Rustic Dough Recipe
craftingTable.remove(<item:vinery:dough>);
craftingTable.addShapeless("rusticdough", <item:vinery:dough> * 2, 
    [<item:create:wheat_flour>,
    <item:create:wheat_flour>, 
    <item:minecraft:sugar>, 
    <item:minecraft:water_bucket>]);

// Grape tags

<tag:items:crafttweaker:grapes>.add(<item:vinery:red_grape>, <item:vinery:white_grape>);
<tag:items:forge:fruits>.add(<item:vinery:red_grape>, <item:vinery:white_grape>);

// Jelly Tags

var jams = [
    <item:vinery:cherry_jam>,
    <item:vinery:apple_jam>,
    <item:vinery:sweetberry_jam>,
    <item:vinery:grape_jam>,
    <item:upgrade_aquatic:mulberry_jam_bottle>
] as IItemStack[];

for jam in jams{
    <tag:items:forge:jams>.add(jam);
    <tag:items:forge:jam>.add(jam);
    <tag:items:forge:jellies>.add(jam);
    <tag:items:forge:jelly>.add(jam);    
}

// Cheese tags

<tag:items:forge:cheese>.add(<item:brewinandchewin:scarlet_cheese_wedge>, <item:brewinandchewin:flaxen_cheese_wedge>);

// Fried Egg Recipe

furnace.addRecipe("friedduckegg", <item:farmersdelight:fried_egg>, <tag:items:forge:eggs>, 1.0, 60);

craftingTable.addShapeless("coalfromblock", <item:minecraft:coal> * 9, [<item:minecraft:coal_block>]);

//reaper scythe tags

<tag:items:crafttweaker:scythe>.add(<item:reaping:diamond_reaping_tool>,
<item:reaping:gold_reaping_tool>,
<item:reaping:iron_reaping_tool>,
<item:reaping:netherite_reaping_tool>);

// Plushie Cloning

var plushies = [
    <item:plushies:turtle>,
    <item:plushies:sheep>,
    <item:plushies:warden>,
    <item:plushies:goat>,
    <item:plushies:frog>,
    <item:plushies:white_fox>,
    <item:plushies:llama>,
    <item:plushies:mooshroom>,
    <item:plushies:parrot>,
    <item:plushies:enderman>,
    <item:plushies:dragon>,
    <item:plushies:dolphin>,
    <item:plushies:cow>,
    <item:plushies:cat>,
    <item:plushies:bee>,
    <item:plushies:axolotl>,
    <item:plushies:snow_golem>
] as IItemStack[];

for plush in plushies{
    craftingTable.remove(plush);
    plush.addTooltip("Quest Reward");
}

craftingTable.addShaped("snow_golemplushie", <item:plushies:snow_golem> * 2, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:snow_golem>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("axolotlplushie", <item:plushies:axolotl> * 2, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:axolotl>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("beeplushie", <item:plushies:bee> * 2, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:bee>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("catplushie", <item:plushies:cat> * 2, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:cat>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("cowplushie", <item:plushies:cow> * 2, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:cow>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("dolphinplushie", <item:plushies:dolphin> * 2, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:dolphin>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("dragonplushie", <item:plushies:dragon> * 2, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:dragon>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("endermanplushie", <item:plushies:enderman> * 2, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:enderman>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("parrotplushie", <item:plushies:parrot> * 2, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:parrot>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("mooshroomplushie", <item:plushies:mooshroom> * 2, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:mooshroom>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);
/*
craftingTable.addShaped("magma_cubeplushie", <item:plushies:magma_cube>, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:magma_cube>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("red_foxplushie", <item:plushies:red_fox>, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:red_fox>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("pandaplushie", <item:plushies:panda>, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:panda>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("slimeplushie", <item:plushies:slime>, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:slime>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);
*/

craftingTable.addShaped("llamaplushie", <item:plushies:llama> * 2, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:llama>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("white_foxplushie", <item:plushies:white_fox> * 2, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:white_fox>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("frogplushie", <item:plushies:frog> * 2, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:frog>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("goatplushie", <item:plushies:goat> * 2, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:goat>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("wardenplushie", <item:plushies:warden> * 2, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:warden>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("sheepplushie", <item:plushies:sheep> * 2, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:sheep>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

craftingTable.addShaped("turtleplushie", <item:plushies:turtle> * 2, [
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:plushies:turtle>, <item:ars_nouveau:mirrorweave>],
    [<item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>, <item:ars_nouveau:mirrorweave>]
]);

//TODO - This recipe
//craftingTable.addShaped("dragonplushie2", <item:plushies:dragon>, [
//    [air, <item:minecraft:dragon_head>, air],
//    [<item:ars_nouveau:wilden_wing>, <item:minecraft:dragon_egg>, <item:ars_nouveau:wilden_wing>],
//    [air, <item:alexsmobs:raccoon_tail>, air]
//]);

// Backpacks

craftingTable.addShaped("packtopack", <item:backpacked:backpack>, [
    [air, <item:minecraft:bone_meal>, air],
    [<item:minecraft:leather>, <item:quark:backpack>, <item:minecraft:leather>],
    [air, <item:minecraft:bone_meal>, air]
]);

// Torch Tagging

<tag:items:crafttweaker:magnumtorches>.add(<item:magnumtorch:diamond_magnum_torch>,
<item:magnumtorch:emerald_magnum_torch>,
<item:magnumtorch:amethyst_magnum_torch>);

// alliums are onions

<tag:items:forge:vegetables/onion>.add(
    <item:minecraft:allium>
);

// mushroom stew

<tag:items:crafttweaker:bowls>.add(<item:minecraft:bowl>,
<item:ecologics:coconut_husk>);

craftingTable.remove(<item:minecraft:mushroom_stew>);

craftingTable.addShapeless("mushroomstew", <item:minecraft:mushroom_stew>, [<item:minecraft:brown_mushroom>,
<item:minecraft:red_mushroom>, <tag:items:crafttweaker:bowls>]);

// Immersive Aircraft recipes

craftingTable.remove(<item:immersive_aircraft:improved_landing_gear>);
craftingTable.addShaped("advlanding", <item:immersive_aircraft:improved_landing_gear>, [
    [air, <item:create:gearbox>, air],
    [<item:create:shaft>, air, <item:create:shaft>],
    [<item:create:large_cogwheel>, air, <item:create:large_cogwheel>]
]);

craftingTable.remove(<item:immersive_aircraft:industrial_gears>);
craftingTable.addShaped("indgears", <item:immersive_aircraft:industrial_gears>, [
    [<item:create:copper_sheet>, <item:create:cogwheel>, <item:create:copper_sheet>],
    [air, air, air],
    [<item:create:iron_sheet>, <item:create:cogwheel>, <item:create:iron_sheet>]
]);

craftingTable.remove(<item:immersive_aircraft:hull_reinforcement>);
craftingTable.addShaped("reinhull", <item:immersive_aircraft:hull_reinforcement>, [
    [<item:create:iron_sheet>, <item:create:iron_sheet>, <item:create:iron_sheet>],
    [<item:immersive_aircraft:hull>, <item:immersive_aircraft:hull>, <item:immersive_aircraft:hull>],
    [<item:create:iron_sheet>, <item:create:iron_sheet>, <item:create:iron_sheet>]
]);

craftingTable.remove(<item:immersive_aircraft:boiler>);
craftingTable.addShaped("boiler", <item:immersive_aircraft:boiler>, [
    [air, <item:create:copper_valve_handle>, air],
    [<item:create:fluid_pipe>, <item:create:steam_engine>, <item:create:fluid_pipe>],
    [air, <item:minecraft:blaze_powder>, air]
]);

craftingTable.remove(<item:immersive_aircraft:hull>);
craftingTable.addShaped("hull", <item:immersive_aircraft:hull>, [
    [air, air, air],
    [<item:create:andesite_casing>, <item:minecraft:iron_ingot>, <item:create:andesite_casing>],
    [<item:create:andesite_casing>, <item:minecraft:iron_ingot>, <item:create:andesite_casing>]
]);

craftingTable.remove(<item:immersive_aircraft:engine>);
craftingTable.addShaped("engine", <item:immersive_aircraft:engine>, [
    [<item:create:hand_crank>, <item:create:encased_chain_drive>, <item:create:hand_crank>],
    [<item:create:mechanical_piston>, <item:immersive_aircraft:boiler>, <item:create:mechanical_piston>],
    [<item:minecraft:cobbled_deepslate>, <item:minecraft:cobbled_deepslate>, <item:minecraft:cobbled_deepslate>]
]);

craftingTable.remove(<item:immersive_aircraft:steel_boiler>);
craftingTable.addShaped("steelboiler", <item:immersive_aircraft:steel_boiler>, [
    [<item:create:iron_sheet>, <item:create:propeller>, <item:create:iron_sheet>],
    [<item:create:precision_mechanism>, <item:immersive_aircraft:boiler>, <item:create:precision_mechanism>],
    [<item:minecraft:coal_block>, <item:create:blaze_burner>, <item:minecraft:coal_block>]
]);

craftingTable.remove(<item:immersive_aircraft:propeller>);
craftingTable.addShaped("propeller", <item:immersive_aircraft:propeller>, [
    [air, <item:create:propeller>, air],
    [air, <item:create:shaft>, air],
    [air, <item:create:propeller>, air]
]);

craftingTable.remove(<item:immersive_aircraft:enhanced_propeller>);
craftingTable.addShaped("enhancedprop", <item:immersive_aircraft:enhanced_propeller>, [
    [air, <item:minecraft:copper_ingot>, air],
    [<item:minecraft:copper_ingot>, <item:immersive_aircraft:propeller>, <item:minecraft:copper_ingot>],
    [air, <item:minecraft:copper_ingot>, air]
]);

craftingTable.remove(<item:immersive_aircraft:sail>);
craftingTable.addShaped("sail", <item:immersive_aircraft:sail>, [
    [air, air, air],
    [<item:create:white_sail>, <item:create:white_sail>, <item:create:white_sail>],
    [<item:create:white_sail>, <item:create:white_sail>, <item:create:white_sail>]
]);

craftingTable.remove(<item:immersive_aircraft:sturdy_pipes>);
craftingTable.addShaped("sturdypipes", <item:immersive_aircraft:sturdy_pipes>, [
    [air, <item:create:iron_sheet>, <item:create:fluid_pipe>],
    [<item:create:iron_sheet>, <item:create:fluid_pipe>, <item:create:iron_sheet>],
    [<item:create:fluid_pipe>, <item:create:iron_sheet>, air]
]);

craftingTable.remove(<item:immersive_aircraft:airship>);
craftingTable.addShaped("airship", <item:immersive_aircraft:airship>, [
    [<item:immersive_aircraft:sail>, <item:immersive_aircraft:sail>, <item:immersive_aircraft:sail>],
    [<item:immersive_aircraft:sail>, <item:create:red_seat>, <item:immersive_aircraft:propeller>],
    [<item:immersive_aircraft:hull>, <item:immersive_aircraft:engine>, <item:immersive_aircraft:hull>]
]);

craftingTable.remove(<item:immersive_aircraft:biplane>);
craftingTable.addShaped("biplane", <item:immersive_aircraft:biplane>, [
    [air, <item:immersive_aircraft:propeller>, air],
    [<item:immersive_aircraft:sail>, <item:immersive_aircraft:engine>, <item:immersive_aircraft:sail>],
    [<item:immersive_aircraft:hull>, <item:create:red_seat>, <item:immersive_aircraft:hull>]
]);

craftingTable.remove(<item:immersive_aircraft:gyrodyne>);
craftingTable.addShaped("gyrodyne", <item:immersive_aircraft:gyrodyne>, [
    [<item:immersive_aircraft:propeller>, air, <item:immersive_aircraft:propeller>],
    [<item:immersive_aircraft:hull>, <item:create:precision_mechanism>, <item:immersive_aircraft:hull>],
    [<item:immersive_aircraft:propeller>, <item:create:red_seat>, <item:immersive_aircraft:propeller>]
]);

// Tagging Foods

<tag:items:forge:vegetables>.add(
    <item:culturaldelights:cut_cucumber>,
    <item:culturaldelights:cucumber>,
    <item:culturaldelights:cut_avocado>,
    <item:culturaldelights:avocado>,
    <item:culturaldelights:eggplant>,
    <item:culturaldelights:cut_eggplant>,
    <item:culturaldelights:white_eggplant>,
    <item:culturaldelights:corn_cob>,
    <item:delightful:cactus_flesh>,
    <item:farmersdelight:pumpkin_slice>
);

<tag:items:forge:fruits>.add(
    <item:ars_nouveau:frostaya_pod>,
    <item:ecologics:coconut_slice>,
    <item:ends_delight:chorus_succulent>,
    <item:ends_delight:chorus_fruit_grain>,
    <item:ends_delight:ender_pearl_grain>,
    <item:ars_nouveau:mendosteen_pod>,
    <item:ars_nouveau:bastion_pod>,
    <item:ars_nouveau:bombegranate_pod>
);


<tag:items:forge:seafood>.add(
    <item:quark:crab_leg>,
    <item:quark:cooked_crab_leg>,
    <item:ecologics:crab_meat>,
    <item:culturaldelights:squid>,
    <item:culturaldelights:raw_calamari>,
    <item:culturaldelights:glow_squid>,
    <item:ends_delight:shulker_meat_slice>,
    <item:ends_delight:shulker_meat>
);

<tag:items:forge:meats>.add(
    <item:farmersdelight:bacon>,
    <item:farmersdelight:mutton_chops>,
    <item:farmersdelight:minced_beef>,
    <item:nethersdelight:hoglin_loin>,
    <item:farmersdelight:ham>,
    <item:nethersdelight:ground_strider>,
    <item:ends_delight:raw_dragon_meat_cuts>,
    <item:ends_delight:raw_dragon_meat>,
    <item:ends_delight:raw_ender_mite_meat>,
    <item:ends_delight:dragon_leg>,
    <item:nethersdelight:strider_slice>
);

// New Egg Recipe

craftingTable.addShaped("nourishingegg", <item:ends_delight:non_hatchable_dragon_egg>, [
    [<tag:items:forge:roasted_dragon_meat>, <item:minecraft:bone_meal>, <tag:items:forge:roasted_dragon_meat>],
    [<item:minecraft:milk_bucket>, <item:minecraft:dragon_egg>, <item:minecraft:milk_bucket>],
    [<tag:items:forge:roasted_dragon_meat>, <item:minecraft:bone_meal>, <tag:items:forge:roasted_dragon_meat>]
]);

// Gate Pearl Recipes

craftingTable.addShaped("hoglin_gate", <item:gateways:gate_pearl>.withTag({gateway: "gateways:hoglin_gate"}),
[
    [<item:minecraft:crimson_fungus>,<item:nethersdelight:hoglin_loin> , <item:minecraft:crimson_fungus>],
    [<item:nethersdelight:hoglin_loin>, <item:minecraft:ender_eye>, <item:nethersdelight:hoglin_loin>],
    [<item:minecraft:crimson_fungus>,<item:nethersdelight:hoglin_loin> , <item:minecraft:crimson_fungus>]
]);

craftingTable.addShaped("hoglin_gate_sm", <item:gateways:gate_pearl>.withTag({gateway: "gateways:hoglin_gate_small"}),
[
    [<item:minecraft:crimson_fungus>,<item:nethersdelight:hoglin_loin> , <item:minecraft:crimson_fungus>],
    [<item:nethersdelight:hoglin_loin>, <item:minecraft:ender_pearl>, <item:nethersdelight:hoglin_loin>],
    [<item:minecraft:crimson_fungus>,<item:nethersdelight:hoglin_loin> , <item:minecraft:crimson_fungus>]
]);

craftingTable.addShaped("wraith_gate", <item:gateways:gate_pearl>.withTag({gateway: "gateways:wraith_gate"}),
[
    [<item:quark:soul_bead>, <item:quark:soul_bead>, <item:quark:soul_bead>],
    [<item:quark:soul_bead>, <item:minecraft:ender_eye>, <item:quark:soul_bead>],
    [<item:quark:soul_bead>, <item:quark:soul_bead>, <item:quark:soul_bead>]
]);

craftingTable.addShaped("insectoid_gate", <item:gateways:gate_pearl>.withTag({gateway: "gateways:insectoid_gate"}),
[
    [<item:overweight_farming:vegetable_peels>, <item:minecraft:honey_bottle>, <item:overweight_farming:vegetable_peels>],
    [<item:minecraft:honey_bottle>, <item:minecraft:ender_eye>, <item:minecraft:honey_bottle>],
    [<item:overweight_farming:vegetable_peels>, <item:minecraft:honey_bottle>, <item:overweight_farming:vegetable_peels>]
]);

craftingTable.addShaped("elder_guardian_gate", <item:gateways:gate_pearl>.withTag({gateway: "gateways:elder_guardian_gate"}),
[
    [<item:minecraft:prismarine_shard>, air, <item:minecraft:prismarine_shard>],
    [air, <item:minecraft:ender_eye>, air],
    [<item:minecraft:prismarine_shard>, air, <item:minecraft:prismarine_shard>]
]);

craftingTable.remove(<item:luphieclutteredmod:luphie_sewing_table_clutter>);
craftingTable.addShaped("sewingkit", <item:luphieclutteredmod:luphie_sewing_table_clutter>, [
    [<tag:items:forge:string>, <tag:items:minecraft:wool_carpets>, <tag:items:minecraft:wool>],
]);

//Horse Armors

var horseArmors = [
    <item:minecraft:leather_horse_armor>,
    <item:minecraft:iron_horse_armor>,
    <item:minecraft:golden_horse_armor>,
    <item:minecraft:diamond_horse_armor>
] as IItemStack[];

for armor in horseArmors {
    armor.maxStackSize = 32;
}

<tag:items:tarotcards:golden>.add(<item:reaping:gold_reaping_tool>,
<item:nethersdelight:golden_machete>,
<item:farmersdelight:golden_knife>);

craftingTable.addShapeless("blackstonefurnace1", <item:nethersdelight:blackstone_furnace>, [<item:quark:blackstone_furnace>]);
craftingTable.addShapeless("blackstonefurnace2", <item:quark:blackstone_furnace>, [<item:nethersdelight:blackstone_furnace>]);

<tag:items:crafttweaker:blackstonefurnaces>.add(<item:nethersdelight:blackstone_furnace>, <item:quark:blackstone_furnace>);

craftingTable.remove(<item:nethersdelight:blackstone_blast_furnace>);
craftingTable.addShaped("blackstoneblastfurnace", <item:nethersdelight:blackstone_blast_furnace>, [
    [<item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>],
    [<item:minecraft:iron_ingot>, <tag:items:crafttweaker:blackstonefurnaces>, <item:minecraft:iron_ingot>],
    [<item:minecraft:polished_blackstone>, <item:minecraft:polished_blackstone>, <item:minecraft:polished_blackstone>]
]);

// Milk stuff.

craftingTable.remove(<item:minecraft:milk_bucket>);
craftingTable.addShapeless("milk2fd", <item:farmersdelight:milk_bottle> * 3, [
    <item:minecraft:milk_bucket>,
    <item:minecraft:glass_bottle>,
    <item:minecraft:glass_bottle>,
    <item:minecraft:glass_bottle>
]);

// Interchangeable Cherries

//craftingTable.addShapeless("vin2envcherry", <item:environmental:cherries>, [<item:vinery:cherry>]);
//craftingTable.addShapeless("env2vincherry", <item:vinery:cherry>, [<item:environmental:cherries>]);

// TODO - Venison

recipes.remove(<item:twilightdelight:raw_venison_rib>);
recipes.remove(<item:twilightdelight:cooked_venison_rib>);

// Cherry Stuff

<tag:items:forge:fruits/berries>.add(<item:vinery:cherry>);
<tag:items:forge:fruits/cherry>.add(<item:vinery:cherry>);
<tag:items:environmental:deer_food>.add(<item:vinery:cherry>);
<tag:items:environmental:deer_tempt_items>.add(<item:vinery:cherry>);
<tag:items:forge:fruits/sweet>.add(<item:vinery:cherry>);
<tag:items:forge:fruits>.add(<item:vinery:cherry>);
<tag:items:forge:berries>.add(<item:vinery:cherry>);

craftingTable.remove(<item:abnormals_delight:seared_venison>);
craftingTable.addShapeless("searedvenison", <item:abnormals_delight:seared_venison>, [
    <tag:items:forge:cooked_venison>,
    <tag:items:forge:fruits/cherry>,
    <tag:items:forge:fruits/cherry>,
    <item:minecraft:carrot>,
    <item:minecraft:bowl>
]);

craftingTable.remove(<item:abnormals_delight:cherry_cookie>);
craftingTable.addShaped("cherrycookie", <item:abnormals_delight:cherry_cookie> * 8, [
    [air, air, air],
    [<item:minecraft:wheat>, <tag:items:forge:fruits/cherry>, <item:minecraft:wheat>],
    [air, air, air]
]);

craftingTable.remove(<item:environmental:cherry_pie>);
craftingTable.addShaped("cherrypie", <item:environmental:cherry_pie>, [
[<tag:items:forge:fruits/cherry>, <tag:items:forge:fruits/cherry>, <tag:items:forge:fruits/cherry>],
[<tag:items:forge:fruits/cherry>, <tag:items:forge:fruits/cherry>, <tag:items:forge:fruits/cherry>],
[<item:minecraft:sugar>, <item:farmersdelight:pie_crust>, <item:minecraft:sugar>]
]);

// Moon Dust




brewing.addRecipe(<item:minecraft:potion>.withTag({Potion: "goblintraders:levitation"}), <item:hexerei:moon_dust>, <item:minecraft:potion>.withTag({Potion: "minecraft:mundane"}));