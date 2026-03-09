import { Component, inject } from '@angular/core';
import { PortfolioDataService } from './services/portfolio-data.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly portfolioData = inject(PortfolioDataService);

  readonly name = this.portfolioData.name;
  readonly title = this.portfolioData.title;
  readonly location = this.portfolioData.location;
  readonly summary = this.portfolioData.summary;
  readonly email = this.portfolioData.email;
  readonly phone = this.portfolioData.phone;
  readonly phoneHref = this.portfolioData.phoneHref;
  readonly quickStats = this.portfolioData.quickStats;
  readonly experience = this.portfolioData.experience;
  readonly projects = this.portfolioData.projects;
  readonly skills = this.portfolioData.skills;
  readonly education = this.portfolioData.education;
}
