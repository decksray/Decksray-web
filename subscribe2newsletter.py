#!/usr/bin/env python3


from urllib import request
import json
from pprint import pprint

import cgi
from sys import exit

form = cgi.FieldStorage()

name = form.getvalue('name', None)
email = form.getvalue('email', None)

if not name or not email:
    print()
    print('Missing field email/name')
    exit(0)


token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiYjNmNjA5ZTg5Y2Y2YWM3YjA0MTNhNWZkYmVhNjg5MGViMzQyZjlmMTU2MzI3NjZlMDMzZmExZTJiOWM5YWFkNDM2N2Q3NzBhYmE4ZmU3MjkiLCJpYXQiOjE3NTcwOTE2MzcuNzc3NzE5LCJuYmYiOjE3NTcwOTE2MzcuNzc3NzIyLCJleHAiOjQ5MTI3NjUyMzcuNzcwMzk0LCJzdWIiOiIxMzg2ODU3Iiwic2NvcGVzIjpbXX0.TSiGDbPYvRK4PGpaK2vLuRTJ9kJi47e9My5YoOa8lQRXLMRYtDmPN7xyH_8e6r8w0EGFATjlVBmmYsKMPgUmMZpDO7rHhsWrAkAizMyEgi9r0mFmqqvq3rLlH7YqpVxBjFIh7h2ddmKDkGGc3V4vP2z3VTJZKNNZ0VyCROsyq5PUu6zOhqJ1HMKNtac4kePE1FHIsAFpsKuJGUu0QOB1dOmfn45REvnkfREpHRAvqwHfJPmG2hOM8blu1YRQXqvJ0neamo2VAABgFYeB3GLwvvWwQxWejq5d14L8tAis3sz9sSpm0Q8d95Gn574aIz2DElDasksyDWpW9sCgKih_aXqncCkrtDgjaHTlpG0IA91yDco1T1Hy-8yQILTgq-4rrm1-B-BMDFiMH5PFBpUkwGtjwH5OgwN0jjh128PhZZdbmeT_JblOQ_qdMIAbCA0--2rxSDoFVt8NFSiD64LY-B8n1H2fiXTPsh8tjy5O0C0P3M6c87Y6pPE1sehnaGp57gkA0oWUYjxZdJu27SrfVhVvIv4hbY2ChK7P0TE8F3Uos8DVYBPjeIMFhOdMqsBQG2AGsnK1YgaabsrPQL0FmCla3ZiGivNWP8Lhp0b9qnuEos5KR2SeqJaBuYId6IHQA_EybkUsd7tX44jM1UA2CPmoztcImlHgd4qS80eLnWI'
data = {
    "email": email,
    "fields": {
      "name": name
    },
    "groups": ["149145036303369374"]
}

data = json.dumps(data)
data = str(data)
data = data.encode('utf-8')

api = 'https://connect.mailerlite.com/api/subscribers'
req = request.Request(api, data=data, headers={'User-Agent': 'Mozilla'})
req.add_header('authorization', 'Bearer '+token)
req.add_header('Content-Type','application/json')
req.add_header('Accept', '*/*')

try:
    with request.urlopen(req) as response:
        the_page = response.read()
        #pprint(json.loads(the_page))
        print()
        print('OK')

except Exception as ex:
    print()
    print('FAILED')

