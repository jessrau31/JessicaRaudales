export interface GitHubLink {
    label: string;
    url: string;
  }
  
  export interface ProjectFrontmatter {
    title: string;
    category: string;
    description: string;
    contributions: string;
    technologies: string[];
    github: GitHubLink[];
  }  