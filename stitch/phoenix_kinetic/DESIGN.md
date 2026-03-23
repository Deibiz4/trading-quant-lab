# Design System Specification: The Kinetic Catalyst

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Kinetic Catalyst."** 

Unlike standard trading platforms that feel like rigid spreadsheets, this system is designed to feel like a high-performance flight deck. It captures the spirit of the phoenix—resilient, radiant, and soaring—by blending deep, atmospheric voids with sharp, high-tech instrumentation. We break the "template" look through intentional asymmetry, where data modules are grouped in clusters of varying heights, and glassmorphism provides a sense of multi-dimensional depth. This is an editorial approach to financial data: authoritative, sophisticated, and engineered for those who move the market.

## 2. Colors
Our palette is rooted in the contrast between the deep navy of the cosmos and the electric energy of high-frequency trading.

*   **Primary (`#8aedff`)**: The "Electric Blue Glow." Use this for active states, primary actions, and success-oriented data visualization. It represents the "cool" precision of the system.
*   **Tertiary (`#ffd7b7` to `#ffb26c`)**: The "Fiery Phoenix." Reserved for high-alert data, price surges, and critical call-to-actions. This provides the warmth and "soul" against the cold navy background.
*   **Surface Hierarchy (`#0e141a` to `#2f353c`)**: We utilize a range of navy and charcoal tones to define importance.

### The "No-Line" Rule
Standard UI relies on 1px borders to separate content. **This design system prohibits solid 1px borders for sectioning.** Boundaries must be defined solely through background color shifts. For instance, a `surface-container-low` section should sit on a `surface` background to create a natural, sophisticated break.

### The "Glass & Gradient" Rule
To achieve a premium, custom feel:
*   **Floating Elements:** Use `surface-container-high` with an 80% opacity and a `20px` backdrop-blur to create a "glass" HUD effect.
*   **Signature Gradients:** Apply a subtle linear gradient from `primary` to `primary-container` on main CTAs to mimic the metallic sheen of the silver accents in the logo.

## 3. Typography
The typography is the "Voice of Authority." It balances high-tech precision with editorial elegance.

*   **Display & Headlines (Space Grotesk):** This font brings a sharp, geometric, and modern feel. Use `display-lg` for hero stats and `headline-md` for section titles. The wide apertures of the letters reflect a "high-tech" brand identity.
*   **Titles & Body (Manrope):** A premium sans-serif that ensures legibility. Manrope is used for the "storytelling" aspects of the platform—news feeds, community posts, and instructional text.
*   **Labels (Inter):** Reserved for the most granular data. Use `label-sm` for ticker symbols and timestamps. It provides a clean, neutral utility that doesn't compete with the "hero" typography.

## 4. Elevation & Depth
Depth is not an afterthought; it is a functional requirement to organize complex trading data.

*   **The Layering Principle:** Stack `surface-container` tiers to create hierarchy. A `surface-container-highest` card should be reserved for the most important interactive module (e.g., the "Place Trade" widget), while `surface-container-lowest` is used for background utility panels.
*   **Ambient Shadows:** If an element must float (like a dropdown or modal), use an extra-diffused shadow. 
    *   *Shadow Spec:* `0px 24px 48px rgba(0, 0, 0, 0.4)`. The shadow color must be a dark tint of the background navy, never a neutral grey.
*   **The "Ghost Border" Fallback:** If accessibility requires a stroke, use the `outline-variant` token at **20% opacity**. This creates a "neon whisper" edge that defines the shape without cluttering the UI with hard lines.

## 5. Components

### Buttons
*   **Primary:** Fill with `primary` (`#8aedff`). Text uses `on-primary`. Apply a subtle outer glow (shadow) using the `primary` color at 15% opacity to simulate the "electric blue glow."
*   **Secondary:** Ghost style. Use the `outline` token at 40% opacity for the border. On hover, transition to a `secondary-container` fill.

### Data Cards
*   **Forbid Divider Lines:** Separate header and body content using a vertical space of `spacing-4` (`0.9rem`) or a subtle shift from `surface-container` to `surface-container-low`.
*   **Glassmorphism:** Use for "Top Gains" or "Alerts" to make them pop against the base grid.

### Input Fields
*   **State:** The default state is `surface-container-highest`. On focus, the field should gain a "Neon Border" using the `primary` token at 100% and a subtle `3px` outer glow.
*   **Shape:** Use `rounded-DEFAULT` (`0.25rem`) for a sharp, technical look. Avoid large rounded corners (`xl` or `full`) for inputs.

### Trading Tickers
*   Use `surface-container-lowest` for the ticker track to create a "recessed" look, making the moving data (in `primary` or `tertiary`) feel like it's sliding behind a metallic silver frame.

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical layouts. Place a large `display-lg` metric off-center to create a dynamic, editorial feel.
*   **Do** use the `tertiary` (fiery orange) sparingly. It is a "laser pointer" for the user's eye—too much will dilute its impact.
*   **Do** embrace negative space. Use `spacing-10` or `spacing-12` between major modules to let the "advanced" aesthetic breathe.

### Don't:
*   **Don't** use 100% opaque silver or grey borders. This instantly kills the futuristic, "lit-from-within" look.
*   **Don't** use standard drop shadows. If it doesn't look like ambient light in a dark room, it’s too heavy.
*   **Don't** use more than three levels of nesting. Too many layers of `surface-container` will make the UI feel muddy rather than premium.