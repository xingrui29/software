#!/bin/bash

set -e

# 配置
IMAGE_NAME="software-download-web"
VERSION=$(date +%Y%m%d%H%M%S)
TAR_FILE="${IMAGE_NAME}-${VERSION}.tar.gz"

echo "=========================================="
echo "  软件分发系统 - 打包脚本"
echo "=========================================="
echo "镜像名称: ${IMAGE_NAME}"
echo "版本号: ${VERSION}"
echo ""

echo "删除旧的打包文件..."
rm -f ./${IMAGE_NAME}-*.tar.gz

# 打包源代码（排除非必要文件）
echo "[1/1] 打包源代码..."
tar -czvf ${TAR_FILE} \
    --exclude='node_modules' \
    --exclude='.nuxt' \
    --exclude='.output' \
    --exclude='*.tar.gz' \
    --exclude='.git' \
    --exclude='.DS_Store' \
    --exclude='._*' \
    .

echo ""
echo "=========================================="
echo "  打包完成!"
echo "=========================================="
echo "输出文件: ${TAR_FILE}"
echo ""
echo "部署步骤:"
echo "  1. 将 ${TAR_FILE} 上传到目标服务器"
echo "  2. 解压: tar -xzvf ${TAR_FILE}"
echo "  3. 运行: docker-compose up -d --build"
echo "=========================================="