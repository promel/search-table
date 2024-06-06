$(document).ready(() => {
    $.ajax({
        method: "POST",
        url: 'https://www.hansafrique.co.za/Home/GetallCat',
    }).done((response) => {

        const data = response.result.map((item)=>[
            item["OEM_Part"],
            item["PCB_Part"],
            item["HFR_Part"],
            item["LUK_Part"],
            item["Tractor_Model"],
        ]
    );
    $('#table_id').DataTable( {
            data: data
            } )
        });
});

