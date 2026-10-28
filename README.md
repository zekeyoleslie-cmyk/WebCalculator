================================================================================
                    PROFESSIONAL WEB CALCULATOR
================================================================================

A modern, responsive web-based calculator built with vanilla HTML, CSS, and
JavaScript. Features a sleek dark UI, smooth animations, full keyboard support,
and robust calculation logic.

--------------------------------------------------------------------------------
PREVIEW
--------------------------------------------------------------------------------

A dark-themed calculator with a glassmorphic design, soft shadows, and tactile
button feedback — optimized for both desktop and mobile devices.

--------------------------------------------------------------------------------
FEATURES
--------------------------------------------------------------------------------

CORE FUNCTIONALITY
  [+]  Basic Arithmetic         - Addition, subtraction, multiplication,
                                   and division
  [%]  Percentage Calculation   - Context-aware percent handling
  [.]  Decimal Support          - Full floating-point input with formatting
  [<]  Backspace                - Delete the last entered digit
  [C]  Clear                    - Reset the entire calculator state
  [!]  Error Handling           - Graceful handling of division by zero
                                   and invalid operations

USER EXPERIENCE
  [*]  Modern Dark UI           - Gradient background with glassmorphic body
  [*]  Tactile Button Feedback  - Press animations and hover effects
  [*]  Full Keyboard Support    - Type numbers, operators, Enter for equals,
                                   Backspace, Escape to clear, % for percent
  [*]  Fully Responsive         - Adapts from large desktops to small screens
  [*]  Smart Display            - Auto-formats results, truncates trailing
                                   zeros, handles overflow with scrolling

--------------------------------------------------------------------------------
PROJECT STRUCTURE
--------------------------------------------------------------------------------

  calculator/
  |
  |-- index.html      Markup and structure
  |-- style.css       Styling, layout, and animations
  |-- script.js       Calculation logic and event handling

--------------------------------------------------------------------------------
GETTING STARTED
--------------------------------------------------------------------------------

OPTION 1: DIRECT USE
  1. Download or clone this repository.
  2. Open index.html in any modern web browser.
  3. Start calculating!

OPTION 2: LOCAL SERVER (RECOMMENDED)
  Using Python:
    python -m http.server 8000

  Using Node.js (http-server):
    npx http-server

  Using VS Code Live Server extension:
    Right-click index.html --> "Open with Live Server"

  Then visit http://localhost:8000 in your browser.

--------------------------------------------------------------------------------
KEYBOARD SHORTCUTS
--------------------------------------------------------------------------------

  KEY              ACTION
  ---------------  ---------------------------------------------------
  0 - 9            Enter digits
  . or ,           Decimal point
  +                Addition
  -                Subtraction
  *                Multiplication
  /                Division
  Enter or =       Calculate result
  Backspace        Delete last digit
  Escape           Clear calculator
  %                Percentage

--------------------------------------------------------------------------------
TECHNICAL HIGHLIGHTS
--------------------------------------------------------------------------------

HTML
  - Semantic structure with data attributes (data-action) for clean
    event delegation
  - Single event listener on the button grid for optimal performance

CSS
  - CSS Grid for the button layout (grid-template-columns: repeat(4, 1fr))
  - Custom properties and layered shadows for depth and tactility
  - @media queries for responsive breakpoints at 420px and 350px
  - rem-based typography for fluid scaling
  - Hover effects gated behind @media (hover: hover) for touch devices

JAVASCRIPT
  - Event delegation — one listener handles all buttons
  - State machine tracks currentInput, previousInput, activeOperator,
    and shouldResetDisplay
  - Operator chaining — intermediate results calculated on-the-fly
  - Safe evaluation — custom performCalculation() instead of eval()
  - Result formatting — formatResult() removes floating-point artifacts
    and trailing zeros
  - Keyboard parity — all button actions are mirrored on the keyboard

--------------------------------------------------------------------------------
CALCULATION LOGIC OVERVIEW
--------------------------------------------------------------------------------

The calculator maintains four pieces of state:

  VARIABLE              PURPOSE
  --------------------  ------------------------------------------------
  currentInput          The number currently shown on the display
  previousInput         The first operand of a pending operation
  activeOperator        The currently selected operator
  shouldResetDisplay    Whether the next digit overwrites the display

FLOW EXAMPLE: 12 + 5 =

  1. Press 1, 2       -> currentInput = "12"
  2. Press +          -> previousInput = 12, activeOperator = "add",
                         shouldResetDisplay = true
  3. Press 5          -> currentInput = "5"
  4. Press =          -> performCalculation(12, 5, "add") -> 17

CHAINED OPERATIONS: 12 + 5 x 2 =

  - After +, previousInput = 12
  - After 5 and x, intermediate 12 + 5 = 17 is stored as new previousInput
  - After 2 and =, 17 x 2 = 34 is displayed

--------------------------------------------------------------------------------
BROWSER COMPATIBILITY
--------------------------------------------------------------------------------

  BROWSER     VERSION
  ----------  -----------
  Chrome      90+
  Firefox     88+
  Safari      14+
  Edge        90+
  Opera       76+

  Uses modern CSS (backdrop-filter, CSS Grid) and ES6+ JavaScript.

--------------------------------------------------------------------------------
CUSTOMIZATION
--------------------------------------------------------------------------------

CHANGE THE COLOR THEME
  Edit color values in style.css:

    body {
      background: linear-gradient(145deg, #1a1a2e 0%, #16213e 100%);
    }

    .btn.operator {
      color: #ffb74d;    /* operator text color */
    }

    .btn.equal {
      background: #ff9f1c;   /* equals button */
    }

ADJUST CALCULATOR SIZE
  Modify max-width in .calculator:

    .calculator {
      max-width: 420px;   /* change to desired width */
    }

ADD NEW OPERATIONS
  1. Add a button in index.html with a new data-action.
  2. Extend performCalculation() in script.js with a new case.
  3. Wire up the action in the event listener.

--------------------------------------------------------------------------------
KNOWN LIMITATIONS
--------------------------------------------------------------------------------

  - Uses parseFloat for number parsing — very large or very small numbers
    may lose precision (standard JS float behavior).
  - Percentage logic is context-aware (relative to the previous operand
    during an active operation) — intentional but may differ from some
    calculator apps.
  - No memory functions (M+, M-, MR, MC) — can be added as an extension.

--------------------------------------------------------------------------------
FUTURE ENHANCEMENTS
--------------------------------------------------------------------------------

  [ ] Memory functions (M+, M-, MR, MC)
  [ ] Calculation history panel
  [ ] Scientific mode (sin, cos, tan, log, sqrt, powers)
  [ ] Theme toggle (light/dark)
  [ ] Unit tests with Jest or Vitest
  [ ] PWA support (offline installable)

--------------------------------------------------------------------------------
CONTRIBUTING
--------------------------------------------------------------------------------

Contributions are welcome! To contribute:

  1. Fork the repository
  2. Create a feature branch:  git checkout -b feature/amazing-feature
  3. Commit your changes:     git commit -m "Add amazing feature"
  4. Push to the branch:      git push origin feature/amazing-feature
  5. Open a Pull Request

Please ensure your code follows the existing style and includes comments.

--------------------------------------------------------------------------------
LICENSE
--------------------------------------------------------------------------------

This project is released under the MIT License.

  MIT License

  Copyright (c) 2025

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to
  deal in the Software without restriction, including without limitation the
  rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
  sell copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
  IN THE SOFTWARE.

--------------------------------------------------------------------------------
AUTHOR
--------------------------------------------------------------------------------

  Your Name: Zekeyo Leslie NGWENYI 
  GitHub:  https://github.com/zekcmky
  Email:   zekeyoleslie@gmail.com

--------------------------------------------------------------------------------
ACKNOWLEDGMENTS
--------------------------------------------------------------------------------

  - Inspired by the clean aesthetics of modern mobile calculator apps
  - Built entirely with vanilla web technologies — no frameworks,
    no dependencies

================================================================================
          If you find this project useful, consider giving it a star!
================================================================================
