import React from "react";

export const AboutPage = () => {
  return (
    <div className="content--limiter">
      {/* HEADER */}
      <div className="about">
        <div className="title--r-container">
          <div className="about__version">[ pre alpha ]</div>
          <h2 className="about__title">Colorful cli</h2>
        </div>
        <div className="about__phrase">
          An application who make your shell command-line interface colorful and
          beautiful.
        </div>
        <div className="about__motivation title-text--limiter">
          Современные термины умеют отображать 256 цветов. С этой политрой можно
          создать большое количество цветоых схем, но в разные shell обочки
          имеют свои уникальные escape-последовательности и правила отображения
          цветов.
        </div>
        <div className="about__about title-text--limiter">
          Это приложение позволяет кастомизировать базовые shell переменные.
          PS1, ls color, less color для Bourne shell совместивых оболочек. dash,
          bash, zsh
        </div>
      </div>
      {/* 5 SIPLE STEPS */}
      <div className="steps">
        <div className="steps-container">
          <div className="steps-count">1</div>
          <div>картинка</div>
          <div>текст</div>
          first: выбрать переменную
        </div>
        <div>second: кастомизировать</div>
        <div>theerd: скпировать результат</div>
        <div>fours: вставить результат в rc</div>
        <div>enjoy</div>
      </div>
    </div>
  );
};
