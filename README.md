*** koa rest api ***

- there is [postman export file(json)](koa_test_task.postman_collection.json)
  in the root directory you can import them in Postman for easy testing
- also [sql dump](comment_relations.sql) included in root (you can use utils for creating and populating data but its 
not ready for now, u have to run it twice because of asynchronous execution and after that fill IDrelation columns manually)
- to get valid token create POST request to localhost:3000/login/validate with valid credentials, if u will use my test db correct users are 2 and 30, 31, 32 because pass should be encrypted. please note token has expiration time. To test token if it is valid please use x-access-token header with token in post request to localhost:3000/login/test


