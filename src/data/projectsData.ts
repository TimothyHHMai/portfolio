// src/data/projectsData.ts

export interface ProjectDataItem {
  title: string;
  timeframe?: string;
  githubUrl?: string;
  githubRepos?: { title?: string; url: string }[];
  projectUrl?: string;
  techStack?: string[];
  imageSrc?: string;
  imageAlt?: string;
  thumbnailSrc?: string; // Optional: Path to a square thumbnail image
  description: string; // HTML string
  homepageSummary?: string; // Concise summary for homepage
  isFeatured?: boolean; // Flag for featuring on homepage
}


export const allProjectsData: ProjectDataItem[] = [
  {
    title: "Portfolio v1",
    timeframe: "Present",
    githubUrl: "https://github.com/TimothyHHMai/portfolio",
    //projectUrl: "https://nagare.angine.tech", // Update
    techStack: ["Astro", "TypeScript"],
    // imageSrc: "/images/projects/nagare.png", // Update
    imageAlt: "Screenshot of the portfolio website homepage",
    description: `
        <p>Developing a simple yet elegant website for users to navigate</p>
      `,
    isFeatured: true,
    homepageSummary:
      "Current <strong>portfolio website</strong> you're currently viewing, built with <em>Astro</em>.",
  },
  {
    title: "Weather-Impact-on-Energy-Consumption",
    timeframe: "Present",
    githubUrl: "https://github.com/TimothyHHMai/Weather-Impact-on-Energy-Consumption",
    //projectUrl: "https://nagare.angine.tech",
    techStack: ["Python", "Pandas", "Matplotlib", "Numpy"],
    //imageSrc: "/images/projects/inventory.jpg",
    imageAlt: "Screenshot of the portfolio website homepage",
    description: `
        <p>Collected and preprocessed datasets, including electricity demand values, balancing authority regions, and time-series weather variables (wind speed, precipitation, average, maximum, and minimum temperatures).</p>
        <p>Performed data cleaning, handling missing values, and merging multiple datasets to create a unified, analysis-ready dataset</p>
        <p>Future Functions: Implement Machine Learning Models to predict electricity demand based on weather data</p>
      `,
    isFeatured: true,
    homepageSummary: "The goal is to understand how weather variables such as temperature, wind, and precipitation influence daily electricity usage",
  },
    {
    title: "Water Quality",
    timeframe: "December 2024",
    githubUrl: "https://github.com/TimothyHHMai/waterquality",
    //projectUrl: "https://nagare.angine.tech",
    techStack: ["Google.colab", "Python", "Panda"],
    imageSrc: "/images/projects/waterquality.jpg",
    imageAlt: "Screenshot of the portfolio website homepage",
    description: `
      <p>Created a script detailing the process to determining low error in water potability</p>
      <p>Displayed visual statistics in aiding user understanding</p>
       `,
    isFeatured: false,
    homepageSummary:
      "Measuring Water Quality"
  },
  {
    title: "Cased-Based Simulation",
    timeframe: "April 2024",
    //githubUrl: "https://github.com/angine04/nagare",
    //projectUrl: "https://nagare.angine.tech",
    techStack: ["Dart", "FireBase"],
    //imageSrc: "/images/projects/nagare.png",
    imageAlt: "Screenshot of the portfolio website homepage",
    description: `
        <p>Created an application for developers/users to create and take decision based simulations</p>
        <p>Developed a noSQL database to store simulations and developer/user information</p>
        <p>Maintained agile and consistent communication with sponsor to ensure requirements were completed</p>
      `,
    isFeatured: false,
    homepageSummary: "Created an application to allow developers to create simulations for students in specific scenarios",
  },
  {
    title: "Philadelphia Pointing Span Test",
    timeframe: "December 2024",
    //githubUrl: "https://github.com/angine04/nagare",
    //projectUrl: "https://nagare.angine.tech",
    techStack: ["Django"],
    //imageSrc: "/images/projects/nagare.png",
    imageAlt: "Screenshot of the portfolio website homepage",
    description: `
    <p>Created a web application consisting of a neuropsychological test for patients to help identify signs of neurodegenerative illness</p>
    <p>Created a web application for the doctor to view, compare, and analyze data with visuals and statistics</p>
    <p>Functionality includes being able to create and send links to patients to complete the test, accessible test that includes audio,
         and results recorded can be viewed by the doctor</p>
    
    `,
    isFeatured: false,
  },

  {
    title: "Grocery Store Database",
    timeframe: "December 2024",
    //githubUrl: "https://github.com/angine04/nagare",
    //projectUrl: "https://nagare.angine.tech",
    techStack: ["mySQL"],
    //imageSrc: "/images/projects/nagare.png",
    imageAlt: "Screenshot of the portfolio website homepage",
    description: `
    <p>Developed a SQL database to for a grocery store</p>
    <p>Created presentation and graphs to highlight the purpose of the project</p>
    <p>Functionality includes monitoring products, creating reports for products and employees</p>

 `,
    isFeatured: false,
  },
];
