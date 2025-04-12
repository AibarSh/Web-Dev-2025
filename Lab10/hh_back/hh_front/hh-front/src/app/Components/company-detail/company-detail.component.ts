import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { VacancyService } from '../../Services/vacancy.service';
import { Vacancy } from '../../Models/vacancy';

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  vacancies: Vacancy[] | null = null;  // Initialize as null
  loading = true;  // Add loading state

  constructor(
    private route: ActivatedRoute,
    private vacancyService: VacancyService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const companyId = +params['id'];
      this.loadVacancies(companyId);
    });
  }

  loadVacancies(companyId: number) {
    this.loading = true;
    this.vacancies = null;
    
    this.vacancyService.getCompanyVacancies(companyId).subscribe({
      next: (data) => {
        console.log('Received vacancies:', data); // Debug log
        this.vacancies = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error:', error);
        this.vacancies = [];
        this.loading = false;
      }
    });
  }
}