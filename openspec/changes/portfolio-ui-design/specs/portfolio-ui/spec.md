## Purpose

Provides a responsive, accessible, and high-craft user interface for Catriel Acevey's developer portfolio, showcasing projects, experience, skills, CV downloads, and contact channels.

## ADDED Requirements

### Requirement: Hero & Identity Presentation
The system SHALL display a hero section containing the developer's name, professional title, concise bio, active status indicator, and primary call-to-action buttons.

#### Scenario: Hero rendered on initial load
- **WHEN** a visitor loads the portfolio landing page
- **THEN** the hero section displays "Catriel Acevey", "Full Stack Developer", the core summary bio, quick contact links, and CV download triggers.

### Requirement: Featured Projects Showcase
The system SHALL render a list of featured projects, each displaying the project title, description, technology badges, preview image, and links to source code and live demo (when available).

#### Scenario: Visitor navigates to projects
- **WHEN** the visitor scrolls to the Projects section
- **THEN** all projects defined in the data source are rendered as cards with responsive layout, clear typography, tech stack tags, and accessible link buttons to GitHub.

### Requirement: Professional Experience Timeline
The system SHALL present work experience entries in reverse-chronological order, detailing role, company/context, time period, key achievements, and technologies utilized.

#### Scenario: Visitor reviews work experience
- **WHEN** the visitor views the Experience section
- **THEN** experience items are displayed with clearly structured bullet points and relevant technology tags.

### Requirement: Technical Skills Matrix
The system SHALL display technical skills organized by category (e.g., Frontend, Backend, Herramientas & Otros) in interactive, accessible badge formats.

#### Scenario: Visitor reviews skills
- **WHEN** the visitor views the Skills section
- **THEN** skills are categorized clearly with legible contrast and visual grouping.

### Requirement: CV Download and Direct Contact Actions
The system SHALL provide direct links to download CVs in Spanish and English and direct contact channels (Email, LinkedIn, GitHub).

#### Scenario: Visitor requests Spanish or English CV
- **WHEN** the visitor clicks on the CV download options
- **THEN** the corresponding PDF file (`/assets/docs/CV_Catriel_Acevey_ES.pdf` or `/assets/docs/CV_Catriel_Acevey_EN.pdf`) opens or downloads directly.

#### Scenario: Visitor clicks contact action
- **WHEN** the visitor clicks on email or social profiles
- **THEN** the system triggers a `mailto:` link for email or opens external profiles (LinkedIn, GitHub) in a new tab with `rel="noopener noreferrer"`.

### Requirement: Responsive Layout and Accessibility Compliance
The system SHALL render adaptively across mobile, tablet, and desktop viewports, maintaining WCAG AA contrast standards, keyboard focus indicators, and semantic HTML5 structure.

#### Scenario: Mobile viewport navigation
- **WHEN** the portfolio is viewed on a screen width below 768px
- **THEN** layout flows into a single-column readable hierarchy without horizontal overflow or clipped text.

#### Scenario: Keyboard navigation
- **WHEN** a user navigates using the `Tab` key
- **THEN** all interactive elements (links, buttons) display visible and high-contrast focus rings.
