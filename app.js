const btnDownload = document.querySelector('.download-img');
const fileChange = document.querySelector('.file-input');
const inputs = document.querySelectorAll('.input');
const btnSubmit = document.querySelector('.btn');
const img = document.querySelector('.img');

let persons = {}
let arr = []
const imgDownload = document.querySelector('.img-download')


//Functions
let triggerHandler = () => fileChange.click();

function changeHandler(ev) {

    let files = Array.from(ev.target.files)
    files.forEach(file => {

        let reader = new FileReader()
        reader.onload = ev => {

            img.src = ev.target.result
            btnDownload.style.display = 'none'
            let closeBtn = document.createElement('i')
            closeBtn.classList.add('fa-solid', 'fa-xmark')
            imgDownload.append(closeBtn)

            closeBtn.onclick = function () {
                btnDownload.style.display = 'block'
                closeBtn.remove()
                img.src = 'https://sun9-81.userapi.com/sun9-13/impg/c854124/v854124998/1ea413/cBMR8dIoJsM.jpg?size=604x580&quality=96&sign=e9fa3620a9b047b563fdb6b92d773728&c_uniq_tag=MLeazEoW74ryoQYNKBEzYp3mB7l93evycGDo2mjFmhA&type=album';

            }


        }


        reader.readAsDataURL(file)
    })


}

function dataInfoHandler() {

    inputs.forEach(input => {

        let placeholderElement = input.getAttribute('placeholder')


        persons[placeholderElement] = input.value

    });

    arr.push(persons)
    localStorage.setItem('persons', JSON.stringify(arr))
    arr = JSON.parse(localStorage.getItem('persons'));




}


btnDownload.addEventListener('click', triggerHandler);
fileChange.addEventListener('change', changeHandler);

btnSubmit.addEventListener('click', dataInfoHandler);



