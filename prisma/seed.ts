const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {

  const adminUser = await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: {},
    create: {
      email: "admin@example.com",
      name: "admin",
      password: "745f9e04-fbba-4116-b87a-0781b18d3051"
    },
  });

  const quiz4 = await prisma.quiz.create({
    data: {
      logo: "2-les-mamans.png",
      theme: "Les mamans",
      authorId: adminUser.id,
      questions: {
        create: [
          {
            question: "Dans une célèbre comptine française, qui a « perdu son chat » ?",
            anecdote: "Les paroles changent parfois selon les différentes versions de la chanson, mais le thème reste toujours le même.",
            answers: {
              create: [
                { answer: "La mère Michel", isCorrect: true },
                { answer: "La mère Claire", isCorrect: false },
                { answer: "La mère Sylvie", isCorrect: false },
                { answer: "La mère Claude", isCorrect: false }
              ]
            }
          },
          {
            question: "Dans 'Les Misérables' de Victor Hugo, qui est la fille de Fantine ?",
            anecdote: "Les Thénardier vont utiliser les moyens les plus sordides pour soutirer toujours plus d'argent à Fantine.",
            answers: {
              create: [
                { answer: "Cosette", isCorrect: true },
                { answer: "Enjolras", isCorrect: false },
                { answer: "Eponine", isCorrect: false },
                { answer: "Azelma", isCorrect: false }
              ]
            }
          },
          {
            question: "De qui Lily-Rose Depp, actrice et mannequin franco-américaine, est-elle la fille ?",
            anecdote: "Lily-Rose Depp a commencé sa carrière d'actrice en 2014, avec une apparition dans le film 'Tusk'.",
            answers: {
              create: [
                { answer: "Winona Ryder", isCorrect: false },
                { answer: "Kate Moss", isCorrect: false },
                { answer: "Vanessa Paradis", isCorrect: true },
                { answer: "Amber Heard", isCorrect: false }
              ]
            }
          },
          {
            question: "Lequel de ces personnages n'est pas un des enfants de Marge Simpson ?",
            anecdote: "Marge est la force moralisatrice de sa famille et essaie souvent de maintenir l'ordre dans la maison des Simpson.",
            answers: {
              create: [
                { answer: "Bart", isCorrect: false },
                { answer: "Abe", isCorrect: true },
                { answer: "Maggie", isCorrect: false },
                { answer: "Lisa", isCorrect: false }
              ]
            }
          },
          {
            question: "En 2015, quelle artiste a sorti dans son album 'Chambre 12' un single titré 'Maman' ?",
            anecdote: "Le 19 mai 2016, la maison de disque annonce que l'album a dépassé le million de ventes.",
            answers: {
              create: [
                { answer: "Louane", isCorrect: true },
                { answer: "Mylène Farmer", isCorrect: false },
                { answer: "Lio", isCorrect: false },
                { answer: "Jenifer", isCorrect: false }
              ]
            }
          },
          {
            question: "Comment se prénomme la mère de la Famille Addams dans la série télé américaine ?",
            anecdote: "Cette série est directement inspirée des personnages que dessinait Charles Addams à la fin des années trente.",
            answers: {
              create: [
                { answer: "Aurora", isCorrect: false },
                { answer: "Eva", isCorrect: false },
                { answer: "Pétunia", isCorrect: false },
                { answer: "Morticia", isCorrect: true }
              ]
            }
          },
          {
            question: "De quel héros de fiction Lily, tuée par Lord Voldemort, est-elle la mère ?",
            anecdote: "Lily Evans est née de parents moldus le 30 janvier 1960 et a une sœur, Pétunia Dursley.",
            answers: {
              create: [
                { answer: "Luke Skywalker", isCorrect: false },
                { answer: "Frodon Sacquet", isCorrect: false },
                { answer: "Harry Potter", isCorrect: true },
                { answer: "Mowgli", isCorrect: false }
              ]
            }
          },
          {
            question: "Comment appelle-t-on une femme qui enfante pour une autre personne ou un couple ?",
            anecdote: "La gestation pour autrui (GPA) est une méthode de procréation qui se pratique généralement en cas d'infertilité féminine.",
            answers: {
              create: [
                { answer: "Enfanteresse", isCorrect: false },
                { answer: "Mère-donneuse", isCorrect: false },
                { answer: "Mère-porteuse", isCorrect: true },
                { answer: "Fille-mère", isCorrect: false }
              ]
            }
          },
          {
            question: "Quelle actrice est la mère d'Albert II mais aussi de Caroline et Stéphanie de Monaco ?",
            anecdote: "Grace Kelly est morte en 1982, des suites d'un accident de voiture, sur la route de la Turbie.",
            answers: {
              create: [
                { answer: "Ingrid Bergman", isCorrect: false },
                { answer: "Grace Kelly", isCorrect: true },
                { answer: "Audrey Hepburn", isCorrect: false },
                { answer: "Bette Davis", isCorrect: false }
              ]
            }
          },
          {
            question: "Lequel de ces pays met les mamans à l'honneur durant le mois de mai ?",
            anecdote: "La date est fixée au dernier dimanche de mai, sauf si elle coïncide avec celle de la Pentecôte.",
            answers: {
              create: [
                { answer: "Luxembourg", isCorrect: false },
                { answer: "France", isCorrect: true },
                { answer: "Russie", isCorrect: false },
                { answer: "Argentine", isCorrect: false }
              ]
            }
          },
          {
            question: "Quelle actrice joue la mère de Lola dans la comédie française à succès 'LOL' ?",
            anecdote: "Pour l'anecdote, on entend la musique de 'La Boum' lorsque Charlotte fait ses courses au supermarché.",
            answers: {
              create: [
                { answer: "Sophie Marceau", isCorrect: true },
                { answer: "Monica Belucci", isCorrect: false },
                { answer: "Vanessa Paradis", isCorrect: false },
                { answer: "Valeria Golino", isCorrect: false }
              ]
            }
          },
          {
            question: "Qui a chanté : « Dans les yeux de ma mère, il y a toujours une lumière » ?",
            anecdote: "Arno est souvent surnommé « le Higelin belge » ou encore « le Tom Waits belge ».",
            answers: {
              create: [
                { answer: "Arno", isCorrect: true },
                { answer: "Benjamin Biolay", isCorrect: false },
                { answer: "Alain Chamfort", isCorrect: false },
                { answer: "Christophe", isCorrect: false }
              ]
            }
          },
          {
            question: "Dans 'Kill Bill', quel personnage joué par Uma Thurman devient mère durant son coma ?",
            anecdote: "Le premier volume de la saga est un hommage avoué au chanbara, les films de sabre japonais.",
            answers: {
              create: [
                { answer: "Daisy Domergue", isCorrect: false },
                { answer: "Jackie Brown", isCorrect: false },
                { answer: "Shosanna Dreyfus", isCorrect: false },
                { answer: "Beatrix Kiddo", isCorrect: true }
              ]
            }
          },
          {
            question: "Quelle actrice, ex petite amie de Brad Pitt, est la fille de l'actrice Blythe Danner ?",
            anecdote: "Blythe Danner est la veuve du producteur Bruce Paltrow, qui s'est éteint à la suite d'une maladie en 2002.",
            answers: {
              create: [
                { answer: "Keira Knightley", isCorrect: false },
                { answer: "Julianne Moore", isCorrect: false },
                { answer: "Cate Blanchett", isCorrect: false },
                { answer: "Gwyneth Paltrow", isCorrect: true }
              ]
            }
          },
          {
            question: "Quel film de Jane Campion présente une mère muette qui joue de la musique ?",
            anecdote: "Le film a remporté la Palme d'or du Festival de Cannes 1993, la première attribuée à une réalisatrice.",
            answers: {
              create: [
                { answer: "Sweetie", isCorrect: false },
                { answer: "La leçon de piano", isCorrect: true },
                { answer: "In the cut", isCorrect: false },
                { answer: "Bright Star", isCorrect: false }
              ]
            }
          },
          {
            question: "Quel terme spécifique désigne le fait de tuer sa mère, acte très sévèrement jugé ?",
            anecdote: "À Rome, le meurtre de parents proches, ascendants, frères, sœurs, ou patron était le pire des crimes.",
            answers: {
              create: [
                { answer: "Cannibalisme", isCorrect: false },
                { answer: "Matricide", isCorrect: true },
                { answer: "Parricide", isCorrect: false },
                { answer: "Inceste", isCorrect: false }
              ]
            }
          },
          {
            question: "Dans la Rome Antique, durant quel mois célébrait-on un fête en l'honneur des mères ?",
            anecdote: "Les Matronalia célébraient la naissance de Rome, le Printemps, les enfants et les mères.",
            answers: {
              create: [
                { answer: "Juillet", isCorrect: false },
                { answer: "Janvier", isCorrect: false },
                { answer: "Novembre", isCorrect: false },
                { answer: "Mars", isCorrect: true }
              ]
            }
          },
          {
            question: "En latin et en grec, que signifie le mot « mamma », dont le mot « maman » est dérivé ?",
            anecdote: "Pour les organismes non sexués, « mère » est parfois utilisé pour dire « parent ».",
            answers: {
              create: [
                { answer: "Lait", isCorrect: false },
                { answer: "Sein", isCorrect: true },
                { answer: "Vie", isCorrect: false },
                { answer: "Naissance", isCorrect: false }
              ]
            }
          },
          {
            question: "Quelle actrice incarne une mère qui tente de retrouver son fils kidnappé dans 'L'échange' ?",
            anecdote: "Après plus de trente réalisations, il s'agit seulement de la septième dans laquelle Clint Eastwood n'apparaît pas.",
            answers: {
              create: [
                { answer: "Gwyneth Paltrow", isCorrect: false },
                { answer: "Angélina Jolie", isCorrect: true },
                { answer: "Nicole Kidman", isCorrect: false },
                { answer: "Julia Roberts", isCorrect: false }
              ]
            }
          },
          {
            question: "Dans quel roman de Jules Renard le héros doit-il faire face à la haine que lui voue sa mère ?",
            anecdote: "François Lepic est surnommé « Poil de carotte » à cause de ses cheveux roux et ses taches de rousseur.",
            answers: {
              create: [
                { answer: "Poil de Carotte", isCorrect: true },
                { answer: "La Maîtresse", isCorrect: false },
                { answer: "Bucoliques", isCorrect: false },
                { answer: "L’Écornifleur", isCorrect: false }
              ]
            }
          },
          {
            question: "À quel âge Mère Teresa, de son vrai nom Agnès Gonxha Bojaxhiu, est-elle décédée en 1997 ?",
            anecdote: "Mère Teresa a été béatifiée le 19 octobre 2003, à Rome, par le pape Jean-Paul II.",
            answers: {
              create: [
                { answer: "77 ans", isCorrect: false },
                { answer: "87 ans", isCorrect: true },
                { answer: "97 ans", isCorrect: false },
                { answer: "107 ans", isCorrect: false }
              ]
            }
          },
          {
            question: "Dans 'Breaking Bad', quel est le prénom de la mère de la famille White ?",
            anecdote: "Skyler est très amoureuse de Walter, au point de prendre toutes les décisions importantes dans sa vie.",
            answers: {
              create: [
                { answer: "Rhona", isCorrect: false },
                { answer: "Angela", isCorrect: false },
                { answer: "Skyler", isCorrect: true },
                { answer: "Jayne", isCorrect: false }
              ]
            }
          },
          {
            question: "Lequel de ces groupes de musique a dans son acronyme le mot « mère » ?",
            anecdote: "Malgré sa popularité en France, le groupe NTM a été très critiqué pour la virulence de ses paroles.",
            answers: {
              create: [
                { answer: "IAM", isCorrect: false },
                { answer: "CMC", isCorrect: false },
                { answer: "NTM", isCorrect: true },
                { answer: "MIG", isCorrect: false }
              ]
            }
          },
          {
            question: "Dans 'Game of Thrones', qui est la mère d'Arya, Bran, Rickon, Sansa et Robb Stark ?",
            anecdote: "Catelyn était initialement promise au jeune Brandon Stark, héritier de Winterfell et frère d'Eddard.",
            answers: {
              create: [
                { answer: "Mélissandre", isCorrect: false },
                { answer: "Daenerys", isCorrect: false },
                { answer: "Brienne", isCorrect: false },
                { answer: "Catelyn", isCorrect: true }
              ]
            }
          },
          {
            question: "Qui a peint le tableau 'La Madone à la prairie' représentant Jésus et sa mère, Marie ?",
            anecdote: "Le tableau est l'une des œuvres qui ouvrent la série des Madones de l'artiste lors de son séjour florentin.",
            answers: {
              create: [
                { answer: "Auguste Renoir", isCorrect: false },
                { answer: "Michel-Ange", isCorrect: false },
                { answer: "Rembrandt", isCorrect: false },
                { answer: "Raphaël", isCorrect: true }
              ]
            }
          },
          {
            question: "Dans la mythologie grecque, qui est la mère d'Héraclès, un des fils de Zeus ?",
            anecdote: "Alcmène fut séduite en l'absence de son mari, par Zeus qui avait pris son apparence.",
            answers: {
              create: [
                { answer: "Alcmène", isCorrect: true },
                { answer: "Léto", isCorrect: false },
                { answer: "Dioné", isCorrect: false },
                { answer: "Déméter", isCorrect: false }
              ]
            }
          },
          {
            question: "Quelle célèbre photographie en noir et blanc a été prise en 1936 par Dorothée Lange ?",
            anecdote: "Cette célèbre photographie est devenue le symbole de la Grande Dépression aux États-Unis.",
            answers: {
              create: [
                { answer: "Douleur de mère", isCorrect: false },
                { answer: "Mère migrante", isCorrect: true },
                { answer: "Mère maternelle", isCorrect: false },
                { answer: "Mère et enfants", isCorrect: false }
              ]
            }
          },
          {
            question: "Quelle ville russe accueille la statue de la Mère-Patrie qui fut l'enjeu de combats acharnés ?",
            anecdote: "Avec son épée pointant vers le ciel, la statue défie tous ceux qui oseraient s'attaquer à ses enfants.",
            answers: {
              create: [
                { answer: "Samara", isCorrect: false },
                { answer: "Perm", isCorrect: false },
                { answer: "Volgograd", isCorrect: true },
                { answer: "Kazan", isCorrect: false }
              ]
            }
          },
          {
            question: "En quelle année Marcel Pagnol a-t-il publié 'Le Château de ma mère' ?",
            anecdote: "'Le Château de ma mère' est précédé par 'La Gloire de mon père' et suivi par 'Le Temps des secrets'.",
            answers: {
              create: [
                { answer: "1977", isCorrect: false },
                { answer: "1917", isCorrect: false },
                { answer: "1937", isCorrect: false },
                { answer: "1957", isCorrect: true }
              ]
            }
          },
          {
            question: "Quel rappeur français au succès grandissant chante le tube 'maman j’ai mal' ?",
            anecdote: "MHD est le précurseur de l'« afro trap », un mélange de musiques aux sonorités africaines et de trap.",
            answers: {
              create: [
                { answer: "Kaaris", isCorrect: false },
                { answer: "Nekfeu", isCorrect: false },
                { answer: "Booba", isCorrect: false },
                { answer: "MHD", isCorrect: true }
              ]
            }
          }
        ]
      }
    }
  });

  const quiz3 = await prisma.quiz.create({

    data: {
      logo: "1-orthoquiz.png",
      theme: "Orthoquiz",
      authorId: adminUser.id,
      questions: {
        create: [
          {
            question: "Où faut-il généralement d'abord se rendre en arrivant à l'hôpital ?",
            anecdote: "Dans le monde du travail, l'accueil consiste à orienter un patient, un client ou un visiteur et à l'aider dans ses démarches.",
            answers: {
              create: [
                { answer: "Acueil", isCorrect: false },
                { answer: "Acceuil", isCorrect: false },
                { answer: "Aceuil", isCorrect: false },
                { answer: "Accueil", isCorrect: true }
              ]
            }
          },
          {
            question: "Quel engin muni d'une planche et de deux roues est désormais électrique ?",
            anecdote: "Servant de jouet d'enfant en 1930, la trottinette est devenue un moyen de transport individuel urbain depuis les années 2010.",
            answers: {
              create: [
                { answer: "Trottinette", isCorrect: true },
                { answer: "Trottinete", isCorrect: false },
                { answer: "Trotinete", isCorrect: false },
                { answer: "Trotinette", isCorrect: false }
              ]
            }
          },
          {
            question: "À quoi procède un avion qui s'apprête à rejoindre la terre ferme ?",
            anecdote: "Au début de l'aviation, le terme employé en place de l'atterrissage était la prise de terrain, terme toujours utilisé en parapente.",
            answers: {
              create: [
                { answer: "Atterrisage", isCorrect: false },
                { answer: "Atterissage", isCorrect: false },
                { answer: "Atterrissage", isCorrect: true },
                { answer: "Aterrissage", isCorrect: false }
              ]
            }
          },
          {
            question: "Quelle idée ou concept semble parfois être le remède à tous les maux ?",
            anecdote: "Le mot est parfois redoublé, on ne parle plus simplement de panacée, mais de panacée universelle, ce qui est un pléonasme.",
            answers: {
              create: [
                { answer: "Panascée", isCorrect: false },
                { answer: "Panacée", isCorrect: true },
                { answer: "Pannacée", isCorrect: false },
                { answer: "Panassée", isCorrect: false }
              ]
            }
          },
          {
            question: "Quelle simple supposition peut être étudiée, confrontée, utilisée ou discutée ?",
            anecdote: "Une hypothèse (sentimentale, religieuse ou politique) utilisée sans intention de la vérifier constitue dans ce cas un postulat.",
            answers: {
              create: [
                { answer: "Hypotèse", isCorrect: false },
                { answer: "Hipothèse", isCorrect: false },
                { answer: "Hyppothèse", isCorrect: false },
                { answer: "Hypothèse", isCorrect: true }
              ]
            }
          },
          {
            question: "Quelle bande de faible hauteur est souvent placée au pied des murs ?",
            anecdote: "Élément décoratif et utilitaire, elle permet entre autres de cacher des raccords ou des espaces laissés par les poseurs de parquet.",
            answers: {
              create: [
                { answer: "Plynthe", isCorrect: false },
                { answer: "Plinte", isCorrect: false },
                { answer: "Plainte", isCorrect: false },
                { answer: "Plinthe", isCorrect: true }
              ]
            }
          },
          {
            question: "Quelle science a pour objet la recherche de l'origine des mots ?",
            anecdote: "L'étymologie s'appuie sur des lois de la phonétique historique (ascendance de ces mots) et sur l'évolution sémantique des termes.",
            answers: {
              create: [
                { answer: "Éthymologie", isCorrect: false },
                { answer: "Hétymologie", isCorrect: false },
                { answer: "Étymologie", isCorrect: true },
                { answer: "Étimologie", isCorrect: false }
              ]
            }
          },
          {
            question: "Que dit-on d'une femme qui engage une relation durable pour de l'argent ?",
            anecdote: "Ce terme est souvent utilisé lorsqu'une belle et jeune femme se marie avec un homme riche et beaucoup plus âgé qu'elle.",
            answers: {
              create: [
                { answer: "Vénnale", isCorrect: false },
                { answer: "Vénale", isCorrect: true },
                { answer: "Vainale", isCorrect: false },
                { answer: "Veinale", isCorrect: false }
              ]
            }
          },
          {
            question: "Quelle croyance semble être manifestement erronée au premier abord ?",
            anecdote: "Cette tradition orale propose une explication pour certains aspects fondamentaux du monde, qui a forgé ou qui véhicule ces mythes.",
            answers: {
              create: [
                { answer: "Mithe", isCorrect: false },
                { answer: "Myte", isCorrect: false },
                { answer: "Mythe", isCorrect: true },
                { answer: "Mytthe", isCorrect: false }
              ]
            }
          },
          {
            question: "Quelle cavité verticale, souvent profonde, peut être naturelle ou artificielle ?",
            anecdote: "Un puits est, à l'origine, une cavité physique verticale, connectant deux niveaux de profondeurs différentes, pénétrables ou non.",
            answers: {
              create: [
                { answer: "Puit", isCorrect: false },
                { answer: "Puis", isCorrect: false },
                { answer: "Puits", isCorrect: true },
                { answer: "Puy", isCorrect: false }
              ]
            }
          },
          {
            question: "Quelle plante annuelle ou vivace est symbole de longévité en Chine ?",
            anecdote: "Les plus connus des chrysanthèmes sont les chrysanthèmes d'automne, ou chrysanthèmes des fleuristes (pomponnettes).",
            answers: {
              create: [
                { answer: "Crysanthème", isCorrect: false },
                { answer: "Chrysantème", isCorrect: false },
                { answer: "Chrysanthème", isCorrect: true },
                { answer: "Crisanthème", isCorrect: false }
              ]
            }
          },
          {
            question: "Quel mammifère amphibien adulte n'a pas d'autre prédateur que l'homme ?",
            anecdote: "Pour séduire une femelle les hippopotames peuvent se battre jusqu'à la mort, se combattant à l'aide de leurs défenses.",
            answers: {
              create: [
                { answer: "Hipopotame", isCorrect: false },
                { answer: "Hippopotame", isCorrect: true },
                { answer: "Hipoppotame", isCorrect: false },
                { answer: "Hypopotame", isCorrect: false }
              ]
            }
          },
          {
            question: "Quelle plante Sim n'aimait-il pas dans une chanson de 1971 ?",
            anecdote: "On les rencontre dans les régions montagneuses, telles que les Alpes, les Pyrénées, le Caucase, les Carpates et l'Himalaya.",
            answers: {
              create: [
                { answer: "Rododindron", isCorrect: false },
                { answer: "Rhododindron", isCorrect: false },
                { answer: "Rhododendron", isCorrect: true },
                { answer: "Rododundron", isCorrect: false }
              ]
            }
          },
          {
            question: "Quelle infection à la couleur dorée est potentiellement mortelle ?",
            anecdote: "Si un patient n'est pas traité suffisamment tôt, et notamment s'il est immunodéprimé, il peut développer une septicémie.",
            answers: {
              create: [
                { answer: "Stafylocoque", isCorrect: false },
                { answer: "Staphilocoque", isCorrect: false },
                { answer: "Stafilocoque", isCorrect: false },
                { answer: "Staphylocoque", isCorrect: true }
              ]
            }
          },
          {
            question: "Quelle mer, presque entièrement fermée, entoure une grande partie de l'Italie ?",
            anecdote: "L'ouverture de la mer Méditerranée vers l'océan Atlantique par le détroit de Gibraltar est large d'environ quatorze kilomètres.",
            answers: {
              create: [
                { answer: "Méditerranée", isCorrect: true },
                { answer: "Médittérrannée", isCorrect: false },
                { answer: "Méditteranée", isCorrect: false },
                { answer: "Métiterrannée", isCorrect: false }
              ]
            }
          },
          {
            question: "Quel animal semi-aquatique est endémique de l'est de l'Australie ?",
            anecdote: "L'ornithorynque est l'une des cinq espèces de l'ordre des monotrèmes, seul ordre de mammifères qui pond des oeufs.",
            answers: {
              create: [
                { answer: "Ornitorynque", isCorrect: false },
                { answer: "Ornitorinque", isCorrect: false },
                { answer: "Ornithorynque", isCorrect: true },
                { answer: "Ornythorinque", isCorrect: false }
              ]
            }
          },
          {
            question: "Quel thérapeute irez-vous consulter pour retrouver l'usage d'une main ?",
            anecdote: "Le kinésithérapeute cherchera à augmenter les capacités fonctionnelles de la personne dans le cadre de la rééducation.",
            answers: {
              create: [
                { answer: "Kinésitérapeute", isCorrect: false },
                { answer: "Kynésithérapeute", isCorrect: false },
                { answer: "Kinésythérapeute", isCorrect: false },
                { answer: "Kinésithérapeute", isCorrect: true }
              ]
            }
          },
          {
            question: "Quelle situation offrant une alternative mène à des résultats différents ?",
            anecdote: "Généralement, les possibilités offertes sont présentées aussi attirantes ou repoussantes l'une que l'autre, mais sans intérêt.",
            answers: {
              create: [
                { answer: "Dilemme", isCorrect: true },
                { answer: "Dilème", isCorrect: false },
                { answer: "Dylème", isCorrect: false },
                { answer: "Dilemne", isCorrect: false }
              ]
            }
          },
          {
            question: "Quel moyen permet d'augmenter la mémorisation de l'information ?",
            anecdote: "La première référence connue à un mnémonique est l'Art de mémoire, décrite dans « De Oratore » par Cicéron.",
            answers: {
              create: [
                { answer: "Mnémotechnique", isCorrect: true },
                { answer: "Maimotechnique", isCorrect: false },
                { answer: "Mémotechnique", isCorrect: false },
                { answer: "Mnaimotechnique", isCorrect: false }
              ]
            }
          },
          {
            question: "Sur quelle structure rigide les éléments d'un véhicule terrestre sont-ils fixés ?",
            anecdote: "Par opposition à la carrosserie, on peut parler de châssis pour désigner l'ensemble des structures participant à la fonction de roulage.",
            answers: {
              create: [
                { answer: "Châssis", isCorrect: true },
                { answer: "Chassi", isCorrect: false },
                { answer: "Chassis", isCorrect: false },
                { answer: "Châssit", isCorrect: false }
              ]
            }
          },
        ]
      }
    }
  })

  const quiz1 = await prisma.quiz.create({
    data: {
      logo: "6-histoire-fr.png",
      theme: "Histoire de France",
      authorId: adminUser.id,
      questions: {
        create: [
          {
            question: "Quel roi de France a été surnommé 'le Roi-Soleil' ?",
            anecdote: "Louis XIV, surnommé le Roi-Soleil, a régné pendant 72 ans, faisant de son règne l'un des plus longs de l'histoire.",
            answers: {
              create: [
                { answer: "Louis XIV", isCorrect: true },
                { answer: "Louis XVI", isCorrect: false },
                { answer: "Louis XIII", isCorrect: false },
                { answer: "Henri IV", isCorrect: false },
              ]
            }
          },
          {
            question: "En quelle année a eu lieu la Révolution française ?",
            anecdote: "La Révolution française a commencé en 1789 avec la prise de la Bastille, marquant le début de la fin de la monarchie en France.",
            answers: {
              create: [
                { answer: "1776", isCorrect: false },
                { answer: "1792", isCorrect: false },
                { answer: "1789", isCorrect: true },
                { answer: "1804", isCorrect: false },
              ]
            }
          },
          {
            question: "Qui a mené les troupes françaises à la victoire lors de la bataille d'Orléans en 1429 ?",
            anecdote: "Jeanne d'Arc est devenue une héroïne nationale pour avoir libéré Orléans et aidé Charles VII à accéder au trône.",
            answers: {
              create: [
                { answer: "Jeanne d'Arc", isCorrect: true },
                { answer: "Charles VII", isCorrect: false },
                { answer: "Philippe le Bel", isCorrect: false },
                { answer: "Henri IV", isCorrect: false },
              ]
            }
          },
          {
            question: "Quel empereur a été couronné en 1804 à Notre-Dame de Paris ?",
            anecdote: "Napoléon Bonaparte s'est couronné lui-même empereur des Français en 1804 lors d'une cérémonie fastueuse à Notre-Dame.",
            answers: {
              create: [
                { answer: "Napoléon Ier", isCorrect: true },
                { answer: "Charlemagne", isCorrect: false },
                { answer: "Louis XVIII", isCorrect: false },
                { answer: "Henri V", isCorrect: false },
              ]
            }
          },
          {
            question: "Quel événement célèbre le 11 novembre en France ?",
            anecdote: "Le 11 novembre commémore l'armistice de 1918, qui a mis fin à la Première Guerre mondiale.",
            answers: {
              create: [
                { answer: "La fin de la Première Guerre mondiale", isCorrect: true },
                { answer: "La prise de la Bastille", isCorrect: false },
                { answer: "Le début de la Seconde Guerre mondiale", isCorrect: false },
                { answer: "La bataille de Verdun", isCorrect: false },
              ]
            }
          },
          {
            question: "Quel roi a été assassiné par François Ravaillac en 1610 ?",
            anecdote: "Henri IV a été assassiné par François Ravaillac à Paris, un meurtre qui a choqué le royaume de France.",
            answers: {
              create: [
                { answer: "Henri IV", isCorrect: true },
                { answer: "Louis XIII", isCorrect: false },
                { answer: "François Ier", isCorrect: false },
                { answer: "Charles IX", isCorrect: false },
              ]
            }
          },
          {
            question: "Qui était le premier président de la Ve République française ?",
            anecdote: "Charles de Gaulle est devenu le premier président de la Ve République en 1959, marquant le début d'une nouvelle ère politique en France.",
            answers: {
              create: [
                { answer: "Charles de Gaulle", isCorrect: true },
                { answer: "Georges Pompidou", isCorrect: false },
                { answer: "François Mitterrand", isCorrect: false },
                { answer: "René Coty", isCorrect: false },
              ]
            }
          },
          {
            question: "Quel traité a mis fin à la Première Guerre mondiale en 1919 ?",
            anecdote: "Le traité de Versailles, signé en 1919, a mis fin à la Première Guerre mondiale et imposé des conditions sévères à l'Allemagne.",
            answers: {
              create: [
                { answer: "Le traité de Versailles", isCorrect: true },
                { answer: "Le traité de Paris", isCorrect: false },
                { answer: "Le traité de Tilsit", isCorrect: false },
                { answer: "Le traité de Rome", isCorrect: false },
              ]
            }
          },
          {
            question: "Comment s'appelle la célèbre bataille de 1815 où Napoléon a été définitivement vaincu ?",
            anecdote: "La défaite de Napoléon à Waterloo a mis fin à son règne et à ses ambitions de domination européenne.",
            answers: {
              create: [
                { answer: "La bataille de Waterloo", isCorrect: true },
                { answer: "La bataille d'Austerlitz", isCorrect: false },
                { answer: "La bataille de Leipzig", isCorrect: false },
                { answer: "La bataille de Trafalgar", isCorrect: false },
              ]
            }
          },
          {
            question: "Quel document, signé en 1598, a accordé aux protestants la liberté de culte en France ?",
            anecdote: "L'édit de Nantes a été signé par Henri IV pour apaiser les conflits religieux entre catholiques et protestants en France.",
            answers: {
              create: [
                { answer: "L'édit de Nantes", isCorrect: true },
                { answer: "L'édit de Fontainebleau", isCorrect: false },
                { answer: "Le traité de Paris", isCorrect: false },
                { answer: "La Déclaration des droits de l'homme", isCorrect: false },
              ]
            }
          },
          {
            question: "Quelle bataille est considérée comme l'une des plus longues et destructrices de la Première Guerre mondiale ?",
            anecdote: "La bataille de Verdun, qui a duré 10 mois en 1916, est l'une des plus symboliques de la Grande Guerre en France.",
            answers: {
              create: [
                { answer: "La bataille de Verdun", isCorrect: true },
                { answer: "La bataille de la Somme", isCorrect: false },
                { answer: "La bataille de Marne", isCorrect: false },
                { answer: "La bataille de Gallipoli", isCorrect: false },
              ]
            }
          },
          {
            question: "Quel roi de France est connu pour avoir déclaré 'L'État, c'est moi' ?",
            anecdote: "Cette phrase est attribuée à Louis XIV, symbolisant son règne absolu sur la France.",
            answers: {
              create: [
                { answer: "Louis XIV", isCorrect: true },
                { answer: "François Ier", isCorrect: false },
                { answer: "Louis XVI", isCorrect: false },
                { answer: "Napoléon Ier", isCorrect: false },
              ]
            }
          },
          {
            question: "Quel événement historique s'est déroulé le 14 juillet 1789 en France ?",
            anecdote: "La prise de la Bastille est un symbole de la Révolution française et est célébrée chaque année le 14 juillet comme fête nationale.",
            answers: {
              create: [
                { answer: "La prise de la Bastille", isCorrect: true },
                { answer: "La chute de Napoléon", isCorrect: false },
                { answer: "La proclamation de la République", isCorrect: false },
                { answer: "La fuite de Louis XVI", isCorrect: false },
              ]
            }
          },
          {
            question: "Qui a dirigé la France pendant l'occupation allemande pendant la Seconde Guerre mondiale ?",
            anecdote: "Philippe Pétain a dirigé le régime de Vichy, un gouvernement collaborant avec l'Allemagne nazie pendant la Seconde Guerre mondiale.",
            answers: {
              create: [
                { answer: "Philippe Pétain", isCorrect: true },
                { answer: "Charles de Gaulle", isCorrect: false },
                { answer: "Georges Clemenceau", isCorrect: false },
                { answer: "François Mitterrand", isCorrect: false },
              ]
            }
          },
          {
            question: "Quel personnage historique français a mené la résistance contre les Romains pendant la bataille d'Alésia en 52 av. J.-C. ?",
            anecdote: "Vercingétorix a mené les Gaulois contre les Romains lors de la bataille d'Alésia, mais a finalement été vaincu par Jules César.",
            answers: {
              create: [
                { answer: "Vercingétorix", isCorrect: true },
                { answer: "Clovis", isCorrect: false },
                { answer: "Charlemagne", isCorrect: false },
                { answer: "Jules César", isCorrect: false },
              ]
            }
          },
          {
            question: "En quelle année la Ve République française a-t-elle été instaurée ?",
            anecdote: "La Ve République a été fondée en 1958 sous la présidence de Charles de Gaulle, remplaçant la IVe République.",
            answers: {
              create: [
                { answer: "1946", isCorrect: false },
                { answer: "1958", isCorrect: true },
                { answer: "1962", isCorrect: false },
                { answer: "1974", isCorrect: false },
              ]
            }
          },
          {
            question: "Qui était surnommé 'l'Aigle' pendant son règne en France ?",
            anecdote: "Napoléon Ier était surnommé 'l'Aigle', symbolisant son règne impérial et son pouvoir militaire.",
            answers: {
              create: [
                { answer: "Napoléon Ier", isCorrect: true },
                { answer: "Henri IV", isCorrect: false },
                { answer: "Louis XIV", isCorrect: false },
                { answer: "François Ier", isCorrect: false },
              ]
            }
          },
          {
            question: "Quelle reine de France a été exécutée en 1793 pendant la Révolution française ?",
            anecdote: "Marie-Antoinette, épouse de Louis XVI, a été guillotinée en 1793, accusée de trahison par les révolutionnaires.",
            answers: {
              create: [
                { answer: "Marie-Antoinette", isCorrect: true },
                { answer: "Catherine de Médicis", isCorrect: false },
                { answer: "Anne d'Autriche", isCorrect: false },
                { answer: "Blanche de Castille", isCorrect: false },
              ]
            }
          },
          {
            question: "Quel général français a libéré Paris en 1944 pendant la Seconde Guerre mondiale ?",
            anecdote: "Le général Philippe Leclerc a joué un rôle clé dans la libération de Paris en août 1944, un tournant dans la guerre contre l'occupant nazi.",
            answers: {
              create: [
                { answer: "Charles de Gaulle", isCorrect: false },
                { answer: "Philippe Leclerc", isCorrect: true },
                { answer: "Jean Moulin", isCorrect: false },
                { answer: "Georges Patton", isCorrect: false },
              ]
            }
          },
          {
            question: "Quel roi a été guillotiné en 1793 lors de la Révolution française ?",
            anecdote: "Louis XVI, dernier roi de France avant la Révolution, a été guillotiné pour trahison le 21 janvier 1793.",
            answers: {
              create: [
                { answer: "Louis XVI", isCorrect: true },
                { answer: "Louis XIV", isCorrect: false },
                { answer: "Charles X", isCorrect: false },
                { answer: "Philippe II", isCorrect: false },
              ]
            }
          },
        ]
      }
    }
  });

  const quiz2 = await prisma.quiz.create({
    data: {
      logo: "4-cats.png",
      theme: "Les chats",
      authorId: adminUser.id,
      questions: {
        create: [
          {
            question: "Comment appelle-t-on un chat sans poils ?",
            anecdote: "Le chat Sphynx est une race de chat reconnue pour son absence de poils et sa peau douce.",
            answers: {
              create: [
                { answer: "Sphynx", isCorrect: true },
                { answer: "Persan", isCorrect: false },
                { answer: "Maine Coon", isCorrect: false },
                { answer: "Chartreux", isCorrect: false }
              ]
            }
          },
          {
            question: "Quel est le principal régime alimentaire d'un chat ?",
            anecdote: "Le chat est un carnivore strict, ce qui signifie qu'il a besoin de protéines animales pour survivre.",
            answers: {
              create: [
                { answer: "Herbivore", isCorrect: false },
                { answer: "Omnivore", isCorrect: false },
                { answer: "Insectivore", isCorrect: false },
                { answer: "Carnivore", isCorrect: true }
              ]
            }
          },
          {
            question: "Quelle est la durée moyenne de gestation chez les chats ?",
            anecdote: "La gestation des chats dure en moyenne 60 à 65 jours.",
            answers: {
              create: [
                { answer: "50 jours", isCorrect: false },
                { answer: "60 jours", isCorrect: true },
                { answer: "70 jours", isCorrect: false },
                { answer: "90 jours", isCorrect: false }
              ]
            }
          },
          {
            question: "Quel est le sens le plus développé chez le chat ?",
            anecdote: "Les chats ont une ouïe particulièrement fine et peuvent percevoir des sons que les humains ne peuvent pas entendre.",
            answers: {
              create: [
                { answer: "Le goût", isCorrect: false },
                { answer: "L'ouïe", isCorrect: true },
                { answer: "La vue", isCorrect: false },
                { answer: "L'odorat", isCorrect: false }
              ]
            }
          },
          {
            question: "Quel type de miaulement un chat utilise-t-il pour saluer son propriétaire ?",
            anecdote: "Les chats ont différents types de miaulements, et les miaulements courts sont souvent utilisés pour dire bonjour.",
            answers: {
              create: [
                { answer: "Un ronronnement", isCorrect: false },
                { answer: "Un miaulement court", isCorrect: true },
                { answer: "Un sifflement", isCorrect: false },
                { answer: "Un grondement", isCorrect: false }
              ]
            }
          },
          {
            question: "Quelle est la principale caractéristique des yeux d'un chat la nuit ?",
            anecdote: "Les yeux des chats brillent dans le noir grâce à une couche réfléchissante appelée tapetum lucidum.",
            answers: {
              create: [
                { answer: "Ils sont bleus", isCorrect: false },
                { answer: "Ils brillent", isCorrect: true },
                { answer: "Ils deviennent rouges", isCorrect: false },
                { answer: "Ils se ferment", isCorrect: false }
              ]
            }
          },
          {
            question: "Quelle race de chat est connue pour ses grands yeux bleus et son pelage soyeux ?",
            anecdote: "Les Ragdolls sont célèbres pour leur pelage doux et leurs yeux d'un bleu intense.",
            answers: {
              create: [
                { answer: "Bengal", isCorrect: false },
                { answer: "Ragdoll", isCorrect: true },
                { answer: "Abyssin", isCorrect: false },
                { answer: "Chartreux", isCorrect: false }
              ]
            }
          },
          {
            question: "Quel est le terme scientifique pour désigner un chat ?",
            anecdote: "Les chats appartiennent à la famille des félidés, qui inclut également les lions, les tigres et les panthères.",
            answers: {
              create: [
                { answer: "Félidé", isCorrect: true },
                { answer: "Canidé", isCorrect: false },
                { answer: "Équidé", isCorrect: false },
                { answer: "Ovidé", isCorrect: false }
              ]
            }
          },
          {
            question: "Quel son un chat émet-il lorsqu'il est content ?",
            anecdote: "Le ronronnement est un signe de satisfaction chez les chats, bien qu'ils puissent aussi ronronner lorsqu'ils sont stressés.",
            answers: {
              create: [
                { answer: "Il siffle", isCorrect: false },
                { answer: "Il ronronne", isCorrect: true },
                { answer: "Il gronde", isCorrect: false },
                { answer: "Il aboie", isCorrect: false }
              ]
            }
          },
          {
            question: "Comment s'appelle la capacité des chats à toujours retomber sur leurs pattes ?",
            anecdote: "Le réflexe de rotation permet aux chats de s'orienter rapidement lorsqu'ils tombent pour atterrir sur leurs pattes.",
            answers: {
              create: [
                { answer: "Réflexe de rotation", isCorrect: true },
                { answer: "Réflexe de saut", isCorrect: false },
                { answer: "Réflexe d'évitement", isCorrect: false },
                { answer: "Réflexe de sécurité", isCorrect: false }
              ]
            }
          },
          {
            question: "Quel est le plus grand félin domestique en termes de taille ?",
            anecdote: "Le Maine Coon est la plus grande race de chat domestique, pouvant peser jusqu'à 12 kg.",
            answers: {
              create: [
                { answer: "Persan", isCorrect: false },
                { answer: "Sphynx", isCorrect: false },
                { answer: "Maine Coon", isCorrect: true },
                { answer: "Chartreux", isCorrect: false }
              ]
            }
          },
          {
            question: "Comment appelle-t-on un groupe de chats ?",
            anecdote: "Les chats sauvages vivent souvent en colonies, où ils partagent nourriture et territoire.",
            answers: {
              create: [
                { answer: "Une meute", isCorrect: false },
                { answer: "Un troupeau", isCorrect: false },
                { answer: "Une colonie", isCorrect: true },
                { answer: "Une portée", isCorrect: false }
              ]
            }
          },
          {
            question: "Quel âge peut atteindre un chat domestique en moyenne ?",
            anecdote: "Les chats domestiques vivent en moyenne entre 15 et 20 ans, mais certains atteignent plus de 25 ans.",
            answers: {
              create: [
                { answer: "5 à 10 ans", isCorrect: false },
                { answer: "10 à 15 ans", isCorrect: false },
                { answer: "15 à 20 ans", isCorrect: true },
                { answer: "20 à 25 ans", isCorrect: false }
              ]
            }
          },
          {
            question: "Quel type de pelage a un chat siamois ?",
            anecdote: "Le pelage court et soyeux du chat siamois est souvent de couleur crème avec des extrémités plus sombres.",
            answers: {
              create: [
                { answer: "Court et soyeux", isCorrect: true },
                { answer: "Long et épais", isCorrect: false },
                { answer: "Ras et rugueux", isCorrect: false },
                { answer: "Bouclé", isCorrect: false }
              ]
            }
          },
          {
            question: "Quelle est la particularité des pattes du chat pour grimper ?",
            anecdote: "Les griffes rétractiles permettent aux chats de grimper aux arbres et de protéger leurs griffes lorsqu'ils ne les utilisent pas.",
            answers: {
              create: [
                { answer: "Des griffes rétractiles", isCorrect: true },
                { answer: "Des ventouses", isCorrect: false },
                { answer: "Des coussinets collants", isCorrect: false },
                { answer: "Des griffes non rétractiles", isCorrect: false }
              ]
            }
          },
          {
            question: "Combien de vies dit-on qu'un chat possède ?",
            anecdote: "Le mythe des 9 vies du chat vient de sa capacité à survivre à des chutes et situations dangereuses.",
            answers: {
              create: [
                { answer: "5", isCorrect: false },
                { answer: "7", isCorrect: false },
                { answer: "9", isCorrect: true },
                { answer: "11", isCorrect: false }
              ]
            }
          },
          {
            question: "Quelle est la durée moyenne de sommeil d'un chat par jour ?",
            anecdote: "Les chats dorment en moyenne entre 12 et 16 heures par jour, certains pouvant aller jusqu'à 20 heures.",
            answers: {
              create: [
                { answer: "5 heures", isCorrect: false },
                { answer: "10 heures", isCorrect: false },
                { answer: "15 heures", isCorrect: true },
                { answer: "20 heures", isCorrect: false }
              ]
            }
          },
          {
            question: "Quelle est la principale utilisation des moustaches chez un chat ?",
            anecdote: "Les moustaches des chats sont des organes sensoriels qui leur permettent de mesurer les distances et de naviguer dans l'obscurité.",
            answers: {
              create: [
                { answer: "Attirer l'attention", isCorrect: false },
                { answer: "Mesurer les distances", isCorrect: true },
                { answer: "Se nettoyer", isCorrect: false },
                { answer: "S'exprimer", isCorrect: false }
              ]
            }
          },
          {
            question: "Quelle est la vitesse maximale qu'un chat domestique peut atteindre en courant ?",
            anecdote: "Un chat domestique peut courir jusqu'à 50 km/h sur de courtes distances, ce qui en fait un excellent chasseur.",
            answers: {
              create: [
                { answer: "20 km/h", isCorrect: false },
                { answer: "30 km/h", isCorrect: false },
                { answer: "40 km/h", isCorrect: false },
                { answer: "50 km/h", isCorrect: true }
              ]
            }
          },
          {
            question: "Quel chat célèbre a un sourire permanent dans 'Alice au Pays des Merveilles' ?",
            anecdote: "Le Chat de Cheshire est un personnage emblématique du conte 'Alice au Pays des Merveilles', célèbre pour son sourire énigmatique.",
            answers: {
              create: [
                { answer: "Le Chat de Cheshire", isCorrect: true },
                { answer: "Le Chat botté", isCorrect: false },
                { answer: "Garfield", isCorrect: false },
                { answer: "Tom", isCorrect: false }
              ]
            }
          }
        ]
      }
    }
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
