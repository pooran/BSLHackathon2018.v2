/*
 * JS for Register generated by Appery.io
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

function Register_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobileimage_9': 'Register_mobileimage_9',
        'mobilelabel_8': 'Register_mobilelabel_8',
        'mobiletextinput_2': 'Register_mobiletextinput_2',
        'mobiletextinput_3': 'Register_mobiletextinput_3',
        'mobiletextinput_4': 'Register_mobiletextinput_4',
        'mobilebutton_6': 'Register_mobilebutton_6'
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
    Apperyio.mappings["Register_register_onsuccess_mapping_0"] = {
        "homeScreen": "Register",
        "directions": [
            {
                "from_name": "register",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "currentUser",
                "to_type": "LOCAL_STORAGE",
                "mappings": [
                    {
                        "source": "$['body']['country']",
                        "target": "$['country']"
                    },
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
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["Register_register_onbeforesend_mapping_0"] = {
        "homeScreen": "Register",
        "directions": [
            {
                "from_name": "Register",
                "from_type": "UI",
                "to_name": "register",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "Content-Type": "text/plain"
                    },
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
                    },
                    {
                        "source": "$['mobiletextinput_4:text']",
                        "target": "$['parameters']['email']"
                    }
                ]
            }
        ]
    };
    Apperyio.datasources = Apperyio.datasources || {};
    window.register = Apperyio.datasources.register = new Apperyio.DataSource(RegisterNewUser_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["Register_register_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["Register_register_onsuccess_mapping_0"]);
            Apperyio.navigateTo('Board', {
                reverse: false
            });
        },
        "onError": function(jqXHR, textStatus, errorThrown) {
            var response = JSON.parse(jqXHR.responseText);
            alert(response.message);
        }
    });
    Apperyio.CurrentScreen = 'Register';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var Register_onLoad = function() {
        Register_elementsExtraJS();
        Register_deviceEvents();
        Register_windowEvents();
        Register_elementsEvents();
    };
    // screen window events
    function Register_windowEvents() {
        $('#Register').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
    };
    // device events
    function Register_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function Register_elementsExtraJS() {
        // screen (Register) extra code
    };
    // screen elements handler
    function Register_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        $(document).off("click", '#Register_mobilecontainer [name="mobilebutton_6"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    try {
                        register.execute({});
                    } catch (e) {
                        console.error(e);
                        hideSpinner();
                    };
                }
            },
        }, '#Register_mobilecontainer [name="mobilebutton_6"]');
    };
    $(document).off("pagebeforeshow", "#Register").on("pagebeforeshow", "#Register", function(event, ui) {
        Apperyio.CurrentScreen = "Register";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    Register_onLoad();
};
$(document).off("pagecreate", "#Register").on("pagecreate", "#Register", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    Register_js();
});