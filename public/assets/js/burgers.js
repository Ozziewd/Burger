console.log("loaded")
$(".devoure").click(function (){
    console.log("rest")
    const id = $(this).val()
    $.ajax({
        method: "PUT",
        url: "/api/burger",
        data: {burgerId: id}
    }).then((results)=>{
        console.log(results)
        location.reload()
    })
})