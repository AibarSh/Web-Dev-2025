from django.urls import path
from . import views
from .views import CompanyListCreateView

urlpatterns = [
    path('companies/', CompanyListCreateView.as_view(), name='company_list_create'),
    path('companies/<int:id>/', views.CompanyDetailView.as_view(), name='company_detail'),
    path('companies/<int:company_id>/vacancies/', views.CompanyVacanciesView.as_view(), name='company_vacancy_list'),
    path('vacancies/', views.VacancyListView.as_view(), name='vacancy_list'),
    path('vacancies/<int:id>/', views.VacancyDetailView.as_view(), name='vacancy_detail'),
    path('vacancies/top_ten/', views.top_ten_vacancies, name='top_ten_vacancies'),
]