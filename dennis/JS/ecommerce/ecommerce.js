function traer(categoryProduct) {
	const telefonoParaContacto = 51980943681;
	//const urlRaiz = "https://localhost:8080";
	//const urlRaiz = "http://18.228.203.151:8080";
	const urlRaiz = "https://maxicusco.net";
	//const urlRaiz = "https://dry-plateau-16443.herokuapp.com";
	const url = `${urlRaiz}/api/v1/products`;
	const cajaGrande = document.getElementById('articulos');
	cajaGrande.innerHTML = "";
	window
		.fetch(url)
		.then((respuesta) => respuesta.json())
		.then((responseJson) => {
			const todosLosElementos = [];
			responseJson.forEach((elemento) => {
				if (elemento.category == categoryProduct) {
					const container = document.createElement('article');
					//container.id = elemento.id;

					const imagen = document.createElement('img');
					imagen.src = elemento.imageUrl;

					const detalles = document.createElement('div');
					detalles.className = 'detalles'
					const title = document.createElement('h1');
					const tituloProduct = elemento.name;
					title.textContent = tituloProduct;
                    
					const price = document.createElement('h2');
					const priceNumber = elemento.price;
					price.textContent = `S/${priceNumber}`;
					detalles.append(title, price);
					/* 
					const callToAction = document.createElement('div');
					callToAction.className = 'calltoaction';
					const link = document.createElement('a');

					const api = `https://api.whatsapp.com/send/?phone=${telefonoParaContacto}&text=`
					const texto = `Hola estoy interesado en el producto: ${tituloProduct}. Necesito más información.`;
					const espacio = " ";
					const newArray = texto.split(espacio);
					newString = newArray.join("%20");
					const final = `${api}${newString}`;

					link.href = final;
					const wsp = document.createElement('div');
					wsp.className = 'wsp';
					const contact = document.createElement('p');
					contact.textContent = 'PEDIR';
					const icon = document.createElement('img');
					icon.src = '/icons/whatsapp3.png';
					icon.alt = 'icono de Whatsapp'
					wsp.append(contact);
					link.append(wsp);
					callToAction.append(link); */
					container.append(imagen, detalles, /* callToAction */);
					container.className = 'articulos__container';
					container.classList.add = 'column-1';
					todosLosElementos.push(container);

					const cajaGrande = document.getElementById('articulos');

					cajaGrande.append(...todosLosElementos);
				}
				//masonryLayout(document.getElementById('articulos'), document.querySelectorAll('.articulos__container'), 2)
			});
		})
}
traer('termos');

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

