---
layout: ResumeLayout

content:
  header: 
    author: Chase Jiang
    contact:
    - +12-12345678900 | amer_usa@163.com | www.chase.info
    interest: Computer Science
    dob: 
    city: 
  education:
    name: 教育背景
    content:
    - degree: 学士
      school: 中南大学
      major: 计算机科学
      time: 2020.09 – 至今
      desc: 
      - GPA: 91.68/100, 排名: 2%
      - TOEFL: 112, GRE: 333+4.5
  skills:
    name: 技能
    content:
    - 编程语言: 熟练掌握C/C++, Web Assembly, Python, JavaScript, Html/CSS; 了解Shell, Go
    - 框架: 熟练掌握React, Vue, D3.js, PyTorch; 了解MPI, OpenMP, Django, Ajax
    - 其他技能: 熟练掌握Git, Linux, Docker
  experience:
    name: 项目及工作经历
    content:
    - name: Matrix Origins Inc.
      time: 2023.10 – 至今
      title: 数据库内核开发实习生
      content:
      - 维护已部署的分布式数据库内核,重构了高性能索引结构,成功部署和发布了三个新特性
      - 利用GoogleTest进行单元测试,使用PingCode进行缺陷管理,使用Sonar和Cppcheck识别需要改进的代码,及时修正如测试覆盖率较低等问题
      - 撰写中英文技术文档、手册及设计文档,支持工程师持续开发和新员工培训
    - name: 北京新浪网络科技有限公司
      time: 2023.07 – 2023.09
      title: 软件工程师实习生
      content:
      - 使用WebAssembly开发优化的Trie数据结构,替代JavaScript中的正则表达式实现高性能关键词匹配,8进程并行处理,将时间从8小时降低到10分钟
      - 使用hash算法对10TB用户日志数据集进行分区,分发到10台机器(128GB),构建动态哈希表实现高效的关键词统计
      - 实现在网页文本中匹配前50个高频关键词的功能,并插入超链接和视频链接,改善用户体验
    - name: ChatPaper团队
      time: 2023.06 – 至今  
      title: 开源贡献者
      content:
      - 在GitHub上为1.5万star开源项目ChatPaper贡献代码,开发测试了三个子功能
      - 开发Markdown格式脑图与SVG显示转换,利用PyPDF2支持PDF上传解析
      - 集成Firebase支持第三方认证(Google),实现手机号登录
      - 网站ChatIlmprovement优化,实现会话自动滚动
    - name: 中南大学邓迪国际学院
      time: 2022.09 – 2022.12
      title: 算法助教
      content:
      - 用英语讲解算法与AI课程内容,澄清概念,回答学生问题
      - 收集、评分100多名学生的作业,提供反馈并评估他们对课程的理解
      - 撰写完整的考试备考笔记      
- name: Xu Liu高性能实验室
  time: 2023.01 – 2023.10
  title: 研究助理
  content:
  - 开发EasyView,一款可以分析公司大型Golang应用的性能分析工具,支持解析Protocol Buffers格式的profiles和DrCCprofile
  - 将C++/WebAssembly嵌入JavaScript中优化文件解析性能瓶颈,解析时间减少20%
  - 实现两级存储架构,克服32位WASM内存限制,支持高效分析超大代码库(>4GB)
  - 基于块的LRU算法与位图脏检查逻辑进一步提升10%的分析速度,优化磁盘I/O与内存使用
- name: 中南大学前沿可视化实验室
  time: 2022.10 – 2022.12
  title: 项目成员
  content:
  - 增强聚类算法,准确识别包含56.1万函数调用的阿里云主机组里的恶意Web shell家族,测试精度100%
  - 使用React和Django搭建实时交互式模型训练平台,允许分析师提交subtree作为约束来优化聚类模型,提供动态的聚类图表
  - 相关专利: 一种刻画恶意程序行为的方法(专利号CN115587361A)
  - 源代码:https://github.com/FeijiangHan/Malware-Family-Vis-Platform/  
- name: 中南大学前沿可视化实验室
  time: 2022.07 – 2022.09
  title: 项目成员
  content:
  - 提出FCTree,一种创新的层次可视化技术来展示函数调用关系
  - 使用Ftrace和Systemtap在程序执行过程中收集87078个PHP函数调用
  - 使用Vue开发交互式Web原型,基于d3.js实现FCTree,通过用户研究证明可视化优势
  - 相关专利: 一种动态函数调用的可视化方法(专利号CN115952230A)
- name: 肺栓塞检测系统,Kaggle竞赛
  time: 2022.01 – 2022.05
  title: 队长
  content:
  - 领导5人跨学科团队,开发CT目标检测模型用于栓塞识别
  - 每周一次会议,协调成员的文献阅读、数据标注和模型实验
  - 集成YOLO和UNet,取得前5%的成绩,相比Unet基线提升8%
  - 创新的基于比例的数据增强技术,复制感兴趣区域,扩充训练集30%
  - 源代码:https://github.com/FeijiangHan/CT-image-segmentation-for-pulmonary-embolism/ 
publications:
  name: 发表论文
  content:
  - 互联网与移动通信系统可视化国际会议,2023
  - 计算机方法与程序杂志,2023
  - IEEE互联网物联网杂志,2023
  - 计算机通信杂志,2023
  - 前沿计算机科学杂志,2023
  - AAAI会议,2023
  - 信息科学杂志,2023
honors:  
  name: 荣誉奖项
  content:
  - 校级一等奖学金,2023
  - 专业第一名,2021
  - 全国大学生数学建模竞赛M奖,2023
  - 全国大学生计算机设计大赛特等奖,2023
  - 服务外包创业创新大赛一等奖,2022

---
