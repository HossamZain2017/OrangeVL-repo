$(document).ready(function() {

    // Filtration Option Toggle
    (function() {
        var fieldsContainer = $('.filtration-fields');
        fieldsContainer.each(function() {
            var filtrationFields = $(this).find('label'),
                optionsContainer = $(this).siblings('.filtration-options');
            filtrationFields.each(function() {
                var fieldName = $(this).html(),
                    fieldFor = $(this).attr('for') + '_option',
                    checkboxInline = $('<div></div>').addClass('checkbox-inline'),
                    label = $('<label></label>').html(fieldName).attr('for', fieldFor),
                    option = $('<input>').attr({
                        type: 'checkbox',
                        id: fieldFor,
                    });
                checkboxInline.append(option).append(label);
                optionsContainer.append(checkboxInline);
            });
        });

        //fields toogle
        var options = $('.filtration-options .checkbox-inline input');
        options.click(function() {
            var optionId = $(this).attr('id').split('_'),
                optionValue = $(this).prop('checked'),
                field = $(this).parent('.checkbox-inline').parent('.filtration-options').siblings('.filtration-fields').find('#' + optionId[0]),
                fieldGroup = '';
            if (field.hasClass('selectpicker')) {
                fieldGroup = field.parent('.form-control').parent('.form-group').parent('.col-sm-4');
            } else {
                fieldGroup = field.parent('.form-group').parent('.col-sm-4');
            };

            if (optionValue) {
                fieldGroup.css('display', 'block');
                console.log('textbox');
            }
            if (optionValue && field.hasClass('selectpicker')) {
                fieldGroup.css('display', 'block').find('.selectpicker').selectpicker('refresh');
            }
            if (!optionValue) {
                fieldGroup.css('display', 'none');
                console.log('false');
            };

        });
    })();

    //selectpicker size
    (function() {
        $('.selectpicker').each(function() {
            $(this).selectpicker({
                size: 15,
                title: 'Select',
                liveSearchPlaceholder: 'Search',
            });
        });
    })();

    //datepicker
    (function() {
        $('.datetimepicker').each(function() {
            $(this).datetimepicker();
        });
    })();

    //example of event actions on dropwdown
    (function() {
        $('#inputCounterType').on('changed.bs.select', function(e) {
            var selectedVaue = $(this).selectpicker('val').toUpperCase();
            if (selectedVaue === 'SIMPLE'.toUpperCase()) {
                $('.simpleCondition').css('display', 'block');
                $('.complexCondition').css('display', 'none');
            }
            if (selectedVaue === 'COMPLEX'.toUpperCase()) {
                $('.simpleCondition').css('display', 'none');
                $('.complexCondition').css('display', 'block');
            }
        });
    })();

    //example of event actions on dropwdown
    (function() {
        $('#inputNotificationTypeCreate').on('changed.bs.select', function(e) {
            var selectedVaue = $(this).selectpicker('val').toUpperCase();
            if (selectedVaue === 'Manage access rule'.toUpperCase()) {
                $('.accessRules').css('display', 'block');
                $('.actionRules').css('display', 'none');
            }
            if (selectedVaue === 'Manage action rule'.toUpperCase()) {
                $('.accessRules').css('display', 'none');
                $('.actionRules').css('display', 'block');
            }
        });
    })();

    //uploadfile
    (function() {
        $('input[type="file"]').change(function() {
            var value = $(this).val().replace(/^.*\\/, ""),
                name = '<span class="file-name">' + value + '</span>';
            $(this).parent().parent().children('span.file-name').remove();
            $(this).parent().after(name);
        });
    })();


});
