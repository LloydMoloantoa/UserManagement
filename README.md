# Node.js User Management System - Express, Express-Handlebars, HBS, MySQL

This was created as part of YouTube Video. Links below

![GitHub Logo](https://raddy.co.uk/wp-content/uploads/2021/02/nodejs-user-management-system-crud-blog_compressed.jpg)


## Create .env file
Create a .env file to store your database credentials

```
DB_HOST = localhost
DB_NAME = usermanagement_tut
DB_USER = root
DB_PASS = password
```

## Installation
To run this project, install it locally using npm:

```
$ npm install
$ npm start
```


### YouTube Video & Article

[YouTube Video](https://youtu.be/1aXZQcG2Y6I)

[Read Article](https://raddy.co.uk/blog/simple-user-management-system-nodejs-express-mysql-handlebards/)

### YouTube Channel - RaddyTheBrand

[Subscribe to my YouTube Channel](https://www.youtube.com/channel/UCvXscyQ0cLzPZeNOeXI45Sw?sub_confirmation=1)

### Website
[www.raddy.co.uk](https://www.raddy.co.uk)

### Donations
[Via Paypal](https://www.paypal.me/RadoslavAngelov)

[Buy me a Coffee](https://www.buymeacoffee.com/RaddyTheBrand)




// Add new user
exports.create = (req, res) => {
  /*  const { name, category, price, description, picture } = req.body;
   let searchTerm = req.body.search;
 
   // User the connection
   connection.query('INSERT INTO orderman SET name = ?, category = ?, price = ?, description = ?, picture = ?', [name, category, price, description, picture], (err, rows) => {
     if (!err) {
       res.render('add-user', { alert: 'User added successfully.' });
     } else {
       console.log(err);
     }
     console.log('The data from orderman table: \n', rows);
   }); */

 
    message = '';
    if (req.method == "POST") {
      var post = req.body;
      var name = post.name;
      var category = post.category;
      var price = post.price;
      var description = post.description;
    
      console.log(req.files);



     /*  if (!req.files)
        return res.status(400).send('No files were uploaded.'); */

      var file = req.files.picture;
      var picture = file.name;

      if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {

        file.mv('upload/' + file.name, function (err) {

          if (err)

            return res.status(500).send(err);
          var sql = "INSERT INTO `orderman`(`name`,`category`,`price`,`description`,`picture`) VALUES ('" + name + "','" + category + "','" + price + "','" + description + "','" + picture + "')";

          connection.query(sql, function (err, result) {
            res.redirect('/');
          });
        });
      } else {
        message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
        res.render('index.ejs', { message: message });
      }
    } else {
      res.render('index');
    }
}

