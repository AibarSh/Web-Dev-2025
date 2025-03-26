from django.shortcuts import render
from django.http import JsonResponse
from .models import Product, Category

def product_list(request):
    products = Product.objects.all()
    data = [{"id": product.id, "name": product.name, "price": product.price, "description": product.description, "count": product.count, "is_active": product.is_active}
             for product in products]
    return JsonResponse(data)

def product_info(request, product_id):
    product = Product.objects.get(id=product_id)
    data = {"id": product.id, "name": product.name, "price": product.price, "description": product.description, "count": product.count, "is_active": product.is_active}
    return JsonResponse(data)

def category_list(request):
    categories = Category.objects.all()
    data = [{"id": category.id, "name": category.name} for category in categories]
    return JsonResponse(data)

def category_detail(request, id):
    category = Category.objects.get(id=id)
    data = {"id": category.id, "name": category.name}
    return JsonResponse(data)

def category_products(request, id):
    products = Product.objects.filter(category_id=id)
    data = [{"id": p.id, "name": p.name, "price": p.price, "description": p.description, "count": p.count}
            for p in products]
    return JsonResponse(data)