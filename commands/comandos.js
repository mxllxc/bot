const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

const exampleEmbed = new EmbedBuilder()
	.setColor("Orange")
	.setTitle("Comandos existentes:")
	.addFields(
		{ name: '/pong', value: 'Response com Pong!'},
		{ name: '/comandos', value: 'Lista de comandos' },
	)

module.exports = {
    data: new SlashCommandBuilder()
        .setName("comandos")
        .setDescription("Relembrar comandos do Git"),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}