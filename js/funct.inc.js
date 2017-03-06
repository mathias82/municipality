
/*
 * municipality.js v1.0.0
 * https://github.com/mathias82/municipality
 *
 * Developed and maintenained under MIT licence by Matthaios Stavrou - www.mstavrou.com
 * http://www.opensource.org/licenses/MIT
 * Original jquery-browser code Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * http://jquery.org/license
 *
 *
 * COPYRIGHT (C) 2017 Matthaios Stavrou
 * https://github.com/mathias82
 * LAST UPDATE: 06/03/2017
 *
 */


function perifereies(dimos_name) {


    var result = "";

    $.ajax({
        type: "GET",
        url: "data.json",
        contentType: 'text/plain',
        dataType: 'json',
        async: false,
        data: {
            dimos_name: dimos_name
        },
        headers: {

        },


        cache: false,
        crossDomain: true,
        error: function(xhr, status, error) {
            alert(xhr.responseText);
        },
        success: function(data) {


            var dataItems = [];


            $.each(data, function(index, itemData) {

                if (itemData.dimos_name == dimos_name) {

                    dataItems.push(itemData.periferies_name);

                }

            });

            result = dataItems;

        }


    });

    return result;

}


function nomos(dimos_name) {


    var result = "";

    $.ajax({
        type: "GET",
        url: "data.json",
        contentType: 'text/plain',
        dataType: 'json',
        async: false,
        data: {
            dimos_name: dimos_name
        },
        headers: {

        },


        cache: false,
        crossDomain: true,
        error: function(xhr, status, error) {
            alert(xhr.responseText);
        },
        success: function(data) {


            var dataItems = [];


            $.each(data, function(index, itemData) {

                if (itemData.dimos_name == dimos_name) {

                    dataItems.push(itemData.nomos_name);

                }


            });

            result = dataItems;


        }


    });

    return result;

}




function alldimoi() {

    var result = "";

    $.ajax({
        type: "GET",
        url: "data.json",
        contentType: 'application/json',
        dataType: 'json',
        async: false,
        headers: {

        },


        cache: false,
        crossDomain: true,
        error: function(xhr, status, error) {
            alert(xhr.responseText);
        },
        success: function(data) {


            var dataItems = [];



            $.each(data, function(index, itemData) {

                dataItems.push(itemData.dimos_name);

            });


            result = dataItems;

        }


    });

    return result;

}
