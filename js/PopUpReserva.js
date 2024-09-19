var btn_show_infos_reserva = document.getElementById("btn-show-infos-reserva")
var btn_close_infos_reserva = document.getElementById("btn-close-infos-reserva")
var popUp_info_reserva = document.querySelector(".popUp-info-reserva")

btn_show_infos_reserva.onclick = function(){
    console.log("xxxxxxxx")
    popUp_info_reserva.showModal()
    document.body.style.overflow = "hidden"
    popUp_info_reserva.style.top = "50%"
}
btn_close_infos_reserva.onclick = function(){
    popUp_info_reserva.close()
     document.body.style.overflow = "auto"
      popUp_info_reserva.style.top = "40%"
}