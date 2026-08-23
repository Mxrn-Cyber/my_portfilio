import React, { createContext, useContext, useEffect, useState } from "react";
import en from "../translations/en";
import km from "../translations/km";

const dictionaries = { en, km };

const LanguageContext = createContext({
  lang: "en",
  toggleLang: () => {},
  t: (key) => key,
});

const STORAGE_KEY = "portfolio-lang";

function getInitialLang() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "km") return saved;
  } catch (e) {
    // ignore
  }
  return "en";
}

function lookup(dict, path) {
  return path
    .split(".")
    .reduce((acc, key) => (acc == null ? acc : acc[key]), dict);
}

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang === "km" ? "km" : "en");
    document.documentElement.setAttribute(
      "data-lang",
      lang === "km" ? "km" : "en"
    );
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      // ignore
    }
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === "en" ? "km" : "en"));

  // t("about.paragraphs") returning an array works too — callers just need
  // to know which keys hold arrays vs strings.
  const t = (key) => {
    const value = lookup(dictionaries[lang] || dictionaries.en, key);
    if (value !== undefined) return value;
    const fallback = lookup(dictionaries.en, key);
    return fallback !== undefined ? fallback : key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;
