/*
 * Security contexts
 */
/*
 * Service settings
 */
var AccionesVentas_settings = {
    "API_EXPRESS_API_KEY": "0c15601b-5b55-41c4-89f8-d65413c2dc6d"
}
var Settings_OAuth_Login_with_Google_App = {
    "scriptID": "",
    "scope": "email profile https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive",
    "clientID": ""
}
var Settings = {
    "scriptID": "",
    "scope": "email profile https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive",
    "clientID": ""
}
/*
 * Services
 */
var LoginUser_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/code/{servercode}/exec',
    'dataType': 'json',
    'type': 'get',
    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});
var RegisterNewUser_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/code/{servercode}/exec',
    'dataType': 'json',
    'type': 'post',
    'contentType': false,
    'defaultRequest': {
        "headers": {
            "Content-Type": "text/plain",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});
var listGoogleDriveFiles_service_OAuth_Login_with_Google_App = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/code/{servercode_googledrivefiles}/exec',
    'dataType': 'json',
    'type': 'get',
    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});
var listGoogleDriveFiles_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/code/{servercode_googledrivefiles}/exec',
    'dataType': 'json',
    'type': 'get',
    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});
var AccionesVentas_ListVentas_ventas_get = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/apiexpress/api/ListVentas/ventas',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': AccionesVentas_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});
var GetProducts_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/code/{servercode}/exec',
    'dataType': 'json',
    'type': 'get',
    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});
var ProductDetails_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/code/{servercode}/exec',
    'dataType': 'json',
    'type': 'get',
    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});