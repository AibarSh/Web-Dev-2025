from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer

# List of all companies
class CompanyListCreateView(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

# Get one company
class CompanyDetailView(generics.RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    lookup_field = 'id'

# List of vacancies by company
class CompanyVacanciesView(generics.ListCreateAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        company_id = self.kwargs['id']
        return Vacancy.objects.filter(company_id=company_id)

# List of all vacancies
class VacancyListView(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

# Get one vacancy
class VacancyDetailView(generics.RetrieveAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)
# @api_view(['GET','POST', 'DELETE'])
# def company_vacancies(request, company_id):
#     if request.method == 'GET':
#         vacancies = Vacancy.objects.filter(company_id=company_id)
#         serializer = VacancySerializer(vacancies, many=True)
#         return Response(serializer.data)

#     if request.method == 'POST':
#         serializer = VacancySerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=201)
#         return Response(serializer.errors, status=400)

#     if request.method == 'DELETE':
#         vacancy = get_object_or_404(Vacancy, id=company_id)
#         vacancy.delete()
#         return Response(status=204)






# @api_view(['POST'])
# def create_vacancy(request):
#     if request.method == 'POST':
#         serializer = VacancySerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=201)
#         return Response(serializer.errors, status=400)
# @api_view(['GET'])



