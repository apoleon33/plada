import { writable } from 'svelte/store';

const db = writable({
	chats: [
		{
			id: 0,
			name: 'Albert',
			link: 'https://static.pratique.fr/images/unsized/ch/chat-propre.jpg',
			description:
				'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
			naissance: 2017,
			sexe: 'Male',
			type: 'Européen',
			additionnalPhoto: [
				'https://www.eleveurs-online.com/data/evolutions/13/evol-12666.1000.jpg',
				'https://media.gerbeaud.net/2021/09/640/chat-bengal.jpg',
				'https://media-eu.husse.com/media/65/d2/4f/1658235546/chat-bengal-husse_%281%29.webp'
			]
		},
		{
			id: 1,
			name: 'Alex',
			link: 'https://tse4.mm.bing.net/th?id=OIP.xfM1HC9BTg4GRhk8EHDdeQHaEo&pid=Api',
			description: 'une belle description',
			naissance: 2014,
			sexe: 'Femelle',
			type: 'Main Coon',
			additionnalPhoto: []
		},
		{
			id: 2,
			name: 'Toro',
			link: 'https://lemagduchat.ouest-france.fr/images/dossiers/2022-07/vocabulaire-chat-060132.jpg',
			description: 'une belle description',
			naissance: 2014,
			sexe: 'Femelle',
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
