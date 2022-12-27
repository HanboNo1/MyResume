var config = {
    /*在这里配置你的基本信息，所有数据以字符串形式给出*/
    name: "Hanbo Sun",
    sex: "Male",
    age: "25",
    phone: "(413)4160403",
    email: "hanbo23ng@gmail.com",
    address: "Amherst, MA",
    linkedIn: "<a href='https://www.linkedin.com/in/hanbo-sun-2914a31ab/' target='_blank' rel='noopener noreferrer'>My LinkedIn</a>",
    excpect_work: "Software Development Engineering",


    /*在这里配置首页的座右铭集合*/
    motto: [
        "Life every day like it's your last.",
        "Be the change you wish to see in the world.",
        "When life gives you lemons, make lemonade.",
        "If you are not obsessed with your life, change it.",
        "Be Yourself.",
        "Just Get Started.",
        "Procrastination is opportunity’s assassin."
    ],


    /*在这里配置首页的见面信息，你可以内嵌HTML标签以调整格式*/
    welcome: "<br>Lovely to Meet You</br>"+
             "<br>Welcome to My World</br>",


    /*在这里配置关于我的信息，你可以内嵌HTML标签以调整格式*/
    about: "<p>I have recently completed a master's in Computer Engineering from University of Massachusetts Amherst." +
        " Now I am seeking a new grad or entry level software engineer position starting from 02/2023." +
        " <p>As a master’s degree candidate with strong programming, analytical and designing skills, I have a great passion for software development." +
        " I have studied many courses related to software development, have strong knowledge of computer science and solid programming skills." +
        " With strong willingness to learn new knowledge and skills, I have a wide range of projects on full-stack web development and relevant work experience." +
        " I believe I can be a good team member and add value to the team and company.</p>" +
        "<p>Don't hesitate to get in touch with me!</p>",



    /** 
    * 在这里配置你的技能点
    * ["技能点", 掌握程度, "技能条颜色"]
    */  
    skills: [
        ["Java", 80, "red"],
        ["Python", 75, "blue"],
        ["C++", 70, "orange"],
        ["GoLang", 70, "#4a907c"],
        ["HTML5", 65, "rgba(100,200,10)"],
        ["JavaScript", 60, "pink"]
    ],


    /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
    skills_description: "<ul>" +
        "     <li>Strong knowledge of computer science including Algorithms, Data Structure, Object-Oriented Design.</li>" +
        "     <li>Proficiency in programming language such as Java, Python, C++, Go.</li>" +
        "     <li>Fimiliarity with Spring, Spring MVC, Hibernate, React, Mysql, Elasticsearch, HTML/CSS, web protocols, and web services technologies.</li>" +
        "     <li>Experience deploying server and static website to Amazon EC2.</li>" +
        "     <li>Experience developing software on Linux .</li>" +
        "     <li>Good communication, time management, organizational skills and attention to detail.</li>" +
        " </ul>",


    /**
     * 这里填写你的个人作品展示
     * ["img"，"url", "ProjectName", "brief"]
     * img表示您的作品图片链接，url表示您的项目地址，ProjectName表示您的仓库或作品名称，brief是一句简短的介绍
     * 通过查看实际效果以调整字题长度
     */
    portfolio: [
        ["./images/Food.jpg", "http://34.204.8.1", "Online Food Ordering Application", "Tech Skills: React JS, Spring MVC, Hibernate, MySQL, EC2, etc."],
        ["./images/Social.jpg", "https://github.com/HanboNo1/Twitter", "A Social Network Application", "Tech Skills: React JS, JWT, Golang, Elasticsearch, etc."],
        ["./images/Webpage.jpg", "https://github.com/HanboNo1/Resume", "Design Your Own Elegant Website", ""]
    ],


    /**
     * 这里填写您的工作经历
     * ["日期"， "工作"， "介绍"]
     * 你可以内嵌HTML标签以排版格式
     */
    work: [
        //如果您内有工作经历，您可以采取下列写法
        // ["————————", "", "<p>暂无工作经历，期待您的联系。</p>"]

        ["09/2020 — 08/2021", "<br>Software Development",
            "<p><strong>Shenzhen Launch Digital Technology Co, Ltd</strong></p>" +
            "<p>Designed and implemented server-side functionality for Windows and Linux using C/C++, to support image and video detection and recognition based on the priority efficiently via multithread.</p>" +
            "<p>Implemented the network server using libevent to handle event notification.</p>" +
            "<p>Implemented a test client transferring data based on HTTP using libcurl, to send various and large amounts of requests for testing the performance of the server.</p>" +
            "<p>Designed and implemented a video monitor application in Python to detect, label and record specific dangerous behavior in the monitor in real time and alert in time.</p> "
        ],
    ],


    /**
     * 这里填写你的其他经历
     * ["日期"， "经历"， "介绍"]
     * 建议填写您的校级及以上得奖经历或或其他证书
     */
    others: [
        ["01/2020-12/2022", "University of Massachusetts Amherst", "Master's degree, Computer Engineering<br>Coursework: Neural Networks, Algorithms, Advanced Algorithms, Machine Learning/Engineers, Computer Networks, Trustworthy Computing, Game Programming, etc."],
        ["09/2015-06/2019", "University of Electronic Science and Technology of China", "Bachelor's degree, College of Computer Science and Engineering<br>Coursework: Data Structures and Algorithms, Computer Networks, Database Principle and Application, Fundamentals of Compiler, Computer Operating System, Computer Graphics, etc."]
    ],


    /**
     * 在这里填写您的社交网络平台
     * ["img", "url", "desc"]
     * img是社交平台的图标
     * url是您链接
     * desc是一段描述，将鼠标移入将会显示该描述
     * 建议您放置数量 <= 5
     */
    icon: [
        ["./images/LeetCode.png", "https://leetcode.com/GetHarder/", "My LeetCode Homepage"],
        ["./images/github-mark.png", "https://github.com/HanboNo1", "My Github Homepage"]
    ],


    //这是一些图片链接，建议您仅更改第二个头像图片
    url: [
        //背景图、头像、作品展示背景、其他经历背景
        "./images/mountain.jpg",
        "./images/photo.png",
        "./images/star2.jpg",
        "./images/bridge.jpg"
    ]

}
