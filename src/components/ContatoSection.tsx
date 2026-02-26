import { motion } from "framer-motion";
import { Phone, MapPin, Mail } from "lucide-react";

const ContatoSection = () => {
  return (
    <section id="contato" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-cinzel text-sm text-secondary tracking-widest uppercase font-semibold">
            Fale Conosco
          </span>
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-primary mt-3">
            Entre em <span className="text-gradient-gold">Contato</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: Phone,
              title: "Telefone",
              info: "(67) 9291-6792",
              href: "https://wa.me/5567992916792",
            },
            {
              icon: MapPin,
              title: "Endereço",
              info: "R. Puriu, 85 – Itanhangá Park, Campo Grande – MS, CEP 79003-243",
              href: "https://maps.google.com/?q=R+Puriu+85+Campo+Grande+MS",
            },
            {
              icon: Mail,
              title: "WhatsApp",
              info: "Envie uma mensagem",
              href: "https://wa.me/5567992916792",
            },
          ].map((item, i) => (
            <motion.a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-lg p-8 shadow-royal text-center group hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 mx-auto mb-5 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-cinzel text-lg font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.info}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;
