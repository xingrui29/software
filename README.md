# 软件分发系统

一个基于 Nuxt 3 构建的内部软件下载站点，支持 Windows、macOS、Linux 多平台软件分发。

## 功能特性

- 多平台软件下载支持 (Windows/macOS/Linux)
- 分类浏览 (生产力/开发工具/安全/通讯/娱乐/工具)
- 软件搜索功能
- 响应式设计，支持移动端
- Docker 容器化部署

## 技术栈

- **前端框架**: Nuxt 3
- **UI 框架**: Tailwind CSS + DaisyUI
- **图标**: Nuxt Icon (Heroicons)
- **动画**: VueUse Motion
- **容器化**: Docker + Docker Compose

## 项目结构

```
software/
├── components/          # Vue 组件
│   └── ui/              # 基础 UI 组件
├── data/                # 软件数据配置
│   └── apps.ts          # 软件列表配置
├── types/               # TypeScript 类型定义
│   └── app.ts           # 应用类型
├── pages/               # 页面路由
├── Dockerfile           # Docker 构建文件
├── docker-compose.yml   # Docker Compose 配置
└── build.sh             # 构建打包脚本
```

## 本地开发

### 环境要求

- Node.js >= 18
- npm >= 9

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000

### 构建生产版本

```bash
npm run build
```

## 部署

### 方式一：构建打包部署（推荐）

使用 `build.sh` 脚本构建并打包，在目标服务器上直接运行。

**开发机操作：**

```bash
# 赋予执行权限
chmod +x build.sh

# 执行构建打包
./build.sh software-download-web latest
```

构建完成后会生成 `software-download-web-latest.tar.gz` 文件。

**目标服务器操作：**

```bash
# 解压
tar -xzvf software-download-web-latest.tar.gz

# 直接使用 docker-compose
docker-compose up -d
```

访问地址: http://your-server:9000

### 方式二：直接 Docker 构建

在目标服务器上需要有源代码和 Docker 环境。

```bash
# 构建并启动
docker-compose up -d --build
```

### 常用运维命令

```bash
# 查看日志
docker-compose logs -f

# 停止服务
docker-compose down

# 重启服务
docker-compose restart

# 查看容器状态
docker-compose ps
```

## 添加新软件

编辑 `data/apps.ts` 文件，在 `apps` 数组中添加新软件：

```typescript
{
  id: 'your-app',                    // 唯一标识
  name: '应用名称',                   // 显示名称
  shortDescription: '简短描述',       // 描述
  category: 'productivity',          // 分类
  icon: 'heroicons:xxx-solid',       // 图标
  features: ['特性1', '特性2'],      // 功能标签
  downloads: {
    windows: { url: '/WinApp/app.exe' },
    macos: {
      apple: { url: '/MacApp/app.dmg' },
      intel: { url: '/MacApp/app_intel.dmg' }
    }
  },
  version: '1.0.0',                  // 版本号
  featured: true,                    // 是否精选
  badge: '热门'                      // 徽章（可选）
}
```

### 分类说明

| ID | 名称 | 说明 |
|---|---|---|
| productivity | 生产力 | 办公软件 |
| development | 开发工具 | IDE、数据库等 |
| security | 安全 | 杀毒、安全软件 |
| communication | 通讯 | 即时通讯软件 |
| entertainment | 娱乐 | 多媒体播放器等 |
| utilities | 工具 | 系统工具 |

## 修改端口

编辑 `docker-compose.yml` 文件中的端口映射：

```yaml
ports:
  - "9000:3000"  # 修改 9000 为你想要的端口
```

## 环境变量

可在 `docker-compose.yml` 中添加环境变量：

```yaml
environment:
  - NUXT_PUBLIC_BASE_URL=https://your-domain.com
```