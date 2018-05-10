import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PortfolioService } from "./portfolio.service";
import { Content } from './interfaces/content';
import { Projects } from './interfaces/projects';
import { Coding } from './interfaces/coding';
import { About } from './interfaces/about';
import { Contact } from './interfaces/contact';
import { Socials } from './interfaces/socials';

@Component({
  selector: 'port-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  data: Content[];
  errorMessage: any;
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
  projects: Projects[] = [];
  coding: Coding[] = [];
  about: About[] = [];
  contact: Contact[] = [];
  specialNote: string;
  socials: Socials[] = [];

  constructor(private portfolioService: PortfolioService) { }

  //setUpPage() {
    //this.loadMainContent = true;
    // setTimeout(function() {
    //   this.loadMainContent = true;
    // }, 800)
    
    // setTimeout(function() {
    //   this.removeDelays = true;
    // }, 5000);
  //}
      
  @Input() loadMainContent: boolean;
  @Input() removeDelays: boolean;

  setClasses() {
    return {
      show: this.loadMainContent,
      removeDelay: this.removeDelays
    }
  }
  

  ngOnInit(): void {
    this.portfolioService.getData()
      .subscribe((data: Content[]) => {
        this.data = data;
        this.name = this.data[0].name;
        this.title = this.data[0].title;
        this.subHeading = this.data[0].subHeading;
        this.skills = this.data[0].skills;
        this.projectsTitle = this.data[0].projectsTitle;
        this.codingTitle = this.data[0].codingTitle;
        this.aboutTitle = this.data[0].aboutTitle;
        this.noteTitle = this.data[0].noteTitle;
        this.contactTitle = this.data[0].contactTitle;
        this.socialTitle = this.data[0].socialTitle;
        this.projects = this.data[0].projects;
        this.coding = this.data[0].coding;
        this.about = this.data[0].about;
        this.contact = this.data[0].contact;
        this.specialNote = this.data[0].contact[0].specialNote;
        this.socials = this.data[0].socials;
        console.log(this.data);

        
      },

      error => this.errorMessage = <any>error);

      let port = this;
      setTimeout(function() {
        port.loadMainContent = true;
        port.removeDelays = true;
      //}, 800)
      });
     
  }

 
}
