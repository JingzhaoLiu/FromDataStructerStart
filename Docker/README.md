## install
```
yum -y install docker
docker --version
```

## 启动docker并加入开机自动启动
```
systemctl start docker
systemctl enable docker

```
## 镜像加速器
``` shell
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://xxx.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload  //重新加载配置文件
sudo systemctl restart docker //重启docker
```