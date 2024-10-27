const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {

  const adminUser = await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: {},
    create: {
      email: "admin@example.com",
      username: "admin",
    },
  });

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
