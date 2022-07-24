/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Pravin Tripathi",
  title: "Hi all, I'm Pravin",
  subTitle: emoji(
    "An Experienced Software Engineer 😄 helping team with building Web backend."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1EQ6exIbzIij48dpB8_YO014UaD0tpWUE/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/pravinyo",
  linkedin: "https://www.linkedin.com/in/pravin-r-tripathi/",
  gmail: "pravinyo12@gmail.com",
  twitter: "https://twitter.com/pravin_yo",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Solve problems for the clients using the below technology stack. ",
  skills: [
    emoji(`
      ⚡ I am working in Finance Sector domain, 
      Building backend solution for Advanced Lending Platform,
       and Migration from legacy Platform to Advanced Platform.
      `),
    emoji(`
      ⚡ I worked in Health & Public Sector domain for 2.5 Years, 
      Building backend solution for Big Data Application,
       and Migration from legacy system to Cloud native Solution.
      `),
    emoji(`
      ⚡ I have also been a part of Mobile Development Team, built a solution for 
      real-time parcel delivery tracking solution over a Map on users device. 
      It has been a huge success for business.
    `),
    emoji(
      `⚡ Peer to Peer Knowledge sharing including higher manager's and 
      Junior Software Engineer's.`
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fas fa-file-code"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "PL/SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "No-SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Typescript",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Kibana",
      fontAwesomeClassname: "fas fa-exclamation-triangle"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Udacity Online",
      logo: require("./assets/images/Udacity_logo.png"),
      subHeader: "Cloud Developer Nanodegree Graduate",
      duration: "February 2020 - April 2020",
      desc:
        "Completed multiple projects based on AWS Cloud Service",
      descBullets: []
    },
    {
      schoolName: "Mumbai University",
      logo: require("./assets/images/mu_logo.jpg"),
      subHeader: "Graduated with Bachelor of Engineering in Computer Engineering",
      duration: "August 2014 - June 2018",
      desc: `Participated in Research on Discover Cross-Modal Human Behavior Analysis
      and also published paper with IEEE Publications (DOI: 10.1109/ICECA.2018.8474611).`,
      descBullets: [
        "Final Year Project link: https://github.com/BE-PROJECTS2018/GroupNo45-Pantomath-bo",
        `Took courses about Software Engineering, Big Data, Operating Systems,
        Distributed System, Computer Networks,...`
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Android Development", //Insert stack or technology you have experience in
      progressPercentage: "40%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development",
      progressPercentage: "80%"
    },
    {
      Stack: "AWS",
      progressPercentage: "80%"
    },
    {
      Stack: "Java",
      progressPercentage: "80%"
    },
    {
      Stack: "Kotlin",
      progressPercentage: "65%"
    },
    {
      Stack: "PL/SQL",
      progressPercentage: "90%"
    },
    {
      Stack: "NodeJs",
      progressPercentage: "70%"
    },
    {
      Stack: "Docker",
      progressPercentage: "60%"
    },
    {
      Stack: "Typescript",
      progressPercentage: "70%"
    },
    {
      Stack: "Javascript",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Consultant - Application Developer",
      company: "ThoughtWorks",
      companylogo: require("./assets/images/thoughtworks-logo.png"),
      date: "October 2021 – Present",
      desc:
        `Working as Application Developer, job involves application migration from legacy lending platform to new advanved 
        platform and adding new functionality in the advanced platform to be used by multiple teams.`,
      descBullets: [
        "Helping team with migration actvity and adding new functionality to the distributed application.",
        "Did multiple sessions on tech and personal development internally.",
        "following pair programming and TDD as a practice for development"
      ]
    },
    {
      role: "Software Analyst",
      company: "Accenture",
      companylogo: require("./assets/images/accenture-logo.png"),
      date: "February 2020 – September 2021",
      desc:
        `Working as AWS Cloud Developer, job involves building new features for existing API,
        and refactoring of Legacy application to run on Cloud Services.`,
      descBullets: [
        "Helping team with DevOps activity.",
        "Proactively engaging with product owner for issues and bug fixes."
      ]
    },
    {
      role: "Associate Software Engineer",
      company: "Accenture",
      companylogo: require("./assets/images/accenture-logo.png"),
      date: "October 2018 – January 2020",
      desc:
        `Worked as Backend Developer (Big Data), job includes monitoring and processing of 
         batch data for downstream usage. Developed Apache storm app, which tracks device pings
         in real-time for issues related to the device and configuration setup, and displays
         it in the dashboard.`
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Due to NDA, I cannot disclose name of the company but here is the domain, and kind of work I did.",
  projects: [
    {
      image: require("./assets/images/dash-cam.png"),
      projectName: "IoT",
      projectDesc: "Create dashcam application which captures video and preprocess in realtime on dedicated hardware.",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://saayahealth.com/"
        // }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/audio.png"),
      projectName: "AI",
      projectDesc: "developed backend service, which analyze the stream of audio data for extracting features",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://nextu.se/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Solution Architect - Associate",
      subtitle:
        `It has been great learning about AWS services and use cases. In my current project,
         I am heavily using AWS services from code versioning to deployment in kubernetes. 
         I am still learning and enjoying developing apps on cloud`,
      image: require("./assets/images/AWS-SolArchitect-Associate-2020.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/1GAudphkMAnUq-QzX-yGRUFE4nC-Uhktx/view?usp=sharing"
        },
        {
          name: "Acclaim",
          url:
            "https://www.youracclaim.com/badges/b0d6e689-53cb-43a8-8c43-95a534fcf8d0"
        }
      ]
    },
    {
      title: "Cloud Developer Nanodegree Graduate",
      subtitle:
        emoji(`I have created variety of cloud application with traditional and modern 
        (Microservices and serverless) Architecture using AWS Cloud Platform 😍`),
      image: require("./assets/images/Udacity_logo.png"),
      footerLink: [
        {
          name: "Course completion",
          url:
            "https://drive.google.com/file/d/1a6fGn1oQAKllfmchjVNW7MAJ1xZITjmQ/view?usp=sharing"
        },
        {
          name: "Capstone Project",
          url:
            "https://github.com/pravinyo/udacity-cloud-developer-capstone"
        }
      ]
    },

    {
      title: "Android Apps on Google Play Store",
      subtitle: emoji(`Successfully published 2 apps on play store. It was an amazing experience
      developing android app. Developing app on android is not easy given many constrainsts 😤,
       but it was fun 🤩 and really enjoyed developing.`),
      image: require("./assets/images/google-play.svg"),
      footerLink: [
        {
          name: "App: Open Resources",
          url: "https://play.google.com/store/apps/details?id=tk.allsoftdroid.openresources&hl=en"
        },
        {
          name: "App: Audiobook",
          url: "https://play.google.com/store/apps/details?id=com.allsoftdroid.audiobook&hl=en"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  blogs: [
    {
      url: "https://pravin.dev",
      title: "Pravin on Software",
      description: "I share my learning on this"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "",
  subtitle: emoji(""),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8108787884",
  email_address: "pravinyo12@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "pravin_yo", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
