jQuery(document).ready(function ($) {
    $('a[href="#hide-circle-types"]').on('click', function (e) {
        $(this).closest('td').find('div.circle-post-types').hide();
        $(this).hide();
        $(this).closest('td').find('a[href="#show-circle-types"]').parent().show();
        return false;
    });
    $('a[href="#show-circle-types"]').on('click', function (e) {
        $(this).closest('td').find('div.circle-post-types').show();
        $(this).parent().hide();
        $(this).closest('td').find('a[href="#hide-circle-types"]').show();
        return false;
    });
    $('input.is_circle').on('change', function () {
        var do_show = $(this).is(":checked");
        $(this).parent().siblings('table').toggle(do_show);

        if (do_show) {
            $(this).closest('td').find('a[href="#show-circle-types"]').click();
        }
    });
    $('input.ppc-check-all').on('click', function () {
        var elems = $(this).closest('td').find('input[type="checkbox"][class!="ppc-check-all"]');
        $(elems).prop('checked', $(this).is(":checked"));
    });
});