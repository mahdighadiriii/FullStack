from django.urls import include, path

app_name = "todo"

urlpatterns = [
    path("", include("apps.todo.api.urls")),
]
