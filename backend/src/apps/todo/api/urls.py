from apps.todo.api.views import TodoViewSet
from django.urls import include, path
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("todo-items", TodoViewSet, basename="todo-item")

urlpatterns = [
    path("api/", include(router.urls)),
]
