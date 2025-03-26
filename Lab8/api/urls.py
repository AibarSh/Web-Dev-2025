from django.urls import path
from api import views
urlpatterns = [
    path('product/', views.product_list, name='product_list'),
    path('product/<int:id>/', views.product_info, name='product_detail'),
    path('categories/', views.category_list, name='category_list'),
    path('categories/<int:id>/', views.category_detail, name='category_detail'),
    path('categories/<int:id>/product/', views.category_products, name='category_products'),
]