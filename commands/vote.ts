import { SlashCommandBuilder } from "@discordjs/builders";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("vote")
    .setDescription("Vote for [proposal] (Not yet implemented!)"),
  async execute(interaction) {
    await interaction.reply({
      content: "Not yet implemented!",
      ephemeral: true,
    });
  },
};
