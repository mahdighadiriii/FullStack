from apps.todo.models import Todo
from rest_framework import serializers


class TodoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Todo
        fields = [
            "task",
            "description",
            "status",
            "created_at",
            "updated_at",
        ]
