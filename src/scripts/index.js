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

    const saveLink = document.getElementById('save-link')
    if(saveLink)
        saveLink.remove()
}

const createSaveButton = (url) =>{
    const link = document.createElement('a')
    link.id = 'save-link'
    link.classList = 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5'
    link.href = url

    link.download = 'qrcode'
    link.innerHTML = 'Save Image'
    document.getElementById('output').appendChild(link)
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

    setTimeout(() =>{
        const savedUrl = qrdiv.querySelector('img').src
        createSaveButton(savedUrl)
    }, 50)
   }, 1000)

})

