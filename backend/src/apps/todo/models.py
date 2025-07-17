from django.db import models
from django.utils.translation import gettext_lazy as _

# Create your models here.


class TimeStampModel(models.Model):

    created_at = models.DateTimeField(_("Created At"), auto_now_add=True)
    updated_at = models.DateTimeField(_("Updated At"), auto_now=True)

    class Meta:
        abstract = True
        ordering = ["-created_at"]


class Todo(TimeStampModel):

    task = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    status = models.BooleanField(default=False)

    class Meta(TimeStampModel.Meta):
        verbose_name = _("Todo Item")
        verbose_name_plural = _("Todo Items")
        ordering = ["task"]

    def __str__(self):
        return f"{self.task} ({self.status})"
