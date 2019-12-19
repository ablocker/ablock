## 1. 服务器配置
### 1.1. 阿里云基本信息
+ 账户： ablock2017
+ 密码： ABLOCK123456

### 1.2. 服务器
##### 1.2.1 基本信息
+ ip：47.111.150.138 
+ 实例ID： 9423a68b8997421bbc100e1616fc3a89
+ 地域：杭州
+ 内网IP（同一region内，内网ip互通）：172.17.28.83
+ 到期日期：2020-08-12 00:00:00
+ CPU：2核
+ 流量：1500G
+ 内存：4G
+ 系统盘：60G

##### 1.2.2 防火墙

+ HTTP	TCP	80	
+ HTTPS	TCP	443	
+ SSH	TCP	22	
+ 全部TCP+UDP		
+ FTP	TCP	21
+ MYSQL	TCP	3306	

##### 1.2.3 远程连接
密钥链接：

## 2. 已部署应用
### 2.1 lnmp
+ [首页地址](http://47.111.150.138)
+ 网站根目录：/home/www/htdocs
+ 应用程序安装信息
    + Apache 2.4
        + config file path: /usr/local/apache
    + PHP 5.6
        + config file path: /usr/local/php56
    + MySQL 5.7
        + config file path: /usr/local/mysql
        + 账号：root
        + 密码： ablock2017
        + 数据库地址：47.111.150.138:3306

### 2.2 Docker

```sbtshell
$ yum update
$ yum install -y yum-utils device-mapper-persistent-data lvm2
$ yum-config-manager --add-repo  https://download.docker.com/linux/centos/docker-ce.repo
$ yum update
$ yum install docker-ce
$ systemctl enable docker
$ systemctl start docker
```

### 2.3 Java
+ 安装
```sbtshell
yum -y install java-1.8.0-openjdk-devel
```

### 2.4 Maven
+ config file path: /home/apache-maven-3.3.9
+ 安装
```sbtshell
$ cd /home
$ wget http://apache.fayea.com/maven/maven-3/3.3.9/binaries/apache-maven-3.3.9-bin.tar.gz
$ tar -zxvf apache-maven-3.3.9-bin.tar.gz
$ vi /etc/profile
    追加
    export MAVEN_HOME=/home/apache-maven-3.3.9
    export PATH={MAVEN_HOME}/bin:{PATH}
$ source /etc/profile
$ mvn -v
```

### 2.5 Jenkins-Docker(存在弊端)
+ 地址: [http://47.111.150.138:8976](http://47.111.150.138:8976)
+ 端口： 8976
+ 用户名： ablock2017
+ 密码：ablock2017
+ 部署：
```sbtshell
$ docker pull docker.io/jenkins/jenkins:latest
$ mkdir -r /home/jenkins_home
$ chown -R 1000:1000 /docker/data/jenkins/
$ docker run -itd -p 8976:8080 -p 50000:50000 --name jenkins --privileged=true  -v /home/jenkins_home:/var/jenkins_home docker.io/jenkins/jenkins:latest

```
+ 查看admin password
```
$ docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword    
```

### 2.5 Jenkins本地
+ 地址: [http://47.111.150.138:8976](http://47.111.150.138:8976)
+ 端口： 8976
+ 用户名： ablock2017
+ 密码：ablock2017
+ 部署：
```sbtshell
$ sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo
$ sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key
$ yum install jenkins
$ vim /etc/sysconfig/jenkins
	#监听端口
	JENKINS_PORT="8976"

权限
$ vim /etc/sysconfig/jenkins
	#修改配置
	$JENKINS_USER="root"

$ chown -R root:root /var/lib/jenkins
$ chown -R root:root /var/cache/jenkins
$ chown -R root:root /var/log/jenkins
$ ln -s /home/apache-maven-3.3.9/bin/mvn /usr/bin/mvn
$ service jenkins restart
$ systemctl start jenkins
```
+ 查看admin password
```
$ docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword    
```

### 2.6 ablock前端页面
+ 地址: [http://47.111.150.138:3000](http://47.111.150.138:3000)
+ 端口: 3000
+ 运行:
```sbtshell
$ docker run -ti -d --rm --name ablock-web -p 3000:80 zhangfuli/ablock-web:${build_tag}
```

### 2.7 ablock测评
+ 地址: [http://47.111.150.138:3001](http://47.111.150.138:3001)
+ 端口: 3001
```sbtshell
$ docker run -ti -d --rm --name ablock-test -p 3001:8080 zhangfuli/ablock-test:${build_tag}
```