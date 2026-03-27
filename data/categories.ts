import type { Category } from '~/types/app'

export const categories: Category[] = [
  {
    id: 'all',
    name: '全部应用',
    icon: 'heroicons:squares-2x2-solid',
    description: '浏览所有可用应用'
  },
  {
    id: 'productivity',
    name: '效率工具',
    icon: 'heroicons:clipboard-document-check-solid',
    description: '提升工作效率的工具'
  },
  {
    id: 'development',
    name: '开发工具',
    icon: 'heroicons:code-bracket-solid',
    description: '开发工具和 IDE'
  },
  {
    id: 'design',
    name: '设计创意',
    icon: 'heroicons:paint-brush-solid',
    description: '设计和创意工具'
  },
  {
    id: 'utilities',
    name: '系统工具',
    icon: 'heroicons:wrench-screwdriver-solid',
    description: '系统工具和辅助软件'
  },
  {
    id: 'media',
    name: '影音娱乐',
    icon: 'heroicons:play-circle-solid',
    description: '媒体播放器和编辑器'
  },
  {
    id: 'communication',
    name: '社交通讯',
    icon: 'heroicons:chat-bubble-left-right-solid',
    description: '聊天和通讯应用'
  },
  {
    id: 'security',
    name: '安全防护',
    icon: 'heroicons:shield-check-solid',
    description: '安全和隐私工具'
  }
]

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(cat => cat.id === id)
}

export const getCategoryName = (id: string): string => {
  return getCategoryById(id)?.name ?? '未知'
}