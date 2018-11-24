/**
 * Data models
 */
Apperyio.Entity = new Apperyio.EntityFactory({
    "User": {
        "type": "object",
        "properties": {
            "country": {
                "type": "string"
            },
            "usename": {
                "type": "string"
            },
            "userSession": {
                "type": "string"
            },
            "email": {
                "type": "string"
            }
        }
    },
    "ProductList": {
        "type": "array",
        "items": {
            "type": "Product"
        }
    },
    "String": {
        "type": "string"
    },
    "Product": {
        "type": "object",
        "properties": {
            "name": {
                "type": "string"
            },
            "description": {
                "type": "string"
            },
            "quantity": {
                "type": "number"
            }
        }
    },
    "Number": {
        "type": "number"
    },
    "Boolean": {
        "type": "boolean"
    }
});
Apperyio.getModel = Apperyio.Entity.get.bind(Apperyio.Entity);
/**
 * Data storage
 */
Apperyio.storage = {
    "token": new $a.SessionStorage("token", "String"),
    "productList": new $a.LocalStorage("productList", "ProductList"),
    "selectedProduct": new $a.LocalStorage("selectedProduct", "Product"),
    "currentUser": new $a.LocalStorage("currentUser", "User"),
    "token_0": new $a.SessionStorage("token_0", "String")
};