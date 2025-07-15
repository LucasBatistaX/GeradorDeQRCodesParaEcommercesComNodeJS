import chalk from "chalk";
import prompt from "prompt";

const promptSchemaQRCode = [
  {
    name: "link",
    description: chalk.green("Digite o link para gerar o QRCode"),
  },
  {
    name: "type",
    description: chalk.green(
      "Escolha entre o tipo de QRCode, 1- Normal ou 2- Terminal"
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha entre a opção 1 e 2"),
  },
];

export default promptSchemaQRCode;
