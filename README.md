# safeapiapp
This is a POC of a secure API using HTTPS and an API key to control access to the data.

## Demo
### Browser
The link to the server is:
```
https://ec2-3-142-232-11.us-east-2.compute.amazonaws.com/
```
> Note: The server doesn't use a signed SSL certificate, therefore the browser will say it's unsafe.

> Since no API key is provided the server returns HTTP 401 (unauthorized).

Obtaining an API key:
```
https://ec2-3-142-232-11.us-east-2.compute.amazonaws.com/getapikey
```

You will see the following:
```
{"jwt":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyYW5kb21Vc2VybmFtZSI6InNIRVpaNkoxIiwiaWF0IjoxNjE5OTcwMzYzfQ.nkEWUvxoOflzRdseeiu7QC22SIOMjZipVHvPXxEiuaw"}
```
> For the sake of demo, there is no expiration on the API key.

The key in this case is:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyYW5kb21Vc2VybmFtZSI6InNIRVpaNkoxIiwiaWF0IjoxNjE5OTcwMzYzfQ.nkEWUvxoOflzRdseeiu7QC22SIOMjZipVHvPXxEiuaw
```

Copy the API key obtained earlier and paste it in the url in the following format:
```
https://ec2-3-142-232-11.us-east-2.compute.amazonaws.com/?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyYW5kb21Vc2VybmFtZSI6InNIRVpaNkoxIiwiaWF0IjoxNjE5OTcwMzYzfQ.nkEWUvxoOflzRdseeiu7QC22SIOMjZipVHvPXxEiuaw
```

### Linux (curl)
We will use -k (not signed SSL certificate) and -i (to show HTTP code) with curl.

Making a request to the server (without apikey):
```
curl -k -i https://ec2-3-142-232-11.us-east-2.compute.amazonaws.com/
```
> Since no API key is provided the server returns HTTP 401 (unauthorized).

Obtaining an API key:
```
curl -k -i https://ec2-3-142-232-11.us-east-2.compute.amazonaws.com/getapikey
```

Making a request to the server (with valid api key):
```
curl -k -i https://ec2-3-142-232-11.us-east-2.compute.amazonaws.com/?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyYW5kb21Vc2VybmFtZSI6InNIRVpaNkoxIiwiaWF0IjoxNjE5OTcwMzYzfQ.nkEWUvxoOflzRdseeiu7QC22SIOMjZipVHvPXxEiuaw
```
