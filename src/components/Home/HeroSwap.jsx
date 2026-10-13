import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import HeroImg from "../../assets/hero-portrait.webp";

// Hero portrait that glitches into a hooded-hacker avatar.
// Mouse: hover to switch. Touch / keyboard: tap or press Enter to toggle.
// Served from /public: CRA's SVG importer can't handle the animated <style> inside.
const HackerImg = `${process.env.PUBLIC_URL || ""}/hacker-avatar.svg`;

const HeroSwap = () => {
  const { t } = useLanguage();
  const [hacker, setHacker] = useState(false);
  const [touched, setTouched] = useState(false); // skip the glitch on first paint

  const set = (v) => {
    setTouched(true);
    setHacker(v);
  };

  const onKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      set(!hacker);
    }
  };

  return (
    <div
      className={`hero-photo-frame hero-swap${hacker ? " is-hacker" : ""}${
        touched ? " has-played" : ""
      }`}
      role="button"
      tabIndex={0}
      aria-pressed={hacker}
      aria-label={t("home.swapLabel")}
      onMouseEnter={() => set(true)}
      onMouseLeave={() => set(false)}
      onClick={(e) => {
        // Mouse users already switched on hover; this is for touch.
        if (e.nativeEvent.pointerType !== "mouse") set(!hacker);
      }}
      onKeyDown={onKey}
    >
      <img src={HeroImg} className="hero-photo hero-swap-photo" alt={t("home.photoAlt")} />
      <img
        src={HackerImg}
        className="hero-swap-avatar"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
      <span className="hero-swap-scan" aria-hidden="true" />
      <span className="hero-swap-status" aria-hidden="true">
        {hacker ? t("home.swapOn") : t("home.swapHint")}
      </span>
    </div>
  );
};

export default HeroSwap;
