import { motion } from "framer-motion";
import heroImage from "@/assets/hero-medical.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Clínica Royal Saúde"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="bg-gradient-gold px-4 py-2 rounded-sm text-accent-foreground font-cinzel text-sm font-semibold tracking-widest uppercase">
              Convênio Médico
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-cinzel font-bold text-primary-foreground leading-tight mb-6">
            Royal{" "}
            <span className="text-gradient-gold">Saúde</span>
          </h1>

          <p className="text-xl md:text-2xl text-gold-light font-body font-light mb-4">
            Consulta médica sem filas.
          </p>
          <p className="text-lg text-gold/80 font-body mb-8 max-w-lg">
            Atendimento imediato com agenda aberta. Acesso direto a médicos generalistas por apenas{" "}
            <span className="text-accent font-bold text-2xl">R$100</span>{" "}
            <span className="text-gold-light">/mês</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="https://wa.me/5567992916792"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-gold text-accent-foreground font-cinzel font-semibold px-8 py-4 rounded-sm text-center shadow-gold transition-all hover:brightness-110 tracking-wide"
            >
              Agende sua Consulta
            </motion.a>
            <motion.a
              href="#como-funciona"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gold text-gold font-cinzel font-semibold px-8 py-4 rounded-sm text-center transition-all hover:bg-gold/10 tracking-wide"
            >
              Saiba Mais
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold" />
    </section>
  );
};

export default HeroSection;
