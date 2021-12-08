import { Component, OnInit } from '@angular/core';
import { JiraStory } from '../Models/JiraStory';

@Component({
  selector: 'app-jira',
  templateUrl: './jira.component.html',
  styleUrls: ['./jira.component.css']
})
export class JiraComponent implements OnInit {

  stories:JiraStory[];

  constructor() {
    this.stories = [];
    this.stories.push(new JiraStory("asdf-111","This is a dummy user story1", "https://www.google.com"))
    this.stories.push(new JiraStory("asdf-222","This is a dummy user story2", "https://www.amazon.com"))
    this.stories.push(new JiraStory("asdf-333","This is a dummy user story3", "https://www.verizon.com"))
   }

  ngOnInit(): void {
  }

  getJira():void{

  }

}
