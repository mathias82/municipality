
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

(function($) {
    $.fn.municipality = function(options) {


        // Establish our settings DIMOS,NOMOS,PERIFEREIA
        var settings = $.extend({
            dimos: null,
            nomos: null,
            perifereia: null
        }, options);

        return this.each(function() {

            var fieldName = settings.dimos;
            var field = jQuery("#" + fieldName);


            field.autocomplete({
                source: $.map(alldimoi(), function(elem) {
                    return {
                        'label': elem.split(',')[0],
                        'value': elem.split(',')[1]
                    }
                }),
                select: function(event, ui) {


                    var myStringArray = alldimoi();

                    var loopa;

                    for (var i = 0; i < myStringArray.length; i++) {

                        loopa = myStringArray[i];

                        if (ui.item.value == loopa) {

                            jQuery("#" + settings.perifereia).val(perifereies(loopa));

                            jQuery("#" + settings.nomos).val(nomos(loopa));


                        }

                    }




                }
            });




        });

    }

}(jQuery));
