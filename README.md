# 🌱 *Ecollo - Mobile App*

Este projeto é uma aplicação mobile desenvolvida com React Native que incentiva a reciclagem, recompensando usuários com pontos por materiais reciclados (ex.: PET, papel), trocáveis por descontos em parceiros.

## 🎯 Objetivo do App

Incentivar a reciclagem por meio de um app que recompensa usuários com pontos por materiais reciclados, trocáveis por benefícios em parceiros, promovendo sustentabilidade de forma prática e acessível.

## ⚙️ Funcionalidades

* Registro/Login
* Acúmulo de pontos
* Resgate de benefícios
* Histórico de reciclagem
* Dicas ambientais

## 🖼️ Navegação entre Telas

1. **Tela Inicial** 
   Tela de boas-vindas e início.

2. **Tela Login** 
   Campos para e-mail e senha.

3. **Tela de Cadastro** 
   Campos para nome, e-mail e senha.

4. **Tela Menu** 
   Lista de opções de navegação.

5. **Tela Mapa de Pontos de Coleta** 
   Mapa com locais de coleta.

6. **Tela de Rastreabilidade** 
   Rastreio de produtos reciclados.

7. **Tela do Perfil**
   Informações do usuário: nome, e-mail, ecoins (pontuação) e recompensas disponíveis.

## 📂 Estrutura de Pastas


```
bash
Ecollo/
├── assets/              # Imagens e recursos
├── src/
│   ├── components/      # Componentes reutilizáveis (ex.: botões, cards)
│   ├── screens/         # Telas (ex.: Home, Perfil)
├── App.js               # Ponto de entrada
├── app.json             # Configurações
├── package-lock.json    # Dependências bloqueadas
└── package.json         # Dependências e scripts
```

## 🔧 Tecnologias

* React Native
* JavaScript/TypeScript
* Axios/Fetch
* React Navigation
* Canva (protótipo)

## 🧪 Protótipo
Visualize o protótipo no [Canva](https://www.canva.com/design/DAGz2eRvUKk/6yOxhFF_l8D_RWBO3Wgssw/edit?utm_content=DAGz2eRvUKk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton).

## 🚀 Como Executar
```bash
# Clone o repositório
git clone https://github.com/zacksc/ecollo.git

# Acesse a pasta do projeto
cd ecollo

# Instale as dependências
npm install

# Execute no Android
npx react-native run-android

# ou execute no iOS (MacOS apenas)
npx react-native run-ios
