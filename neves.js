//document.getElementById("calc1").addEventListener("click",calc);

// function calc() {
//     let a=document.getElementById("calc1");
//     let calc1=0;
//     if (a.style.filter==="" || a.style.filter==="grayscale(100%)") {
//       a.style.filter="grayscale(0%)";
//       let calc1=228;
//     }
//     else {
//         a.style.filter = "grayscale(100%)";
//         let calc1=0;
//     }
//     return calc1;
// }
// let a = calc()===undefined ? 0 : calc();


    $(function(){
        $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
        });
    });

