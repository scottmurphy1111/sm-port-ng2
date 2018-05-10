import { Projects } from "./projects";
import { Coding } from "./coding";
import { About } from "./about"
import { Contact } from "./contact";
import { Socials } from "./socials";

export interface Content {
    name: string;
    title: string;
    subHeading: any;
    skills: any;
    projectsTitle: string;
    codingTitle: string;
    aboutTitle: string;
    noteTitle: string;
    contactTitle: string;
    socialTitle: string;
    projects: Projects[];
    coding: Coding[];
    about: About[];
    contact: Contact[];
    socials: Socials[];
}