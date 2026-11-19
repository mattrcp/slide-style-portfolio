"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/content";

// ─── Canvas constants ─────────────────────────────────────────────────────────

const CANVAS_W = 10000;
const CANVAS_H = 5000;
const MIN_ZOOM = 0.08;
const MAX_ZOOM = 2.5;
const DEFAULT_ZOOM = 0.82;
const CARD_GAP = 24;
const SECTION_X = 200;
const SECTION_HEADER_H = 46; // SectionHeader height + marginBottom

const GRID = `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(0%2C0%2C0%2C0.038)' stroke-width='1'/%3E%3C/svg%3E")`;

// ─── Design tokens (always light — canvas is theme-independent) ───────────────

const C = {
  canvas:      "#F7F6F3",
  surface:     "#FFFFFF",
  border:      "#EAEAEA",
  textPrimary: "#111111",
  textMuted:   "#787774",
  textFaint:   "#C8C5BF",
};

const SANS = "'Helvetica Neue', 'SF Pro Display', system-ui, sans-serif";
const MONO = "'SF Mono', 'Geist Mono', 'JetBrains Mono', monospace";

// ─── Primitives ───────────────────────────────────────────────────────────────

function Frame({ name, style = {}, rotation = 0, children }) {
  return (
    <div style={{ display: "inline-block", transform: `rotate(${rotation}deg)`, verticalAlign: "top" }}>
      <p style={{
        fontFamily: MONO,
        fontSize: 11,
        color: C.textFaint,
        letterSpacing: "0.06em",
        marginBottom: 6,
        userSelect: "none",
        paddingLeft: 1,
      }}>
        {name}
      </p>
      <div style={{
        background: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: 2,
        position: "relative",
        overflow: "hidden",
        ...style,
      }}>
        {children}
      </div>
    </div>
  );
}

function SectionHeader({ num, title }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
      <span style={{ fontFamily: MONO, fontSize: 11, color: C.textFaint, letterSpacing: "0.1em" }}>{num}</span>
      <div style={{ width: 28, height: 1, background: C.border }} />
      <span style={{ fontFamily: MONO, fontSize: 11, color: C.textFaint, letterSpacing: "0.14em", textTransform: "uppercase" }}>
        {title}
      </span>
    </div>
  );
}

// ─── ABOUT CARDS ─────────────────────────────────────────────────────────────

function ProfileCard({ cardW, cardH }) {
  return (
    <Frame name="profile" style={{ width: cardW, height: cardH }}>
      <div style={{
        padding: 36,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: SANS,
        boxSizing: "border-box",
      }}>
        <div>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
            <h1 style={{
              fontFamily: SANS,
              fontSize: Math.round(cardH * 0.22),
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 0.88,
              color: C.textPrimary,
              userSelect: "none",
            }}>
              MATT
            </h1>
            <div style={{
              width: Math.round(cardH * 0.14),
              height: Math.round(cardH * 0.14),
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
              marginTop: 4,
              border: `1px solid ${C.border}`,
              position: "relative",
            }}>
              <Image src="/assets/personal.png" alt="Matt Ngamdan" fill className="object-cover" priority />
            </div>
          </div>

          <div style={{ height: 1, background: C.border, marginTop: 20, marginBottom: 18 }} />

          <p style={{ fontFamily: SANS, fontSize: 14, lineHeight: 1.65, color: C.textMuted, maxWidth: "85%" }}>
            Turning complex problems into functional design.
            Crafting digital experiences that are both intuitive and considered.
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span className="relative flex" style={{ width: 8, height: 8, flexShrink: 0 }}>
            <span className="animate-ping absolute inline-flex rounded-full bg-green-400 opacity-75" style={{ width: "100%", height: "100%" }} />
            <span className="relative inline-flex rounded-full bg-green-500" style={{ width: 8, height: 8 }} />
          </span>
          <a
            href="mailto:ratchapon.ngam@gmail.com"
            style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.09em", textTransform: "uppercase", color: C.textMuted, textDecoration: "none" }}
          >
            ratchapon.ngam@gmail.com
          </a>
        </div>
      </div>
    </Frame>
  );
}

function RoleCard({ cardW, cardH }) {
  const titleSize = Math.round(cardH * 0.115);
  return (
    <Frame name="role" style={{ width: cardW, height: cardH }}>
      <div style={{
        padding: 36,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: SANS,
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
      }}>
        <div>
          {["PRODUCT", "DESIGNER"].map((word) => (
            <p key={word} style={{ fontFamily: SANS, fontSize: titleSize, fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.02, color: C.textPrimary }}>
              {word}
            </p>
          ))}
          <p style={{ fontFamily: SANS, fontSize: titleSize, fontWeight: 300, letterSpacing: "-0.025em", lineHeight: 1.02, color: C.textFaint }}>
            &amp; DEV
          </p>
        </div>

        <div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
            {["Website Design", "App Design", "Design System", "UX / UI"].map((t) => (
              <span key={t} style={{
                fontFamily: MONO, fontSize: 9, letterSpacing: "0.07em", textTransform: "uppercase",
                color: C.textMuted, padding: "3px 7px", border: `1px solid ${C.border}`, borderRadius: 2,
              }}>
                {t}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            {["CLARITY", "REDUCTION", "FUNCTION"].map((w) => (
              <span key={w} style={{ fontFamily: MONO, fontSize: 9, letterSpacing: "0.32em", color: C.textFaint, textTransform: "uppercase" }}>
                {w}
              </span>
            ))}
          </div>
        </div>

        <div style={{
          position: "absolute",
          right: -30,
          top: "50%",
          transform: "rotate(90deg)",
          transformOrigin: "right center",
          whiteSpace: "nowrap",
        }}>
          <span style={{ fontFamily: MONO, fontSize: 9, letterSpacing: "0.4em", color: C.textFaint, textTransform: "uppercase" }}>
            Bangkok · 2025
          </span>
        </div>
      </div>
    </Frame>
  );
}

function AboutSection({ cardW, cardH, top }) {
  return (
    <div style={{ position: "absolute", left: SECTION_X, top }}>
      <SectionHeader num="01" title="About" />
      <div style={{ display: "flex", gap: CARD_GAP }}>
        <ProfileCard cardW={cardW} cardH={cardH} />
        <RoleCard cardW={cardW} cardH={cardH} />
      </div>
    </div>
  );
}

// ─── PROJECTS SECTION ─────────────────────────────────────────────────────────

function ProjectsSection({ cardW, cardH, top }) {
  return (
    <div style={{ position: "absolute", left: SECTION_X, top }}>
      <SectionHeader num="02" title="Selected Work" />
      <div style={{ display: "flex", gap: CARD_GAP, width: "max-content" }}>
        {projects.map((project) => (
          <Link href={project.href} key={project.id} style={{ textDecoration: "none" }}>
            <Frame name={project.title.toLowerCase()}>
              <motion.div
                className="group"
                style={{
                  width: cardW,
                  height: cardH,
                  padding: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  justifyContent: "space-between",
                  cursor: "pointer",
                  fontFamily: SANS,
                  boxSizing: "border-box",
                }}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
              >
                <div style={{ position: "relative", flex: 1, overflow: "hidden", borderRadius: 2, background: C.canvas }}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center transition-all duration-300 ease-in-out group-hover:scale-105"
                    unoptimized
                  />
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0 }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: C.textPrimary }}>{project.title}</span>
                    <span style={{ color: C.textFaint }}>⎯</span>
                    <span style={{ fontSize: 13, color: C.textMuted }}>{project.year}</span>
                  </div>
                  <div style={{ display: "flex", gap: 10 }}>
                    {project.tag.slice(0, 2).map((tag, i) => (
                      <span key={i} style={{ fontSize: 11, color: C.textMuted, whiteSpace: "nowrap" }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Frame>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ─── PLAYGROUND SECTION ───────────────────────────────────────────────────────

function PlaygroundSection({ cardW, cardH, top }) {
  const slot = cardW + CARD_GAP;

  // 3 items top row, 3 items below — positions relative to card size
  const items = [
    { id: 1, title: "Briefly AI",       desc: "Document Generator", src: "/playground/briefly.png",   dx: 0,                dy: 0,            rot: -2.5 },
    { id: 2, title: "Banking Website",  desc: "Website & App",      src: "/playground/banking.png",   dx: slot,             dy: -20,          rot:  1.5 },
    { id: 3, title: "Joruno Architect", desc: "Website & Dev",      src: "/playground/joruno.png",    dx: slot * 2,         dy:  15,          rot: -1   },
    { id: 4, title: "Sony App",         desc: "App Redesign",       src: "/playground/sony.jpg",      dx: slot * 0.3,         dy: cardH + 24, rot:  2   },
    { id: 5, title: "Bank App",         desc: "Folder Design",      src: "/playground/bank.png",      dx: slot + slot * 0.15, dy: cardH + 24, rot: -1.5 },
    { id: 6, title: "Component Tree",   desc: "Figma Plugin",       src: "/playground/component.png", dx: slot * 2.1,         dy: cardH + 24, rot:  1   },
  ];

  return (
    <div style={{ position: "absolute", left: SECTION_X, top }}>
      <SectionHeader num="03" title="Playground" />
      <div style={{ position: "relative", width: "max-content", height: cardH * 2 + 100 }}>
        {items.map((item) => (
          <div key={item.id} style={{ position: "absolute", left: item.dx, top: item.dy }}>
            <Frame name={item.title.toLowerCase()} rotation={item.rot} style={{ width: cardW, height: cardH }}>
              <div style={{
                padding: 20,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                height: "100%",
                fontFamily: SANS,
                boxSizing: "border-box",
              }}>
                <div style={{ position: "relative", flex: 1, overflow: "hidden", borderRadius: 2, background: C.canvas }}>
                  <img
                    src={item.src}
                    alt={item.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <div style={{ flexShrink: 0 }}>
                  <p style={{ fontSize: 12, fontWeight: 600, color: C.textPrimary, lineHeight: 1.4 }}>{item.title}</p>
                  <p style={{ fontSize: 11, color: C.textMuted, fontStyle: "italic", lineHeight: 1.4 }}>{item.desc}</p>
                </div>
              </div>
            </Frame>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── TOOLBAR ─────────────────────────────────────────────────────────────────

function CanvasToolbar({ zoom, onZoomIn, onZoomOut, onReset, onFitAll, onGoTo }) {
  const btnStyle = () => ({
    fontFamily: MONO,
    fontSize: 11,
    letterSpacing: "0.06em",
    color: "rgba(255,255,255,0.38)",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "6px 10px",
    borderRadius: 3,
    transition: "color 0.15s",
    lineHeight: 1,
  });

  const iconBtn = { ...btnStyle(), width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, padding: 0 };
  const pill = { display: "flex", alignItems: "center", gap: 2, background: "rgba(17,17,17,0.92)", backdropFilter: "blur(8px)", borderRadius: 6, padding: "4px 6px" };

  return (
    <div style={{ position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)", zIndex: 50, display: "flex", alignItems: "center", gap: 6, pointerEvents: "auto" }}>
      <div style={pill}>
        {[{ key: "about", label: "01" }, { key: "projects", label: "02" }, { key: "playground", label: "03" }].map(({ key, label }) => (
          <button key={key} onClick={() => onGoTo(key)} style={btnStyle()}>{label}</button>
        ))}
      </div>

      <div style={pill}>
        <button onClick={onZoomOut} style={iconBtn} title="Zoom out">−</button>
        <button onClick={onReset} style={{ ...btnStyle(), minWidth: 50, textAlign: "center" }} title="Reset zoom">
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
    </div>
  );
}

// ─── MAIN CANVAS ──────────────────────────────────────────────────────────────

export default function HomeCanvas() {
  const containerRef = useRef(null);
  const panX = useMotionValue(0);
  const panY = useMotionValue(0);
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);
  const zoomRef = useRef(DEFAULT_ZOOM);
  const isDragging = useRef(false);
  const lastPointer = useRef({ x: 0, y: 0 });

  // Card size mirrors the snap-section: 60vw × 65dvh
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

  // Section Y positions — derived from card height so they always stay consistent
  const ROW_GAP = 120;
  const sectionY = {
    about:      180,
    projects:   180 + cardH + SECTION_HEADER_H + ROW_GAP,
    playground: 180 + (cardH + SECTION_HEADER_H + ROW_GAP) * 2,
  };

  // Set initial pan to show the about section
  useEffect(() => {
    const w = window.innerWidth;
    panX.set(w * 0.1 - SECTION_X * DEFAULT_ZOOM);
    panY.set(80 - sectionY.about * DEFAULT_ZOOM);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Wheel — free pan, ctrl+scroll to zoom toward cursor
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

  // Zoom toward viewport center
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

  // Smooth pan to section
  const goToSection = useCallback((key) => {
    const sy = sectionY[key];
    const z = zoomRef.current;
    const w = window.innerWidth;
    animate(panX, w * 0.1 - SECTION_X * z, { duration: 0.55, ease: [0.25, 1, 0.5, 1] });
    animate(panY, 80 - sy * z,             { duration: 0.55, ease: [0.25, 1, 0.5, 1] });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [panX, panY, sectionY.about, sectionY.projects, sectionY.playground]);

  // Fit all content
  const fitAll = useCallback(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const cW = cardW * 4 + CARD_GAP * 3;
    const cH = sectionY.playground + cardH * 2 + 100 - 180;
    const z = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, (w * 0.82) / cW, (h * 0.82) / cH));
    panX.set((w - cW * z) / 2 - SECTION_X * z);
    panY.set((h - cH * z) / 2 - 180 * z);
    zoomRef.current = z;
    setZoom(z);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [panX, panY, cardW, cardH, sectionY.playground]);

  // Reset to default view
  const resetZoom = useCallback(() => {
    const w = window.innerWidth;
    animate(panX, w * 0.1 - SECTION_X * DEFAULT_ZOOM, { duration: 0.5, ease: [0.25, 1, 0.5, 1] });
    animate(panY, 80 - sectionY.about * DEFAULT_ZOOM,  { duration: 0.5, ease: [0.25, 1, 0.5, 1] });
    zoomRef.current = DEFAULT_ZOOM;
    setZoom(DEFAULT_ZOOM);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [panX, panY, sectionY.about]);

  return (
    <div
      ref={containerRef}
      className="w-screen h-screen overflow-hidden relative select-none cursor-grab active:cursor-grabbing"
      style={{ background: C.canvas }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
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
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: GRID, backgroundSize: "60px 60px" }}
        />

        <AboutSection      cardW={cardW} cardH={cardH} top={sectionY.about} />
        <ProjectsSection   cardW={cardW} cardH={cardH} top={sectionY.projects} />
        <PlaygroundSection cardW={cardW} cardH={cardH} top={sectionY.playground} />
      </motion.div>

      <CanvasToolbar
        zoom={zoom}
        onZoomIn={() => zoomTo(zoom * 1.25)}
        onZoomOut={() => zoomTo(zoom / 1.25)}
        onReset={resetZoom}
        onFitAll={fitAll}
        onGoTo={goToSection}
      />
    </div>
  );
}
