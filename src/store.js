import { writable } from 'svelte/store';

const db = writable({
	chats: [
		{
			id: 0,
			name: 'Chamallow',
			link: '/Chamallow.jpg',
			description:
				"Né et trouvé dans la rue avec ses trois frères, Chamallow est le dernier de sa fratrie a ne pas avoir été adopté! Il a pourtant bien évolué dans sa famille d'accueil et adore les câlins et interactions avec les humain. Il est testé FIV/FELV négatif et apprécierait la présence d'un autre congénère pour jouer",
			naissance: 2020,
			sexe: 'Mâle',
			type: 'Européen',
			additionnalPhoto: [
				'https://www.eleveurs-online.com/data/evolutions/13/evol-12666.1000.jpg',
				'https://media.gerbeaud.net/2021/09/640/chat-bengal.jpg',
				'https://media-eu.husse.com/media/65/d2/4f/1658235546/chat-bengal-husse_%281%29.webp'
			]
		},
		{
			id: 1,
			name: 'Zoya',
			link: '/Zoya.jpg',
			description: "Secourue du Bon Coin par une bénévole, cette jolie minette à la couleur atypique recherche toujours sa famille pour la vie. Elle est extrêmement sociable, ok chiens et chats et FIV/FELV négatif. C'est une princesse adorable avec tout le monde qui fera le bonheur de ses futurs adoptants",
			naissance: 2021,
			sexe: 'Femelle',
			type: 'Européen',
			additionnalPhoto: []
		},
		{
			id: 2,
			name: 'Joy',
			link: '/Joy.jpg',
			description: 'Joy est un adorable chat ayant énormément souffert',
			naissance: 2019,
			sexe: 'Mâle',
			type: 'Main Coon',
			additionnalPhoto: []
		}
	],
	chiens: [
		{
			id: 0,
			name: 'Max',
			link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Golden_retriever_stehfoto.jpg/1200px-Golden_retriever_stehfoto.jpg',
			description: 'Max est un chien joueur et affectueux.',
			naissance: 2016,
			sexe: 'Male',
			type: 'Golden Retriever',
			additionnalPhoto: [
				'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Golden_retriever_stehfoto.jpg/1200px-Golden_retriever_stehfoto.jpg',
				'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Golden_Ret	riever_Dukedestiny01_drvd.jpg/640px-Golden_Retriever_Dukedestiny01_drvd.jpg'
			]
		},
		{
			id: 1,
			name: 'Bella',
			link: 'https://jardinage.lemonde.fr/images/dossiers/2017-06/berger-allemand-2-105204.jpg',
			description: 'Bella est un chien calme et protecteur.',
			naissance: 2018,
			sexe: 'Femelle',
			type: 'Berger Allemand',
			additionnalPhoto: [
				'https://img2.storyblok.com/f/83829/1200x628/1b46b4ef6e/chien-berger-allemand.jpg',
				'https://img2.storyblok.com/f/83829/1200x628/1b46b4ef6e/chien-berger-allemand.jpg'
			]
		},
		{
			id: 2,
			name: 'Charlie',
			link: 'https://i.f1g.fr/media/cms/orig/2022/01/28/a80ab1d3bff3218f5b9c883b078d2e76bdca16b1e85f85cd86715ffc937ca083.jpg',
			description: 'Charlie est un chien jovial et courageux.',
			naissance: 2020,
			sexe: 'Male',
			type: 'Bulldog',
			additionnalPhoto: [
				'https://i.f1g.fr/media/cms/orig/2022/01/28/a80ab1d3bff3218f5b9c883b078d2e76bdca16b1e85f85cd86715ffc937ca083.jpg',
				'https://jardinage.lemonde.fr/images/dossiers/2019-04/bulldog-anglais-133058.jpg'
			]
		}
	]
});

export default db;
