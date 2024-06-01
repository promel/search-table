$(document).ready(() => {
    $.ajax({
        method: "POST",
        url: 'https://www.hansafrique.co.za/Home/GetallCat',
    }).done((data) => {

            // And a simple one
            for (const item of data.result) {
                const row = $("<tr>");
                // console.log(item);
                for (const value of Object.entries(item).values()) {
                    // console.log(value);
                    $("<td>", {
                        html: value,
                        style: "padding:2px;"
                    }).appendTo($(row));
                }
                row.appendTo($("#tblCatalogueUpdateList"));
            }
        });

    $("#tblCatalogueUpdateList").fancyTable({
        pagination: true,
        exactMatch: "auto",
        perPage: 4
    });
});