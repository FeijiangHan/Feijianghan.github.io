/**
 * @file: custom config
 */

let mainConfig = {
  vssueConfig: {
    owner: "FeijiangHan",
    repo: "FeijiangHan.github.io",
    clientId: "80c73f5857605754e05d",
    clientSecret: "800019e08ab02df1e57e16e81c6580edbe326d1b"
  },

  repoConfig: {
    owner: "FeijiangHan",
    repo: "FeijiangHan.github.io",
    pushBranch: "main",
    email: "2918589839@qq.com",
    filterUsers: ["FeijiangHan"]
  },

  title: "Feijiang's Blog",
  description: "在这里了解我的一切，对编程的热爱永不停歇。",
  customDomain: "feijiang.info",
  base: "/",

  slogan: {
    main: "有逻辑的灵魂，",
    sub: "造就有温度的编码。"
  },

  themeConfig: {
    nav: [
      {
        name: "首页",
        link: "/"
      },
      {
        name: "Github",
        link: "https://github.com/FeijiangHan"
      },
      {
        name: "CV",
        link: "/cv.html"
      }
    ],
    headTitle: ["暮春早夏的月亮", "原是情人的月亮，不比秋冬是诗人的月亮"],
    friendLinks: [
      {
        name: "watercow",
        link: "https://github.com/watercow/watercow.github.io/issues"
      },
      {
        name: "ycjgg",
        link: "https://ycjgg.github.io"
      }
    ],
    extraFooters: [
      {
        title: "",
        text: "@ 蜀 ICP 备 19000509 号 - 1",
        link: "https://beian.miit.gov.cn/"
      }
    ],
    pageCount: true
  },

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "https://avatars2.githubusercontent.com/u/16968934?s=460&v=4"
      }
    ]
  ]
}

module.exports = mainConfig
