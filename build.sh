#!/bin/bash

# 软件分发系统 - 构建打包脚本
# 在开发机上运行，编译后打包供目标机部署

set -e

# 配置
IMAGE_NAME="software-download-web"
VERSION=$(date +%Y%m%d%H%M%S)
TAR_FILE="${IMAGE_NAME}-${VERSION}.tar.gz"

echo "=========================================="
echo "  软件分发系统 - 构建打包脚本"
echo "=========================================="
echo "镜像名称: ${IMAGE_NAME}"
echo "版本号: ${VERSION}"
echo ""

# 1. 安装依赖
echo "[1/3] 安装依赖..."
npm install

# 2. 编译项目
echo "[2/3] 编译项目..."
npm run build

# 3. 打包部署文件
echo "[3/3] 打包部署文件..."
tar -czvf ${TAR_FILE} \
    Dockerfile \
    docker-compose.yml \
    .output \
    public

echo ""
echo "=========================================="
echo "  构建打包完成!"
echo "=========================================="
echo "输出文件: ${TAR_FILE}"
echo ""
echo "部署步骤:"
echo "  1. 将 ${TAR_FILE} 上传到目标服务器"
echo "  2. 解压: tar -xzvf ${TAR_FILE}"
echo "  3. 运行: docker-compose up -d --build"
echo "=========================================="