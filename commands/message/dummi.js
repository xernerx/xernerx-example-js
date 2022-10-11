import { MessageCommand } from 'xernerx';

export default class XernerxCommand extends MessageCommand {
    constructor() {
        super('xernerx', {
            name: "xernerx",
            regex: /xernerx framework/gi,
            description: 'Xernerx!',
        })
    }

    async exec(message) {
        return await message.util.reply(`About me ${this.client.user}!`);
    }
}