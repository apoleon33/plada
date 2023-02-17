import { writable } from 'svelte/store';

const db = writable({
	chats: [
		{
			id: 0,
			name: 'Chamallow',
			link: '/chats/chamallow/Chamallow.PNG',
			description:
				"Né et trouvé dans la rue avec ses trois frères, Chamallow est le dernier de sa fratrie a ne pas avoir été adopté! Il a pourtant bien évolué dans sa famille d'accueil et adore les câlins et interactions avec les humain. Il est testé FIV/FELV négatif et apprécierait la présence d'un autre congénère pour jouer. Nous recherchons pour lui une famille sans enfants en bas-âge, et si extérieur, un qui soit sécurisé.",
			naissance: 2020,
			sexe: 'Mâle',
			type: 'Européen',
			additionnalPhoto: ['/chats/chamallow/chamallow2.jpg', '/chats/chamallow/chamallou.jpg']
		},
		{
			id: 1,
			name: 'Zoya',
			link: '/chats/zoya/Zoya.PNG',
			description:
				"Secourue du Bon Coin par une bénévole, cette jolie minette à la couleur atypique recherche toujours sa famille pour la vie. Elle est extrêmement sociable, ok chiens et chats et FIV/FELV négatif. C'est une princesse adorable avec tout le monde qui fera le bonheur de ses futurs adoptants. Nous recherchons pour elle une famille sans enfants en bas-âge et si extérieur, un qui soit sécurisé.",
			naissance: 2021,
			sexe: 'Femelle',
			type: 'Européen',
			additionnalPhoto: [
				'/chats/zoya/Zoya (2).PNG',
				'/chats/zoya/zoya3.jpg',
				'/chats/zoya/zoya4.jpg'
			]
		},
		{
			id: 2,
			name: 'Joy',
			link: '/chats/joy/Joy.PNG',
			description:
				"Joy est un adorable chat ayant énormément souffert. Secouru in extremis de plus d'un an d'errance, nous l'avons trouvé rempli de parasites, avec une rate gonflée et une stomatite importante. Il a également dû être recastré, et conserve à ce jour des soucis d'incontinence qui font toujours l'objet d'investigations. C'est un chat adorable qui a terriblement envie de vivre. Il vit actuellement en FALD, mais nous ne desespérons pas de lui trouver une famille définitive, patiente et surtout compréhensive concernant les pipis hors litière. Nous recherchons pour lui une famille sans enfants en bas-âge ni autres chats, et si extérieur, un qui soit sécurisé.",
			naissance: 2019,
			sexe: 'Mâle',
			type: 'Main Coon',
			additionnalPhoto: ['/chats/joy/Joy (2).PNG', '/chats/joy/joy2.jpg', '/chats/joy/joy3.jpg']
		},
		{
			id: 3,
			name: 'Maxou',
			link: '/chats/maxou/Maxou.PNG',
			description:
				"Habitué à vivre dehors et en groupe, Maxou a été secouru à la suite du décès de la dame qui le nourrissait. C'est un chat discret et timide, mais avec du temps et de la patience il saura vous faire confiance et s'épanouir. Il est ok chats. Nous recherchons pour lui une famille sans enfants en bas-âge, et si extérieur, un qui soit sécurisé.",
			naissance: 2016,
			sexe: 'Mâle',
			type: 'Européen poils longs',
			additionnalPhoto: [
				'/chats/maxou/maxou2.jpg',
				'/chats/maxou/maxou3.jpg',
				'/chats/maxou/maxou4.jpg',
				'/chats/maxou/maxou5.jpg'
			]
		},
		{
			id: 4,
			name: 'Papili',
			link: '/chats/papili/Papili.PNG',
			description:
				"Aujourd'hui très bienportant, Papili a été secouru de longues années d'errance il y a peu et est arrivé à l'association parasité, maigre et avec de gros problèmes dentaires. C'est un chat adorable qui a besoin d'être mis en confiance, mais qui devient incroyablement câlin et affectueux quand à l'aise. On lui a retiré plusieurs dents, il mange uniquement de la pâtée mais ne présente pas d'autres problèmes particulier. Il s'entend très bien avec ses congénères et cherche aujourd'hui sa famille pour la vie. Nous recherchons pour lui une famille sans enfants en bas-âge, et si extérieur, un qui soit sécurisé.",
			naissance: 2013,
			sexe: 'Mâle',
			type: 'Européen poils mi-longs',
			additionnalPhoto: []
		}
	],
	chiens: [
		{
			id: 0,
			name: 'Shelby',
			link: '/chiens/shelby/shelby.jpg',
			description: "Shelby est une petite chienne ayant passé sa vie en vase clos avec ses humains, elle est donc très exclusive. C'est par ailleurs un amour de boule de poils, intelligente, vive et pleine d'amour à donner et à recevoir. Elle est dynamique mais sait aussi se poser, et s'adaptera aussi bien à une vie en appartement qu'en maison avec jardin (bien sécurisé!). Shelby est très douce et câline, et très proche de l'homme, elle espère activement trouver un foyer. C'est un chien propre, rien à signaler niveau santé il faudra juste qu'elle soit le seul animal du foyer! ",
			naissance: 2012,
			sexe: 'Femelle',
			type: 'Croisé Bouledogue/Chihuahua',
			additionnalPhoto: ['/chiens/shelby/shelby2.jpg', '/chiens/shelby/shelby2.jpg', '/chiens/shelby/shelby3.jpg', '/chiens/shelby/shelby4.jpg', '/chiens/shelby/shelby5.jpg']
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
	],
	autres: []
});

export default db;
