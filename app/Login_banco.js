/*
 * JS for Login_banco generated by Appery.io
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

function Login_banco_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobileimage_8': 'Login_banco_mobileimage_8',
        'mobilelabel_6': 'Login_banco_mobilelabel_6',
        'mobiletextinput_2': 'Login_banco_mobiletextinput_2',
        'mobiletextinput_3': 'Login_banco_mobiletextinput_3',
        'mobilecheckboxgroup_10': 'Login_banco_mobilecheckboxgroup_10',
        'mobilecheckbox_11': 'Login_banco_mobilecheckbox_11',
        'mobilebutton_4': 'Login_banco_mobilebutton_4',
        'mobilelink_12': 'Login_banco_mobilelink_12'
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
    Apperyio.mappings["Login_banco_login_clone_3_onsuccess_mapping_0"] = {
        "homeScreen": "Login_banco",
        "directions": [
            {
                "from_name": "login_clone_3",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "currentUser",
                "to_type": "LOCAL_STORAGE",
                "mappings": [
                    {
                        "source": "$['body']['username']",
                        "target": "$['usename']"
                    },
                    {
                        "source": "$['body']['session']",
                        "target": "$['userSession']"
                    },
                    {
                        "source": "$['body']['email']",
                        "target": "$['email']"
                    },
                    {
                        "source": "$['body']['country']",
                        "target": "$['country']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["Login_banco_login_clone_3_onbeforesend_mapping_0"] = {
        "homeScreen": "Login_banco",
        "directions": [
            {
                "from_name": "Login_banco",
                "from_type": "UI",
                "to_name": "login_clone_3",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {},
                    "parameters": {},
                    "body": null
                },
                "mappings": [
                    {
                        "source": "$['mobiletextinput_2:text']",
                        "target": "$['parameters']['username']"
                    },
                    {
                        "source": "$['mobiletextinput_3:text']",
                        "target": "$['parameters']['password']"
                    }
                ]
            }
        ]
    };
    Apperyio.datasources = Apperyio.datasources || {};
    window.login_clone_3 = Apperyio.datasources.login_clone_3 = new Apperyio.DataSource(LoginUser_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["Login_banco_login_clone_3_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["Login_banco_login_clone_3_onsuccess_mapping_0"]);
            Apperyio.navigateTo('Board', {
                reverse: false
            });
        },
        "onError": function(jqXHR, textStatus, errorThrown) {
            var response = JSON.parse(jqXHR.responseText);
            alert(response.message);
        }
    });
    Apperyio.CurrentScreen = 'Login_banco';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var Login_banco_onLoad = function() {
        Login_banco_elementsExtraJS();
        Login_banco_deviceEvents();
        Login_banco_windowEvents();
        Login_banco_elementsEvents();
    };
    // screen window events
    function Login_banco_windowEvents() {
        $('#Login_banco').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
    };
    // device events
    function Login_banco_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function Login_banco_elementsExtraJS() {
        // screen (Login_banco) extra code
    };
    // screen elements handler
    function Login_banco_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        $(document).off("click", '#Login_banco_mobileheader [name="mobileimage_8"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('startScreen', {
                        reverse: false
                    });
                }
            },
        }, '#Login_banco_mobileheader [name="mobileimage_8"]');
        $(document).off("click", '#Login_banco_mobilecontainer [name="mobilebutton_4"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    try {
                        login_clone_3.execute({});
                    } catch (e) {
                        console.error(e);
                        hideSpinner();
                    };
                }
            },
        }, '#Login_banco_mobilecontainer [name="mobilebutton_4"]');
    };
    $(document).off("pagebeforeshow", "#Login_banco").on("pagebeforeshow", "#Login_banco", function(event, ui) {
        Apperyio.CurrentScreen = "Login_banco";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    Login_banco_onLoad();
};
$(document).off("pagecreate", "#Login_banco").on("pagecreate", "#Login_banco", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    Login_banco_js();
});