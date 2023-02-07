import { AnimatePresence, motion } from "framer-motion";

const socials = [
  {
    name: "github",
    url: "https://github.com/sephi-dev",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/david-venin-51481066/",
  },
  {
    name: "twitter",
    url: "https://twitter.com/sephi_code",
  },
];

export const Socials = () => {
  return (
    <AnimatePresence>
      <div className={"flex gap-3"}>
        {socials.map((social, index) => (
          <motion.div
            whileHover={{
              y: -5,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            key={social.name}>
            <a
              key={social.name}
              href={social.url}
              target={"_blank"}
              className={"block cursor-pointer rounded bg-gray-300 p-1"}
              rel="noreferrer">
              <img
                className={"h-[24px] w-[24px]"}
                src={`/assets/icons/${social.name}.svg`}
                alt={social.name}
              />
            </a>
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );
};
