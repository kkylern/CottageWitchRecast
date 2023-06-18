ServerEvents.recipes(event => {
    
    //Witchy Compost
    event.shapeless(
        Item.of('farmersdelight:organic_compost', 2), 
        [ 
            {tag: 'forge:dirt'},
            {tag: 'supplementaries:straw'},
            {tag: 'supplementaries:straw'},
            'minecraft:bone_meal',
            'minecraft:bone_meal',
            {tag: 'forge:compost'},
            {tag: 'forge:compost'},
            {tag: 'forge:compost'},
            {tag: 'forge:compost'}
        ]
      )

    // Building Gadgets

    //Building Gadget
    event.shaped(
        Item.of('buildinggadgets:gadget_building', '{energy:500000.0d,state:{data:{},serializer:"buildinggadgets:dummy_serializer",state:{Name:"minecraft:air"}}}'),
        [
            'ABA',
            'CBC',
            'ADA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'minecraft:redstone',
            C: 'minecraft:diamond',
            D: 'minecraft:lapis_lazuli'
        }
    )

    //Exchanging Gadget
    event.shaped(
        Item.of('buildinggadgets:gadget_exchanging', '{energy:500000.0d,state:{data:{},serializer:"buildinggadgets:dummy_serializer",state:{Name:"minecraft:air"}}}'),        [
            'ABA',
            'CDC',
            'ADA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'minecraft:redstone',
            C: 'minecraft:diamond',
            D: 'minecraft:lapis_lazuli'
        }
    )

    //Copy Paste Gadget
    event.shaped(
        Item.of('buildinggadgets:gadget_copy_paste', '{energy:500000.0d,mode:0b,template_id:[I;-1758435112,-1217443030,-1679697278,2082124584]}'),        
        [
            'ABA',
            'CBC',
            'ADA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'minecraft:redstone',
            C: 'minecraft:emerald',
            D: 'minecraft:lapis_lazuli'
        }
    )

    //Destruction Gadget
    event.shaped(
        Item.of('buildinggadgets:gadget_destruction', '{energy:1000000.0d,fuzzy:1b,overlay:1b}'),
        [
            'ABA',
            'CBC',
            'ADA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'minecraft:redstone',
            C: 'minecraft:ender_pearl',
            D: 'minecraft:lapis_lazuli'
        }
    )

    //Akashic Tome
    event.shapeless(
        Item.of('akashictome:tome', '{"akashictome:data":{ars_nouveau:{Count:1b,id:"ars_nouveau:worn_notebook"},camera:{Count:1b,id:"camera:album"},create_central_kitchen:{Count:1b,ForgeCaps:{Parent:{}},id:"create_central_kitchen:cooking_guide"},create_central_kitchen_0:{Count:1b,ForgeCaps:{Parent:{NeedWater:0b}},id:"create_central_kitchen:brewing_guide",tag:{"akashictome:definedMod":"create_central_kitchen_0"}},extradelight:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"extradelight:cookbook"}},ftbquests:{Count:1b,id:"ftbquests:book"},hexerei:{Count:1b,id:"hexerei:book_of_shadows",tag:{bookmarks:{},chapter:0,opened:0b,page:0}},lexicon:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"lexicon:lexicon"}},twilightdelight:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"twilightdelight:twilight_guide"}}},ingredients:{item0:"block.minecraft.air",item1:"item.akashictome.tome",item2:"item.patchouli.guide_book",length:3}}'),        
            [ 
                'minecraft:book',
                'minecraft:stick'
            ]
          )

    //Time In A bottle
    event.shaped(
        Item.of('tiab:time_in_a_bottle'),
        [
            'AAA',
            'BCB',
            'DED'
        ],
        {
            A: 'minecraft:gold_ingot',
            B: 'minecraft:diamond',
            C: 'minecraft:clock',
            D: 'minecraft:lapis_lazuli',
            E: 'quark:bottled_cloud'
        }
    )

    //Ars Nouveau Novice Spellbook
    event.shaped(
        Item.of('ars_nouveau:novice_spell_book'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'minecraft:gold_ingot',
            B: 'ars_nouveau:worn_notebook'
        }
    )

    //Critters and Companions Pearl Necklaces
    //Necklace Tier 2
    event.shapeless(
        Item.of('crittersandcompanions:pearl_necklace_2'),
            [ 
                'crittersandcompanions:pearl_necklace_1',
                'finsandtails:spindly_pearl'
            ]
          )

    //Necklace Tier 3
    event.shapeless(
        Item.of('crittersandcompanions:pearl_necklace_3'),
        [ 
            'crittersandcompanions:pearl_necklace_2',
            'mermod:glowing_pearl_modifier'
        ]
      )

    //Mermod Moon Rock Uses Moon Dust
    event.shapeless(
        Item.of('mermod:moon_rock_modifier'),
        [ 
            '#forge:cobblestone',
            'hexerei:moon_dust',
            'minecraft:black_dye'
        ]
      )

      //Burger Recipes
    //Hamburger
    event.shapeless(
        Item.of('farmersdelight:hamburger'),
        [ 
            '#forge:bread',
            '#forge:salad_ingredients',
            'farmersdelight:onion',
            'farmersdelight:tomato',
            '#forge:cooked_beef'
        ]
      )
    //Cheeseburger Conversion
    event.shapeless(
        Item.of('delightful:cheeseburger'),
        [ 
            'farmersdelight:hamburger',
            '#forge:cheese'
        ]
      )
    //Cheeseburger from scratch
    event.shapeless(
        Item.of('delightful:cheeseburger'),
        [ 
            '#forge:bread',
            '#forge:salad_ingredients',
            'farmersdelight:onion',
            'farmersdelight:tomato',
            '#forge:cooked_beef',
            '#forge:cheese'
        ]
      )
    //Ultraburger Conversion
    event.shapeless(
        Item.of('delightful:deluxe_cheeseburger'),
        [ 
            'delightful:deluxe_cheeseburger',
            '#forge:cheese',
            '#forge:cooked_beef',
            'farmersdelight:cooked_bacon'
        ]
      )
    //Ultraburger from scratch
    event.shapeless(
        Item.of('delightful:deluxe_cheeseburger'),
        [ 
            '#forge:bread',
            '#forge:salad_ingredients',
            'farmersdelight:onion',
            'farmersdelight:tomato',
            '#forge:cooked_beef',
            '#forge:cheese',
            '#forge:cheese',
            'farmersdelight:cooked_bacon'
        ]
      )

    //Nature's Compass
    event.shaped(
        Item.of('naturescompass:naturescompass'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: '#minecraft:saplings',
            B: '#minecraft:logs',
            C: 'hexerei:dowsing_rod'
        }
    )

    //Chest Recipe WTF why did the recipe go poof?
    event.shaped(
        Item.of('minecraft:chest'),
        [
            'AAA',
            'A A',
            'AAA'
        ],
        {
            A: '#minecraft:planks'
        }
    )

    //Chest Recipe with Logs
    event.shaped(
        Item.of('minecraft:chest', 4),
        [
            'AAA',
            'A A',
            'AAA'
        ],
        {
            A: '#minecraft:logs'
        }
    )

    //End Remastered Eyes to Pearls
    event.shapeless(
        Item.of('minecraft:ender_pearl', 4),
        [ 
            '#forge:eyes'
        ]
      )

    //Selenite Glass Purification
    event.shaped(
        Item.of('minecraft:glass', 8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: '#forge:stained_glass',
            B: 'hexerei:selenite_shard'
        }
    )

    //Mandrake Totem of Undying
    event.shaped(
        Item.of('minecraft:totem_of_undying'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'twilightforest:red_thread',
            B: 'endrem:evil_eye',
            C: 'hexerei:moon_dust',
            D: 'hexerei:mandrake_root',
            E: 'twilightforest:charm_of_life_1'
        }
    )

    //Ring of Ender Chest
    event.shaped(
        Item.of('ring_of_enderchest:ring_of_enderchest'),
        [
            'ABA',
            'ACA',
            'ABA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'minecraft:ender_pearl',
            C: 'minecraft:ender_chest'
        }
    )

    //Uncompress Honey
    event.shapeless(
        Item.of('minecraft:honeycomb', 4),
        [ 
            'minecraft:honeycomb_block'
        ]
      )

    //Uncompress Quartz
    event.shapeless(
        Item.of('minecraft:quartz', 4),
        [ 
            'minecraft:quartz_block'
        ]
      )

    // Pipez Item Pipe
    event.shaped(
        Item.of('pipez:item_pipe', 16),
        [
            'AAA',
            'BBB',
            'AAA'
        ],
        {
            A: 'minecraft:copper_ingot',
            B: 'minecraft:redstone'
        }
    )

    // Tarot Deck
    event.shaped(
        Item.of('tarotcards:tarot_deck'),
        [
            'ABA',
            'ACA',
            'ADA'
        ],
        {
            A: 'create:golden_sheet',
            B: 'minecraft:dragon_egg',
            C: 'minecraft:nether_star',
            D: 'tarotcards:justice'
        }
    )

    // Dried Sage Bundle
    event.shaped(
        Item.of('hexerei:dried_sage_bundle'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'hexerei:dried_sage',
            B: 'minecraft:string'
        }
    )

    // Warp Scrolls to Warp Stones
    event.shaped(
        Item.of('waystones:warp_stone'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'waystones:warp_scroll',
            B: 'minecraft:emerald'
        }
    )

    // Waystones to Sharestones
    event.shapeless(
        Item.of('waystones:sharestone'),
        [ 
            '#forge:waystones'
        ]
    )

    // Quark Azalea Wood Conversion Recipes

    // Quark Azalea Log
    event.shapeless(
        Item.of('quark:azalea_log'),
        [ 
            'minecraft:moss_block',
            '#forge:azalea_logs'
        ]
    )

    // Quark Azalea Wood
    event.shapeless(
        Item.of('quark:azalea_wood'),
        [ 
            'minecraft:moss_block',
            '#forge:azalea_wood'
        ]
    )

    // Quark Azalea Planks
    event.shapeless(
        Item.of('quark:azalea_planks'),
        [ 
            'minecraft:moss_block',
            '#forge:azalea_planks'
        ]
    )

    // Quark Azalea Stripped Wood
    event.shapeless(
        Item.of('quark:stripped_azalea_wood'),
        [ 
            'minecraft:moss_block',
            'ecologics:stripped_azalea_wood'
        ]
    )

    // Quark Azalea Stripped Log
    event.shapeless(
        Item.of('quark:stripped_azalea_log'),
        [ 
            'minecraft:moss_block',
            'ecologics:stripped_azalea_log'
        ]
    )

    // Mermod Sea Crystal
    event.shapeless(
        Item.of('mermod:sea_crystal', 4),
        [ 
            'endrem:guardian_eye',
            'minecraft:heart_of_the_sea'
        ]
    )

    // Fried Egg uses all Eggs
    event.smelting('farmersdelight:fried_egg', '#forge:eggs')
    
    // Plushie Cloning
    //Snow Golem
    event.shaped(
        Item.of('plushies:snow_golem', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:snow_golem'
        }
    )

    //Axolotl
    event.shaped(
        Item.of('plushies:axolotl', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:axolotl'
        }
    )

    //Bee
    event.shaped(
        Item.of('plushies:bee', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:bee'
        }
    )

    //Cat
    event.shaped(
        Item.of('plushies:cat', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:cat'
        }
    )

    //cow
    event.shaped(
        Item.of('plushies:cow', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:cow'
        }
    )

    //Dolphin
    event.shaped(
        Item.of('plushies:dolphin', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:dolphin'
        }
    )

    //Dragon
    event.shaped(
        Item.of('plushies:dragon', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:dragon'
        }
    )

    //Enderman
    event.shaped(
        Item.of('plushies:enderman', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:enderman'
        }
    )

    //Cat
    event.shaped(
        Item.of('plushies:parrot', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:parrot'
        }
    )

    //Mooshroom
    event.shaped(
        Item.of('plushies:mooshroom', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:mooshroom'
        }
    )

    //llama
    event.shaped(
        Item.of('plushies:llama', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:llama'
        }
    )

    //white_fox
    event.shaped(
        Item.of('plushies:white_fox', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:white_fox'
        }
    )

    //frog
    event.shaped(
        Item.of('plushies:frog', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:frog'
        }
    )

    //goat
    event.shaped(
        Item.of('plushies:goat', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:goat'
        }
    )

    //warden
    event.shaped(
        Item.of('plushies:warden', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:warden'
        }
    )

    //sheep
    event.shaped(
        Item.of('plushies:sheep', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:sheep'
        }
    )

    //turtle
    event.shaped(
        Item.of('plushies:turtle', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:turtle'
        }
    )

    //magma_cube
    event.shaped(
        Item.of('plushies:magma_cube', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:magma_cube'
        }
    )

    //red_fox
    event.shaped(
        Item.of('plushies:red_fox', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:red_fox'
        }
    )

    //panda
    event.shaped(
        Item.of('plushies:panda', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:panda'
        }
    )

    //slime
    event.shaped(
        Item.of('plushies:slime', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:mirrorweave',
            B: 'plushies:slime'
        }
    )

    // Mushroom Stew
    event.shapeless(
        Item.of('minecraft:mushroom_stew'),
        [ 
            '#forge:mushrooms',
            '#forge:mushrooms',
            '#forge:bowls'
        ]
    )

    // Big Mushroom Stew
    event.shapeless(
        Item.of('minecraft:mushroom_stew', 2),
        [ 
            'biomemakeover:tall_brown_mushroom',
            'biomemakeover:tall_red_mushroom',
            '#forge:bowls',
            '#forge:bowls'
        ]
    )

    // Immersive Aircraft Recipes

    //Improved Landing Gear
    event.shaped(
        Item.of('immersive_aircraft:improved_landing_gear'),
        [
            ' A ',
            'B B',
            'C C'
        ],
        {
            A: 'create:gearbox',
            B: 'create:shaft',
            C: 'create:large_cogwheel'
        }
    )

    //Industrial Gears
    event.shaped(
        Item.of('immersive_aircraft:industrial_gears'),
        [
            'ABA',
            '   ',
            'CBC'
        ],
        {
            A: 'create:copper_sheet',
            B: 'create:cogwheel',
            C: 'create:iron_sheet'
        }
    )

    // Hull Reinforcement
    event.shaped(
        Item.of('immersive_aircraft:hull_reinforcement'),
        [
            'AAA',
            'BBB',
            'AAA'
        ],
        {
            A: 'create:iron_sheet',
            B: 'immersive_aircraft:hull'
        }
    )

    // Boiler
    event.shaped(
        Item.of('immersive_aircraft:boiler'),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            A: 'create:copper_valve_handle',
            B: 'create:fluid_pipe',
            C: 'create:steam_engine',
            D: 'minecraft:blaze_powder'
        }
    )

    // Hull
    event.shaped(
        Item.of('immersive_aircraft:hull'),
        [
            'ABA',
            'ABA'
        ],
        {
            A: 'create:andesite_casing',
            B: 'minecraft:iron_ingot'
        }
    )

    // Engine
    event.shaped(
        Item.of('immersive_aircraft:engine'),
        [
            'ABA',
            'CDC',
            'EEE'
        ],
        {
            A: 'create:hand_crank',
            B: 'create:encased_chain_drive',
            C: 'create:mechanical_piston',
            D: 'immersive_aircraft:boiler',
            E: 'minecraft:cobbled_deepslate'
        }
    )

    // Steel Boiler
    event.shaped(
        Item.of('immersive_aircraft:steel_boiler'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: 'create:iron_sheet',
            B: 'create:propeller',
            C: 'create:precision_mechanism',
            D: 'immersive_aircraft:boiler',
            E: 'minecraft:coal_block',
            F: 'create:blaze_burner'
        }
    )

    // Propeller
    event.shaped(
        Item.of('immersive_aircraft:propeller'),
        [
            ' A ',
            ' B ',
            ' A '
        ],
        {
            A: 'create:propeller',
            B: 'create:shaft'
        }
    )

    // Enhanced Propeller
    event.shaped(
        Item.of('immersive_aircraft:enhanced_propeller'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'minecraft:copper_ingot',
            B: 'immersive_aircraft:propeller'
        }
    )

    // Sail
    event.shaped(
        Item.of('immersive_aircraft:sail', 4),
        [
            'AAA',
            'AAA'
        ],
        {
            A: 'create:white_sail'
        }
    )

    // Sturdy Pipes
    event.shaped(
        Item.of('immersive_aircraft:sturdy_pipes'),
        [
            ' AB',
            'ABA',
            'BA '
        ],
        {
            A: 'create:iron_sheet',
            B: 'create:fluid_pipe'
        }
    )

    // Airship
    event.shaped(
        Item.of('immersive_aircraft:airship'),
        [
            'AAA',
            'ABC',
            'DED'
        ],
        {
            A: 'immersive_aircraft:sail',
            B: 'create:red_seat',
            C: 'immersive_aircraft:propeller',
            D: 'immersive_aircraft:hull',
            E: 'immersive_aircraft:engine'
        }
    )

    // Biplane
    event.shaped(
        Item.of('immersive_aircraft:biplane'),
        [
            ' A ',
            'BCB',
            'EDE'
        ],
        {
            A: 'immersive_aircraft:propeller',
            B: 'immersive_aircraft:sail',
            C: 'immersive_aircraft:engine',
            D: 'create:red_seat',
            E: 'immersive_aircraft:hull'
        }
    )

    // Gyrodyne
    event.shaped(
        Item.of('immersive_aircraft:gyrodyne'),
        [
            'A A',
            'BCB',
            'ADA'
        ],
        {
            A: 'immersive_aircraft:propeller',
            B: 'immersive_aircraft:hull',
            C: 'create:precision_mechanism',
            D: 'create:red_seat'
        }
    )

    // Nourishing Egg Recipe
    event.shaped(
        Item.of('ends_delight:non_hatchable_dragon_egg'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: '#forge:roasted_dragon_meat',
            B: 'minecraft:bone_meal',
            C: 'minecraft:milk_bucket',
            D: 'minecraft:dragon_egg'
        }
    )

    //Gateway to Eternity Gate Pearl Recipes

    // Hoglin Gate
    event.shaped(
        Item.of('gateways:gate_pearl', '{gateway:"gateways:hoglin_gate"}'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'minecraft:crimson_fungus',
            B: 'nethersdelight:hoglin_loin',
            C: 'minecraft:ender_eye'
        }
    )

    // Hoglin Gate Small
    event.shaped(
        Item.of('gateways:gate_pearl', '{gateway:"gateways:hoglin_gate_small"}'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'minecraft:crimson_fungus',
            B: 'minecraft:porkchop',
            C: 'minecraft:ender_eye'
        }
    )

    // Wraith Gate
    event.shaped(
        Item.of('gateways:gate_pearl', '{gateway:"gateways:wraith_gate"}'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'quark:soul_bead',
            B: 'minecraft:ender_eye'
        }
    )

    // Guardian Gate
    event.shaped(
        Item.of('gateways:gate_pearl', '{gateway:"gateways:elder_guardian_gate"}'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'minecraft:prismarine_shard',
            B: 'minecraft:ender_eye'
        }
    )

    // Cluttered Sewing Table Clutter Recipe
    event.shaped(
        Item.of('luphieclutteredmod:luphie_sewing_table_clutter'),
        [
            'ABC'
        ],
        {
            A: '#forge:string',
            B: '#minecraft:wool_carpets',
            C: '#minecraft:wool'
        }
    )

    // Blackstone Blast Furnace
    event.shaped(
        Item.of('nethersdelight:blackstone_blast_furnace'),
        [
            'AAA',
            'ABA',
            'CCC'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: '#forge:blackstone_furnaces',
            C: 'minecraft:polished_blackstone'
        }
    )

    // Blackstone Furnace Conversion
    event.shapeless(
        Item.of('nethersdelight:blackstone_furnace'),
        [ 
            'quark:blackstone_furnace'
        ]
    )
    event.shapeless(
        Item.of('quark:blackstone_furnace'),
        [ 
            'nethersdelight:blackstone_furnace'
        ]
    )

    // Farmer's Delight Milk Crafting
    event.shapeless(
        Item.of('farmersdelight:milk_bottle', 3),
        [ 
            'minecraft:milk_bucket',
            'minecraft:glass_bottle',
            'minecraft:glass_bottle',
            'minecraft:glass_bottle'
        ]
    )

    //Recipe Replacements
    //Cherries
    event.replaceInput(
        { input: 'environmental:cherries' }, // Arg 1: the filter
        'environmental:cherries',            // Arg 2: the item to replace
        '#forge:fruits/cherry'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
      )
  })

