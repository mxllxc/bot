// const { joinVoiceChannel } = require('@discordjs/voice');
const { SlashCommandBuilder } = require("discord.js")
// const { createAudioPlayer, createAudioResource } = require('@discordjs/voice');
const { generateDependencyReport, AudioPlayerStatus, joinVoiceChannel, createAudioPlayer, createAudioResource  } = require('@discordjs/voice');
// const { NoSubscriberBehavior } = require('@discordjs/voice');
const { join } = require('node:path');


module.exports = {
    data: new SlashCommandBuilder()
    .setName("kimerda")
    .setDescription("Entra no canal e fala 'KI MERDA CARA KI MERDA'"),
    async execute(interaction, client) {
		//get the voice channel ids
		const voiceChannelId = "1080127938328023145";
		const guildId = "1080127937350729748";

        //create the connection to the voice channel
        const connection = joinVoiceChannel({
            channelId: voiceChannelId,
            guildId: guildId,
            adapterCreator: interaction.guild.voiceAdapterCreator,
        });	

        const resource = 
        createAudioResource('qui.mp3', {
            inlineVolume: true
        })
    
        const player = createAudioPlayer();
        player.play(resource)
	},
    
    // async execute(interaction) {
    //     // Conexão no canal
    //     const voiceChannel = "1080127938328023145"
    //     const voiceConnection = joinVoiceChannel({
    //         channelId: voiceChannel,
    //         guildId: interaction.guildId,
    //         adapterCreator: interaction.guild.voiceAdapterCreator,
    //     })
        
    //     //KI MERDA CARA KI MERDA
    //     const player = createAudioPlayer();
    //     const resource = createAudioResource('C:\\GitHub\\bot\\audios\\quimerda.mp3');
	// 	    player.play(resource);
    //     const subscription = voiceConnection.subscribe(player);
    // }
}