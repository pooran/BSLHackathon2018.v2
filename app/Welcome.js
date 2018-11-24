/*
 * JS for Welcome generated by Appery.io
 */
Apperyio.getProjectGUID = function() {
    return '8700fb82-4281-4205-b2b0-709172fa6b23';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}
Apperyio.AppPages = [{
    "name": "ExamplePage",
    "location": "ExamplePage.html"
}, {
    "name": "Login_banco",
    "location": "Login_banco.html"
}, {
    "name": "Login_dci",
    "location": "Login_dci.html"
}, {
    "name": "AddSell",
    "location": "AddSell.html"
}, {
    "name": "details",
    "location": "details.html"
}, {
    "name": "Login_vendedor",
    "location": "Login_vendedor.html"
}, {
    "name": "Login_corredor",
    "location": "Login_corredor.html"
}, {
    "name": "Board",
    "location": "Board.html"
}, {
    "name": "Register",
    "location": "Register.html"
}, {
    "name": "Comprador",
    "location": "Comprador.html"
}, {
    "name": "Vendedor_detalle_registro",
    "location": "Vendedor_detalle_registro.html"
}, {
    "name": "Validaciones",
    "location": "Validaciones.html"
}, {
    "name": "Login_comprador",
    "location": "Login_comprador.html"
}, {
    "name": "Vendedor",
    "location": "Vendedor.html"
}, {
    "name": "startScreen",
    "location": "startScreen.html"
}, {
    "name": "Welcome_OAuth_Login_with_Google_App",
    "location": "Welcome_OAuth_Login_with_Google_App.html"
}, {
    "name": "Welcome",
    "location": "Welcome.html"
}, {
    "name": "VendedorViejo",
    "location": "VendedorViejo.html"
}, {
    "name": "VendedorAdjustes",
    "location": "VendedorAdjustes.html"
}];

function Welcome_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilelist_4': 'Welcome_mobilelist_4',
        'mobilelistitem_5': 'Welcome_mobilelistitem_5',
        'mobilelistitembutton_6': 'Welcome_mobilelistitembutton_6'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    /*
     * Nonvisual components
     */
    Apperyio.mappings = Apperyio.mappings || {};
    Apperyio.mappings["Welcome_list_google_drive_files_onsuccess_mapping_0"] = {
        "homeScreen": "Welcome",
        "directions": [
            {
                "from_name": "list_google_drive_files",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "Welcome",
                "to_type": "UI",
                "mappings": [
                    {
                        "source": "$['body']['files'][i]",
                        "target": "$['mobilelistitem_5']"
                    },
                    {
                        "source": "$['body']['files'][i]['name']",
                        "target": "$['mobilelistitem_5:text']"
                    },
                    {
                        "source": "$['body']['files'][i]['mimeType']",
                        "target": "$['mobilelistitem_5:counter_value']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["Welcome_list_google_drive_files_onbeforesend_mapping_0"] = {
        "homeScreen": "Welcome",
        "directions": [
            {
                "from_name": "token",
                "from_type": "SESSION_STORAGE",
                "to_name": "list_google_drive_files",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {},
                    "parameters": {},
                    "body": null
                },
                "mappings": [
                    {
                        "source": "$",
                        "target": "$['parameters']['token']"
                    }
                ]
            }
        ]
    };
    Apperyio.datasources = Apperyio.datasources || {};
    window.list_google_drive_files = Apperyio.datasources.list_google_drive_files = new Apperyio.DataSource(listGoogleDriveFiles_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["Welcome_list_google_drive_files_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["Welcome_list_google_drive_files_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    Apperyio.CurrentScreen = 'Welcome';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var Welcome_onLoad = function() {
        Welcome_elementsExtraJS();
        Welcome_deviceEvents();
        Welcome_windowEvents();
        Welcome_elementsEvents();
    };
    // screen window events
    function Welcome_windowEvents() {
        $('#Welcome').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
        $('#Welcome').on({
            pageshow: function(event) {
                var pageUrl = window.location.href;
                var paramsStart = pageUrl.indexOf("?");
                var token = pageUrl.substring(paramsStart + 1);
                Apperyio.storage.token.set(token);;
                try {
                    list_google_drive_files.execute({});
                } catch (e) {
                    console.error(e);
                    hideSpinner();
                };
            },
        });
    };
    // device events
    function Welcome_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function Welcome_elementsExtraJS() {
        // screen (Welcome) extra code
        /* mobilelist_4 */
        listView = $("#Welcome_mobilelist_4");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#Welcome_mobilelist_4 .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }
        /* mobilelistitem_5 */
    };
    // screen elements handler
    function Welcome_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
    };
    $(document).off("pagebeforeshow", "#Welcome").on("pagebeforeshow", "#Welcome", function(event, ui) {
        Apperyio.CurrentScreen = "Welcome";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    Welcome_onLoad();
};
$(document).off("pagecreate", "#Welcome").on("pagecreate", "#Welcome", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    Welcome_js();
});