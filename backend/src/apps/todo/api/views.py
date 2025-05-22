from apps.todo.api.serializers import TodoSerializer
from apps.todo.models import Todo
from rest_framework import viewsets


class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
