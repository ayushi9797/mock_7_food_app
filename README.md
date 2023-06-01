## Food Delivery App Backend

🥗 🥪 🍜 🍲 🍥 🍸

# User register schema

```

 {
"name": "chiku",
    "email": "chiku12@gmail.com",
    "password": "1234",
    "address": {
        "street": "nathwara",
        "city": "udaipur",
        "state": "rajasthan",
        "country": "india",
        "zip": "47002"
    }
}


```

# Resturant Schema

```

 {
"name": "ayu",
    "address": {
        "street": "ab",
        "city": "ab",
        "state": "cd",
        "country": "uj",
        "zip": "8898"
    },
    "menu": [{

        "name": "909",
        "description": "gh",
        "price": 121,
        "image": "u"
    }]

}



```

# Order Schema

```
{
  "user": "String",
  "restaurant": "String",
  "items": [
    {
      "name": "String",
      "price": 23,
      "quantity": 89
    }
  ],
  "totalPrice": 90,
  "deliveryAddress": {
    "street": "String",
    "city": "String",
    "state": "String",
    "country": "String",
    "zip": "String"
  },
  "status": "String"
}
```



| METHOD      | ENDPOINT                      | DESCRIPTION                                                                                                                                | STATUS CODE |
| ----------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| POST        | /api/register                 | This endpoint should allow users to register. Hash the password on store.                                                                  | 201         |
| POST        | /api/login                    | This endpoint should allow users to login. Return JWT token on login.                                                                      | 201         |
| PUT / PATCH | /api/user/:id/reset           | This endpoint should allow users to reset the password identified by user id, providing the current password and new password in the body. | 204         |
| GET         | /api/restaurants              | This endpoint should return a list of all available restaurants.                                                                           | 200         |
| GET         | /api/restaurants/:id          | This endpoint should return the details of a specific restaurant identified by its ID.                                                     | 200         |
| GET         | /api/restaurants/:id/menu     | This endpoint should return the menu of a specific restaurant identified by its ID.                                                        | 200         |
| POST / PUT  | /api/restaurants/:id/menu     | This endpoint should allow the user to add a new item to a specific restaurants menu identified by it id.                                  | 201         |
| DELETE      | /api/restaurants/:id/menu/:id | This endpoint should allow the user to delete a particular menu item identified by its id from a specific restaurant.                      | 202         |
| POST        | /api/orders                   | This endpoint should allow the user to place an order.                                                                                     | 201         |
| GET         | /api/orders/:id               | This endpoint should return the details of a specific order identified by its ID.                                                          | 200         |
| PUT / PATCH | /api/orders/:id               | This endpoint should allow users to update the status of a specific order identified by its ID.                                            | 204         |

# Restro

http://localhost:8080/rest/
http://localhost:8080/rest/resturant
http://localhost:8080/rest/64785b2e1dc9261fad970049


# Order
http://localhost:8080/order/order/
http://localhost:8080/order/