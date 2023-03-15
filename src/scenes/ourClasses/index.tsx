import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import image7 from "@/assets/image7.png";
import image8 from "@/assets/image8.png";
import image9 from "@/assets/image9.png";
import image10 from "@/assets/image10.png";
import image11 from "@/assets/image11.png";
import image12 from "@/assets/image12.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Barcode",
    description:
      "Chef de la team Barcode. Les decks Backrows n'ont pas de secret pour lui.",
    image: image1,
  },
  {
    name: "Boody",
    description:
      "Bras droit mais aussi possesseur de nombreux résultats en WCQ et YCS, le jeu n'a pas de secret pour lui.",
    image: image2,
  },
  {
    name: "Teto",
    description:
      "Cerveau de l'équipe, son art du deckbuilding est inspirant pour l'équipe. Aigris originel.",
    image: image7,
  },
  {
    name: "Thoumouche",
    description:
      "Prof de maths le jour, judge et coach la nuit, la polyvalence du joueur pendule n'a aucun égale.",
    image: image8,
  },
  {
    name: "Starz",
    description:
      "L'homme qui vendait les decks plus vite que son ombre. Swordsoul & life enjoyer, sa bonne humeur n'a aucun égal.",
    image: image12,
  },
  {
    name: "Zav",
    description:
      "Monteur officiel de la chaine de Barcode, son talent pour le montage vidéo reflète ses performances sur Yu-gi-Oh (sauf lorsqu'il est sujet de Budragon).",
    image: image3,
  },
  {
    name: "Gaulard",
    description:
      "Sous ce beau visage ce cache le plus grand clowns de l'équipe. Lorsqu'il est concentré, c'est un adversaire redoutable.",
    image: image4,
  },
  {
    name: "Raivals",
    description:
      "Développeur du site, coach mentale et spécialiste de la préparation des citrons.",
    image: image5,
  },
  {
    name: "Mist",
    description:
      "Amateur de Sky Striker, de grenouilles mais surtout de lait. Ne le sous-estimez pas il pourrait vous surprendre.",
    image: image6,
  },
  {
    name: "Twarriorgenesis",
    description:
      "Fervant modérateur du discord et de twitch, amateur de Brave Token et de FTK. A tendance a insulter la daronne des gens mais toujours dans la bienveillance.",
    image: image9,
  },
  {
    name: "Katom",
    description:
      "Homme (ou plutôt jeune adolescent) qui a pour hobby principal de détruire ses adversaires à coups d'oiseaux. A pour habitude de jouer roleplay, comme en attestent les nombreux piafs qui peuplent son habitation.",
    image: image10,
  },
  {
    name: "Wingman",
    description:
      "Garde du corps de l'équipe. Les plays Baxia n'ont pas de secret pour lui. Gare à son Berserker du tenyi !!",
    image: image11,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="notreéquipe" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>LA TEAM</HText>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
