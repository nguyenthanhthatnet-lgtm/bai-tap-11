animals = [
    { ten: "Bò", anh: "image/anh bo/bo1.png", thuvien: ["image/anh bo/bo1.png", "image/anh bo/bo2.png", "image/anh bo/bo3.png",
        "image/anh bo/bo4.png", "image/anh bo/bo5.png", "image/anh bo/bo6.png", "image/anh bo/bo7.png","image/anh bo/bo8.png"
    ] },
    { ten: "Cá", anh: "image/anh ca/ca1.png", thuvien: ["image/anh ca/ca1.png", "image/anh ca/ca2.png", "image/anh ca/ca3.png",
        "image/anh ca/ca4.png", "image/anh ca/ca5.png", "image/anh ca/ca6.png", "image/anh ca/ca7.png","image/anh ca/ca8.png"
    ] },
    { ten: "Gà", anh: "image/anh ga/ga1.png", thuvien: ["image/anh ga/ga1.png", "image/anh ga/ga2.png", "image/anh ga/ga3.png",
        "image/anh ga/ga4.png", "image/anh ga/ga5.png", "image/anh ga/ga6.png", "image/anh ga/ga7.png","image/anh ga/ga8.png"
    ] },
    { ten: "Khỉ", anh: "image/anh khi/khi1.png", thuvien: ["image/anh khi/khi1.png", "image/anh khi/khi2.png", "image/anh khi/khi3.png",
        "image/anh khi/khi4.png", "image/anh khi/khi5.png", "image/anh khi/khi6.png", "image/anh khi/khi7.png","image/anh khi/khi8.png"
    ] },
    { ten: "Voi", anh: "image/anh voi/voi1.png", thuvien: ["image/anh voi/voi1.png", "image/anh voi/voi2.png", "image/anh voi/voi3.png",
        "image/anh voi/voi4.png", "image/anh voi/voi5.png", "image/anh voi/voi6.png", "image/anh voi/voi7.png","image/anh voi/voi8.png"
    ] }
];
const animalListDiv = document.getElementById('animalList');
if (animalListDiv) {
    animals.forEach(animal => {
        const card = document.createElement('div');
        card.className = 'animal-card';
        card.innerHTML = `
            <img src="${animal.anh}" alt="${animal.ten}">
            <h3>${animal.ten}</h3>
        `;
        card.onclick = function() {
            localStorage.setItem('selectedAnimal', JSON.stringify(animal));
            window.location.href = 'detail.html';
        };
        animalListDiv.appendChild(card);
    });
}