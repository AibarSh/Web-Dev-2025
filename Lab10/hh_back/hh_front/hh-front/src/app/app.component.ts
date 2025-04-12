import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CompanyService } from './Services/company.service';
import { VacancyService } from './Services/vacancy.service';
import { Company } from './Models/company';
import { Vacancy } from './Models/vacancy';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  companies: Company[] = [];
  selectedCompanyVacancies: Vacancy[] = [];

  constructor(
    private companyService: CompanyService,
    private vacancyService: VacancyService
  ) {}

  ngOnInit() {
    this.loadCompanies();
  }

  loadCompanies() {
    this.companyService.getCompanies().subscribe({
      next: (data) => {
        this.companies = data;
        console.log('Companies loaded:', data);
      },
      error: (error) => {
        console.error('Error loading companies:', error);
      }
    });
  }

  showVacancies(companyId: number) {
    console.log('Fetching vacancies for company:', companyId);
    this.vacancyService.getCompanyVacancies(companyId).subscribe({
      next: (vacancies) => {
        this.selectedCompanyVacancies = vacancies;
        console.log('Vacancies loaded:', vacancies);
      },
      error: (error) => {
        console.error('Error loading vacancies:', error);
        this.selectedCompanyVacancies = [];
      }
    });
  }
}