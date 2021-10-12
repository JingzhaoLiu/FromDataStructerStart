## install
``` bash
yum -y install docker
docker --version
```

###  启动docker并加入开机自动启动
``` bash
systemctl start docker
systemctl enable docker

```
### 镜像加速器
``` bash
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://xxx.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload  //重新加载配置文件
sudo systemctl restart docker //重启docker
```

## docker安装mysql
``` bash
docker pull mysql:5.7
```
### docker启动mysql
``` bash
sudo docker run -p 3308:3306 --name mysql \
-v /mydata/mysql/log:/var/log/mysql \
-v /mydata/mysql/data:/var/lib/mysql \
-v /mydata/mysql/conf:/etc/mysql \
-e MYSQL_ROOT_PASSWORD=root123 \
-d mysql:5.7
```
参数：
● -p 3308:3306：将容器的3306端口映射到主机的3308端口，外部主机可以直接通过宿主机ip:3308访问到 MySQL 的服务
● --name：给容器命名
● -v /mydata/mysql/log:/var/log/mysql：将配置文件挂载到主机/mydata/..
● -e MYSQL_ROOT_PASSWORD=root123：初始化root用户的密码为root123

### 进入容器
每一个容器都是有完整的环境目录
```
docker exec -it mysql bash   
```
退出容器
```
exit
```

### 配置mysql
进入挂载的mysql配置目录
```
cd /mydata/mysql/conf
```
修改配置文件 my.cnf
```
vi my.cnf

[client]
default-character-set=utf8
[mysql]
default-character-set=utf8
[mysqld]
init_connect='SET collation_connection = utf8_unicode_ci'
init_connect='SET NAMES utf8'
character-set-server=utf8
collation-server=utf8_unicode_ci
skip-character-set-client-handshake
skip-name-resolve

```

## docker安装reids

```
docker pull redis
```

### redis配置文件目录
```
mkdir -p /mydata/redis/conf
touch /mydata/redis/conf/redis.conf
```
### 启动
```
docker run -p 6379:6379 --name redis \
-v /mydata/redis/data:/data \
-v /mydata/redis/conf/redis.conf:/etc/redis/redis.conf \
-d redis redis-server /etc/redis/redis.conf
```

### 配置redis持久化
```
echo "appendonly yes"  >> /mydata/redis/conf/redis.conf
```
### 重启生效
```
docker restart redis
```
### 容器随docker启动自动运行
# mysql
```
docker update mysql --restart=always
```
# redis
```
docker update redis --restart=always
```