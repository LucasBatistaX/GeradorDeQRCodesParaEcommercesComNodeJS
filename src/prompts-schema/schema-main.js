import chalk from "chalk";
import prompt from "prompt";

const promptSchemaMain = [
    {
        name: "select",
        description: chalk.green.bold ("Escolha a ferramenta 1 - QRCODE ou 2- Password"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic ("Escolha apenas entre 1 e 2"),
        required: true,
    },
]

export default promptSchemaMain