const form=document.querySelector("form")
const fio=document.querySelector("#fio")
const myplace=document.querySelector("#myplace")
const dos=document.querySelector("#dos")
const persons=document.querySelector("#persons")
const nigts=document.querySelector("#nigts")

form.addEventListener ("submit", function(event){
    event.preventDefault()
    document.querySelector("#p1").innerHTML="<h3>ФИО:"+fio.value+"</h3>"
    document.querySelector("#p2").innerHTML="<h3>Куда едем:"+myplace.value+"</h3>"
    document.querySelector("#p3").innerHTML="<h3>Когда едем:"+dos.value+"</h3>"
    document.querySelector("#p4").innerHTML="<h3>Количество человек:"+persons.value+"</h3>"
    document.querySelector("#p5").innerHTML="<h3>Количество ночей:"+nigts.value+"</h3>"

})
window.addEventListener("scroll",function(event){
    console.log (scrollY)
    header_h1=document.querySelector("header h1")
    if (scrollY > 100 && scrollY<225) {
       header_h1.style.marginLeft=scrollY-90+"px"
    }
 })





 const travel=document.querySelector("header h1")
 window.addEventListener("scroll", function(event){
    console.log(scrollY)
    if (scrollY>100) {
       travel.style.marginLeft=scrollY*-1+100+"px"
    }
    else {
       travel.style.marginLeft="50px"
    }
 })
 
 const alaskaL=document.querySelector("#left")
 const alaskaR=document.querySelector("#right")
 window.addEventListener("scroll", function(event){
    if (scrollY>600){
       alaskaL.style.transform="translateX(-100px)"
       alaskaR.style.transform="translateX(100px)"
    }
    if (scrollY>1000){
       alaskaL.style.transform="translateX(0)"
       alaskaR.style.transform="translateX(0)"
          }
       
 })
 const chImg=document.querySelector("#ch img")
 const chTxt=document.querySelector("#ch div")
 console.log(chImg,chTxt)
 window.addEventListener("scroll", function(event){
   
    if (scrollY>1500){
      console.log("lala")
       chTxt.style.transform="translateX(-100px)"
       chImg.style.transform="rotate(30deg) translateX(100px)"
    }
    if (scrollY>1900){
       chTxt.style.transform="translateX(0)"
       chImg.style.transform="rotate(0) translateX(0)"
          }
       
 })

 const egim=document.querySelectorAll("#Egypt img")
 window.addEventListener("scroll", function(event){
   
    if (scrollY>2500){

      egim[0].style.transform="translateX(-100px) rotate(360deg)"
      egim[1].style.transform="rotate(360deg)"
    }
    if (scrollY>2800){
      egim[0].style.transform="translateX(0) rotate(0)"
      egim[1].style.transform="rotate(0)"
          }
       
 })

 const gr=document.querySelector("#righttt")
 window.addEventListener("scroll", function(event){
    if (scrollY>4800){
      gr.style.transform="skewY(5deg)"
    }
    if (scrollY>4850){
       gr.style.transform="skewY(0)"
          }
       
 })