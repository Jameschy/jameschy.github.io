---
title: 如何将Windows电脑改为Linux服务器？
date: 2026-08-01
description: 本地办公电脑闲置，可以改造成Linux服务器用于本地开发备份数据，是再好不过了。
tags: [Linux, 服务器, 运维, Nginx, Docker, Shell]
---

# 如何将Windows电脑改为Linux服务器？

<div id="cnblogs_post_body" class="blogpost-body blogpost-body-html">
<p>本地办公电脑闲置，可以改造成Linux服务器用于本地开发备份数据，是再好不过了。</p>
<p>准备如下：</p>
<p>1.一个办公电脑，假设为A，内存不低于8g，硬盘不小于100g，网络网段都在192.168.1.*（用作即将改造为Linux服务器）；</p>
<p>2.一个U盘，假设为B，不小于8g，（用于制作启动盘）</p>
<p>3.一个正常使用的电脑，假设为C，能联网打开等（用于本地操作制作启动盘，及开发、连接本地服务器）</p>
<p>步骤如下：</p>
<p>1.使用设备C，格式化U盘，并下载Rufus 启动盘制作工具,该工具下载后，开箱即用，不必安装，所以必须将此工具置于C设备中（桌面即可），</p>
<p><img src="https://img2024.cnblogs.com/blog/962554/202606/962554-20260624120808194-714321525.png" alt="image" loading="lazy"></p>
<p>&nbsp;</p>
<p>2.打开Rufus工具，设备栏会自动识别U盘设备，引导类型选择，在后方的选择按钮点击后，选择下载的镜像即可。</p>
<p>下载镜像地址： Rockylinux:https://rockylinux.org/zh-CN/download</p>
<p>&nbsp;</p>
<p><img src="https://img2024.cnblogs.com/blog/962554/202606/962554-20260624113611639-1950242643.png" alt="image" loading="lazy"></p>
<p>&nbsp;</p>
<p>3.点击开始后，弹出提示框，选择默认项——以ISO镜像 模式写入（推荐），即可</p>
<p><img src="https://img2024.cnblogs.com/blog/962554/202606/962554-20260624121000980-930338554.png" alt="image" loading="lazy"></p>
<p>&nbsp;4.继续弹出弹窗，提示会删除U盘设备的所有数据，点击是，继续执行即可</p>
<p><img src="https://img2024.cnblogs.com/blog/962554/202606/962554-20260624121259748-1471777684.png" alt="image" loading="lazy"></p>
<p>&nbsp;</p>
<p>&nbsp;5.如下，镜像复制成功后，即代表U盘启动盘做好了。</p>
<p><img src="https://img2024.cnblogs.com/blog/962554/202606/962554-20260624122617569-1495806379.png" alt="image" loading="lazy"></p>
<p>&nbsp;二，改造工作电脑为本地Linux服务器步骤：</p>
<p>1.将启动U盘插到主机后方的蓝色USB接口（3.0，读取较容易）</p>
<p>2.开机A电脑，按F2或F12或F8，不同主板，BIOS的键不一样，打开BIOS选项，选择U盘名称，如Kingston ***，即表示即将进读取磁盘内容</p>
<p>3.进入后选择第三个：*Install Rocky Linux Minimal 9.8 in FIPS mode</p>
<p><img src="https://img2024.cnblogs.com/blog/962554/202606/962554-20260624133854132-631355725.png" alt="image" loading="lazy"></p>
<p>&nbsp;4.回车后，立即进行安装流程：</p>
<p><img src="https://img2024.cnblogs.com/blog/962554/202606/962554-20260624134240008-2028020073.png" alt="image" loading="lazy"></p>
<p>&nbsp;5.完成安装后，进入语言选项配置：选择中文，简体中文即可</p>
<p><img src="https://img2024.cnblogs.com/blog/962554/202606/962554-20260624134318352-1181883597.png" alt="image" loading="lazy"></p>
<p>6.选择语言后，弹出设置面板，按图设置好。</p>
<p><img src="https://img2024.cnblogs.com/blog/962554/202606/962554-20260624140542666-1074187330.png" alt="image" loading="lazy"></p>
<p>&nbsp;7.其中第三项，安装目标位置，可按以下设置，默认自动即可：</p>
<p><img src="https://img2024.cnblogs.com/blog/962554/202606/962554-20260624140742956-1379778229.png" alt="image" loading="lazy"></p>
<p>&nbsp;8.如果所选区域，选定后提示：磁盘空间不足，且弹出以下弹窗，点击回收空间即可：</p>
<p><img src="https://img2024.cnblogs.com/blog/962554/202606/962554-20260624141007357-424204497.png" alt="image" loading="lazy"></p>
<p>&nbsp;9.回收空间的意思，表示从安装的设备磁盘中，找出可用空间，但因为不在乎之前的办公Windows系统，直接全选磁盘即可，再点击全部删除，即可回收空间：</p>
<p><img src="https://img2024.cnblogs.com/blog/962554/202606/962554-20260624141133279-1548853187.png" alt="image" loading="lazy"></p>
<p>&nbsp;10.又会回到设置界面，点击用户设置下，设置root密码，另外可以设置一个用户（除root外的另外用户），</p>
<p><img src="https://img2024.cnblogs.com/blog/962554/202606/962554-20260624141359589-1329239252.png" alt="image" loading="lazy"></p>
<p>11.点击开始安装，等待安装完成，提示如图，即表示安装成功。</p>
<p><img src="https://img2024.cnblogs.com/blog/962554/202606/962554-20260624141459916-990389528.png" alt="image" loading="lazy"></p>
<p>&nbsp;12.回车后，自动进入提示登录Linux命令界面，输入root及密码，即可进入系统，再次输入 ip addr,获取当前的服务器IP，</p>
<p>&nbsp;</p>
<p><img src="https://img2024.cnblogs.com/blog/962554/202606/962554-20260624141837916-1012287885.png" alt="image" loading="lazy"></p>
<p>&nbsp;13.输入nmtui,打开图形化设置SSH配置项，如图，IPv4 CONFIGURATION，设置Automatic为Manual，填入IP，网关，DNS等参数，按键到OK，即可。</p>
<p><img src="https://img2024.cnblogs.com/blog/962554/202606/962554-20260624141929661-1395836979.png" alt="image" loading="lazy"></p>
<p>&nbsp;14.选择Back，回到主设置界面，</p>
<p><img src="https://img2024.cnblogs.com/blog/962554/202606/962554-20260624142345326-627353097.png" alt="image" loading="lazy"></p>
<p>&nbsp;15.选择Activate a connection，以激活配置。</p>
<p><img src="https://img2024.cnblogs.com/blog/962554/202606/962554-20260624142416953-682216143.png" alt="image" loading="lazy"></p>
<p>&nbsp;16.先暂停激活，再通过按键，选择Activate激活。</p>
<p><img src="https://img2024.cnblogs.com/blog/962554/202606/962554-20260624142600561-1799060899.png" alt="image" loading="lazy"></p>
<p>&nbsp;17.选择back后，回到主界面，再选择quit，推出此配置：</p>
<p><img src="https://img2024.cnblogs.com/blog/962554/202606/962554-20260624142655669-876414118.png" alt="image" loading="lazy"></p>
<p>&nbsp;18.输入 ip a show enp1s0，检查配置：</p>
<p><img src="https://img2024.cnblogs.com/blog/962554/202606/962554-20260624142954717-167699102.png" alt="image" loading="lazy"></p>
<p>&nbsp;19.输入vi /etc/ssh/sshd_config，配置SSHD配置文件，开启root登录方式，即修改#PermitRootLogin prohibit-password 为&nbsp;<span style="font-style: italic">PermitRootLogin yes</span>：</p>
<p><img src="https://img2024.cnblogs.com/blog/962554/202606/962554-20260624143203822-1275647838.png" alt="image" loading="lazy"></p>
<p>&nbsp;20.输入：wq，保存修改后，再输入&nbsp;<code class="hljs language-bash">systemctl restart sshd ，重启状态（没有提示，即表示OK）；</code></p>
<p>三：配置防火墙允许SSH，Rocky 9默认使用<code>firewalld</code>防火墙，默认不会开放SSH，需要手动放行：</p>
<p>1.输入命令：firewall-cmd --permanent --add-service=ssh，提示success，即成功。</p>
<p><img src="https://img2024.cnblogs.com/blog/962554/202606/962554-20260624143747090-485452132.png" alt="image" loading="lazy"></p>
<p>&nbsp;2.<span class="hljs-comment">重载防火墙使规则生效 firewall-cmd --reload，，如上图，</span></p>
<p><span class="hljs-comment">3.</span>确认网卡和网络配置，<code class="hljs language-bash">ip a show enp1s0，，如上图，</code></p>
<p>4.使用终端工具，如xShell，或者FinalShell，登录测试即可：</p>
<p><img src="https://img2024.cnblogs.com/blog/962554/202606/962554-20260624144622335-1641319678.png" alt="image" loading="lazy"></p>
<p>&nbsp;</p>
<p>四，可选，加速SSH连接</p>
<p>sed -i <span class="hljs-string">"s/GSSAPIAuthentication yes/GSSAPIAuthentication no/g" /etc/ssh/sshd_config </span></p>
<p><span class="hljs-string">sed -i <span class="hljs-string">"s/#UseDNS yes/UseDNS no/g" /etc/ssh/sshd_config </span></span></p>
<p><span class="hljs-string"><span class="hljs-string">systemctl restart sshd</span></span></p>
<p>&nbsp;</p>
<p><span class="hljs-string"><span class="hljs-string">五：参考：</span></span></p>
<p id="articleContentId" class="title-article">Rocky Linux 安装保姆级教程：<span class="hljs-string"><span class="hljs-string">https://blog.csdn.net/y12345678dd/article/details/154943276</span></span></p>
<p id="articleContentId" class="title-article">Rocky Linux 10 静态 IP 配置：<span class="hljs-string"><span class="hljs-string">https://blog.csdn.net/qq_58159763/article/details/159798933</span></span></p>
<p>&nbsp;</p>
</div>

## 二级标题

- 列表项
- 列表项

```javascript