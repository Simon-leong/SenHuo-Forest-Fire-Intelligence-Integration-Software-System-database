from django.http import HttpResponse
from django.shortcuts import render
import json
import os.path
from django.http import HttpResponse, JsonResponse, StreamingHttpResponse

from django.http import HttpResponse, JsonResponse, StreamingHttpResponse


# Create your views here.
# http://halo.pythonanywhere.com/senhuo/?file=newUavPath1xxx&ext=json
# http://halo.pythonanywhere.com/senhuo/?file=fire_new&ext=mp4
def senhuo(request):
    file_name = request.GET.get("file", "")
    ext_name = request.GET.get('ext', "")
    file = os.path.join(os.path.dirname(os.path.abspath(__file__)), "senhuo_file", f"{file_name}.{ext_name}")
    if file_name == "" or ext_name == "":
        return HttpResponse("error")
    if 'json' in ext_name:
        try:
            print(file)
            with open(file, 'r') as f:
                data = json.loads(f.read())
                return HttpResponse(json.dumps(data, ensure_ascii=False),
                                    content_type="application/json,charset=utf-8")
        except:
            return HttpResponse("file not exit")
    if 'mp4' in ext_name:
        response = StreamingHttpResponse(read_file(file))
        response["Content-Type"] = "application/octet-stream"
        response["Content-Disposition"] = 'attachment; filename={0}'.format(file)
        response["Access-Control-Expose-Headers"] = "Content-Disposition"
        return response
    return HttpResponse(f" {file} error")


def read_file(file_name, chunk_size=512):
    with open(file_name, "rb") as f:
        while True:
            c = f.read(chunk_size)
            if c:
                yield c
            else:
                break
