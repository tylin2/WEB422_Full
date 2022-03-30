async function getAllNames(){
    try{
        let res = await fetch("/api/names");
        let data = await res.json();

        let rows = "";

        for(let i = 0; i < data.length; i++){
            rows += `<tr data-id="${i}"><td>${data[i].fName}</td><td>${data[i].lName}</td></tr>`;
        }
        
        $("#names-table tbody").html(rows);

    }catch(err){
        console.log(err);
    }
}

// $(document).ready(function(){
//     console.log("DOM is ready - according to jQuery");
// });

$(function(){ // shorthand for $(document).ready(function(){});

    console.log("DOM is ready - according to jQuery");

    getAllNames();

    let rows = $("#names-table tbody tr");

    rows.each(function(index){
        if(index % 2 == 0){
            $(this).css({"background-color": "#eff6f7"});
        }
    });

    // wire up click event

    $("#names-table tbody").on("click", "tr", function(e){
        let id = $(this).attr("data-id");
        console.log(`row ${id} clicked`);

        $("#names-modal .modal-body").html(`<p>Name at index ${id} clicked</p>`);

        $("#names-modal").modal({
            backdrop: "static",
            keyboard: false
        });
    });

    $("#names-table tbody").append(`<tr data-id="3"><td>Name</td><td>Four</td></tr>`)

});

