from apps.todo.models import Todo
from rest_framework import serializers


class TodoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Todo
        fields = [
            "id",
            "task",
            "description",
            "status",
            "created_at",
            "updated_at",
        ]
        read_only_fields = ["created_at", "updated_at"]
