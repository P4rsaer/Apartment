// programm for water calc

const tr = () =>{

    const num1 = document.getElementById("wprice").value;
    
    document.getElementById("waterU1").innerText= (+num1 / 14 * 2).toLocaleString('en-US')




    const num2 = document.getElementById("wprice").value;
    
    document.getElementById("waterU2").innerText= (+num2 / 14 * 4).toLocaleString('en-US')





     const num3 = document.getElementById("wprice").value;
    
    document.getElementById("waterU3").innerText= (+num3 / 14 * 0).toLocaleString('en-US')




     const num4 = document.getElementById("wprice").value;
    
    document.getElementById("waterU4").innerText= (+num4 / 14 * 3).toLocaleString('en-US')





     const num5 = document.getElementById("wprice").value;
    
    document.getElementById("waterU5").innerText= (+num5 / 14 * 0).toLocaleString('en-US')




     const num6 = document.getElementById("wprice").value;
    
    document.getElementById("waterU6").innerText= (+num6 / 14 * 1).toLocaleString('en-US')





     const num7 = document.getElementById("wprice").value;
    
    document.getElementById("waterU7").innerText= (+num7 / 14 * 2).toLocaleString('en-US')





     const num8 = document.getElementById("wprice").value;
    
    document.getElementById("waterU8").innerText= (+num8 / 14 * 2).toLocaleString('en-US')


}






//program for gas calc 


const tr1 = () => {
    const num1 =document.getElementById("gprice").value;
    document.getElementById("gasU1").innerText = (+num1 / 71.38).toLocaleString('en-US')
    
    const num2 =document.getElementById("gprice").value;
    document.getElementById("gasU2").innerText = (+num2 / 74.99).toLocaleString('en-US')
    
    
    const num3 =document.getElementById("gprice").value;
    document.getElementById("gasU3").innerText = (+num3 / 69.48).toLocaleString('en-US')
    
    const num4 =document.getElementById("gprice").value;
    document.getElementById("gasU4").innerText = (+num4 / 79.22).toLocaleString('en-US')
    
    
    const num5 =document.getElementById("gprice").value;
    document.getElementById("gasU5").innerText = (+num5 / 74.83).toLocaleString('en-US')
    
    
    const num6 =document.getElementById("gprice").value;
    document.getElementById("gasU6").innerText = (+num6 / 69.32).toLocaleString('en-US')
    
    
    const num7 =document.getElementById("gprice").value;
    document.getElementById("gasU7").innerText = (+num7 / 91).toLocaleString('en-US')
    
    
    const num8 =document.getElementById("gprice").value;
    document.getElementById("gasU8").innerText = (+num8 / 132.21).toLocaleString('en-US')

    
    
}