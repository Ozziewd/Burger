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
$("#burgerName").submit((e)=>{
    e.preventDefault()
    const name = $("#name").val()
    console.log(name)
    $.post("/api/burger", {name:name})
    .then((results)=>{
        console.log(results)
        location.reload()
    })


})