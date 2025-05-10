# 项目部署文档

本文档提供了项目的前端和后端部署指南。

## 目录结构

```
.
├── frontend/     # 前端静态页面
└── backend/      # 后端Nest.js应用
```

## 前端部署

### 前端环境要求

- Node.js >= 20.0.0
- pnpm >= 10.9.0

### 前端构建与部署步骤

1. 安装依赖
   ```bash
   cd frontend
   pnpm install
   ```

2. 修改后端网址
- 搜索 `http://localhost:3001` 改成对应的后端网址

3. 静态部署
   部署完成后，需要将构建生成的文件（通常在`dist`或者`build`目录下）上传到Web服务器。

   可使用以下Web服务器进行部署：
   - Nginx
   - Apache
   - Vercel
   - Netlify
   - 阿里云OSS等静态网站托管服务

#### Nginx配置示例

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/frontend/dist;  # 静态文件目录
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;  # 支持SPA前端路由
    }
}
```

## 后端部署

### 后端环境要求

- Node.js >= 20.0.0
- npm >= 10.0.0（或者pnpm >= 10.9.0）

### 后端构建与部署步骤

1. 安装依赖
   ```bash
   cd backend
   pnpm install
   ```

2. 构建项目
   ```bash
   pnpm run build
   ```
   构建完成后，编译后的文件将生成在`dist`目录下。

3. 启动生产环境
   ```bash
   pnpm run start:prod
   ```
   或者直接运行编译后的文件：
   ```bash
   node dist/main
   ```

### 部署方式

#### 方法1：使用PM2进行进程管理

1. 全局安装PM2
   ```bash
   npm install -g pm2
   ```

2. 创建PM2配置文件 `ecosystem.config.js`
   ```javascript
   module.exports = {
     apps: [{
       name: "jade-backend",
       script: "dist/main.js",
       cwd: "./backend",
       instances: "max",
       exec_mode: "cluster",
       env: {
         NODE_ENV: "production"
       }
     }]
   };
   ```

3. 启动应用
   ```bash
   pm2 start ecosystem.config.js
   ```

4. 设置开机自启
   ```bash
   pm2 startup
   pm2 save
   ```

#### 方法2：使用Docker容器化部署

1. 创建Dockerfile（放在backend目录下）
   ```dockerfile
   FROM node:20-alpine

   WORKDIR /app

   COPY package*.json ./
   RUN npm install

   COPY . .
   RUN npm run build

   EXPOSE 3000
   CMD ["npm", "run", "start:prod"]
   ```

2. 构建并运行Docker镜像
   ```bash
   docker build -t jade-backend .
   docker run -d -p 3000:3000 --name jade-backend-container jade-backend
   ```

## 全栈部署配置

### Nginx完整配置示例（前后端整合）

```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    # 前端静态文件
    location / {
        root /path/to/frontend/dist;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
    
    # 后端API代理
    location /api {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 环境变量配置

根据不同环境需要配置相应的环境变量，比如数据库连接、API密钥等。

### 后端环境变量示例

创建`.env`文件（开发环境）和`.env.production`文件（生产环境）在backend目录下：

```
# 数据库配置
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=password
DATABASE_NAME=jade_db

# API配置
API_PREFIX=/api
PORT=3000

# JWT配置
JWT_SECRET=your_jwt_secret
JWT_EXPIRATION=7d
```

## 常见问题排查

1. 前端页面无法访问
   - 检查Nginx配置是否正确
   - 检查防火墙设置是否允许相应端口访问

2. 后端服务无法启动
   - 检查Node.js版本是否满足要求
   - 检查环境变量配置
   - 查看日志文件排查具体错误

3. 数据库连接问题
   - 确认数据库服务是否正常运行
   - 检查数据库连接字符串是否正确
   - 确认数据库用户权限是否足够
