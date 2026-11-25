"use client";

// Saari GSAP animation isi ek file me hai.
// prefers-reduced-motion wale users ko sab kuch seedha, bina animation ke milta hai.

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const LOCK = "is-intro";

export default function Motion({ children }) {
  const root = useRef(null);

  useGSAP(
    () => {
      // CSS fallback band karo — ab JS sambhal lega.
      root.current.classList.add("is-ready");

      const mm = gsap.matchMedia();

      // ---------- bina animation wale users ----------
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".intro", { display: "none" });
        gsap.set(".shell", { clearProps: "all" });
        document.documentElement.classList.remove(LOCK);
      });

      // ---------- poori animation ----------
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(".shell", { autoAlpha: 0 });
        document.documentElement.classList.add(LOCK);
        window.scrollTo(0, 0);

        const unlock = () => document.documentElement.classList.remove(LOCK);

        // kirne dheere dheere ghoomti rehti hain
        const rays = gsap.to(".intro__rays", {
          rotation: 360,
          duration: 90,
          ease: "none",
          repeat: -1,
        });

        const intro = gsap.timeline({
          defaults: { ease: "power3.out" },
          onComplete: () => {
            rays.kill();
            unlock();
            ScrollTrigger.refresh();
          },
        });

        intro.from(".intro__rays", { scale: 0.45, autoAlpha: 0, duration: 1.2, ease: "power2.out" }, 0);

        // 1. Bake, fir My, fir Day — upar se girte hain
        gsap.utils.toArray(".intro__word").forEach((word, i) => {
          const at = 0.25 + i * 0.33;
          const inner = word.querySelector(".intro__word-in");

          intro
            .from(
              word,
              {
                y: () => -(window.innerHeight * 0.95),
                rotationX: -75,
                autoAlpha: 0,
                duration: 0.85,
                ease: "back.out(1.25)",
              },
              at
            )
            // zameen par lagte hi halka sa dabta hai
            .to(inner, { scaleY: 0.78, scaleX: 1.12, duration: 0.1, ease: "power2.in" }, at + 0.68)
            .to(inner, { scaleY: 1, scaleX: 1, duration: 0.5, ease: "elastic.out(1, 0.45)" }, at + 0.78);
        });

        // 2. naam ke neeche "with Kiran"
        intro.from(
          ".intro__by",
          { y: 18, autoAlpha: 0, duration: 0.55, ease: "power2.out" },
          1.85
        );

        // 3. naam par ek chamak
        intro.fromTo(
          ".intro__shine",
          { xPercent: -140 },
          { xPercent: 140, duration: 0.75, ease: "power2.inOut" },
          2.1
        );

        // 4. ek second ka pause, fir shutter khulta hai
        const open = 3.4;
        intro
          .to(".intro__words", { scale: 1.5, y: -40, autoAlpha: 0, duration: 0.8, ease: "power2.in" }, open)
          .to(".intro__rays", { scale: 1.9, autoAlpha: 0, duration: 0.9, ease: "power2.in" }, open)
          .to(".intro__panel--l", { xPercent: -101, duration: 1.05, ease: "power3.inOut" }, open + 0.12)
          .to(".intro__panel--r", { xPercent: 101, duration: 1.05, ease: "power3.inOut" }, open + 0.12)
          // site andar se khulti hai
          .fromTo(
            ".shell",
            { autoAlpha: 0, scale: 0.88, rotationX: 7, transformPerspective: 1000, transformOrigin: "50% 35%" },
            {
              autoAlpha: 1,
              scale: 1,
              rotationX: 0,
              duration: 1.15,
              ease: "power3.out",
              clearProps: "transform",
            },
            open + 0.2
          )
          .from(".hero__sunny", { yPercent: 70, duration: 1, ease: "back.out(1.2)" }, open + 0.45)
          .from(".hero__fade", { y: 24, autoAlpha: 0, duration: 0.6, stagger: 0.12 }, open + 0.6)
          .set(".intro", { display: "none" });

        // kahin bhi click/Escape — animation skip
        const skip = () => intro.progress(1);
        const onKey = (e) => e.key === "Escape" && skip();
        const el = root.current.querySelector(".intro");
        el?.addEventListener("click", skip);
        window.addEventListener("keydown", onKey);

        // ---------- hero ----------
        gsap.to(".hero__sunny-bob", {
          y: -12,
          duration: 1.9,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        gsap.to(".hero__rays", { rotation: 360, duration: 120, ease: "none", repeat: -1 });

        // mascot ke haath hilte hain
        gsap.utils.toArray(".sunny__arm").forEach((arm) => {
          const swing = Number(arm.dataset.swing);
          if (!swing) return;
          gsap.to(arm, {
            rotation: swing,
            svgOrigin: arm.dataset.origin,
            duration: 0.55,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
        });

        // palak jhapakna
        gsap
          .timeline({ repeat: -1, repeatDelay: 3.2, delay: 4.5 })
          .to(".sunny__eye", { scaleY: 0.1, transformOrigin: "50% 50%", duration: 0.08 })
          .to(".sunny__eye", { scaleY: 1, duration: 0.12 });

        // ---------- scroll ----------
        // nav ka chhota cake scroll ke saath ludhakta hai
        gsap.to(".nav__roller", {
          x: () => window.innerWidth - 36,
          rotation: 720,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 0.4, invalidateOnRefresh: true },
        });

        // sections ke beech icing tapakti hai
        gsap.utils.toArray(".drip").forEach((drip) => {
          gsap.from(drip, {
            scaleY: 0.2,
            transformOrigin: "50% 0%",
            ease: "none",
            scrollTrigger: { trigger: drip, start: "top 98%", end: "top 45%", scrub: 0.6 },
          });
        });

        // "½ kg" sticker pop
        gsap.utils.toArray(".sticker").forEach((sticker) => {
          gsap.from(sticker, {
            scale: 0,
            rotation: -60,
            duration: 0.6,
            ease: "back.out(2.2)",
            scrollTrigger: { trigger: sticker, start: "top 92%", once: true },
          });
        });

        // price rows ek ke baad ek
        gsap.utils.toArray("[data-reveal]").forEach((group) => {
          const items = group.querySelectorAll("[data-reveal-item]");
          if (!items.length) return;
          gsap.from(items, {
            y: 18,
            autoAlpha: 0,
            duration: 0.45,
            stagger: 0.035,
            ease: "power2.out",
            scrollTrigger: { trigger: group, start: "top 82%", once: true },
          });
        });

        // 3D cards halke se seedhe hote hain
        gsap.utils.toArray("[data-tilt]").forEach((card) => {
          gsap.from(card, {
            rotationX: 16,
            y: 40,
            transformPerspective: 900,
            transformOrigin: "50% 100%",
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 88%", once: true },
          });
        });

        return () => {
          el?.removeEventListener("click", skip);
          window.removeEventListener("keydown", onKey);
          unlock();
        };
      });
    },
    { scope: root }
  );

  return (
    <div ref={root} className="motion-root">
      {children}
    </div>
  );
}
