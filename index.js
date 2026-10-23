import chalk from "chalk"
import os from "os"
import fs from "fs"
// Type commonjs
// console.log("Aula de node")
// const fs = require("fs") //fs = File System
// const os = require("os") //os = Sistema Operacional
// const chalk = require("chalk")

// console.log("Sistema Operacional", os.platform())
// console.log("Arquitetura:", os.arch())
// console.log("Usuário:", os.userInfo())
// console.log("Diretório Home:", os.homedir())

console.log(chalk.blue.bold("Informação em azul"))

function mostrarMensagem(tipo,mensagem){
    switch (tipo) {
        case 'info':
            console.log(chalk.blue('[INFO]:'), mensagem)
            break
        case 'alert':
            console.log(chalk.yellow('[ALERT]:'), mensagem)
            break
        case 'error':
            console.log(chalk.red('[ERROR]:'), mensagem)
            break
        case 'success':
            console.log(chalk.green('[SUCCESS]:'), mensagem)
            break
    }
}


mostrarMensagem('error', 'Email ou senha incorretos')
mostrarMensagem('alert', 'Versão do computador desatualizada')
mostrarMensagem('success', 'Login efetuado com sucesso!')
mostrarMensagem('info', `${os.platform()}`)

fs.writeFileSync('mensagem.txt','Teste para escrever outro arquivo')
console.log(fs.readFileSync("mensagem.txt","utf-8"))