const box_photo = document.querySelector('.photos_box')
const points = document.querySelectorAll('.point')
const photos = document.querySelectorAll('.photo')

const countPhotos = 100/points.length

box_photo.style.width=`calc(100%*${points.length})`

photos.forEach(cadaPunto=>
cadaPunto.style.width = `calc(100%/${points.length})`
)


 points.forEach( (cadaPunto, i) => {
    //para mover las fotos
    points[i].addEventListener('click', ()=>{
        
        let position = i
        let operacion = position * countPhotos

        box_photo.style.transform = `translateX(-${operacion}%)`
    //para que cambie el color de los puntos
    points.forEach((cadaPunto, i) => {
        points[i].classList.remove('activo')
        });
        points[i].classList.add('activo')
    })
});

