import { SlashCommandBuilder } from "@discordjs/builders";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("grant")
    .setDescription("Info about our Gitcoin grant"),
  async execute(interaction) {
    await interaction.reply(
      "https://gitcoin.co/grants/3384/secure-remote-password-with-ethereum-name-service"
    );
  },
};
