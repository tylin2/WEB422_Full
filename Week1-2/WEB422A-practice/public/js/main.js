async function getAllNames(){
    try{
        let res = await fetch("/api/names");
        let data = await res.json();
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

// $(document).read(function(){
//     console.log("DOM is ready - according to jQuery");
// });
//console.log("DOM is ready");
$(function(){
    console.log("DOM is ready - according to jQuery");
    let rows = $("#names-table tbody tr");
    rows.each(function(index){
        if(index % 2 ==0){
            $(this).css({"background-color":"#eff6f7"});
        }        
        //console.log(rows);
    });

    //wire up click event

    $("#name-table tbody").on("click","tr",function(e){
        let id = $(this).attr("data-id");
        console.log(`row ${id} clicked`);
    });

    $("#name-table tbody").append(`<tr data-id="3"><td>Name</td><td>Four</td></tr>`)
    
});
