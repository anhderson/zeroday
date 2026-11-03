"use client";

import React, { useEffect, useState } from "react";
import styles from "./LuaProjetada.module.css";

export type MoonState = "normal" | "red" | "flash_black";

interface LuaProjetadaProps {
  moonState?: MoonState;
}

export default function LuaProjetada({ moonState: propMoonState }: LuaProjetadaProps) {
  const [internalState, setInternalState] = useState<MoonState>("normal");

  useEffect(() => {
    if (propMoonState !== undefined) {
      setInternalState(propMoonState);
    }
  }, [propMoonState]);

  useEffect(() => {
    const handleMoonEvent = (e: any) => {
      if (e.detail) {
        setInternalState(e.detail);
      }
    };
    window.addEventListener("set-moon-state", handleMoonEvent as EventListener);
    return () => window.removeEventListener("set-moon-state", handleMoonEvent as EventListener);
  }, []);

  const currentState = propMoonState !== undefined ? propMoonState : internalState;

  return (
    <div
      aria-hidden="true"
      className={styles.moonContainer}
    >
      {/* Luz ofuscante de sombreamento por volta na cor branca */}
      <div className={styles.moonWhiteAura} />

      {/* Camada 1: Luacheiapreto como último na camada (base) */}
      <img
        src="/esferas/Luacheiapreto.png"
        alt="Lua Cheia Preto"
        className={`${styles.moonLayer} ${styles.layerBlack}`}
      />

      {/* Camada 2: Luacheiabranca por cima no meio */}
      <img
        src="/esferas/Luacheiabranca.png"
        alt="Lua Cheia Branca"
        className={`${styles.moonLayer} ${styles.layerWhite} ${
          currentState === "flash_black"
            ? styles.whiteBlink
            : currentState === "red"
            ? styles.whiteDimmed
            : styles.whiteNormal
        }`}
      />

      {/* Camada 3: Luacheiavermelho (transformando ao encontro das 8 luzes por 1 segundo) */}
      <img
        src="/esferas/Luacheiavermelho.png"
        alt="Lua Cheia Vermelho"
        className={`${styles.moonLayer} ${styles.layerRed} ${
          currentState === "red" ? styles.redActive : styles.redHidden
        }`}
      />
    </div>
  );
}
