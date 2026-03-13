import type { App, Category } from '~/types/app'
import { apps, getAppById, getAppsByCategory, getFeaturedApps, searchApps } from '~/data/apps'
import { categories, getCategoryById, getCategoryName } from '~/data/categories'

export const useApps = () => {
  const selectedCategory = useState<string>('selected-category', () => 'all')
  const searchQuery = useState<string>('search-query', () => '')
  const currentApp = useState<App | null>('current-app', () => null)

  // Filtered apps based on category and search
  const filteredApps = computed(() => {
    let result = apps

    // Filter by category
    if (selectedCategory.value !== 'all') {
      result = result.filter(app => app.category === selectedCategory.value)
    }

    // Filter by search query
    if (searchQuery.value.trim()) {
      const query = searchQuery.value.toLowerCase()
      result = result.filter(app =>
        app.name.toLowerCase().includes(query) ||
        app.shortDescription.toLowerCase().includes(query) ||
        app.features.some(f => f.toLowerCase().includes(query))
      )
    }

    return result
  })

  // Featured apps
  const featuredApps = computed(() => getFeaturedApps())

  // All categories
  const allCategories = computed(() => categories)

  // Set category filter
  const setCategory = (categoryId: string) => {
    selectedCategory.value = categoryId
  }

  // Set search query
  const setSearchQuery = (query: string) => {
    searchQuery.value = query
  }

  // Clear filters
  const clearFilters = () => {
    selectedCategory.value = 'all'
    searchQuery.value = ''
  }

  // Get single app by ID
  const getApp = (id: string): App | undefined => {
    return getAppById(id)
  }

  // Set current app for detail page
  const setCurrentApp = (app: App | null) => {
    currentApp.value = app
  }

  // Get app download URL based on platform
  const getDownloadUrl = (app: App, platform: 'windows' | 'macos-intel' | 'macos-apple' | 'linux'): string => {
    const config = useAppConfig()

    switch (platform) {
      case 'windows':
        return app.downloads.windows ? `${config.baseUrl}${app.downloads.windows.url}` : '#'
      case 'macos-intel':
        return app.downloads.macos?.intel ? `${config.baseUrl}${app.downloads.macos.intel.url}` : '#'
      case 'macos-apple':
        return app.downloads.macos?.apple ? `${config.baseUrl}${app.downloads.macos.apple.url}` : '#'
      case 'linux':
        return app.downloads.linux ? `${config.baseUrl}${app.downloads.linux.url}` : '#'
      default:
        return '#'
    }
  }

  // Check if app has download for platform
  const hasPlatformDownload = (app: App, platform: 'windows' | 'macos-intel' | 'macos-apple' | 'linux'): boolean => {
    switch (platform) {
      case 'windows':
        return !!app.downloads.windows
      case 'macos-intel':
        return !!app.downloads.macos?.intel
      case 'macos-apple':
        return !!app.downloads.macos?.apple
      case 'linux':
        return !!app.downloads.linux
      default:
        return false
    }
  }

  // Get available platforms for an app
  const getAvailablePlatforms = (app: App) => {
    const platforms: Array<{ id: string, name: string, icon: string, download: any }> = []

    if (app.downloads.windows) {
      platforms.push({
        id: 'windows',
        name: 'Windows',
        icon: 'mdi:microsoft-windows',
        download: app.downloads.windows
      })
    }

    if (app.downloads.macos?.apple) {
      platforms.push({
        id: 'macos-apple',
        name: 'macOS (Apple Silicon)',
        icon: 'mdi:apple',
        download: app.downloads.macos.apple
      })
    }

    if (app.downloads.macos?.intel) {
      platforms.push({
        id: 'macos-intel',
        name: 'macOS (Intel)',
        icon: 'mdi:apple',
        download: app.downloads.macos.intel
      })
    }

    if (app.downloads.linux) {
      platforms.push({
        id: 'linux',
        name: 'Linux',
        icon: 'mdi:linux',
        download: app.downloads.linux
      })
    }

    return platforms
  }

  return {
    apps,
    filteredApps,
    featuredApps,
    allCategories,
    selectedCategory,
    searchQuery,
    currentApp,
    setCategory,
    setSearchQuery,
    clearFilters,
    getApp,
    setCurrentApp,
    getDownloadUrl,
    hasPlatformDownload,
    getAvailablePlatforms,
    getCategoryById,
    getCategoryName
  }
}