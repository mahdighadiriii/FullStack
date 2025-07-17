from apps.todo.api.serializers import TodoSerializer
from apps.todo.models import Todo
from rest_framework import viewsets
from rest_framework.permissions import AllowAny


class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    permission_classes = [AllowAny]
