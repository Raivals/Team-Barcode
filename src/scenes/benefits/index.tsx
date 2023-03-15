import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import ActionButton from "@/shared/ActionButton";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Ambiance.",
    description:
      "Une bonne ambiance générale malgré les quelques saltinbanqueries de Gaulard et Zav 🤡. ",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Entre-aide",
    description:
      "Session d'entraînement & Deck-building dans le calme et la bonne humeur.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Un niveau général moyen (Merci Boody).",
    description:
      "Une équipe remplit de clowns mais le niveau et relevé par quelques irréductibles tryharders.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="quisommesnous?" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <HText> PLUS QU'UNE SIMPLE ÉQUIPE. </HText>
          <p className="my-5 text-sm">
            Basé sur la bonne entente et la convivialité, la team Barcode
            s'entraîne régulièrement dans le sérieux et la bonne humeur.
          </p>
        </motion.div>

        {/*BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/*GRAPHIC */}
          <img
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
            className="mx-auto"
          />

          {/* DESCIRPTION */}
          <div>
            {/*TITLE*/}
            <div className="relative">
              <div className="before:abssolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    DIVERSITÉ GÉNÉRALE DANS LES DECKS DE LA{" "}
                    <span className="text-primary-500">TEAM</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                "En générale, chaques personnes de l'équipe utilise un deck
                différent, cela permet de pouvoir s'entraîner sur la quasi
                totalité des decks de la méta."
              </p>
            </motion.div>
            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
