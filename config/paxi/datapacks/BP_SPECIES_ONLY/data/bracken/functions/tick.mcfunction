
##########   PLAYER SCOREBOARD COMMANDS   ##########
scoreboard players set @a[scores={tick=2..}] tick 0
scoreboard players add @a tick 1
scoreboard players set @a[scores={tick=2}] sneak 0

scoreboard players set @a[scores={tick=2}] sleep 0
scoreboard players set @a[scores={tick=2}] hurting 0
scoreboard players set @a[scores={longtick=200..}] longtick 0


scoreboard players add @a longtick 1
scoreboard players set @a[scores={longtick=200..,deaths=1..}] deaths 0
scoreboard players set @a[scores={verylongtick=600..}] verylongtick 0
scoreboard players add @a verylongtick 1
effect give @a[scores={sleep=1..}] hunger 3 3 true
scoreboard players add @a[scores={sneak=1..}] sneakcharge 4
scoreboard players set @a[scores={sneakcharge=31..}] sneakcharge 1
scoreboard players remove @a[scores={sneakcharge=1..,sneak=0}] sneakcharge 1

execute as @p[scores={armor=11,gold=..19},team=Realmkeeper,nbt={Inventory:[{Slot:103b,id:"minecraft:golden_helmet"},{Slot:102b,id:"minecraft:golden_chestplate"},{Slot:101b,id:"minecraft:golden_leggings"},{Slot:100b,id:"minecraft:golden_boots"}]}] run scoreboard players set @s gold 20

scoreboard players set @a[scores={armor=..10}] gold 0



##########   TEAM PLAYER EFFECTS   ##########

execute at @a[team=Automech] if block ~ ~1 ~ minecraft:water run effect give @p minecraft:slowness 1 4 true
effect give @a[team=Automech,scores={longtick=2}] minecraft:resistance 13 1 true
effect give @a[team=Automech,scores={longtick=2}] minecraft:slowness 13 0 true
effect give @a[scores={longtick=2},predicate=bracken:omnidrome,team=Automech] minecraft:saturation 13 1 true

effect give @a[team=Netherkin,scores={longtick=3}] minecraft:fire_resistance 13 0 true
execute at @a[team=Netherkin] if block ~ ~1 ~ minecraft:water run effect give @p minecraft:wither 1 1 true

effect give @a[team=Froskin,scores={longtick=4}] minecraft:resistance 13 0 true
effect clear @a[team=Froskin] minecraft:slowness
execute at @a[team=Froskin] if block ~ ~ ~ fire run effect give @p[team=Froskin] minecraft:instant_damage 1 0 true
execute at @a[team=Froskin] if block ~ ~ ~ lava run effect give @p[team=Froskin] minecraft:instant_damage 1 1 true

effect give @a[team=Realmkeeper,scores={armor=12..,longtick=4}] minecraft:weakness 13 9 true
effect give @a[team=Realmkeeper,scores={armor=12..,longtick=4}] minecraft:glowing 13 9 true

execute at @a[team=Realmkeeper,scores={health=18..}] run execute as @a[y=25,dy=250] run effect give @s minecraft:absorption 2 0 true
execute at @a[team=Realmkeeper,scores={gold=1..}] run execute as @a[y=25,dy=250] run effect give @s minecraft:absorption 2 0 true

effect give @a[team=Faefolk,predicate=bracken:sprint] minecraft:speed 2 0 true
effect clear @a[team=Faefolk,predicate=bracken:sprint0] minecraft:speed
effect give @a[team=Faefolk,scores={longtick=5}] minecraft:jump_boost 13 0 true
effect give @a[team=Faefolk,scores={longtick=5}] minecraft:weakness 13 0 true
experience add @a[scores={verylongtick=60},team=Faefolk] 1 points

effect give @a[team=Human,nbt={Dimension:"minecraft:overworld"},scores={longtick=6}] minecraft:luck 13 4 true
effect give @a[team=Human,nbt={Dimension:"minecraft:overworld"},scores={longtick=6}] minecraft:hero_of_the_village 13 4 true
effect give @a[team=Human,scores={longtick=6}] minecraft:unluck 13 4 true
effect clear @a[team=Human,nbt={Dimension:"minecraft:overworld"}] minecraft:unluck


effect give @a[team=Dweller,scores={longtick=7}] minecraft:haste 13 4 true
effect give @a[team=Dweller,scores={longtick=7}] minecraft:night_vision 33 0 true
effect give @a[team=Dweller,scores={food=20}] minecraft:hunger 1 1 true

effect give @a[team=Outlander,scores={food=..15}] minecraft:saturation 1 0 true

effect give @a[team=Nereid,scores={longtick=8}] minecraft:dolphins_grace 13 4 true
effect give @a[team=Nereid,scores={longtick=8}] minecraft:night_vision 33 0 true
effect give @a[team=Nereid,scores={longtick=8}] minecraft:water_breathing 13 0 true
execute at @a[team=Nereid] if block ~ ~1 ~ minecraft:air run effect give @p minecraft:slowness 1 0 true


effect give @a[team=Hunter,scores={longtick=9}] minecraft:hunger 13 0 true
effect give @a[team=Hunter,predicate=bracken:sprint,scores={food=20}] minecraft:speed 1 1 true
effect give @a[team=Hunter,predicate=bracken:sprint,scores={food=9..}] minecraft:speed 1 0 true
effect clear @a[team=Hunter,predicate=bracken:sprint0] minecraft:speed
execute at @a[team=Hunter,scores={sneak=1..}] run effect give @a[distance=..100,scores={mark=2..}] glowing 3 9 false

execute at @a[team=Hunter,scores={hurting=1..}] run scoreboard players set @p[distance=..4,team=!Hunter] mark 3
scoreboard players set @a[scores={deaths=1..}] mark 0
execute at @a[scores={mark=1..}] run scoreboard players set @a[distance=4..100] mark 0

effect give @a[team=Hunter,predicate=bracken:sneak] jump_boost 1 255 false

effect give @a[team=Villain,scores={longtick=10}] minecraft:strength 13 0 true
effect give @a[team=Villain,scores={longtick=10}] minecraft:resistance 13 0 true
effect give @a[team=Villain,scores={longtick=10}] minecraft:bad_omen 13 0 true
effect give @a[team=Villain,scores={longtick=10}] minecraft:unluck 13 9 true
effect clear @a[team=Villain] minecraft:hero_of_the_village
execute at @a[team=Villain] run data modify entity @e[type=iron_golem,limit=1,distance=..50] AngryAt set from entity @p[team=Villain] UUID

effect give @s minecraft:wither 1 0 true
execute as @s[scores={sneakcharge=28..,jump=1..}] run spreadplayers ~ ~ 3 5 under 100 false @s
execute as @s[scores={sneakcharge=2..}] run particle minecraft:portal ~ ~ ~ 0.2 .8 0.2 0.01 1
execute as @s[scores={sneakcharge=28..,jump=1..}] run playsound minecraft:entity.enderman.teleport player @a[distance=..20] ~ ~ ~ 10
execute as @s[scores={sneakcharge=2..,jump=1..}] run experience add @p -1 points

execute as @s[scores={sneakcharge=2..,jump=1..}] run scoreboard players set @p sneakcharge 0




gamemode spectator @a[gamemode=survival,team=Watcher,scores={sneakcharge=20..}]


execute at @a[team=Watcher,gamemode=spectator] unless block ~ ~ ~ air run gamemode survival @a[distance=..1,team=Watcher]
