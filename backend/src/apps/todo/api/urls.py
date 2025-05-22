from apps.todo.api.views import TodoViewSet
from django.urls import include, path
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r"todo-items", TodoViewSet, basename="todo-items")

urlpatterns = [
    path("api/", include(router.urls)),
]
