# Cozy Calculator

A cozy pastel-themed calculator web app built with HTML, CSS and JavaScript featuring animated clouds, a hopping bunny, keyboard support and calculation history using localStorage.

## Features

- Addition, subtraction, multiplication, division, and bracket expressions
- Keyboard support (numbers, operators, Enter, Backspace, and C)
- Input validation to block double operators, leading operators, and multiple decimals per number
- Calculation history stored with localStorage (last 10 entries, newest first)
- Animated drifting clouds and a hopping bunny
- Responsive layout for mobile and desktop

## Built With

HTML5 · CSS3 · JavaScript · Git & GitHub · GitHub Pages

## Technical Decisions Worth Noting

- Used `Function('"use strict"; return (' + expr + ')')()` for expression evaluation with a regex whitelist to restrict input to safe characters
- localStorage history capped at 10 entries and reversed on render so newest calculations appear first
- Bunny animation created entirely with CSS keyframes using positional and rotational offsets to simulate hopping

## Live Demo

[Live Demo]https://aasiyahrahman00.github.io/cosy-calculator/

## Preview

![Cozy Calculator Preview](calculator/preview/cozy-calc-preview.png)