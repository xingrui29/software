// Type definitions for the application

export interface DownloadInfo {
  url: string
}

export interface MacDownloads {
  intel?: DownloadInfo
  apple?: DownloadInfo
}

export interface AppDownloads {
  windows?: DownloadInfo
  macos?: MacDownloads
  linux?: DownloadInfo
}

export interface Feature {
  id: string
  title: string
  description: string
  icon: string
}

// Category types
export interface Category {
  id: string
  name: string
  icon: string
  description?: string
}

// App types for multi-app support
export interface App {
  id: string
  name: string
  shortDescription: string
  category: string
  icon: string
  features: string[]
  downloads: AppDownloads
  version: string
  badge?: string
  featured?: boolean
}

// Site configuration (simplified from AppConfig)
export interface SiteConfig {
  baseUrl: string
  siteName: string
  tagline: string
  description: string
  theme: {
    primary: string
    secondary: string
    accent: string
  }
  social: {
    github: string
    twitter: string
    discord: string
  }
}

// Legacy types (kept for backward compatibility)
export interface Downloads {
  windows: DownloadInfo
  macos: MacDownloads
  linux: DownloadInfo
}

export interface AppConfig {
  baseUrl: string
  appName: string
  version: string
  tagline: string
  description: string
  downloads: Downloads
  features: Feature[]
  theme: {
    primary: string
    secondary: string
    accent: string
  }
  social: {
    github: string
    twitter: string
    discord: string
  }
}

export type Platform = 'windows' | 'macos-intel' | 'macos-apple' | 'linux' | 'unknown'

export interface PlatformInfo {
  platform: Platform
  displayName: string
  icon: string
  downloadUrl: string
  size: string
}

export interface ChangelogEntry {
  version: string
  date: string
  changes: string[]
  type: 'major' | 'minor' | 'patch'
}

export interface FAQItem {
  question: string
  answer: string
  category: string
}