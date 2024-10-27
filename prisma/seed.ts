const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const quiz = await prisma.quiz.create({
    data: {
      provider: "Family Quiz",
      author: "Valentin-Guillaume",
      theme: "Les chats",
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

  console.log(`Quiz created with ID: ${quiz.id}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
