const Footer = () => {
  return (
    <footer className="bg-primary py-12 border-t border-gold/10">
      <div className="container mx-auto px-6 text-center">
        <h3 className="font-cinzel text-2xl font-bold text-gold-light mb-2">
          Royal <span className="text-gradient-gold">Saúde</span>
        </h3>
        <p className="text-gold/40 font-body text-sm mb-6">
          Convênio médico acessível para Campo Grande – MS e região
        </p>
        <div className="h-px bg-gradient-gold max-w-xs mx-auto mb-6 opacity-30" />
        <p className="text-gold/30 font-body text-xs">
          CNPJ: 61.889.391/0001-31 · R. Puriu, 85 – Itanhangá Park, Campo Grande – MS
        </p>
        <p className="text-gold/20 font-body text-xs mt-2">
          © {new Date().getFullYear()} Royal Saúde. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
