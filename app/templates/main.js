<%_ if (includeUnit) { -%>
export function greeting() {
    return '\'Allo \'Allo!';
}

console.log(greeting());
<%_ } else { -%>
    console.log('\'Allo \'Allo!');
<%_ } -%>

<%_ if (includeBootstrap) { -%>
// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });
<%_ } -%>
