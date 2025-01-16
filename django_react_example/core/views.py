from django.shortcuts import render
import os
from django.http import HttpResponse
from django.conf import settings


def index(request):
    return render(request, "core/index.html")


def react_app(request, path=None):
    # The location of your React build folder
    build_path = os.path.join(settings.BASE_DIR, 'react_frontend', 'build', 'index.html')

    # Return the contents of the index.html as a response
    with open(build_path) as f:
        return HttpResponse(f.read())
