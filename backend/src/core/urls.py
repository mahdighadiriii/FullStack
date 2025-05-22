"""
URL configuration for config project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from django.views.decorators.csrf import csrf_exempt


# Main URLs
main_urlpatterns = [
    path("admin/", admin.site.urls),
    path("todo/", include("apps.todo.urls", namespace="todo")),
]

# Add main URL pattern with the base path
urlpatterns = [
    path(f"{settings.BASE_PATH}/", include(main_urlpatterns)),
]

# Add drf-spectacular schema and Swagger UI under the base path
if settings.DEBUG:
    # urlpatterns += [
    #     path(
    #         f"{settings.BASE_PATH}/api/schema/",
    #         SpectacularAPIView.as_view(),
    #         name="schema",
    #     ),
    #     path(
    #         f"{settings.BASE_PATH}/api/schema/swagger-ui/",
    #         csrf_exempt(SpectacularSwaggerView.as_view(url_name="schema")),
    #         name="swagger-ui",
    #     ),
    #     path(
    #         f"{settings.BASE_PATH}/api/schema/redoc/",
    #         SpectacularRedocView.as_view(url_name="schema"),
    #         name="redoc",
    #     ),
    # ]
    # Static and media files with BASE_PATH
    urlpatterns += static(
        f"/{settings.BASE_PATH}/static/", document_root=settings.STATIC_ROOT
    )
    urlpatterns += static(
        f"/{settings.BASE_PATH}/media/", document_root=settings.MEDIA_ROOT
    )
