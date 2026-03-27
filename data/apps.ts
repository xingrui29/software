import type { App } from '~/types/app'

export const apps: App[] = [
  // Chrome
  {
    id: 'chrome',
    name: '谷歌浏览器',
    shortDescription: '最受欢迎的浏览器',
    category: 'productivity',
    icon: 'heroicons:document-text-solid',
    features: [
      '浏览器',
      'Google'
    ],
    downloads: {
      windows: {
        url: '/WinApp/Chrome.exe'
      },
      macos: {
        apple: {
          url: '/MacApp/Chrome.dmg'
        }
      }
    },
    version: '1.0.0',
    featured: true,
    badge: '热门'
  },
  // Foxmail
  {
    id: 'foxmail',
    name: 'Foxmail',
    shortDescription: '邮件',
    category: 'productivity',
    icon: 'heroicons:document-text-solid',
    features: [
      '邮件'
    ],
    downloads: {
      windows: {
        url: '/WinApp/Foxmail.exe'
      }
    },
    version: '1.0.0'
  },
  // Huorong
  {
    id: 'huorong',
    name: '火绒安全',
    shortDescription: '火绒杀毒软件',
    category: 'security',
    icon: 'heroicons:shield-check-solid',
    features: [
      '杀毒'
    ],
    downloads: {
      windows: {
        url: '/WinApp/huorong.exe'
      }
    },
    version: '6.0.9.2'
  },
  // TencentMeeting
  {
    id: 'tencentmeeting',
    name: '腾讯会议',
    shortDescription: '开会培训',
    category: 'productivity',
    icon: 'heroicons:clipboard-document-check-solid',
    features: [
      '会议'
    ],
    downloads: {
      windows: {
        url: '/WinApp/TencentMeeting.exe'
      }
    },
    version: '1.0.0',
    featured: true,
    badge: '热门'
  },
  //WeChat
  {
    id: 'wechat',
    name: '微信',
    shortDescription: '微信是一种生活方式',
    category: 'communication',
    icon: 'heroicons:chat-bubble-left-right-solid',
    features: [
      '聊天',
      '朋友圈'
    ],
    downloads: {
      windows: {
        url: '/WinApp/WeChat.exe'
      },
      macos: {
        apple: {
          url: '/MacApp/WeChat.dmg'
        }
      }
    },
    version: '4.1.8',
    featured: true,
    badge: '热门'
  },
  // WeCom
  {
    id: 'wecom',
    name: '企业微信',
    shortDescription: '办公软件',
    category: 'productivity',
    icon: 'heroicons:clipboard-document-check-solid',
    features: [
      '办公',
      '商务',
      '即时通讯'
    ],
    downloads: {
      windows: {
        url: '/WinApp/WeCom.exe'
      },
      macos: {
        apple: {
          url: '/MacApp/WeCom.dmg'
        },
        intel: {
          url: '/MacApp/WeCom_Intel.dmg'
        }
      }
    },
    version: '5.0.7',
    featured: true,
    badge: '热门'
  },
  // WPS
  {
    id: 'wps',
    name: 'WPS Office',
    shortDescription: '办公软件',
    category: 'productivity',
    icon: 'heroicons:clipboard-document-check-solid',
    features: [
      '文档',
      '演示',
      '表格'
    ],
    downloads: {
      windows: {
        url: '/WinApp/WPS.exe'
      },
      macos: {
        apple: {
          url: '/MacApp/WPS.zip'
        }
      }
    },
    version: '250225',
    featured: true,
    badge: '热门'
  },
  // Git
  {
    id: 'git',
    name: 'Git',
    shortDescription: 'Git',
    category: 'development',
    icon: 'heroicons:clipboard-document-check-solid',
    features: [
      '分布式开发',
      '协作'
    ],
    downloads: {
      windows: {
        url: '/WinApp/Git.exe'
      }
    },
    version: '1.0.0'
  },
  // MySQL
  {
    id: 'mysql',
    name: 'MySQL',
    shortDescription: 'MySQL数据库',
    category: 'development',
    icon: 'heroicons:clipboard-document-check-solid',
    features: [
      '数据库',
      '关系型'
    ],
    downloads: {
      windows: {
        url: '/WinApp/mysql-community-8.0.45.0.msi'
      }
    },
    version: '8.0.45'
  },
  // Node
  {
    id: 'node',
    name: 'Node.js',
    shortDescription: 'Node',
    category: 'development',
    icon: 'heroicons:clipboard-document-check-solid',
    features: [
      'Node',
      'npm'
    ],
    downloads: {
      windows: {
        url: '/WinApp/node-v24.14.0.msi'
      }
    },
    version: '24.14.0'
  },
  // VSCode
  {
    id: 'vscode',
    name: 'Visual Studio Code',
    shortDescription: 'VsCode编辑器',
    category: 'development',
    icon: 'heroicons:clipboard-document-check-solid',
    features: [
      '开发',
      '编辑器'
    ],
    downloads: {
      windows: {
        url: '/WinApp/VSCode-1.109.5.exe'
      }
    },
    version: '1.109.5',
    featured: true,
    badge: '热门'
  },
  // DBeaver
  {
    id: 'dbeaver',
    name: 'DBeaver',
    shortDescription: '数据库管理工具',
    category: 'development',
    icon: 'heroicons:clipboard-document-check-solid',
    features: [
      '数据库管理'
    ],
    downloads: {
      windows: {
        url: '/WinApp/dbeaver-ce-26.0.0.exe'
      }
    },
    version: '26.0.0'
  },
  // NC
  {
    id: 'nc',
    name: 'NC',
    shortDescription: 'NC系统, 下载安装后输入链接 https://nc.ikunchi.com:443',
    category: 'productivity',
    icon: 'heroicons:clipboard-document-check-solid',
    features: [
      '财务',
    ],
    downloads: {
      windows: {
        url: '/WinApp/Uclient.exe'
      },
      macos: {
        apple: {
          url: '/MacApp/Uclient.dmg'
        }
      }
    },
    version: '1.0.0'
  },
  // 7zip
  {
    id: '7zip',
    name: '7Zip',
    shortDescription: 'Windows 解压缩软件',
    category: 'utilities',
    icon: 'heroicons:wrench-screwdriver-solid',
    features: [
      '压缩',
      'zip',
      '7z'
    ],
    downloads: {
      windows: {
        url: '/WinApp/7z2600-x64.exe'
      },
    },
    version: '26.0'
  },
  // openvpn
  {
    id: 'openvpn',
    name: 'OpenVPN',
    shortDescription: 'OpenVPN, 仅供访问公司内部系统, 不提供翻墙 (配置文件请找IT同学要)',
    category: 'utilities',
    icon: 'heroicons:wrench-screwdriver-solid',
    features: [
      'VPN',
    ],
    downloads: {
      windows: {
        url: '/OpenVPN/Win.msi'
      },
      macos: {
        apple: {
          url: '/OpenVPN/MacOS.dmg'
        }
      }
    },
    version: '1.0.0'
  },
  // PDesktop
  {
    id: 'pd',
    name: 'Paralles Desktop',
    shortDescription: 'MacOS 虚拟机软件, 一键安装 Windows',
    category: 'utilities',
    icon: 'heroicons:wrench-screwdriver-solid',
    features: [
      '虚拟机',
    ],
    downloads: {
      macos: {
        apple: {
          url: '/MacApp/PD26.1.1.dmg'
        }
      }
    },
    version: '26.1.1'
  },
  // nas
  {
    id: 'nas',
    name: 'Nas',
    shortDescription: '公司 Nas 连接软件, 若有安装问题请联系IT同学',
    category: 'utilities',
    icon: 'heroicons:wrench-screwdriver-solid',
    features: [
      'Nas',
    ],
    downloads: {
      windows: {
        url: '/Nas/ins.exe'
      }
    },
    version: '1.0.0'
  },
  // win打印机
  {
    id: 'winprinter',
    name: 'Windows 刷卡打印机驱动',
    shortDescription: '上海办打印机驱动',
    category: 'utilities',
    icon: 'heroicons:wrench-screwdriver-solid',
    features: [
      '驱动',
    ],
    downloads: {
      windows: {
        url: '/WinPrinter.zip'
      }
    },
    version: '1.0.0'
  },
  // mac打印机
  {
    id: 'macprinter',
    name: 'Mac 刷卡打印机驱动',
    shortDescription: '上海办打印机驱动',
    category: 'utilities',
    icon: 'heroicons:wrench-screwdriver-solid',
    features: [
      '驱动',
    ],
    downloads: {
      macos: {
        intel: {
          url: '/MacPrinter.zip'
        },
        apple: {
          url: '/MacPrinter.zip'
        }
      }
    },
    version: '1.0.0'
  },
  // win震旦打印机
  {
    id: 'winprinter1',
    name: 'Windows 震旦打印机驱动',
    shortDescription: '上海办打印机驱动',
    category: 'utilities',
    icon: 'heroicons:wrench-screwdriver-solid',
    features: [
      '驱动',
    ],
    downloads: {
      windows: {
        url: '/WinPrinter-1.zip'
      }
    },
    version: '1.0.0'
  },
  // PotPlayer
  {
    id: 'potplayer',
    name: 'PotPlayer',
    shortDescription: 'Windows 多媒体播放器',
    category: 'media',
    icon: 'heroicons:play-solid',
    features: [
      '视频',
      '音乐'
    ],
    downloads: {
      windows: {
        url: '/WinApp/PotPlayer.exe'
      }
    },
    version: '1.0.0'
  }
]

export const getAppById = (id: string): App | undefined => {
  return apps.find(app => app.id === id)
}

export const getAppsByCategory = (categoryId: string): App[] => {
  if (categoryId === 'all') return apps
  return apps.filter(app => app.category === categoryId)
}

export const getFeaturedApps = (): App[] => {
  return apps.filter(app => app.featured)
}

export const searchApps = (query: string): App[] => {
  const lowerQuery = query.toLowerCase()
  return apps.filter(app =>
    app.name.toLowerCase().includes(lowerQuery) ||
    app.shortDescription.toLowerCase().includes(lowerQuery) ||
    app.features.some(f => f.toLowerCase().includes(lowerQuery))
  )
}