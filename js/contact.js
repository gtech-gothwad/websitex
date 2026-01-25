function validateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|)(\]?)$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}
$(document).ready(function () {
    $('form.contact-form').on('submit', function (e) {
        e.preventDefault();
        //debugger;
        let formName = $(this).prop('name');

        var curl = window.location.href;
        var Name = $("#contact_name").val().trim();
        var Email = $("#contact_email").val().trim();
        var ContactNo = $("#contact_mobile").val().trim();
        var Message = $("#contact_requirements").val().trim();
        var coutry = $("#contact_country").val().trim();
        var subject = "Thank You for enquiring with us - VentaGenie Team";
        var cno = ContactNo;
        var emailValid = false;
        var ValidFlag = true;
        var pgnm = 'Homepage';
        switch (formName) {
            case 'frmHomepage':
            default:
                break;

            case 'frmPPC':
                subject = "Thank You for reaching out to us - VentaGenie Team";
                pgnm = 'PPC';
                break;

            case 'frmContactUs':
                subject = "Thank You for contacting us - VentaGenie Team";
                pgnm = 'Contact Us';
                break;
        }

        ////Name
        //if ($.trim(Name).length < 3 || $.trim(Name).length > 50) {
        //    ValidFlag = false;
        //    $("#contact_errors").show();
        //    $("#contact_errors").html("Please Enter Valid Name");
        //}
        //else {
        //    $("#contact_errors").hide();
        //}

        ////Email
        //if ($.trim(Email).length > 50 || $.trim(Email).length < 4) {
        //    ValidFlag = false;
        //    $("#validationMessagesEmail").show();
        //    $("#validationMessagesEmail").html("Please Enter Valid Email");
        //} else if (!validateEmail(Email)) {
        //    ValidFlag = false;
        //    $("#validationMessagesEmail").show();
        //    $("#validationMessagesEmail").html("Please Enter Valid Email");
        //}

        //if ($.trim(ContactNo).length > 20 || $.trim(ContactNo).length < 7) {
        //    ValidFlag = false;

        //    $("#validationMessagesMobile").show();
        //    $("#validationMessagesMobile").html("Please Enter Valid Mobile");

        //}

        //var m = $.trim(Message).length;
        //if ($.trim(Message).length > 2000) {
        //    ValidFlag = false;
        //    $("#validationMessagesMsg").show();
        //    $("#validationMessagesMsg").html("You can enter upto 2000 length of requirement");
        //    // $(this).val('');
        //}

        let form_data = "{'name': '" + Name + "','email':'" + Email + "','contactno':'" + ContactNo + "','Message':' ( " + Message + " )','country':'" + coutry + "','Subject':'" + subject + "','UTMSource':'" + curl + "','cno':'" + cno + "','pgnm':'" + pgnm + "'}";
        var $this = $('#btnContactUs');
        if (ValidFlag) {
            //$('#btnContactUs').hide();
            $this.button('loading');
            $.ajax({
                type: 'POST',
                contentType: "application/json; charset=utf-8",
                url: 'Services/WebService.asmx/Insert',
                data: form_data,  //web Service method Parameter Name and ,user Input value which in Name Variable.
                dataType: "json",
                complete: function (data) {
                    $this.button('loading');
                },
                success: function (data) {
                    //debugger
                    window.location.href = "thank-you-page.html";
                },
                error: function (msg) {
                    alert(msg);
                },
                failure: function (msg) {
                    alert(msg);
                }
            });
        }
        else {
            e.preventDefault();
            return false;
        }
    });
});


//$(document).ready(function () {
//    var curl = window.location.href;
//    $.ajax({
//        type: "POST",
//        beforeSend: function () {
//        },
//        url: "Services/WebService.asmx/setck",
//        data: "{'utmsource': '" + curl + "'}",  //web Service method Parameter Name and ,user Input value which in Name Variable.
//        contentType: "application/json; charset=utf-8",
//        dataType: "json",
//        async: false,
//        success: function (response) {
//            //                    alert('Inn');
//        },
//        failure: function (msg) {
//            alert(msg);
//        }
//    });
//});
$("#mobile").keyup(function (e) {
    this.value = this.value.replace(/[^0-9]/g, '');
});
$('#name').change(function () {
    var Name = this.value;
    if ($.trim(Name).length > 50 || $.trim(Name).length < 3) {
        $("#contact_errors").show();
        $("#contact_errors").html("Please Enter Valid Name");
        // $(this).val('');
    }
    else {
        $("#contact_errors").hide();
    }
});
$('#email').change(function () {
    var Email = this.value;
    if ($.trim(Email).length > 50 || $.trim(Email).length < 4) {
        $("#validationMessagesEmail").show();
        $("#validationMessagesEmail").html("Please Enter Valid Email");
        //$(this).val('');
    }
    else {
        $("#validationMessagesEmail").hide();
    }
});
$('#mobile').change(function () {
    var Mobile = this.value;
    if ($.trim(Mobile).length > 20 || $.trim(Mobile).length < 7) {
        $("#validationMessagesMobile").show();
        $("#validationMessagesMobile").html("Please Enter Valid Mobile");
        //  $(this).val('');
    }
    else {
        $("#validationMessagesMobile").hide();
    }
});

$('#Msg').change(function () {
    var Msg = this.value;
    if ($.trim(Msg).length > 2000) {
        $("#validationMessagesMsg").show();
        $("#validationMessagesMsg").html("You can enter upto 2000 length of requirement");
        // $(this).val('');
    }
    else {
        $("#validationMessagesMsg").hide();
    }

});
