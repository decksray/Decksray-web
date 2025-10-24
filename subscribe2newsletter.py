#!/usr/bin/env python3


from urllib import request
import json

import cgi
from sys import exit

form = cgi.FieldStorage()

name = form.getvalue('name', None)
email = form.getvalue('email', None)

if not name or not email:
    print()
    print('Missing field email/name')
    exit(0)


token = None
with open('token.jwt', 'rt') as fp:
    token = fp.read().strip()

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

