import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const IMG_LOGO = "https://cdn.poehali.dev/projects/f9283abc-b515-424e-949a-d4808b18b858/bucket/fe76e6f2-c022-46bc-a071-7c5df2e40b22.jpg";
const IMG_FORGE = "https://cdn.poehali.dev/projects/f9283abc-b515-424e-949a-d4808b18b858/files/33a172b0-0e4b-4103-a213-cf90c90e0307.jpg";
const IMG_STAIRCASE = "https://cdn.poehali.dev/projects/f9283abc-b515-424e-949a-d4808b18b858/files/c135d3c0-867d-4c2b-9746-8424ee51a966.jpg";
const IMG_GATE = "https://cdn.poehali.dev/projects/f9283abc-b515-424e-949a-d4808b18b858/files/a705e744-5a25-4eae-bfe0-5e9735530281.jpg";
const IMG_CANOPY = "https://cdn.poehali.dev/projects/f9283abc-b515-424e-949a-d4808b18b858/files/9eba0af1-a9e8-443f-9cb8-0baab28236e4.jpg";

const services = [
  {
    icon: "MoveVertical",
    title: "Ограждения для лестниц",
    desc: "Кованые перила ручной работы, которые становятся главным акцентом интерьера. Любая сложность рисунка.",
  },
  {
    icon: "Shield",
    title: "Заборы и ворота",
    desc: "Монументальные ограждения для частных домов и коммерческой недвижимости. Надёжность на десятилетия.",
  },
  {
    icon: "PanelTop",
    title: "Балконные ограждения",
    desc: "Художественные балконные секции, придающие фасаду здания уникальный облик и характер.",
  },
  {
    icon: "Umbrella",
    title: "Козырьки и навесы",
    desc: "Кованые конструкции над входными группами — сочетание защиты и архитектурного искусства.",
  },
];

const advantages = [
  { num: "01", title: "Ручная ковка", desc: "Каждый элемент создаётся вручную — без штамповки и сварки конвейерного типа. Только живой металл." },
  { num: "02", title: "Топ-10 кузнецов России", desc: "Мастер мастерской входит в десятку лучших художников-кузнецов страны по версии профессионального сообщества." },
  { num: "03", title: "2–4 недели", desc: "От первого эскиза до полного монтажа — рекордные сроки без потери качества. Точно в договорённые сроки." },
  { num: "04", title: "Гарантия 10 лет", desc: "Металл, технология, покрытие — на всё даём письменную гарантию. Изделия служат дольше здания." },
  { num: "05", title: "Своё производство", desc: "Собственная кузница в Калининграде. Никаких посредников — контроль качества на каждом этапе." },
  { num: "06", title: "Авторский эскиз", desc: "Разрабатываем уникальный дизайн под ваш объект. Ни одно изделие не повторяется." },
];

const steps = [
  { n: "01", title: "Заявка", desc: "Отправьте фото объекта или опишите задачу. Ответим в течение 15 минут." },
  { n: "02", title: "Расчёт", desc: "Бесплатный выезд на объект, замеры, согласование эскиза и стоимости." },
  { n: "03", title: "Производство", desc: "Ручная ковка в нашей кузнице. Видеоотчёты в процессе по запросу." },
  { n: "04", title: "Монтаж", desc: "Профессиональная установка нашими мастерами. Уборка после работ включена." },
];

const reviews = [
  {
    name: "Андрей Ш.",
    city: "Калининград",
    text: "Заказывал ограждение для лестницы в загородном доме. Результат превзошёл все ожидания — это настоящее произведение искусства. Сроки выдержаны точно.",
    rating: 5,
  },
  {
    name: "Марина К.",
    city: "Светлогорск",
    text: "Мастерская выполнила кованые ворота и забор под ключ. Качество металла и проработка деталей на очень высоком уровне. Рекомендую всем, кто ценит настоящую работу.",
    rating: 5,
  },
  {
    name: "Игорь В.",
    city: "Калининград",
    text: "Козырёк над входом в офис стал настоящей визитной карточкой нашего здания. Эскиз согласовали быстро, всё сделали за 3 недели. Отличная мастерская.",
    rating: 5,
  },
];

const portfolioItems = [
  { img: IMG_STAIRCASE, title: "Перила для лестницы", location: "Частный дом, Калининград" },
  { img: IMG_GATE, title: "Ворота и забор", location: "Коттедж, Светлогорск" },
  { img: IMG_CANOPY, title: "Козырёк над входом", location: "Бизнес-центр, Калининград" },
  { img: IMG_FORGE, title: "Балконное ограждение", location: "Жилой комплекс, Зеленоградск" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: "var(--forge-black)", color: "var(--forge-cream)", fontFamily: "'Golos Text', sans-serif" }}>

      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "background 0.4s",
          background: scrolled ? "rgba(10,10,10,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.12)" : "none",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => scrollTo("hero")}>
            <img src={IMG_LOGO} alt="Белый Куб" style={{ height: 44, width: "auto", filter: "brightness(0) invert(1)" }} />
          </div>

          <div style={{ display: "flex", gap: 36, alignItems: "center" }} className="hidden md:flex">
            {[["about", "О нас"], ["services", "Услуги"], ["portfolio", "Портфолио"], ["process", "Этапы"], ["contacts", "Контакты"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="nav-link" style={{ background: "none", border: "none", cursor: "pointer" }}>{label}</button>
            ))}
          </div>

          <button
            onClick={() => scrollTo("contacts")}
            className="hidden md:block"
            style={{
              background: "transparent",
              border: "1px solid var(--forge-gold)",
              color: "var(--forge-gold)",
              padding: "10px 24px",
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "background 0.3s, color 0.3s",
              fontFamily: "'Golos Text', sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--forge-gold)";
              e.currentTarget.style.color = "var(--forge-black)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--forge-gold)";
            }}
          >
            Рассчитать
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden" style={{ background: "none", border: "none", cursor: "pointer", color: "var(--forge-cream)" }}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div style={{ background: "rgba(10,10,10,0.98)", borderTop: "1px solid rgba(201,168,76,0.2)", padding: "24px" }}>
            {[["about", "О нас"], ["services", "Услуги"], ["portfolio", "Портфолио"], ["process", "Этапы"], ["contacts", "Контакты"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", color: "var(--forge-cream)", fontSize: 18, padding: "14px 0", cursor: "pointer", fontFamily: "'Golos Text', sans-serif", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src={IMG_FORGE} alt="Кузница" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,10,10,0.93) 0%, rgba(10,10,10,0.65) 50%, rgba(10,10,10,0.88) 100%)" }} />
        </div>

        <div style={{ position: "absolute", left: "7%", top: 0, bottom: 0, width: 1, background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.25), transparent)" }} className="hidden lg:block" />

        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "140px 24px 100px", width: "100%" }}>
          <div style={{ maxWidth: 680 }}>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
              <span className="section-label" style={{ display: "block", marginBottom: 24 }}>Калининград · Художественная ковка</span>
            </div>

            <h1
              className="animate-fade-in"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(52px, 9vw, 100px)",
                fontWeight: 300,
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
                margin: "0 0 16px",
                animationDelay: "0.3s",
                opacity: 0,
              }}
            >
              Металл,
              <br />
              <span className="gold-shimmer">рождённый</span>
              <br />
              в руках мастера
            </h1>

            <div className="animate-fade-in" style={{ animationDelay: "0.5s", opacity: 0, margin: "24px 0" }}>
              <div className="gold-line" />
            </div>

            <p
              className="animate-fade-in"
              style={{
                fontSize: 17,
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.72)",
                marginBottom: 44,
                animationDelay: "0.6s",
                opacity: 0,
                maxWidth: 500,
              }}
            >
              Мастерская «Белый Куб» — авторские изделия ручной ковки
              от мастера, входящего в{" "}
              <strong style={{ color: "var(--forge-gold)" }}>топ-10 лучших кузнецов России</strong>.
              От эскиза до монтажа — 2–4 недели.
            </p>

            <div className="animate-fade-in" style={{ animationDelay: "0.8s", opacity: 0, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button
                onClick={() => scrollTo("contacts")}
                style={{
                  background: "var(--forge-gold)",
                  color: "var(--forge-black)",
                  border: "none",
                  padding: "18px 44px",
                  fontSize: 13,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  fontFamily: "'Golos Text', sans-serif",
                  fontWeight: 600,
                  transition: "background 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--forge-gold-light)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--forge-gold)")}
              >
                Рассчитать стоимость
              </button>
              <button
                onClick={() => scrollTo("portfolio")}
                style={{
                  background: "transparent",
                  color: "var(--forge-cream)",
                  border: "1px solid rgba(245,240,232,0.3)",
                  padding: "18px 44px",
                  fontSize: 13,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  fontFamily: "'Golos Text', sans-serif",
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--forge-gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(245,240,232,0.3)")}
              >
                Смотреть работы
              </button>
            </div>
          </div>

          <div
            className="animate-fade-in"
            style={{
              position: "absolute",
              bottom: 60,
              right: 24,
              display: "flex",
              gap: 40,
              animationDelay: "1s",
              opacity: 0,
            }}
          >
            {[["200+", "проектов"], ["10", "лет опыта"], ["Топ-10", "кузнецов РФ"]].map(([n, l]) => (
              <div key={n} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 34, fontWeight: 300, color: "var(--forge-gold)", lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(245,240,232,0.45)", marginTop: 6 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <div style={{ background: "var(--forge-gold)", padding: "20px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
          <p style={{ fontFamily: "'Golos Text', sans-serif", fontSize: 15, color: "var(--forge-black)", margin: 0, fontWeight: 500 }}>
            📸 Отправьте фото вашего объекта — рассчитаем стоимость за <strong>15 минут</strong>
          </p>
          <button
            onClick={() => scrollTo("contacts")}
            style={{ background: "var(--forge-black)", color: "var(--forge-gold)", border: "none", padding: "10px 24px", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", cursor: "pointer", fontFamily: "'Golos Text', sans-serif", fontWeight: 600, whiteSpace: "nowrap" }}
          >
            Отправить фото →
          </button>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gap: 80, alignItems: "center" }} className="grid grid-cols-1 md:grid-cols-2">
          <div className="reveal">
            <div style={{ position: "relative" }}>
              <img src={IMG_STAIRCASE} alt="Ковка" style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", top: 20, left: 20, border: "1px solid rgba(201,168,76,0.35)", width: 72, height: 72, pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: -20, right: -20, background: "var(--forge-gold)", padding: "20px 24px" }} className="hidden md:block">
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, fontWeight: 300, color: "var(--forge-black)", lineHeight: 1 }}>№1</div>
                <div style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--forge-black)", opacity: 0.7, marginTop: 4 }}>в Калининграде</div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <span className="section-label">О мастерской</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 300, lineHeight: 1.15, margin: "16px 0 8px" }}>
              Мастерская<br />
              <em style={{ fontStyle: "italic", color: "var(--forge-gold)" }}>«Белый Куб»</em>
            </h2>
            <div className="gold-line" style={{ marginBottom: 28 }} />
            <p style={{ fontSize: 16, lineHeight: 1.85, color: "rgba(245,240,232,0.72)", marginBottom: 20 }}>
              Наша кузница работает в Калининграде, и каждое изделие создаётся здесь — от первого удара молота до финальной обработки. Никакого производственного конвейера, никаких посредников.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: "rgba(245,240,232,0.72)", marginBottom: 40 }}>
              Мастер мастерской — художник-кузнец, признанный профессиональным сообществом России. Его работы украшают частные резиденции, офисные здания и культурные объекты по всему Северо-Западу.
            </p>
            <div style={{ display: "flex", gap: 48 }}>
              {[["200+", "завершённых объектов"], ["10 лет", "в профессии"], ["Топ-10", "кузнецов России"]].map(([n, l]) => (
                <div key={n}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 38, fontWeight: 300, color: "var(--forge-gold)" }}>{n}</div>
                  <div style={{ fontSize: 11, color: "rgba(245,240,232,0.45)", letterSpacing: "0.08em", marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "100px 24px", background: "var(--forge-charcoal)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }} className="reveal">
            <span className="section-label">Что мы делаем</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 300, margin: "16px 0 0" }}>
              Наши <em style={{ fontStyle: "italic", color: "var(--forge-gold)" }}>услуги</em>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 2 }}>
            {services.map((s, i) => (
              <div key={i} className="service-card reveal" style={{ padding: "40px 32px" }}>
                <div style={{ width: 48, height: 48, border: "1px solid rgba(201,168,76,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                  <Icon name={s.icon} size={20} style={{ color: "var(--forge-gold)" }} />
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 500, marginBottom: 14, lineHeight: 1.2 }}>{s.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(245,240,232,0.62)" }}>{s.desc}</p>
                <button
                  onClick={() => scrollTo("contacts")}
                  style={{ marginTop: 28, display: "flex", alignItems: "center", gap: 10, color: "var(--forge-gold)", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer", background: "none", border: "none", fontFamily: "'Golos Text', sans-serif" }}
                >
                  Заказать <Icon name="ArrowRight" size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16 }} className="reveal">
            <div>
              <span className="section-label">Наши работы</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 300, margin: "16px 0 0" }}>
                <em style={{ fontStyle: "italic", color: "var(--forge-gold)" }}>Портфолио</em>
              </h2>
            </div>
            <button onClick={() => scrollTo("contacts")} style={{ background: "none", border: "none", color: "var(--forge-gold)", fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, fontFamily: "'Golos Text', sans-serif" }}>
              Обсудить проект <Icon name="ArrowRight" size={14} />
            </button>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 4 }} className="grid grid-cols-1 sm:grid-cols-2">
            {portfolioItems.map((item, i) => (
              <div key={i} className="portfolio-card reveal" style={{ position: "relative", aspectRatio: "4/3" }}>
                <img src={item.img} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                <div className="overlay" />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 24px", background: "linear-gradient(to top, rgba(10,10,10,0.88) 0%, transparent 100%)" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 500 }}>{item.title}</div>
                  <div style={{ fontSize: 12, color: "rgba(245,240,232,0.55)", letterSpacing: "0.06em", marginTop: 3 }}>{item.location}</div>
                </div>
                <div style={{ position: "absolute", top: 14, right: 14, background: "var(--forge-gold)", padding: "4px 10px", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--forge-black)", fontWeight: 700 }}>
                  Выполнено
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" style={{ padding: "100px 24px", background: "var(--forge-charcoal)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 64 }} className="reveal">
            <span className="section-label">Почему выбирают нас</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 300, margin: "16px 0 0" }}>
              Наши <em style={{ fontStyle: "italic", color: "var(--forge-gold)" }}>преимущества</em>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40 }}>
            {advantages.map((a, i) => (
              <div key={i} className="advantage-card reveal">
                <div style={{ fontSize: 10, letterSpacing: "0.3em", color: "var(--forge-gold)", marginBottom: 12, fontFamily: "'Golos Text', sans-serif" }}>{a.num}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 500, marginBottom: 12 }}>{a.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(245,240,232,0.62)" }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }} className="reveal">
            <span className="section-label">Как мы работаем</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 300, margin: "16px 0 0" }}>
              Этапы <em style={{ fontStyle: "italic", color: "var(--forge-gold)" }}>работы</em>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 40, position: "relative" }}>
            {steps.map((step, i) => (
              <div key={i} className="reveal" style={{ textAlign: "center" }}>
                <div style={{ display: "inline-flex", width: 76, height: 76, border: "1px solid rgba(201,168,76,0.3)", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, color: "var(--forge-gold)", fontWeight: 300 }}>{step.n}</span>
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 500, marginBottom: 14 }}>{step.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: "rgba(245,240,232,0.58)" }}>{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ marginTop: 72, textAlign: "center" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 16, border: "1px solid rgba(201,168,76,0.22)", padding: "20px 40px" }}>
              <Icon name="Clock" size={18} style={{ color: "var(--forge-gold)" }} />
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 300 }}>
                Полный цикл: <strong style={{ color: "var(--forge-gold)" }}>2–4 недели</strong> — от звонка до готового изделия на объекте
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" style={{ padding: "100px 24px", background: "var(--forge-charcoal)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }} className="reveal">
            <span className="section-label">Что говорят клиенты</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 300, margin: "16px 0 0" }}>
              <em style={{ fontStyle: "italic", color: "var(--forge-gold)" }}>Отзывы</em>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {reviews.map((r, i) => (
              <div key={i} className="reveal" style={{ padding: "36px", border: "1px solid rgba(201,168,76,0.14)", background: "rgba(10,10,10,0.5)" }}>
                <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <span key={j} style={{ color: "var(--forge-gold)", fontSize: 15 }}>★</span>
                  ))}
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.85, color: "rgba(245,240,232,0.78)", marginBottom: 24, fontStyle: "italic" }}>
                  «{r.text}»
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon name="User" size={16} style={{ color: "var(--forge-gold)" }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{r.name}</div>
                    <div style={{ fontSize: 12, color: "rgba(245,240,232,0.45)", marginTop: 2 }}>{r.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gap: 80, alignItems: "start" }} className="grid grid-cols-1 md:grid-cols-2">
          <div className="reveal">
            <span className="section-label">Связаться с нами</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 300, margin: "16px 0 28px", lineHeight: 1.1 }}>
              Обсудим<br />
              <em style={{ fontStyle: "italic", color: "var(--forge-gold)" }}>ваш проект</em>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: "rgba(245,240,232,0.68)", marginBottom: 40 }}>
              Отправьте фото объекта или опишите задачу — рассчитаем стоимость и ответим за 15 минут. Первый выезд на замер бесплатно.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              {[
                { icon: "MapPin", text: "Калининград, собственное производство", sub: "Выезд по всей Калининградской области" },
                { icon: "Phone", text: "+7 (906) 213-19-19", sub: "Пн–Пт: 9:00–18:00" },
                { icon: "MessageCircle", text: "Telegram / WhatsApp", sub: "Быстрый ответ в мессенджерах" },
              ].map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 44, height: 44, border: "1px solid rgba(201,168,76,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon name={c.icon} size={18} style={{ color: "var(--forge-gold)" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 3 }}>{c.text}</div>
                    <div style={{ fontSize: 13, color: "rgba(245,240,232,0.48)" }}>{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal">
            {submitted ? (
              <div style={{ padding: "60px 40px", border: "1px solid rgba(201,168,76,0.3)", textAlign: "center" }}>
                <div style={{ width: 64, height: 64, border: "1px solid var(--forge-gold)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                  <Icon name="Check" size={28} style={{ color: "var(--forge-gold)" }} />
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 300, marginBottom: 12 }}>Заявка отправлена</h3>
                <p style={{ fontSize: 15, color: "rgba(245,240,232,0.62)" }}>Мы свяжемся с вами в течение 15 минут</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ marginBottom: 8 }}>
                  <p style={{ fontSize: 18, fontFamily: "'Cormorant Garamond', serif", color: "rgba(245,240,232,0.78)", margin: "0 0 4px" }}>
                    📸 Отправьте фото — рассчитаем за 15 минут
                  </p>
                </div>
                <input
                  className="forge-input"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <input
                  className="forge-input"
                  placeholder="Телефон или Telegram"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
                <textarea
                  className="forge-input"
                  placeholder="Опишите задачу или оставьте ссылку на фото объекта..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ resize: "vertical" }}
                />
                <button
                  type="submit"
                  style={{
                    background: "var(--forge-gold)",
                    color: "var(--forge-black)",
                    border: "none",
                    padding: "18px 32px",
                    fontSize: 13,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    fontFamily: "'Golos Text', sans-serif",
                    fontWeight: 700,
                    transition: "background 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--forge-gold-light)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "var(--forge-gold)")}
                >
                  Отправить заявку
                </button>
                <p style={{ fontSize: 12, color: "rgba(245,240,232,0.35)", textAlign: "center" }}>
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(201,168,76,0.15)", padding: "44px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
          <div>
            <img src={IMG_LOGO} alt="Белый Куб" style={{ height: 38, width: "auto", filter: "brightness(0) invert(1)", opacity: 0.7 }} />
          </div>
          <p style={{ fontSize: 12, color: "rgba(245,240,232,0.3)", textAlign: "center", margin: 0 }}>
            © 2024 Мастерская художественной ковки «Белый Куб» · Калининград
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {[["about", "О нас"], ["services", "Услуги"], ["contacts", "Контакты"]].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{ background: "none", border: "none", color: "rgba(245,240,232,0.38)", fontSize: 12, letterSpacing: "0.1em", cursor: "pointer", fontFamily: "'Golos Text', sans-serif", transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--forge-gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.38)")}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}