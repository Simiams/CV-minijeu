import React from "react";

export const userData = {
    name: "Simon",
    lastName: "Convert",
    ddn: "26/11/2003",
    mail: "Simon.Convert@gmail.com",
    phone: "+33763329647",
    city: "Nantes",
    domainsActivity: ["Web", "Infrastructure réseau", "Cybersecurité", "Programation"],
    searchFor: {postTitle: "Alternance", startDate: "rentée 2023"},
    school: {name: "EPSI", fullname: "Ecole Privée des Science Informatique", grade: "2eme années de bachelor"},
    description: "Ce n'est que ma deuxiéme années et pourtant je commence a acquérir de solides bases dans le monde du numérique. Aussi bien en; Devellopement Web avec php, NodeJS, JS, et \"html\", qu'en Programmation Python, C# et C++ mais aussi en Infrastructure réseau. Passionné, je me forme de mon côté à la cybersécurité et les differents outils que nous offre Kali-Linux.",
    sectors: [
        {id: 1, name: "Web", image: "../media/CV/sectors/Pweb.png"},
        {id: 2, name: "Prog", image: "../media/CV/sectors/Pprog.png"},
        {id: 3, name: "Cyber", image: "../media/CV/sectors/Pcyber.png"},
        {id: 4, name: "Res", image: "../media/CV/sectors/Pres.png"}
    ],
    experiences: [
        {
            id: 1,
            post: "Developer C#",
            period: "mai 2022",
            desc: " Stage de 5 semaines sur un outil annexe d'un logiciel de création de template (style WordPress).",
            competences: ["C#", "XAML", "threading", "travail en entreprise"],
            link: "https://www.stramatel.com/fr/"
        },
        {
            id: 2,
            post: "Saisonnier",
            period: "2020,2021,2022",
            desc: "Saisonnier dans les marais salant de Guérande 3 saisons consecutives",
            competences: ["travail d'équipe", "organisation"],
            link: "https://www.tourismebretagne.com/destinations/les-10-destinations/bretagne-loire-ocean/guerande-et-ses-marais-salants/"
        },
    ],
}
