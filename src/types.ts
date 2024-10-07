import type socialIcons from "@assets/socialIcons";

export type Site = {
  website: string;
  author: string;
  profile: string;
  desc: string;
  title: string;
  ogImage?: string;
  lightAndDarkMode: boolean;
  portfolioPostsPerPage: number,
  portfolioPerIndex: number,
  postPerIndex: number;
  postPerPage: number;
  scheduledPostMargin: number;
  description: string
};

export type SocialObjects = {
  name: keyof typeof socialIcons;
  href: string;
  active: boolean;
  linkTitle: string;
}[];
