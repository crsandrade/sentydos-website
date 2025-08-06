# SENTYDOS - Website Oficial

> Consultório de Psicologia Sentydos - A sua mente no melhor estado

## 📋 Sobre o Projeto

Este website serve como uma ponte de acesso entre usuários da internet e o consultório de psicoterapia Sentydos. Aqui você encontrará informações sobre a empresa, os profissionais, serviços oferecidos, além de poder entrar em contato e localizar o consultório.

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização e responsividade
- **JavaScript** - Interatividade e funcionalidades
- **PWA** - Progressive Web App com Service Worker
- **Manifest.json** - Configuração para instalação como app

## 📁 Estrutura do Projeto

```
SENTYDOS/
├── 📁 src/                    # Código fonte
│   ├── 📁 components/         # Componentes reutilizáveis (futuro)
│   ├── 📁 scripts/           # Arquivos JavaScript
│   │   └── script.js
│   └── 📁 styles/            # Arquivos CSS
│       ├── style.css
│       └── responsive.css
├── 📁 public/                # Arquivos públicos
│   └── 📁 assets/
│       ├── 📁 images/        # Imagens do site
│       └── 📁 icons/         # Ícones e favicons
├── 📁 config/                # Arquivos de configuração
│   ├── manifest.json
│   ├── service-worker.js
│   ├── csp-report.php
│   └── report-to.json
├── 📁 docs/                  # Documentação
│   ├── README.md
│   └── security.txt
├── 📁 .well-known/           # Arquivos de segurança
│   └── security.txt
├── 📁 pages/                 # Páginas adicionais (futuro)
├── index.html               # Página principal
├── security-policy.html     # Política de segurança
├── privacy-policy.html      # Política de privacidade
├── package.json            # Dependências e scripts
├── .gitignore              # Arquivos ignorados pelo Git
├── .htaccess               # Configurações do servidor
└── robots.txt              # Instruções para crawlers
```

## 🛠️ Scripts Disponíveis

```bash
# Iniciar servidor local
npm start

# Servidor de desenvolvimento com live reload
npm run dev

# Verificar CSS
npm run lint:css

# Verificar JavaScript
npm run lint:js

# Formatar código
npm run format
```

## 🔧 Instalação e Uso

1. Clone o repositório
2. Instale as dependências: `npm install`
3. Execute o servidor local: `npm start`
4. Acesse `http://localhost:3000`

## 📱 PWA Features

- ✅ Manifest.json configurado
- ✅ Service Worker para cache offline
- ✅ Ícones para instalação
- ✅ Meta tags para mobile
- ✅ Theme color configurado

## 🔒 Segurança

- Content Security Policy (CSP) implementado
- Headers de segurança configurados
- Política de privacidade e segurança
- Arquivo security.txt para divulgação responsável

## 👨‍💻 Desenvolvedor

**Rafael de Andrade**
- GitHub: [@crsandrade](https://github.com/crsandrade)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

*Desenvolvido com ❤️ para promover saúde mental e bem-estar*
