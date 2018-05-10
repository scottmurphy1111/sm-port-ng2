import { ContactInfo } from "./contact-info";
import { Socials } from "./socials";

export interface Contact {
    specialNote: string;
    contactInfo: ContactInfo[];
    socials: Socials[];
}
