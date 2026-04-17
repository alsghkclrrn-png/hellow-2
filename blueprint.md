# Project Blueprint: Global Language Hub - Vocabulary & Grammar Update

## Overview
A modern, interactive language learning web application using Web Components and CSS Baseline features. It supports multiple languages (Korean, English, Chinese, Japanese) and provides curated learning content.

## Current State
- Basic UI with theme toggle.
- Simple phrase lists for four languages.
- Mixed logic between `index.html` and `main.js`.
- Modern CSS with container queries and layers partially implemented.

## Proposed Changes
1.  **Data Structure Overhaul**: Update `main.js` to include `vocabulary`, `grammar`, and `conversation` categories for each language.
2.  **UI Enhancement**: 
    -   Implement a Tab-based navigation within each language lesson view.
    -   Use Web Components for `LanguageTabSystem` and `LanguageContentCard`.
    -   Improve visual aesthetics with modern gradients, glassmorphism, and responsive layouts.
3.  **Content Expansion**:
    -   **Vocabulary (단어장)**: Essential words with translations.
    -   **Grammar (문법)**: Fundamental rules and particles.
    -   **Conversation (회화 문법)**: Common situational phrases and sentence structures.
4.  **Consolidation**: Move all logic and data to `main.js` and clean up `index.html`.

## Implementation Steps
### Phase 1: Data & Logic (main.js)
- Define a comprehensive `languageData` object.
- Create Web Components for the Tab system.
- Implement event listeners for switching between categories.

### Phase 2: UI & Styling (index.html & style.css)
- Update `index.html` to host the new components.
- Enhance `style.css` with `@layer` and modern effects (oklch colors, deep shadows).

### Phase 3: Verification & Deployment
- Test on different screen sizes.
- Verify theme switching works with new components.
- Push to GitHub.

## Verification Plan
- [ ] Check if "Vocabulary", "Grammar", and "Conversation" tabs switch content correctly.
- [ ] Verify responsiveness on mobile/desktop.
- [ ] Ensure all language data is correctly displayed.
- [ ] Confirm git deployment.
