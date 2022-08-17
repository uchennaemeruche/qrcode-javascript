const form = document.getElementById("generate-form")
const qrdiv = document.getElementById("qrcode")



const generateQRCOde = (url, size) =>{
   
   const qrcode = new QRCode('qrcode', {
    text:url, 
    width: size, 
    height: size
   })
}

const toggleLoader = (visible = false) =>{
    document.getElementById('loader').style.display = visible ? 'block' : 'none'
}

clearForm = () =>{
    qrdiv.innerHTML = ''
}

toggleLoader(false)
form.addEventListener('submit', (e) =>{
    e.preventDefault();

    clearForm()
    
    const url = document.getElementById('url').value
    const size = document.getElementById('size').value

   if(url === ''){
    alert('Please enter a URL')
    return
   }
   
   toggleLoader(true)

   setTimeout(() =>{
    toggleLoader(false)
    generateQRCOde(url, size)
   }, 1000)

})

