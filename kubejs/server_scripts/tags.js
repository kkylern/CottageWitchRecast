ServerEvents.tags('item', event => {

    // Dirt for Compost Recipe
    event.add('forge:dirt', 'minecraft:dirt', 'minecraft:coarse_dirt',
    'minecraft:rooted_dirt','minecraft:podzol')

    // Organic materials for Compost Recipe
    event.add('forge:compost',
    'hexerei:mugwort_flowers',
    'hexerei:mugwort_leaves',
    'hexerei:yellow_dock_flowers',
    'hexerei:yellow_dock_leaves',
    'hexerei:belladonna_flowers',
    'hexerei:belladonna_berries',
    'hexerei:mandrake_root',
    'hexerei:mandrake_flowers',
    'hexerei:dried_sage',
    'hexerei:dried_belladonna_flowers',
    'hexerei:dried_mandrake_flowers',
    'hexerei:dried_mugwort_flowers',
    'hexerei:dried_mugwort_leaves',
    'hexerei:dried_yellow_dock_flowers',
    'hexerei:dried_yellow_dock_leaves',
    'farmersdelight:tree_bark',
    'minecraft:rotten_flesh')

    // Rope Tags
    event.add('supplementaries:ropes', 'farmersdelight:rope')

    // Eyes tags
    event.add('forge:eyes', 
    'endrem:evil_eye',
    'endrem:cursed_eye',
    'endrem:rogue_eye',
    'endrem:old_eye',
    'endrem:nether_eye',
    'endrem:lost_eye',
    'endrem:corrupted_eye',
    'endrem:cold_eye',
    'endrem:black_eye',
    'endrem:guardian_eye',
    'endrem:magical_eye',
    'endrem:wither_eye',
    'endrem:witch_eye',
    'endrem:undead_eye',
    'endrem:exotic_eye'
    )

    // Seeds Tags
    event.add('forge:seeds',
    'farmersrespite:tea_seeds',
    'culturaldelights:eggplant_seeds',
    'culturaldelights:corn_kernels',
    'culturaldelights:cucumber_seeds'
    )

    // Waystone Tags
    event.add('forge:waystones',
    'waystones:waystone',
    'waystones:mossy_waystone',
    'waystones:sandy_waystone'
    )

    // Wrench Tags
    event.add('forge:wrenches', 'supplementaries:wrench')

    // Azalea Logs Tags
    event.add('forge:azalea_logs',
    'ecologics:flowering_azalea_log',
    'ecologics:azalea_log'
    )

    // Azalea Wood Tags
    event.add('forge:azalea_wood',
    'ecologics:flowering_azalea_wood',
    'ecologics:azalea_wood'
    )

    // Azalea Planks Tags
    event.add('forge:azalea_planks',
    'ecologics:flowering_azalea_planks',
    'ecologics:azalea_planks'
    )

    // Corn Dough Tags
    event.add('minecraft:dough',
    'culturaldelights:corn_dough'
    )
    event.add('forge:dough',
    'culturaldelights:corn_dough'
    )

    // Grape Tagging
    event.add('forge:grapes',
    'vinery:red_grape',
    'vinery:white_grape',
    'vinery:savanna_grapes_red',
    'vinery:savanna_grapes_white',
    'vinery:taiga_grapes_red',
    'vinery:taiga_grapes_white',
    'vinery:jungle_grapes_red',
    'vinery:jungle_grapes_white'
    )
    event.add('forge:fruits',
    'vinery:red_grape',
    'vinery:white_grape',
    'vinery:savanna_grapes_red',
    'vinery:savanna_grapes_white',
    'vinery:taiga_grapes_red',
    'vinery:taiga_grapes_white',
    'vinery:jungle_grapes_red',
    'vinery:jungle_grapes_white'
    )

    // Jam Tagging
    event.add(
        'forge:jam',
        'upgrade_aquatic:mulberry_jam_bottle'
    )
    event.add(
        'forge:jams',
        'upgrade_aquatic:mulberry_jam_bottle'
    )
    event.add(
        'forge:jelly',
        'upgrade_aquatic:mulberry_jam_bottle'
    )
    event.add(
        'forge:jellies',
        'upgrade_aquatic:mulberry_jam_bottle'
    )

    // Cheese Tags for Crafting
    event.add(
        'forge:cheese',
        'brewinandchewin:scarlet_cheese_wedge',
        'brewinandchewin:flaxen_cheese_wedge'
    )

    // Bowl Tagging
    event.add('forge:bowls',
    'minecraft:bowl',
    'ecologics:coconut_husk'
    )

    // Mushroom Tagging
    event.add('forge:mushrooms',
    'biomemakeover:green_glowshroom',
    'biomemakeover:orange_glowshroom',
    'biomemakeover:wild_mushrooms',
    'biomemakeover:tall_brown_mushroom',
    'biomemakeover:tall_red_mushroom'
    )

    //Vegetables
    event.add('forge:vegetables',
        'culturaldelights:cut_cucumber',
        'culturaldelights:cucumber',
        'culturaldelights:cut_avocado',
        'culturaldelights:avocado',
        'culturaldelights:eggplant',
        'culturaldelights:cut_eggplant',
        'culturaldelights:white_eggplant',
        'culturaldelights:corn_cob',
        'delightful:cactus_flesh',
        'farmersdelight:pumpkin_slice'
    )

    //Fruits
    event.add('forge:fruits',
        'ars_nouveau:frostaya_pod',
        'ecologics:coconut_slice',
        'ends_delight:chorus_succulent',
        'ends_delight:chorus_fruit_grain',
        'ends_delight:ender_pearl_grain',
        'ars_nouveau:mendosteen_pod',
        'ars_nouveau:bastion_pod',
        'ars_nouveau:bombegranate_pod'
    )

    //Seafood
    event.add('forge:seafood',
        'quark:crab_leg',
        'quark:cooked_crab_leg',
        'ecologics:crab_meat',
        'culturaldelights:squid',
        'culturaldelights:raw_calamari',
        'culturaldelights:glow_squid',
        'ends_delight:shulker_meat_slice',
        'ends_delight:shulker_meat'
    )

    //Meats
    event.add('forge:meats',
        'farmersdelight:bacon',
        'farmersdelight:mutton_chops',
        'farmersdelight:minced_beef',
        'nethersdelight:hoglin_loin',
        'farmersdelight:ham',
        'nethersdelight:ground_strider',
        'ends_delight:raw_dragon_meat_cuts',
        'ends_delight:raw_dragon_meat',
        'ends_delight:raw_ender_mite_meat',
        'ends_delight:dragon_leg',
        'nethersdelight:strider_slice'
    )

    // Nourishment Tags
    //Fruits
    event.add('nourish:fruit',
        'vinery:red_grape',
        'neapolitan:banana_bunch',
        'vinery:apple_mash',
        'vinery:savanna_grapes_red',
        'vinery:savanna_grapes_white',
        'vinery:taiga_grapes_red',
        'vinery:taiga_grapes_white',
        'vinery:jungle_grapes_red',
        'vinery:jungle_grapes_white',
        'overweight_farming:melon_juice',
        'vinery:white_grape',
        'collectorsreap:pomegranate'
    )

    //Proteins
    event.add('nourish:protein',
    'netherdepthsupgrade:lava_pufferfish_slice',
    'netherdepthsupgrade:soulsucker',
    'netherdepthsupgrade:glowdine',
    'netherdepthsupgrade:searing_cod',
    'netherdepthsupgrade:obsidianfish',
    'netherdepthsupgrade:lava_pufferfish',
    'neapolitan:adzuki_beans',
    'minecraft:egg',
    'finsandtails:pea_wee',
    'finsandtails:banded_redback_shrimp',
    'finsandtails:teal_arrowfish',
    'finsandtails:ruby_spindly_gem_crab',
    'finsandtails:amber_spindly_gem_crab',
    'finsandtails:emerald_spindly_gem_crab',
    'finsandtails:vibra_wee',
    'finsandtails:wee_wee',
    'finsandtails:ornate_bugfish',
    'finsandtails:blu_wee',
    'finsandtails:red_bull_crab_claw',
    'finsandtails:white_bull_crab_claw',
    'finsandtails:night_light_squid_tentacle',
    'finsandtails:bugmeat',
    'finsandtails:raw_golden_river_ray_wing',
    'infernalexp:blindsight_tongue',
    'finsandtails:papa_wee',
    'finsandtails:pearl_spindly_gem_crab',
    'netherdepthsupgrade:soulsucker_slice',
    'netherdepthsupgrade:magmacubefish',
    'netherdepthsupgrade:blazefish',
    'netherdepthsupgrade:magmacubefish_slice',
    'netherdepthsupgrade:blazefish_slice',
    'netherdepthsupgrade:glowdine_slice',
    'finsandtails:sapphire_spindly_gem_crab',
    'netherdepthsupgrade:searing_cod_slice',
    'netherdepthsupgrade:obsidianfish_slice',
    'ends_delight:raw_dragon_meat_cuts',
    'ends_delight:raw_dragon_meat',
    'biomemakeover:raw_crab',
    'ends_delight:dragon_leg',
    'ends_delight:shulker_meat_slice',
    'ends_delight:shulker_meat',
    'culturaldelights:raw_calamari',
    'culturaldelights:glow_squid',
    'ends_delight:raw_ender_mite_meat',
    'environmental:truffle',
    'environmental:duck_egg',
    'farmersdelight:milk_bottle',
    'finsandtails:swamp_mucker',
    'finsandtails:flatback_sucker',
    'finsandtails:high_finned_blue',
    'culturaldelights:squid'
    )

    //Carbs
    event.add('nourish:carbohydrate',
    'ends_delight:ender_pearl_grain',
    'farmersdelight:rice',
    'create:dough',
    'create:wheat_flour'
    )

    //Vegetables
    event.add('nourish:vegetable',
    'twilightforest:mushgloom',
    'neapolitan:mint_leaves',
    'farmersdelight:tomato_sauce',
    'collectorsreap:baked_portobello_cap',
    'collectorsreap:portobello',
    'biomemakeover:bulbus_root'
    )

    // Golden Things for Tarot
    event.add('tarotcards:golden',
    'reaping:gold_reaping_tool',
    'nethersdelight:golden_machete',
    'farmersdelight:golden_knife',
    'twilightforest:gold_minotaur_axe'
    )

    // Blackstone Furnaces
    event.add('forge:blackstone_furnaces',
    'nethersdelight:blackstone_furnace', 
    'quark:blackstone_furnace'
    )

    // Tagging Vinery Cherries
    let vch = 'vinery:cherry'

    event.add('forge:fruits/berries',
    vch)
    event.add('forge:fruits/cherry',
    vch)
    event.add('environmental:deer_food',
    vch)
    event.add('environmental:deer_tempt_items',
    vch)
    event.add('forge:fruits/sweet',
    vch)

    //===Banning Uncraftables===
    event.add('twilightforest:banned_uncraftables', 'plushies:dragon', '#forge:eyes')
    event.add('twilightforest:banned_uncrafting_ingredients', '#forge:eyes')

    //===Tags for FTB Quests=== TODO : Change all these quests over

    // Brooms
    event.add('forge:brooms', 'hexerei:mahogany_broom', 'hexerei:witch_hazel_broom', 'hexerei:willow_broom')

    //Tom's Storage Tags
    event.add('forge:invcable', 'toms_storage:ts.inventory_cable','toms_storage:ts.inventory_cable_framed')

    event.add('forge:connector', 
    'toms_storage:ts.inventory_cable_connector_filtered',
    'toms_storage:ts.inventory_cable_connector',
    'toms_storage:ts.inventory_cable_connector_framed',
    'sophisticatedstorage:storage_link',
    'toms_storage:ts.trim')

    //Pet Beds
    event.add('forge:petbeds',
    'domesticationinnovation:pet_bed_white',
    'domesticationinnovation:pet_bed_orange',
    'domesticationinnovation:pet_bed_magenta',
    'domesticationinnovation:pet_bed_light_blue',
    'domesticationinnovation:pet_bed_yellow',
    'domesticationinnovation:pet_bed_green',
    'domesticationinnovation:pet_bed_brown',
    'domesticationinnovation:pet_bed_blue',
    'domesticationinnovation:pet_bed_purple',
    'domesticationinnovation:pet_bed_cyan',
    'domesticationinnovation:pet_bed_light_gray',
    'domesticationinnovation:pet_bed_gray',
    'domesticationinnovation:pet_bed_pink',
    'domesticationinnovation:pet_bed_lime',
    'domesticationinnovation:pet_bed_red',
    'domesticationinnovation:pet_bed_black'
    )

    //Mushroom Colony
    event.add('forge:mushcolony',
    'farmersdelight:red_mushroom_colony', 
    'farmersdelight:brown_mushroom_colony',
    'twilightdelight:mushgloom_colony',
    'collectorsreap:portobello_colony')

    //Fungus Colony
    event.add('forge:funguscolony',
    'nethersdelight:crimson_fungus_colony', 
    'nethersdelight:warped_fungus_colony')

    //Overweight Crops
    event.add('forge:overweightcrops',
    'overweight_farming:overweight_cabbage_block',
    'overweight_farming:overweight_onion_block',
    'overweight_farming:overweight_apple_block',
    'overweight_farming:overweight_poisonous_potato_block',
    'overweight_farming:overweight_nether_wart_block',
    'overweight_farming:overweight_potato_block',
    'overweight_farming:overweight_cocoa_block',
    'overweight_farming:overweight_carrot_block',
    'overweight_farming:overweight_beetroot_block'
    )

    //Ancient Tomes
    event.add('forge:tomes', 'quark:ancient_tome')

    //Ritual Tablets
    event.add('forge:ritual_tablets',
    'ars_nouveau:ritual_flight',
    'ars_nouveau:ritual_sunrise',
    'ars_nouveau:ritual_overgrowth',
    'ars_nouveau:ritual_moonfall',
    'ars_nouveau:ritual_fertility',
    'ars_nouveau:ritual_binding',
    'ars_nouveau:ritual_wilden_summon',
    'ars_nouveau:ritual_scrying',
    'ars_nouveau:ritual_awakening',
    'ars_nouveau:ritual_burrowing',
    'ars_nouveau:ritual_challenge',
    'ars_nouveau:ritual_cloudshaping',
    'ars_nouveau:ritual_disintegration',
    'ars_nouveau:ritual_warping',
    'ars_nouveau:ritual_restoration',
    'ars_nouveau:ritual_animal_summon',
    'ars_nouveau:ritual_harvest',
    'ars_nouveau:ritual_conjure_island_desert',
    'ars_nouveau:ritual_containment',
    'ars_nouveau:ritual_flowering',
    'ars_nouveau:ritual_sanctuary',
    'ars_nouveau:ritual_conjure_island_plains',
    'ars_nouveau:ritual_forestation'
    )

    //Lilies
    event.add('forge:lilies',
    'cnb:pink_waterlily',
    'cnb:light_pink_waterlily',
    'cnb:yellow_waterlily',
    'cnb:pink_minipad_flower',
    'cnb:light_pink_minipad_flower',
    'cnb:yellow_minipad_flower',
    'cnb:pink_minipad_flower_glow',
    'cnb:light_pink_minipad_flower_glow',
    'cnb:yellow_minipad_flower_glow'
    )

    // Apple Crates
    event.add('forge:apple_crates',
    'applecrates:oak_crate',
    'applecrates:birch_crate',
    'applecrates:spruce_crate',
    'applecrates:acacia_crate',
    'applecrates:jungle_crate',
    'applecrates:dark_oak_crate',
    'applecrates:crimson_crate',
    'applecrates:warped_crate'
    )

    // Cheese Tags for Quests
    event.add('forge:unripe_cheese_wheels',
    'brewinandchewin:unripe_flaxen_cheese_wheel',
    'brewinandchewin:unripe_scarlet_cheese_wheel'
    )

    // Scythe/Reaping Tool Tagging
    event.add('forge:scythe', 
    'reaping:diamond_reaping_tool',
    'reaping:gold_reaping_tool',
    'reaping:iron_reaping_tool',
    'reaping:netherite_reaping_tool'
    )

    // Magnum Torch Tagging
    event.add(
    'forge:magnum_torches',
    'magnumtorch:diamond_magnum_torch',
    'magnumtorch:emerald_magnum_torch',
    'magnumtorch:amethyst_magnum_torch'
    )

    // Inventory Managers
    event.add('forge:inventory_controllers',
    'sophisticatedstorage:controller',
    'toms_storage:ts.inventory_connector'
    )

    // Inventory Upgrades
    event.add('forge:inventory_upgrades',
    'sophisticatedstorage:auto_smelting_upgrade',
    'sophisticatedstorage:auto_smoking_upgrade',
    'sophisticatedstorage:auto_blasting_upgrade',
    'sophisticatedstorage:smelting_upgrade',
    'sophisticatedstorage:smoking_upgrade',
    'sophisticatedstorage:blasting_upgrade'
    )

    // Accessory Boosters
    event.add('forge:accessory_boosters',
    'majruszsaccessories:owl_feather',
    'majruszsaccessories:golden_dice',
    'majruszsaccessories:dice',
    'majruszsaccessories:horseshoe',
    'majruszsaccessories:golden_horseshoe'
    )

    // Stack Upgrades
    event.add('forge:stack_upgrades',
    'sophisticatedstorage:stack_upgrade_tier_1',
    'sophisticatedstorage:stack_upgrade_tier_2',
    'sophisticatedstorage:stack_upgrade_tier_3',
    'sophisticatedstorage:stack_upgrade_tier_4'
    )

})


ServerEvents.tags('block', event => {

    //Hot Blocks
    //Farmer's Delight
    event.add('farmersdelight:heat_sources', 
    'create:blaze_burner',
    'decorative_blocks:brazier',
    'decorative_blocks:soul_brazier',
    'vinery:stove',
    'farmersdelight:stove'
    )

    //Brewin and Chewin
    event.add('brewinandchewin:hot_blocks', 
    'create:blaze_burner',
    'decorative_blocks:brazier',
    'decorative_blocks:soul_brazier',
    'vinery:stove',
    'farmersdelight:stove'
    )

    //Vinery
    event.add('vinery:allows_cooking_pot_on', 
    'create:blaze_burner',
    'decorative_blocks:brazier',
    'decorative_blocks:soul_brazier',
    'vinery:stove',
    'farmersdelight:stove'
    )

})




