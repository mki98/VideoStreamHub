const UploadForm = document.getElementById('upload-form')
const progressWrapper = document.getElementById('progress-wrapper');


UploadForm.addEventListener('submit',async (e)=>{
    e.preventDefault();
    let file = document.getElementById("file1").files[0]
    console.log(file)
    if(file){
        let form = new FormData();
        form.append("file",file,file.name)
        progressWrapper.style.display = 'block';
        try {
            const res=await axios.post('/upload/', form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });
            alert('File uploaded successfully.');
            progressWrapper.innerHTML = `<span>To view ur uploaded file click on the link below</span> <br> <a href="/watch/${res.data.fileId}" target="_blank">Click here to watch uploaded video</a> `;
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Failed to upload file.');
        } finally {
            document.getElementById("file1").value = null
            document.getElementById("file-label").textContent='Choose file'
            file =''            
        }
   
    }
})




