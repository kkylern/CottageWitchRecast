// Credit for these scripts goes to Pie and Uncandango on the KubeJS Discord. Thank you!

//Server Script
const EFFECTS = Java.loadClass('net.minecraftforge.registries.ForgeRegistries').MOB_EFFECTS;
// Reference:
// https://hunter19823.github.io/kubejsoffline/1.19.2/forge/#net.minecraftforge.registries.ForgeRegistries?focus=net.minecraftforge.registries.ForgeRegistries.MOB_EFFECTS
// This is reloadable with /reload.
global["MobEffectEvent$Added"] = function(event) {
    if(!event.entity.isPlayer()) return;
    let player = event.entity
    let potion = EFFECTS.getKey(event.getEffectInstance().getEffect());
    //console.log(potion);
    if (potion != "malum:rejected") return;
    //player.tell("You have the rejected effect!");
    player.server.runCommandSilent(`/ftbquests change_progress ${player.profile.name} complete 2F164DE917082AAC`);
}