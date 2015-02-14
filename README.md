eCommerce Project - Day 1
=================

# Objectives

The start of the eCommerce project for building a fully functional MongoDB, express api for a eCommerce style of application.


## Resources

* [Mongoose] (http://mongoosejs.com/)
* [MongoDB Docs] (http://docs.mongodb.org/manual/)


## The Domain

Most companies sell some sort of product and service. For this project we will simulate buidling an eCommerce application. 

We will start talking about some of the objects that will be needed to be stored into mongo.

### Customers

First, most eCommerce applications have a notion of a Customer.  Whenever you've purchased something from an online store you usually have to provide some information about yourself as a Customer.  Some of the information provided is your name, email address, addresses (billing and shipping), phone numbers (home, work, etc), password, and it's very common to have a mechanism to turn a customer "on" or "off" (soft deleting, think of something like "active" that is a boolean).

### Products

There needs to also be the notion of storing Products or Services.  For this particular part, keep the Product model simple with a Name, Description, Price, and whether it's active or not (sometimes companies will want to turn things on and off).


### Orders

The company will want to store various information about an order, for example the customer, the billing address, the shipping address, payment information, subtotal (total of items added to an order), sales tax (for now just use 7%), total (subtotal + total), products added to the order.

### Order Details

An order will need to store the product that is applied to the order and the quantity of how many products the customer has added to the order.  It might be handy to total up these lines (quantity * product price) to ease the subtotal calculation on the order.

## Begin

### Step 1: Set up project and create models for the above description

For this project feel free to use additional frameworks to help with development. 

1. NPM install mongoose
2. Create the models for Moongoose provided the above domain context of the application

#### Customer
1. Add the fields as described above.

#### Product
1. Add the fields as described above.

#### Order
1. Make sure you create a one-to-one relationship between Order and Customer. One of your fields should point to the Customer model, so you know which customer made the order. Each Order should point to one Customer. Since you would always want to keep updated Customer information separate and updated outside of Orders, this would be a reference, not an embedded object (e.g. `myRefField: { type: Mongoose.Schema.Types.ObjectId, ref: 'OtherModel' }`)
2. You should also have an `items` or some similar field, whcih represents a one-to-many relationship between products and the Order. However, this is a different relationship than with Customers. For example, if you have a product placed in an order, and then later on the price of that product changes or is modified, you wouldn't want that to change a present or a past order. The order captures the Product at the time it was created and shouldn't be updated whenever the product changes. Therefore, this will be an embedded Model. There will be many products in a single order, so this field should be an array of Product objects. (Hint: `myEmbeddedField: [MyOtherModel]`).

### Step 2: Enhance your models

1. Add createdAt, updatedAt fields to all your models, making it easy to track the creation and updated timestamps. Use the default of `Date.now` for both of these fields. ([Link](http://mongoosejs.com/docs/2.8.x/docs/defaults.html)).
2. Add a `status` to your Order model. This can be an "enum" field, or a field that enumerates certain possible values. Like so:

`primaryColor: { type: String, enum: ['blue', 'red', 'green'] }`

Make your status field match possible statuses that could be associated with an order.

3. Have your Order model use its own fields for shipping address and billing address, as customers addresses may change over time and we wouldn't want that to affect the status of a current or past order.
4. Add some validation to your fields. Think about which fields would be required vs. optional, which fields need to be unique, min or max values or any other [validations](http://mongoosejs.com/docs/schematypes.html) that would be helpful to make your schemas more robust.


Day 2 
eCommerce Project - Part II
=================

## Objectives

Continue creating a full-stack e-commerce application.

## Resources
* [migrate] (https://github.com/tj/node-migrate)

### Step 1: Seed Products - using migrations

Let's use the handy migrate module to seed a product into your DB.

* Install migrate globally `npm i migrate -g`
* Navigate to the root of your application
* Run `migrate create add-product` in your terminal at the root of your application
* A new file called 00*-add-product.js should have been created within /migrations
* `require` the module in your code where you initialize your mongoose connection
* `require` your Product module
* Create and save your new products in the `exports.up` function - use [this gist](https://gist.github.com/cahlan/c5e1f30964599f80d92e) as a guide for how you could do your migration.
* Run `migrate` when complete to automatically seed your data in Mongo.

### Step 2: Create CRUD (Create, Retrieve, Update, Delete) api routes for your mongo resources

* Install and require your dependencies

* In your server.js, set up your route endpoints:

####/products
GET
POST

####/products/:id
GET
PUT
DELETE

####/customers
GET
POST

####/customers/:id
GET
PUT
DELETE

* Create controllers for each model in a "controllers" folder (e.g. "CustomerController, ProductController", etc)
* Connect controller functions for each CRUD operation to routes in your server.js file. For example, 

```javascript
app.get('/customers/:id', CustomerController.getCustomer);
app.delete('/customers/:id', CustomerController.deleteCustomer);
```

### Step 3: Testing your API
Make sure all operations are working as expected

### Step 4: Create an angular app that can consume this API

Create templates for viewing lists and individual detailed resources

* Create templates for viewing the following:
  * list of products showing only the name and price
  * list of customers showing only the name
  * detailed view for each product
  * detailed view for each customer

* Once your templates and angular routing is done, load the pages to see if you're retrieving data

### Step 5: Modifying Data
Integrate the logic within your angular app to create/modify/delete Products and Customers

* Create and 'edit' template for the following:
  * products
  * customers

The 'edit' template will be shared between the create and edit of these pages. The only difference is the angular controller behind the templates. 

Create an angular controller for creating and one for editing.
The create will POST when the 'Create' button is clicked.
The edit will first GET the details to populate the form fields and then do a PUT when the 'Save' button is clicked.

### Step 6: If you have time, make it pretty using bootstrap, another library, or design it yourself

### Step 7: Indexing
Add indexing for the email field on customer and the name field on products. This will make our api calls much quicker in the future as the application and data grow.

### Step 8: Add more ways to query
Expand on the controllers that we built to be able to query by name as well as _id.

On your `GET /products` add a query string parameter called `query` that will include key words that you define. 

These queries are based on the following objects in mongo:

```json
[
    {
        "_id": "5447e176e28406c36bbe9d2a",
        "name": "iPhone 6 Plus",
        "description": "Our best iPhone - now HUGER!",
        "price": 269.99,
        "__v": 0,
        "active": true
    },
    {
        "_id": "544818a3eb501040088f381a",
        "name": "iPhone 6",
        "description": "Our best iPhone - now as big as android",
        "price": 199.99,
        "__v": 0,
        "active": true
    }
]
```
Below are some examples of a request you might support - yours do not have to be in this format:

The following request: 

`http://localhost:8888/products?query=name-contains:iPhone+max-price:200.00` 

Should return:

```json
{
    "_id": "544818a3eb501040088f381a",
    "name": "iPhone 6",
    "description": "Our best iPhone - now as big as android",
    "price": 199.99,
    "__v": 0,
    "active": true
}
```

* Support querying products given a min or max price or both min and max prices
* Support searching for products by name - if I have a product named iPhone 6 I should be able to retrieve it if I pass in iPhone or 6
* Add other querying that you think would be helpful to your users