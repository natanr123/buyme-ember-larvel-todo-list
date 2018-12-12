# About

A simple todo list web application using php-laravel with SQLLite and ember





First run the server side

```
$ cd server
create an empty file server/database.sqlite file:
$ touch database.sqlite
$ composer install
$ php artisan migrate
$ php artisan db:seed --class=TasksTableSeeder
$ php artisan serve --port=8080
$ check http://localhost:8080 for hello world message
$ check http://localhost:8080/api/tasks for sanity
```

Now run the client side  (Ember)

```
$ cd ../client
$ npm install
$ npm start
$ go to http://localhost:4200/ to se the result
```
