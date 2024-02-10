# Discord Bot calculadora JS

Este é um bot Discord feito em JavaScript que atua como uma calculadora, permitindo que os usuários enviem equações matemáticas simples e obtenham os resultados diretamente no servidor Discord.

## Pré-requisitos

Antes de executar este bot, você precisará ter o Node.js instalado em seu sistema. Além disso, certifique-se de ter uma conta Discord e crie um bot no [Discord Developer Portal](https://discord.com/developers/applications) para obter um token de autenticação.

## Instalação

1. Clone este repositório para o seu sistema local:

   ```
   git clone https://github.com/Ennard-1/Discord-bot-calculadora-Js.git
    ```

2. Navegue até o diretório do projeto:

```
cd Discord-bot-calculadora-Js
```

3. Instale as dependências necessárias usando npm:

```
npm install
```

## Configuração

Crie um arquivo config.json na raiz do projeto e adicione seu token de bot Discord:

```
{
  "token": "SEU_TOKEN_AQUI"
}
```

Substitua SEU_TOKEN_AQUI pelo token do seu bot Discord.

## Uso

Para iniciar o bot, execute o seguinte comando na linha de comando dentro do diretório do projeto:

```
node index.js
```

O bot estará online e pronto para responder a equações matemáticas.

## Comandos

O bot responde automaticamente a qualquer mensagem no formato de equação matemática. Por exemplo:

```
2 + 2
100 * 5
10 / 2
```

Ele também responde a mensagens que contêm porcentagens. Por exemplo:

```
100 + 10%
50 - 25%
```

## Licença
Este projeto está licenciado sob a MIT License.
