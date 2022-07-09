const badges = require('./badges');

const imagePrefix = './src/images';

const data = {
  books: [
    {
      logo: '🦥',
      name: '《ESLint通关小册》',
      desc: '从0到1全面掌握ESLint',
      url: 'https://github.com/sudongyuer/learn-eslint',
      cover: `${imagePrefix}/covers/ESLint通关小册.jpeg`,
      badges: [
        'https://img.shields.io/github/stars/sudongyuer/learn-eslint?style=flat-square',
        'https://img.shields.io/github/forks/sudongyuer/learn-eslint?style=flat-square',
      ]
    },
    {
      logo: '💘',
      name: '《javascript-mental-models》',
      desc: '帮助你建立良好的JavaScript心智模型',
      url: 'https://github.com/sudongyuer/javascript-mental-models',
      cover: `${imagePrefix}/covers/JavaScript.jpg`,
      badges: [
        'https://img.shields.io/github/stars/sudongyuer/javascript-mental-models?style=flat-square',
      ]
    },
    {
      logo: '☄️',
      name: '《React设计模式》',
      desc: 'React相关der设计模式',
      url: 'https://github.com/sudongyuer/react-patterns',
      cover: `${imagePrefix}/covers/React.jpg`,
      badges: ['https://img.shields.io/github/stars/sudongyuer/react-patterns?style=flat-square']
    },
    {
      logo: '🐇 ',
      name: '《Vim通关小册》',
      desc: '从0到1通关Vim',
      url: 'https://github.com/sudongyuer/learn-vim',
      cover: `${imagePrefix}/covers/Vim通关小册.jpg`,
      badges: ['https://img.shields.io/github/stars/sudongyuer/learn-vim?style=flat-square']
    }
  ],
  projects: [
    {
      logo: '🦄',
      repo: 'mini-slack',
      desc: '模仿slack做的mini版(react、redux、ts、firebase、styled-components、vite、pnpm)',
      github: 'https://github.com/sudongyuer/mini-slack',
      preview: 'https://mini-slack.vercel.app/',
      techList: [badges.TypeScript, badges.React,badges.ReactRouter,badges.Redux],
      badges: [
        'https://img.shields.io/github/stars/sudongyuer/mini-slack?style=flat-square'
      ],
    },
    {
      logo: '🏎',
      repo: 'heimdall-ts',
      desc: '一个可以帮助轻松生成typescript API模块的CLI',
      github: 'https://github.com/HaiyaoTec/heimdall-ts',
      preview: 'https://github.com/HaiyaoTec/heimdall-ts',
      techList: [badges.TypeScript, badges.NodeJS],
      badges: [
        'https://img.shields.io/github/stars/HaiyaoTec/heimdall-ts?style=flat-square',
        'https://img.shields.io/npm/dt/@haiyaotec/heimdall-ts.svg'
      ],
    },
    {
      logo: '🎸',
      repo: 'mini-spotify',
      desc: 'spotify音乐播放器(next.js、nextauth 、recoil、ts、tailwind、spotify api、middleware、pnpm)',
      github: 'https://github.com/sudongyuer/mini-spotify',
      preview: 'https://mini-spotify-rose.vercel.app/',
      techList: [badges.TypeScript, badges.NestJS,badges.TailWindCss],
      badges: [
        'https://img.shields.io/github/stars/sudongyuer/mini-spotify?style=flat-square',
      ],
    },
    {
      logo: '🌍',
      repo: 'toy-browser',
      desc: '一个玩具浏览器关模拟浏览器渲染^_^',
      github: 'https://github.com/sudongyuer/toy-browser',
      preview: 'https://github.com/sudongyuer/toy-browser',
      techList: [badges.JavaScript, badges.NodeJS],
      badges: [
        'https://img.shields.io/github/stars/sudongyuer/toy-browser?style=flat-square',
      ],
    },
    {
      logo: '🍁',
      repo: 'rsocketMan',
      desc: '一个调试rsocket协议的web开发工具',
      github: 'https://github.com/HaiyaoTec/rsocketMan',
      preview: 'http://rsocketman.com/',
      techList: [badges.TypeScript, badges.React,badges.Redux],
      badges: [
        'https://img.shields.io/github/stars/HaiyaoTec/rsocketMan?style=flat-square',
      ],
    },
    {
      logo: '🐥',
      repo: 'antd-table-2-xlsx',
      desc: '将antd table转换为xlsx的一种非常简单的方法',
      github: 'https://github.com/sudongyuer/antd-table-2-xlsx',
      preview: 'https://github.com/sudongyuer/antd-table-2-xlsx',
      techList: [badges.TypeScript, badges.React,badges.Redux],
      badges: [
        'https://img.shields.io/github/stars/sudongyuer/antd-table-2-xlsx?style=flat-square',
      ],
    },
    {
      logo: '👑',
      repo: 'craft-client',
      desc: '非常简单得生成docker镜像',
      github: 'https://github.com/HaiyaoTec/craft-client',
      preview: 'https://github.com/HaiyaoTec/craft-client',
      techList: [badges.JavaScript, badges.NodeJS],
      badges: [
        'https://img.shields.io/github/stars/HaiyaoTec/craft-client?style=flat-square',
      ],
    },
    {
      logo: '🌈',
      repo: 'window-channel',
      desc: '一个非常简单的window通信库',
      github: 'https://github.com/HaiyaoTec/window-channel',
      preview: 'https://github.com/HaiyaoTec/window-channel',
      techList: [badges.TypeScript, badges.NodeJS],
      badges: [
        'https://img.shields.io/github/stars/HaiyaoTec/window-channel?style=flat-square',
      ],
    },
    {
      logo: '🥷',
      repo: 'info-js',
      desc: '一个可以帮助您简单获取客户端信息的库',
      github: 'https://github.com/HaiyaoTec/info-js',
      preview: 'https://github.com/HaiyaoTec/info-js',
      techList: [badges.JavaScript, badges.NodeJS],
      badges: [
        'https://img.shields.io/github/stars/HaiyaoTec/info-js?style=flat-square',
      ],
    },
    {
      logo: '🐇',
      repo: 'eslint-config',
      desc: '开箱即用的ESLint Config',
      github: 'https://github.com/sudongyuer/eslint-config',
      preview: 'https://github.com/sudongyuer/eslint-config',
      techList: [badges.TypeScript, badges.NodeJS,badges.ESLint],
      badges: [
        'https://img.shields.io/github/stars/sudongyuer/eslint-config?style=flat-square',
      ],
    },
    {
      logo: '🍁',
      repo: 'movie-gallery',
      desc: '在线电影简评网站(TypeScript Next.js Tailwind Pnpm CssGrid Responsive react-flip-move react-modal Sass)',
      github: 'https://github.com/sudongyuer/movie-gallery',
      preview: 'https://movie-gallery-sudongyuer.vercel.app/',
      techList: [badges.TypeScript, badges.NextJs,badges.TailWindCss],
      badges: [
        'https://img.shields.io/github/stars/sudongyuer/movie-gallery?style=flat-square',
      ],
    },
    {
      logo: '👻',
      repo: 'turbo-cache-transport',
      desc: 'turbo 缓存搬运工',
      github: 'https://github.com/sudongyuer/turbo-cache-transport',
      preview: 'https://github.com/sudongyuer/turbo-cache-transport',
      techList: [badges.TypeScript, badges.NodeJS],
      badges: [
        'https://img.shields.io/github/stars/sudongyuer/turbo-cache-transport?style=flat-square',
      ],
    },
    {
      logo: '🙃',
      repo: 'mini-vue3',
      desc: 'mini vue3 实现',
      github: 'https://github.com/sudongyuer/mini-vue3',
      preview: 'https://github.com/sudongyuer/mini-vue3',
      techList: [badges.TypeScript],
      badges: [
        'https://img.shields.io/github/stars/sudongyuer/mini-vue3?style=flat-square',
      ],
    },
    {
      logo: '🐧',
      repo: 'mini-vue-router',
      desc: '一个mini vue-router，你可以学习vue-router的原理',
      github: 'https://github.com/sudongyuer/mini-vue-router',
      preview: 'https://github.com/sudongyuer/mini-vue-router',
      techList: [badges.Vue,badges.JavaScript],
      badges: [
        'https://img.shields.io/github/stars/sudongyuer/mini-vue-router?style=flat-square',
      ],
    },

  ]
}

module.exports = data;
