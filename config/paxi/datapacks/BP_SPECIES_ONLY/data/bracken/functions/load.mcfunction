##########   ADD SCOREBOARD OBJECTIVES   ##########
scoreboard objectives add food food
scoreboard objectives add hurting minecraft.custom:minecraft.damage_dealt
scoreboard objectives add sleep minecraft.custom:minecraft.sleep_in_bed
scoreboard objectives add sneak minecraft.custom:minecraft.sneak_time

scoreboard objectives add deaths deathCount
scoreboard objectives add health health
scoreboard objectives add armor armor
scoreboard objectives add tick dummy
scoreboard objectives add longtick dummy
scoreboard objectives add verylongtick dummy


scoreboard objectives add sprintcharge dummy
scoreboard objectives add sneakcharge dummy
scoreboard objectives add creeper dummy
scoreboard objectives add ice dummy
scoreboard objectives add mark dummy
scoreboard objectives add gold dummy





scoreboard objectives add change dummy
scoreboard objectives add automech trigger
scoreboard objectives add froskin trigger
scoreboard objectives add faefolk trigger
scoreboard objectives add human trigger
scoreboard objectives add hunter trigger
scoreboard objectives add dweller trigger
scoreboard objectives add enderling trigger
scoreboard objectives add nereid trigger
scoreboard objectives add netherkin trigger
scoreboard objectives add outlander trigger
scoreboard objectives add realmkeeper trigger
scoreboard objectives add villain trigger






##########   GAMERULE COMMANDBLOCK OUTPUT FALSE   ##########
gamerule commandBlockOutput false

##########   RESET SCOREBOARD PLAYER VALUES   ##########
scoreboard players set @a sleep 0
scoreboard players set @a sprintcharge 0
scoreboard players set @a tick 0
scoreboard players set @a longtick 0
scoreboard players set @a verylongtick 0
scoreboard players set @a hurting 0
scoreboard players set @a deaths 0

scoreboard players set @a creeper 0
scoreboard players set @a mark 0
scoreboard players set @a gold 0


##########   DISPLAY HEARTS   ##########
scoreboard objectives setdisplay list health


##########   ADD TEAMS   ##########
team add Automech
team add Realmkeeper
team add Faefolk
team add Human
team add Dweller
team add Netherkin
team add Froskin
team add Outlander
team add Enderling
team add Nereid
team add Villain
team add Hunter


##########   GIVE TEAMS COLORS   ##########
team modify Automech color green
team modify Realmkeeper color yellow
team modify Faefolk color blue
team modify Human color red
team modify Dweller color dark_gray
team modify Netherkin color gold
team modify Froskin color aqua
team modify Outlander color gray
team modify Enderling color dark_purple
team modify Nereid color dark_blue
team modify Villain color dark_red
team modify Hunter color dark_green



