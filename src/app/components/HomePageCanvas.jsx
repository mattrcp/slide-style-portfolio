"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/content";
import {
  IconBrandLinkedin,
  IconBrandDribbble,
  IconBrandInstagram,
  IconBrandTwitter,
  IconMail,
  IconFileCv,
} from "@tabler/icons-react";

// ─── Canvas constants ─────────────────────────────────────────────────────────

const CANVAS_W = 12000;
const CANVAS_H = 6000;
const MIN_ZOOM = 0.06;
const MAX_ZOOM = 2.5;
const DEFAULT_ZOOM = 0.82;
const CARD_GAP = 24;
const SECTION_X = 200;
const ROW_GAP = 40; // visual gap between bottom of one row and top of next

// Subtle dot grid — works on both light and dark canvas
const GRID = `url("data:image/svg+xml,%3Csvg width='30' height='30' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='rgba(128%2C128%2C128%2C0.12)'/%3E%3C/svg%3E")`;

// ─── Playground data ──────────────────────────────────────────────────────────

const playgroundItems = [
  { id: 1, title: "Briefly AI",       desc: "Document Generator", src: "/playground/briefly.png",   rot: -2.5 },
  { id: 2, title: "Banking Website",  desc: "Website & App",      src: "/playground/banking.png",   rot:  1.5 },
  { id: 3, title: "Joruno Architect", desc: "Website & Dev",      src: "/playground/joruno.png",    rot: -1   },
  { id: 4, title: "Sony App",         desc: "App Redesign",       src: "/playground/sony.jpg",      rot:  2   },
  { id: 5, title: "Bank App",         desc: "Folder Design",      src: "/playground/bank.png",      rot: -1.5 },
  { id: 6, title: "Component Tree",   desc: "Figma Plugin",       src: "/playground/component.png", rot:  1   },
];

const socialLinks = [
  { href: "mailto:ratchapon.ngam@gmail.com",                                                       label: "Email",     logo: <IconMail stroke={2} /> },
  { href: "https://drive.google.com/file/d/1ByQSdo7pawVR3PmdSTslC5VGNi-N7nnS/view?usp=sharing",  label: "Resume",    logo: <IconFileCv stroke={2} /> },
  { href: "https://dribbble.com/ratchapon",                                                        label: "Dribbble",  logo: <IconBrandDribbble stroke={2} /> },
  { href: "https://www.instagram.com/justmatt.studio/",                                            label: "Instagram", logo: <IconBrandInstagram stroke={2} /> },
  { href: "https://www.linkedin.com/in/matt-ngamdan-b251171a1/",                                  label: "LinkedIn",  logo: <IconBrandLinkedin stroke={2} /> },
  { href: "https://x.com/mattjustbored",                                                           label: "Twitter",   logo: <IconBrandTwitter stroke={2} /> },
];

// ─── Frame — Figma-style label + bordered card ────────────────────────────────

function Frame({ name, style = {}, rotation = 0, dy = 0, children }) {
  return (
    <div style={{
      display: "inline-block",
      transform: `rotate(${rotation}deg) translateY(${dy}px)`,
      verticalAlign: "top",
      transformOrigin: "center center",
    }}>
      <p className="font-mono text-[11px] tracking-[0.06em] mb-1.5 select-none text-primaryText opacity-20">
        {name}
      </p>
      <div
        className="bg-primaryBg overflow-hidden relative"
        style={{ border: "1px solid rgba(128,128,128,0.15)", borderRadius: 2, ...style }}
      >
        {children}
      </div>
    </div>
  );
}

// ─── ROW 1: INTRO CARDS ───────────────────────────────────────────────────────

function HeroCard({ cardW, cardH }) {
  const sentence = "Hello there! I'm Matt, a product designer turning complex problems into functional design.";
  const words = sentence.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.05 } },
  };
  const wordVariants = {
    hidden: { y: "115%", opacity: 0, rotate: 5 },
    visible: { y: 0, opacity: 1, rotate: 0, transition: { duration: 1, ease: [0.25, 1, 0.5, 1] } },
  };
  const footerVariants = {
    hidden: { opacity: 0, y: "115%" },
    visible: { opacity: 1, y: 0, transition: { delay: 1, duration: 0.4, ease: [0.25, 1, 0.5, 1] } },
  };

  return (
    <Frame name="hero" style={{ width: cardW, height: cardH }}>
      <div className="flex flex-col justify-between items-start p-6 w-full h-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full text-[clamp(40px,4.5vw,96px)]"
        >
          <h1 className="flex flex-wrap w-full leading-none text-primaryText">
            {words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden pb-[0.1em] mr-[0.2em] align-top">
                <motion.span variants={wordVariants} className="inline-block">
                  {word === "Matt," ? (
                    <span className="inline-flex items-baseline">
                      {word}
                      <span className="inline-block self-center mx-2">
                        <Image
                          src="/assets/personal.png"
                          className="object-contain h-[0.9em] w-auto -mb-[0.1em]"
                          alt="Matt"
                          width={200}
                          height={200}
                          priority
                          draggable={false}
                        />
                      </span>
                    </span>
                  ) : (
                    word
                  )}
                </motion.span>
              </span>
            ))}
          </h1>
        </motion.div>

        <motion.div
          variants={footerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-4 justify-between items-start w-full sm:flex-row sm:items-center"
        >
          <div className="flex gap-2 items-center">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 bg-green-500 rounded-full" />
            </span>
            <Link href="mailto:ratchapon.ngam@gmail.com" className="text-sm font-medium tracking-wider uppercase text-secondaryText">
              Ratchapon.ngam@gmail.com
            </Link>
          </div>
          <p className="text-sm opacity-60 text-secondaryText">
            Product Design · App Design · Design System · Website Design
          </p>
        </motion.div>
      </div>
    </Frame>
  );
}

function AboutCard({ cardW, cardH }) {
  return (
    <Frame name="about" style={{ width: cardW, height: cardH }}>
      <div className="flex flex-col justify-between items-start p-6 w-full h-full">
        <p className="text-base opacity-50 text-secondaryText">Hello again!</p>

        <div className="text-[clamp(32px,4.5vw,96px)]">
          <p className="leading-none text-primaryText font-instrument">
            I&apos;m Matt{" "}
            <span className="inline-block align-baseline mx-2">
              <Image
                src="/assets/personal.png"
                width={200}
                height={200}
                alt="Matt"
                className="inline-block align-baseline h-[1em] w-auto rotate-6"
                draggable={false}
              />
            </span>
            , a product designer based in Bangkok, where I focus on{" "}
            <span className="italic text-[#FF083A]">building mobile experiences</span>{" "}
            and <span className="italic text-[#FF083A]">design systems.</span>
          </p>
        </div>

        <p className="text-sm opacity-40 text-secondaryText">Bangkok, Thailand · Available for work</p>
      </div>
    </Frame>
  );
}

function ContactCard({ cardW, cardH }) {
  const year = new Date().getFullYear();
  return (
    <Frame name="contact" style={{ width: cardW, height: cardH }}>
      <div className="flex flex-col justify-between items-start p-6 w-full h-full">
        <div className="text-[clamp(40px,4.5vw,96px)]">
          <h1 className="leading-none text-primaryText">
            Matt<br />Ngamdan
          </h1>
        </div>

        <div className="flex flex-col gap-4 justify-between items-start w-full md:flex-row md:items-end">
          <div className="flex gap-2 flex-wrap">
            {socialLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                target="_blank"
                className="flex flex-row gap-4 justify-end items-start p-2 w-16 h-16 rounded-lg transition-all duration-150 ease-out text-secondaryText bg-secondaryBg hover:bg-black hover:text-white aspect-square"
              >
                <span>{link.logo}</span>
              </Link>
            ))}
          </div>
          <p className="text-sm text-secondaryText opacity-60">© {year} Ratchapon Ngamdan</p>
        </div>
      </div>
    </Frame>
  );
}

function Row1({ cardW, cardH, top }) {
  return (
    <div style={{ position: "absolute", left: SECTION_X, top }}>
      <div style={{ display: "flex", gap: CARD_GAP, alignItems: "flex-start" }}>
        <HeroCard    cardW={cardW} cardH={cardH} />
        <AboutCard   cardW={cardW} cardH={cardH} />
        <ContactCard cardW={cardW} cardH={cardH} />
      </div>
    </div>
  );
}

// ─── ROW 2: PROJECTS ──────────────────────────────────────────────────────────

function ProjectCard({ project, cardW, cardH }) {
  return (
    <Frame name={project.title.toLowerCase()} style={{ width: cardW, height: cardH }}>
      <Link href={project.href} className="block w-full h-full">
        <motion.div
          className="group flex flex-col gap-4 justify-between items-center p-6 w-full h-full"
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
        >
          <div className="overflow-hidden relative w-full h-full rounded-lg">
            <div className="relative w-full h-full">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center transition-all duration-300 ease-in-out group-hover:scale-105"
                  draggable={false}
                  unoptimized
                />
              ) : (
                <div className="w-full h-full bg-secondaryBg" />
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4 justify-between items-start w-full md:flex-row md:items-center flex-shrink-0">
            <div className="flex gap-2 items-center">
              <p className="text-base font-semibold font-satoshi text-primaryText">{project.title}</p>
              <span className="text-secondaryText"> ⎯</span>
              <p className="text-base font-satoshi text-secondaryText">{project.year}</p>
            </div>
            <div className="flex gap-2 flex-wrap justify-end">
              {project.tag.map((tag, i) => (
                <span key={i} className="text-base text-secondaryText whitespace-nowrap">{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </Link>
    </Frame>
  );
}

function Row2({ cardW, cardH, top }) {
  return (
    <div style={{ position: "absolute", left: SECTION_X, top }}>
      <div style={{ display: "flex", gap: CARD_GAP, width: "max-content" }}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} cardW={cardW} cardH={cardH} />
        ))}
      </div>
    </div>
  );
}

// ─── ROW 3: PLAYGROUND ────────────────────────────────────────────────────────

function PlaygroundCard({ item, cardW, cardH }) {
  const slot = cardW + CARD_GAP;
  const row2Y = cardH + CARD_GAP;

  const offsets = [
    { dx: 0,           dy: 0 },
    { dx: slot,        dy: -20 },
    { dx: slot * 2,    dy:  15 },
    { dx: slot * 0.3,  dy: row2Y },
    { dx: slot * 1.2,  dy: row2Y - 14 },
    { dx: slot * 2.1,  dy: row2Y + 8 },
  ];

  const { dx, dy } = offsets[item.id - 1] || { dx: 0, dy: 0 };

  return (
    <div style={{ position: "absolute", left: dx, top: dy }}>
      <Frame name={item.title.toLowerCase()} rotation={item.rot} style={{ width: cardW, height: cardH }}>
        <div className="flex flex-col gap-4 justify-between p-6 w-full h-full">
          <div className="overflow-hidden relative flex-1 rounded-lg bg-secondaryBg">
            <img
              src={item.src}
              alt={item.title}
              draggable="false"
              className="object-cover w-full h-full block"
              style={{ userSelect: "none", WebkitUserDrag: "none" }}
            />
          </div>
          <div className="flex-shrink-0">
            <p className="text-base font-semibold font-satoshi text-primaryText leading-tight">{item.title}</p>
            <p className="text-base font-satoshi text-secondaryText italic">{item.desc}</p>
          </div>
        </div>
      </Frame>
    </div>
  );
}

function Row3({ cardW, cardH, top }) {
  const containerH = cardH * 2 + CARD_GAP + 80;
  return (
    <div style={{ position: "absolute", left: SECTION_X, top }}>
      <div style={{ position: "relative", width: "max-content", height: containerH }}>
        {playgroundItems.map((item) => (
          <PlaygroundCard key={item.id} item={item} cardW={cardW} cardH={cardH} />
        ))}
      </div>
    </div>
  );
}

// ─── TOOLBAR ─────────────────────────────────────────────────────────────────

function CanvasToolbar({ zoom, panX, panY, onZoomIn, onZoomOut, onReset, onFitAll, onGoTo }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const unsubX = panX.on("change", () => {
      setCoords({ x: Math.round(-panX.get()), y: Math.round(-panY.get()) });
    });
    const unsubY = panY.on("change", () => {
      setCoords({ x: Math.round(-panX.get()), y: Math.round(-panY.get()) });
    });
    return () => { unsubX(); unsubY(); };
  }, [panX, panY]);

  const btn = {
    fontFamily: "var(--font-mono, monospace)",
    fontSize: 11,
    letterSpacing: "0.06em",
    color: "rgba(255,255,255,0.38)",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "6px 10px",
    borderRadius: 3,
    lineHeight: 1,
  };
  const iconBtn = { ...btn, width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, padding: 0 };
  const pill = { display: "flex", alignItems: "center", gap: 2, background: "rgba(17,17,17,0.92)", backdropFilter: "blur(8px)", borderRadius: 6, padding: "4px 6px" };

  return (
    <div style={{ position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)", zIndex: 50, display: "flex", gap: 6 }}>
      {/* Section nav */}
      <div style={pill}>
        {[{ key: "row1", label: "01" }, { key: "row2", label: "02" }, { key: "row3", label: "03" }].map(({ key, label }) => (
          <button key={key} onClick={() => onGoTo(key)} style={btn}>{label}</button>
        ))}
      </div>

      {/* Zoom + fit */}
      <div style={pill}>
        <button onClick={onZoomOut} style={iconBtn} title="Zoom out">−</button>
        <button onClick={onReset} style={{ ...btn, minWidth: 50, textAlign: "center" }} title="Reset zoom">
          {Math.round(zoom * 100)}%
        </button>
        <button onClick={onZoomIn} style={iconBtn} title="Zoom in">+</button>
        <div style={{ width: 1, height: 14, background: "rgba(255,255,255,0.1)", marginInline: 4 }} />
        <button onClick={onFitAll} style={iconBtn} title="Fit all">
          <svg width="13" height="13" viewBox="0 0 14 14" fill="currentColor">
            <path d="M0 0h5v1.5H1.5V5H0V0zm14 0v5h-1.5V1.5H9V0h5zM0 9h1.5v3.5H5V14H0V9zm12.5 3.5H9V14h5V9h-1.5v3.5z"/>
          </svg>
        </button>
      </div>

      {/* Coordinates — like Figma */}
      <div style={{ ...pill, gap: 0, padding: "4px 10px" }}>
        <span style={{ ...btn, padding: 0, fontSize: 10, letterSpacing: "0.04em", color: "rgba(255,255,255,0.22)", fontVariantNumeric: "tabular-nums", minWidth: 80, textAlign: "center" }}>
          {coords.x}, {coords.y}
        </span>
      </div>
    </div>
  );
}

// ─── MAIN CANVAS ──────────────────────────────────────────────────────────────

export default function HomePageCanvas() {
  const containerRef = useRef(null);
  const panX = useMotionValue(0);
  const panY = useMotionValue(0);
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);
  const zoomRef = useRef(DEFAULT_ZOOM);
  const isDragging = useRef(false);
  const lastPointer = useRef({ x: 0, y: 0 });

  // Card size = snap-section: 60vw × 65dvh
  const [cardSize, setCardSize] = useState({ w: 864, h: 585 });

  useEffect(() => {
    const update = () => setCardSize({
      w: Math.round(window.innerWidth * 0.6),
      h: Math.round(window.innerHeight * 0.65),
    });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const { w: cardW, h: cardH } = cardSize;

  // Row Y positions — 40px visual gap between rows
  const rowY = {
    row1: 180,
    row2: 180 + cardH + ROW_GAP,
    row3: 180 + (cardH + ROW_GAP) * 2,
  };

  // Initial pan: show the hero card
  useEffect(() => {
    const w = window.innerWidth;
    panX.set(w * 0.08 - SECTION_X * DEFAULT_ZOOM);
    panY.set(80 - rowY.row1 * DEFAULT_ZOOM);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Wheel — free pan + ctrl/cmd+scroll to zoom toward cursor
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e) => {
      e.preventDefault();
      if (e.ctrlKey || e.metaKey) {
        const rect = el.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;
        const factor = e.deltaY < 0 ? 1.08 : 0.925;
        const oldZ = zoomRef.current;
        const newZ = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, oldZ * factor));
        const ratio = newZ / oldZ;
        panX.set(mx - ratio * (mx - panX.get()));
        panY.set(my - ratio * (my - panY.get()));
        zoomRef.current = newZ;
        setZoom(newZ);
      } else {
        panX.set(panX.get() - e.deltaX);
        panY.set(panY.get() - e.deltaY);
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [panX, panY]);

  // Pointer drag
  const onPointerDown = useCallback((e) => {
    if (e.button !== 0) return;
    if (e.target.closest("a, button")) return;
    isDragging.current = true;
    lastPointer.current = { x: e.clientX, y: e.clientY };
    containerRef.current?.setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e) => {
    if (!isDragging.current) return;
    panX.set(panX.get() + (e.clientX - lastPointer.current.x));
    panY.set(panY.get() + (e.clientY - lastPointer.current.y));
    lastPointer.current = { x: e.clientX, y: e.clientY };
  }, [panX, panY]);

  const onPointerUp = useCallback(() => { isDragging.current = false; }, []);

  const zoomTo = useCallback((newZ) => {
    const clamped = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, newZ));
    const w = window.innerWidth;
    const h = window.innerHeight;
    const ratio = clamped / zoomRef.current;
    panX.set(w / 2 - ratio * (w / 2 - panX.get()));
    panY.set(h / 2 - ratio * (h / 2 - panY.get()));
    zoomRef.current = clamped;
    setZoom(clamped);
  }, [panX, panY]);

  const goToRow = useCallback((key) => {
    const sy = rowY[key];
    const z = zoomRef.current;
    const w = window.innerWidth;
    animate(panX, w * 0.08 - SECTION_X * z, { duration: 0.55, ease: [0.25, 1, 0.5, 1] });
    animate(panY, 80 - sy * z,              { duration: 0.55, ease: [0.25, 1, 0.5, 1] });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [panX, panY, rowY.row1, rowY.row2, rowY.row3]);

  const fitAll = useCallback(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const cW = cardW * 4 + CARD_GAP * 3;
    const cH = rowY.row3 + cardH * 2 + 100 - 180;
    const z = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, (w * 0.85) / cW, (h * 0.85) / cH));
    panX.set((w - cW * z) / 2 - SECTION_X * z);
    panY.set((h - cH * z) / 2 - 180 * z);
    zoomRef.current = z;
    setZoom(z);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [panX, panY, cardW, cardH, rowY.row3]);

  const resetZoom = useCallback(() => {
    const w = window.innerWidth;
    animate(panX, w * 0.08 - SECTION_X * DEFAULT_ZOOM, { duration: 0.5, ease: [0.25, 1, 0.5, 1] });
    animate(panY, 80 - rowY.row1 * DEFAULT_ZOOM,       { duration: 0.5, ease: [0.25, 1, 0.5, 1] });
    zoomRef.current = DEFAULT_ZOOM;
    setZoom(DEFAULT_ZOOM);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [panX, panY, rowY.row1]);

  return (
    <div
      ref={containerRef}
      className="w-screen h-screen overflow-hidden relative select-none bg-secondaryBg cursor-grab active:cursor-grabbing"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {/* Dot grid — fixed, not part of the panning canvas */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: GRID, backgroundSize: "30px 30px" }}
      />

      <motion.div
        style={{
          x: panX,
          y: panY,
          scale: zoom,
          transformOrigin: "0 0",
          width: CANVAS_W,
          height: CANVAS_H,
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <Row1 cardW={cardW} cardH={cardH} top={rowY.row1} />
        <Row2 cardW={cardW} cardH={cardH} top={rowY.row2} />
        <Row3 cardW={cardW} cardH={cardH} top={rowY.row3} />
      </motion.div>

      <CanvasToolbar
        zoom={zoom}
        panX={panX}
        panY={panY}
        onZoomIn={() => zoomTo(zoom * 1.25)}
        onZoomOut={() => zoomTo(zoom / 1.25)}
        onReset={resetZoom}
        onFitAll={fitAll}
        onGoTo={goToRow}
      />
    </div>
  );
}
