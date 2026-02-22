import { motion } from "framer-motion";
import concertHero from "@/assets/concert-hero.webp";
import mathisPortrait from "@/assets/mathis-portrait.png";
import mathisLive from "@/assets/mathis-live.jpg";
import mathisCasual from "@/assets/mathis-casual.jpg";
import mathisProfile from "@/assets/mathis-profile.png";
import logoEvrgrn from "@/assets/logo-evrgrn.png";
import cleTrousseau from "@/assets/cle-trousseau.png";
import vrncaCover from "@/assets/vrnca-cover.png";
import coverVrncaPatch from "@/assets/covers/vrnca-patch.jpeg";
import coverMaelstrom from "@/assets/covers/maelstrom.jpeg";
import coverEvilBlazy from "@/assets/covers/evil-blazy.jpg";
import coverVrncaExe from "@/assets/covers/vrnca-exe.jpg";
import coverTrapTeddy2 from "@/assets/covers/trap-teddy-2.jpg";
import coverTrapTeddy from "@/assets/covers/trap-teddy.jpg";
import coverTeddyBlaze from "@/assets/covers/teddyblaze.jpg";
import coverLetters from "@/assets/covers/letters.jpg";
import coverMagnum2 from "@/assets/covers/magnum-2.jpg";
import coverMagnum1 from "@/assets/covers/magnum-1.jpg";
import { Mail, ExternalLink, Music, BookOpen, Mic, Instagram, Youtube, Disc3 } from "lucide-react";

const discography = [
  { title: "VRNCA Patch 1.2.exe", year: "2024", tracks: "18 titres", cover: coverVrncaPatch, link: "https://evrgrn.mathisoneblaze.com/album/vrnca-patch-1-2-exe" },
  { title: "Maëlstrom", year: "2024", tracks: "À venir", cover: coverMaelstrom, link: "https://evrgrn.mathisoneblaze.com/album/4", collab: "avec LeTrom Beats" },
  { title: "Evil Blazy Vilain Teddy", year: "2022", tracks: "10 titres", cover: coverEvilBlazy, link: "https://evrgrn.mathisoneblaze.com/album/evil-blazy-vilain-teddy", collab: "avec Sedjro Wesker & Usle Belmondo" },
  { title: "VRNCA.exe", year: "2022", tracks: "8 titres", cover: coverVrncaExe, link: "https://evrgrn.mathisoneblaze.com/album/vrnca-exe", collab: "avec Sedjro Wesker" },
  { title: "Trap Teddy 2", year: "2021", tracks: "10 titres", cover: coverTrapTeddy2, link: "https://evrgrn.mathisoneblaze.com/album/trap-teddy-2" },
  { title: "Trap Teddy", year: "2020", tracks: "10 titres", cover: coverTrapTeddy, link: "https://evrgrn.mathisoneblaze.com/album/trap-teddy" },
  { title: "#TeddyBlaze", year: "2018", tracks: "24 titres", cover: coverTeddyBlaze, link: "https://evrgrn.mathisoneblaze.com/album/teddyblaze" },
  { title: "Letters on Fallen Fall Leaves", year: "2016", tracks: "11 titres", cover: coverLetters, link: "https://evrgrn.mathisoneblaze.com/album/letters-on-fallen-fall-leaves" },
  { title: "Magnum 2 (Œuvre au Blanc)", year: "2016", tracks: "15 titres", cover: coverMagnum2, link: "https://evrgrn.mathisoneblaze.com/album/magnum-2" },
  { title: "MAGNUM (Œuvre au Noir)", year: "2015", tracks: "15 titres", cover: coverMagnum1, link: "https://evrgrn.mathisoneblaze.com/album/magnum-oeuvre-au-noir" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-display font-bold text-lg tracking-tight">
            MATHIS <span className="text-primary">ONEBLAZE</span>
          </span>
          <div className="hidden md:flex gap-8 text-sm font-body text-muted-foreground">
            <a href="#bio" className="hover:text-primary transition-colors">Bio</a>
            <a href="#projets" className="hover:text-primary transition-colors">Projets</a>
            <a href="#musique" className="hover:text-primary transition-colors">Musique</a>
            <a href="#galerie" className="hover:text-primary transition-colors">Galerie</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Dossier Presse
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-screen flex items-end">
        <div className="absolute inset-0">
          <img
            src={concertHero}
            alt="Mathis OneBlaze en concert"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10 max-w-7xl mx-auto px-6 pb-24 w-full"
        >
          <motion.p variants={fadeUp} className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Auteur · Compositeur · Producteur · Pédagogue
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display font-extrabold text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-6"
          >
            MATHIS
            <br />
            <span className="text-primary">ONEBLAZE</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="max-w-xl text-muted-foreground text-lg font-body leading-relaxed">
            Professionnel de l'art, de la musique et des industries sonores depuis plus de 15 ans.
            Pionnier des battles de rap en créole. Diplômé de l'INA.
          </motion.p>
        </motion.div>
      </section>

      {/* BIO */}
      <section id="bio" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="text-primary text-sm tracking-[0.3em] uppercase font-body">
              Biographie
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-display font-bold text-4xl md:text-5xl mt-4 mb-8">
              L'art comme arme d'émancipation
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-5 text-muted-foreground font-body leading-relaxed">
              <p>
                Depuis l'enfance, je crée. Mais j'ai compris très tôt que l'art devait aussi devenir une arme d'émancipation.
                J'ai transformé mon savoir-faire musical en service : ingénierie son, coaching, production, conseil.
              </p>
              <p>
                J'ai d'abord obtenu un diplôme technique pour que mes compétences soient mon levier d'indépendance.
                Puis, j'ai exploré l'auto-entreprise, cofondé une société de production, créé mon label, enseigné dans des associations, MJC, etc.
              </p>
              <p>
                Aujourd'hui, je restructure cette vision dans une stratégie hybride entre l'associatif et l'industrie de la musique.
                Plus d'une dizaine d'albums publiés. Des dizaines de concerts en groupe et en solo, en Île-de-France et dans toute la France.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-8">
              {["Composition", "Sound Design", "Direction Artistique", "Coaching", "Production", "Édition"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full border border-border text-xs text-muted-foreground font-body">
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={mathisPortrait}
              alt="Mathis OneBlaze portrait"
              className="w-full rounded-lg object-cover aspect-[4/3]"
            />
            <div className="absolute inset-0 rounded-lg ring-1 ring-primary/20" />
          </motion.div>
        </div>
      </section>

      {/* PROJETS */}
      <section id="projets" className="py-32 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-20"
          >
            <motion.span variants={fadeUp} className="text-primary text-sm tracking-[0.3em] uppercase font-body">
              Écosystème
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-display font-bold text-4xl md:text-5xl mt-4">
              Projets en cours
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* EVRGRN */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group relative bg-card rounded-xl p-8 border border-border hover:border-primary/40 transition-colors"
            >
              <div className="flex items-start gap-6 mb-6">
                <img src={logoEvrgrn} alt="EVRGRN Logo" className="w-20 h-20 object-contain rounded-lg" />
                <div>
                  <h3 className="font-display font-bold text-2xl flex items-center gap-2">
                    EVRGRN <Music className="w-5 h-5 text-primary" />
                  </h3>
                  <p className="text-primary text-sm font-body">Label · Production · Direction Artistique</p>
                </div>
              </div>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Du latin <em>sempervirens</em> — composition intemporelle pouvant être appréciée à toutes les époques.
                EVRGRN existe pour structurer la production artistique et transformer la matière créative en valeur économique durable.
              </p>
              <a
                href="https://evrgrn.mathisoneblaze.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary text-sm font-body hover:underline"
              >
                Explorer <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>

            {/* LE TROUSSEAU */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group relative bg-card rounded-xl p-8 border border-border hover:border-gold/40 transition-colors"
            >
              <div className="flex items-start gap-6 mb-6">
                <img src={cleTrousseau} alt="Le Trousseau" className="w-20 h-20 object-contain" />
                <div>
                  <h3 className="font-display font-bold text-2xl flex items-center gap-2">
                    Le Trousseau <BookOpen className="w-5 h-5 text-gold" />
                  </h3>
                  <p className="text-gold text-sm font-body">Transmission · Formation · Autonomie</p>
                </div>
              </div>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Initiative d'éducation artistique et citoyenne. Sa mission : transmettre les savoirs liés à la création,
                la production et la diffusion artistique, tout en accompagnant les jeunes vers l'autonomie et l'expression de soi.
              </p>
              <a
                href="https://asso-letrousseau.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold text-sm font-body hover:underline"
              >
                Découvrir <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MUSIQUE / DISCOGRAPHIE */}
      <section id="musique" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Featured release */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={coverVrncaPatch}
                alt="VRNCA Patch 1.2.exe"
                className="w-full max-w-md mx-auto rounded-xl shadow-2xl shadow-primary/10"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.span variants={fadeUp} className="text-primary text-sm tracking-[0.3em] uppercase font-body">
                Dernière sortie
              </motion.span>
              <motion.h2 variants={fadeUp} className="font-display font-bold text-4xl md:text-5xl mt-4 mb-2">
                VRNCA Patch 1.2.exe
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground font-body mb-1">2024 · 18 titres · 42 min 31 s</motion.p>
              <motion.p variants={fadeUp} className="text-muted-foreground font-body leading-relaxed mb-8 mt-4">
                Le dernier projet musical de Mathis OneBlaze, disponible sur toutes les plateformes de streaming.
                Un univers sonore unique mêlant rap, musique électronique et influences caribéennes.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <a
                  href="https://evrgrn.mathisoneblaze.com/album/vrnca-patch-1-2-exe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold text-sm hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                >
                  <Mic className="w-4 h-4" /> Écouter
                </a>
                <a
                  href="https://evrgrn.mathisoneblaze.com/musique"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border px-6 py-3 rounded-md text-sm hover:border-primary/40 transition-colors inline-flex items-center gap-2"
                >
                  Catalogue complet <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Full discography grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.span variants={fadeUp} className="text-primary text-sm tracking-[0.3em] uppercase font-body">
              Discographie
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-display font-bold text-3xl md:text-4xl mt-4 flex items-center justify-center gap-3">
              <Disc3 className="w-8 h-8 text-primary" /> Catalogue Musical
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {discography.map((album, i) => (
              <motion.a
                key={album.title}
                href={album.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg mb-3 aspect-square">
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors flex items-center justify-center">
                    <ExternalLink className="w-6 h-6 text-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <h4 className="font-body text-sm font-medium leading-tight group-hover:text-primary transition-colors">{album.title}</h4>
                <p className="text-xs text-muted-foreground font-body mt-1">{album.year} · {album.tracks}</p>
                {album.collab && <p className="text-xs text-primary/60 font-body mt-0.5">{album.collab}</p>}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section id="galerie" className="py-32 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} className="text-primary text-sm tracking-[0.3em] uppercase font-body">
              Photos
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-display font-bold text-4xl md:text-5xl mt-4">
              Galerie Presse
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground mt-4 font-body">
              Photos haute définition disponibles pour la presse.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: concertHero, alt: "Mathis OneBlaze en concert" },
              { src: mathisPortrait, alt: "Portrait corporate" },
              { src: mathisLive, alt: "Performance live" },
              { src: mathisCasual, alt: "Mathis OneBlaze" },
              { src: mathisProfile, alt: "Portrait profil" },
              { src: vrncaCover, alt: "VRNCA cover" },
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`overflow-hidden rounded-lg ${i === 0 ? "col-span-2 row-span-2" : ""}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 aspect-square"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} className="text-primary text-sm tracking-[0.3em] uppercase font-body">
              Roadmap
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-display font-bold text-4xl md:text-5xl mt-4">
              Stratégie 2025–2026
            </motion.h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
            {[
              { date: "Nov–Déc 2025", text: "Grand déploiement public du Trousseau" },
              { date: "Avr–Juin 2026", text: "Premières sorties sous le label EVRGRN" },
              { date: "Juil–Sep 2026", text: "Développement des partenariats culturels" },
              { date: "Oct–Déc 2026", text: "Production & réalisation artistique régulière" },
              { date: "2026–2031", text: "Industrialisation créative long-terme" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12 pb-10"
              >
                <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-primary" />
                <p className="text-primary text-sm font-body mb-1">{item.date}</p>
                <p className="text-foreground font-body">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contact" className="py-32 px-6 bg-secondary/30">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="text-primary text-sm tracking-[0.3em] uppercase font-body">
              Contact Presse
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-display font-bold text-4xl md:text-5xl mt-4 mb-6">
              Collaborons ensemble
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground font-body text-lg mb-10 leading-relaxed">
              Pour toute demande presse, interview, booking ou collaboration,
              n'hésitez pas à prendre contact.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@mathisoneblaze.com"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" /> contact@mathisoneblaze.com
              </a>
            </motion.div>
            <motion.div variants={fadeUp} className="flex justify-center gap-6 mt-10">
              <a href="https://www.instagram.com/mathisoneblaze" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/@letrousseau" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm text-muted-foreground font-body">
            © 2025 Mathis OneBlaze. Tous droits réservés.
          </span>
          <div className="flex items-center gap-6 text-sm text-muted-foreground font-body">
            <a href="https://evrgrn.mathisoneblaze.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              EVRGRN
            </a>
            <a href="https://asso-letrousseau.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Le Trousseau
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
