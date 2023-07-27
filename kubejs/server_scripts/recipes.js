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
            A: 'create:brass_ingot',
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
            A: 'create:brass_ingot',
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
            A: 'create:brass_ingot',
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
            A: 'create:brass_ingot',
            B: 'minecraft:redstone',
            C: 'minecraft:ender_pearl',
            D: 'minecraft:lapis_lazuli'
        }
    )

    //Akashic Tome
    event.shapeless(
        Item.of('akashictome:tome', '{"akashictome:data":{ars_nouveau:{Count:1b,id:"ars_nouveau:worn_notebook"},camera:{Count:1b,id:"camera:album"},create:{Count:1b,id:"create:create_manual"},create_central_kitchen:{Count:1b,ForgeCaps:{Parent:{}},id:"create_central_kitchen:cooking_guide"},create_central_kitchen_0:{Count:1b,ForgeCaps:{Parent:{NeedWater:0b}},id:"create_central_kitchen:brewing_guide",tag:{"akashictome:definedMod":"create_central_kitchen_0"}},dimdungeons:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"dimdungeons:guide_book"}},extradelight:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"extradelight:cookbook"}},ftbquests:{Count:1b,id:"ftbquests:book"},hexerei:{Count:1b,id:"hexerei:book_of_shadows",tag:{bookmarks:{},chapter:0,opened:0b,page:0}},lexicon:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"lexicon:lexicon"}},twilightdelight:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"twilightdelight:twilight_guide"}}},ingredients:{item0:"block.minecraft.air",item1:"item.akashictome.tome",item2:"item.patchouli.guide_book",length:3}}'),            [ 
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

    //Eggys
    event.replaceInput(
        { input: 'minecraft:egg' }, // Arg 1: the filter
        'minecraft:egg',            // Arg 2: the item to replace
        '#forge:eggs'         // Arg 3: the item to replace it with
      )

    //Dough
    event.replaceInput(
        { input: 'candlelight:dough' }, // Arg 1: the filter
        'candlelight:dough',            // Arg 2: the item to replace
        '#forge:dough'         // Arg 3: the item to replace it with
      )

    //Pasta
    event.replaceInput(
        { input: 'candlelight:pasta_raw' }, // Arg 1: the filter
        'candlelight:pasta_raw',            // Arg 2: the item to replace
        '#forge:pasta'         // Arg 3: the item to replace it with
      )

    //Tomatoes
    event.replaceInput(
        { input: 'candlelight:tomato' }, // Arg 1: the filter
        'candlelight:tomato',            // Arg 2: the item to replace
        '#forge:crops/tomato'         // Arg 3: the item to replace it with
    )

    // limes 
    event.replaceInput(
        {not: 
        [{output: 'collectorsreap:lime_crate'}, 
        {output: 'collectorsreap:lime_seeds'}, 
        {output: 'collectorsreap:lime_slice'},],
        input: 'collectorsreap:lime' }, // Arg 1: the filter
        'collectorsreap:lime',            // Arg 2: the item to replace
        '#collectorsreap:lime_or_slice'         // Arg 3: the item to replace it with
    )

    //Strawberries
    event.replaceInput(
        { input: 'bakery:strawberry' }, // Arg 1: the filter
        'bakery:strawberry',            // Arg 2: the item to replace
        '#forge:fruits/strawberries'         // Arg 3: the item to replace it with
      )

    //Bakery Dough
    event.replaceInput(
        { input: 'bakery:dough' }, // Arg 1: the filter
        'bakery:dough',            // Arg 2: the item to replace
        '#forge:dough'         // Arg 3: the item to replace it with
      )

    //Candlelight Butter
    event.replaceInput(
        { input: 'candlelight:butter' }, // Arg 1: the filter
        'candlelight:butter',            // Arg 2: the item to replace
        '#forge:butter'         // Arg 3: the item to replace it with
      )
      

    // BG Charging Gadget
    event.shaped(
        Item.of('charginggadgets:charging_station'),
        [
            'ABA',
            'DBD',
            'ACA'
        ],
        {
            A: 'minecraft:gold_ingot',
            B: 'minecraft:redstone',
            C: 'minecraft:coal_block',
            D: 'minecraft:lapis_lazuli'
        }
    )

    // BG Template Manager
    event.shaped(
        Item.of('buildinggadgets:template_manager'),
        [
            'ABA',
            'BCB',
            'ADA'
        ],
        {
            A: 'minecraft:copper_ingot',
            B: 'minecraft:redstone',
            C: 'minecraft:emerald',
            D: 'minecraft:lapis_lazuli'
        }
    )

    // Jelly torches

    // Main Jelly Torch
    event.shaped(
        Item.of('upgrade_aquatic:green_jelly_torch', 8),
        [
            ' A ',
            ' B '
        ],
        {
            A: 'minecraft:slime_ball',
            B: 'upgrade_aquatic:prismarine_rod'
        }
    )

    // Jelly torch blue
    event.shaped(
        Item.of('upgrade_aquatic:blue_jelly_torch', 8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: '#forge:jelly_torches',
            B: 'minecraft:light_blue_dye'
        }
    )

    // Jelly torch green
    event.shaped(
        Item.of('upgrade_aquatic:green_jelly_torch', 8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: '#forge:jelly_torches',
            B: 'minecraft:lime_dye'
        }
    )

    // Jelly torch purple
    event.shaped(
        Item.of('upgrade_aquatic:purple_jelly_torch', 8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: '#forge:jelly_torches',
            B: 'minecraft:purple_dye'
        }
    )

    // Jelly torch yellow
    event.shaped(
        Item.of('upgrade_aquatic:yellow_jelly_torch', 8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: '#forge:jelly_torches',
            B: 'minecraft:yellow_dye'
        }
    )

    // Jelly torch red
    event.shaped(
        Item.of('upgrade_aquatic:red_jelly_torch', 8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: '#forge:jelly_torches',
            B: 'minecraft:red_dye'
        }
    )

    // Jelly torch orange
    event.shaped(
        Item.of('upgrade_aquatic:orange_jelly_torch', 8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: '#forge:jelly_torches',
            B: 'minecraft:orange_dye'
        }
    )

    // Jelly torch pink
    event.shaped(
        Item.of('upgrade_aquatic:pink_jelly_torch', 8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: '#forge:jelly_torches',
            B: 'minecraft:magenta_dye'
        }
    )

    // Jelly torch white
    event.shaped(
        Item.of('upgrade_aquatic:white_jelly_torch', 8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: '#forge:jelly_torches',
            B: 'minecraft:white_dye'
        }
    )

    // Vinery Sink
    event.shaped(
        Item.of('vinery:kitchen_sink'),
        [
            'AAA',
            'BCB',
            'BBB'
        ],
        {
            A: 'minecraft:polished_deepslate_slab',
            B: 'minecraft:brick',
            C: 'minecraft:water_bucket'
        }
    )

    // Backpack alternate
    event.shaped(
        Item.of('backpacked:backpack'),
        [
            'AAA',
            'CBC',
            'AAA'
        ],
        {
            A: '#forge:leather',
            B: 'minecraft:iron_ingot',
            C: 'minecraft:string'
        }
    )

    // Palette
    event.shaped(
        Item.of('xercapaint:item_palette'),
        [
            'AA ',
            'AA '
        ],
        {
            A: '#minecraft:wooden_slabs'
        }
    )

    // String from Wool
    event.shapeless(
        Item.of('minecraft:string', 4),
        [ 
            '#minecraft:wool'
        ]
    )

    // Coin Conversion recipes
    // Lunar to Solar
    event.shapeless(
        Item.of('kubejs:solar_coin'),
        [ 
            'kubejs:lunar_coin',
            'kubejs:lunar_coin',
            'kubejs:lunar_coin',
            'kubejs:lunar_coin',
            'kubejs:lunar_coin',
            'kubejs:lunar_coin',
            'kubejs:lunar_coin',
            'kubejs:lunar_coin',
            'kubejs:lunar_coin'
        ]
    )

    // Solar to Arcane
    event.shapeless(
        Item.of('kubejs:arcane_coin'),
        [ 
            'kubejs:solar_coin',
            'kubejs:solar_coin',
            'kubejs:solar_coin',
            'kubejs:solar_coin',
            'kubejs:solar_coin',
            'kubejs:solar_coin',
            'kubejs:solar_coin',
            'kubejs:solar_coin',
            'kubejs:solar_coin'
        ]
    )

    // Arcane to Solar
    event.shapeless(
        Item.of('kubejs:solar_coin', 9),
        [ 
            'kubejs:arcane_coin'
        ]
    )

    // Solar to Lunar
    event.shapeless(
        Item.of('kubejs:lunar_coin', 9),
        [ 
            'kubejs:solar_coin'
        ]
    )

    // Hexerei Stone Windows
    event.shaped(
        Item.of('hexerei:stone_window_pane', 16),
        [
            'AAA',
            'AAA'
        ],
        {
            A: 'hexerei:stone_window'
        }
    )

    event.shapeless(
        Item.of('hexerei:stone_window', 2),
        [ 
            '#forge:stone',
            '#forge:glass'
        ]
    )

    // Casting Crystal
    event.shaped(
        Item.of('casting_crystals:casting_crystal'),
        [
            'ABA',
            'BCB',
            'DBA'
        ],
        {
            A: 'minecraft:string',
            B: 'minecraft:gold_ingot',
            C: 'ars_nouveau:source_gem',
            D: 'ars_nouveau:manipulation_essence'
        }
    )

    //Biome Jar Emptying
    
    event.shapeless(
        Item.of('biomesinjars:empty_biome_jar'),
        [ 
            'biomesinjars:filled_biome_jar'
        ]
    )

    // BG Charging Gadget
    event.shaped(
        Item.of('shoppy:bartering_station'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: 'minecraft:gold_nugget',
            B: '#forge:glass',
            C: '#minecraft:wool_carpets',
            D: '#forge:chests',
            E: '#minecraft:logs',
            F: 'minecraft:smooth_stone'
        }
    )

    // Candlelight Chocolate Box
    event.shaped(
        Item.of('candlelight:chocolate_box'),
        [
            'AAA',
            'AAA',
            ' B '
        ],
        {
            A: '#forge:chocolate',
            B: '#forge:chests'
        }
    )

    // Diamond Shears
    event.shaped(
        Item.of('kubejs:diamond_shears'),
        [
            'A  ',
            ' A '
        ],
        {
            A: 'minecraft:diamond'
        }
    )

    //Candlelight Luck Ring
    event.shaped(
        Item.of('candlelight:gold_ring', '{Damage:0}'),
        [
            'ABB',
            'BCB',
            'BBD'
        ],
        {
            A: 'minecraft:diamond',
            B: 'minecraft:gold_ingot',
            C: 'ars_nouveau:glyph_fortune',
            D: 'majruszsaccessories:golden_horseshoe'
        }
    )

    //Stonecutter recipes for Xerca Woods

    event.stonecutting('kubejs:carved_warped_1', 'minecraft:stripped_warped_stem')
    event.stonecutting('kubejs:carved_warped_2', 'minecraft:stripped_warped_stem')
    event.stonecutting('kubejs:carved_warped_3', 'minecraft:stripped_warped_stem')
    event.stonecutting('kubejs:carved_warped_4', 'minecraft:stripped_warped_stem')
    event.stonecutting('kubejs:carved_warped_5', 'minecraft:stripped_warped_stem')
    event.stonecutting('kubejs:carved_warped_6', 'minecraft:stripped_warped_stem')
    event.stonecutting('kubejs:carved_warped_7', 'minecraft:stripped_warped_stem')
    event.stonecutting('kubejs:carved_warped_8', 'minecraft:stripped_warped_stem')

    event.stonecutting('kubejs:carved_crimson_1', 'minecraft:stripped_crimson_stem')
    event.stonecutting('kubejs:carved_crimson_2', 'minecraft:stripped_crimson_stem')
    event.stonecutting('kubejs:carved_crimson_3', 'minecraft:stripped_crimson_stem')
    event.stonecutting('kubejs:carved_crimson_4', 'minecraft:stripped_crimson_stem')
    event.stonecutting('kubejs:carved_crimson_5', 'minecraft:stripped_crimson_stem')
    event.stonecutting('kubejs:carved_crimson_6', 'minecraft:stripped_crimson_stem')
    event.stonecutting('kubejs:carved_crimson_7', 'minecraft:stripped_crimson_stem')
    event.stonecutting('kubejs:carved_crimson_8', 'minecraft:stripped_crimson_stem')

    event.stonecutting('kubejs:carved_birch_1', 'minecraft:stripped_birch_log')
    event.stonecutting('kubejs:carved_birch_2', 'minecraft:stripped_birch_log')
    event.stonecutting('kubejs:carved_birch_3', 'minecraft:stripped_birch_log')
    event.stonecutting('kubejs:carved_birch_4', 'minecraft:stripped_birch_log')
    event.stonecutting('kubejs:carved_birch_5', 'minecraft:stripped_birch_log')
    event.stonecutting('kubejs:carved_birch_6', 'minecraft:stripped_birch_log')
    event.stonecutting('kubejs:carved_birch_7', 'minecraft:stripped_birch_log')
    event.stonecutting('kubejs:carved_birch_8', 'minecraft:stripped_birch_log')

    event.stonecutting('kubejs:carved_acacia_1', 'minecraft:stripped_acacia_log')
    event.stonecutting('kubejs:carved_acacia_2', 'minecraft:stripped_acacia_log')
    event.stonecutting('kubejs:carved_acacia_3', 'minecraft:stripped_acacia_log')
    event.stonecutting('kubejs:carved_acacia_4', 'minecraft:stripped_acacia_log')
    event.stonecutting('kubejs:carved_acacia_5', 'minecraft:stripped_acacia_log')
    event.stonecutting('kubejs:carved_acacia_6', 'minecraft:stripped_acacia_log')
    event.stonecutting('kubejs:carved_acacia_7', 'minecraft:stripped_acacia_log')
    event.stonecutting('kubejs:carved_acacia_8', 'minecraft:stripped_acacia_log')

    event.stonecutting('kubejs:carved_spruce_1', 'minecraft:stripped_spruce_log')
    event.stonecutting('kubejs:carved_spruce_2', 'minecraft:stripped_spruce_log')
    event.stonecutting('kubejs:carved_spruce_3', 'minecraft:stripped_spruce_log')
    event.stonecutting('kubejs:carved_spruce_4', 'minecraft:stripped_spruce_log')
    event.stonecutting('kubejs:carved_spruce_5', 'minecraft:stripped_spruce_log')
    event.stonecutting('kubejs:carved_spruce_6', 'minecraft:stripped_spruce_log')
    event.stonecutting('kubejs:carved_spruce_7', 'minecraft:stripped_spruce_log')
    event.stonecutting('kubejs:carved_spruce_8', 'minecraft:stripped_spruce_log')

    event.stonecutting('kubejs:carved_dark_oak_1', 'minecraft:stripped_dark_oak_log')
    event.stonecutting('kubejs:carved_dark_oak_2', 'minecraft:stripped_dark_oak_log')
    event.stonecutting('kubejs:carved_dark_oak_3', 'minecraft:stripped_dark_oak_log')
    event.stonecutting('kubejs:carved_dark_oak_4', 'minecraft:stripped_dark_oak_log')
    event.stonecutting('kubejs:carved_dark_oak_5', 'minecraft:stripped_dark_oak_log')
    event.stonecutting('kubejs:carved_dark_oak_6', 'minecraft:stripped_dark_oak_log')
    event.stonecutting('kubejs:carved_dark_oak_7', 'minecraft:stripped_dark_oak_log')
    event.stonecutting('kubejs:carved_dark_oak_8', 'minecraft:stripped_dark_oak_log')

  })

