/**
 * Created by stagiaire07 on 21/03/2016.
 */

$(document).ready(function(){

    var Nbre = Math.floor((Math.random()*10)+1);

    $("#Btn1").click(function (){
        if($("#TxtBox1").val() > Nbre){
            $("#Label2").html("Trop grand");
        }
        else if ($("#TxtBox1").val() < Nbre){
            $("#Label2").html("Trop petit");
        }
        else if ($("#TxtBox1").val() == Nbre){
            $("#Label2").html("Gagné");
        }
    });


});
