class Latin1Table extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          max-width:100%;
          overflow:auto;
        }
        :host(.amiga-font) table {
          font-family: "Topaz_Plus_a1200";
        }
        figure {
          display:block;
          margin-inline:0;
        }
        figcaption {
          text-align:center;
          margin-top: 0.5em;
          font-size: 0.8rem;
          line-height: 1.44;
        }
        table {
            font-family: monospace;
            line-height:1;
            margin: 1em auto;
            border-spacing: 0;
        }
        caption {
          margin-bottom: 0.5em;
        }
        td {
          border: 1px solid var(--color-2);
          text-align:center;
          padding:4px;
        }
        tr:first-child td {
          color:var(--color-2);
        }
        td:first-child {
          color:var(--color-2);
        }
        tr td.highlight, tr.highlight {
          color: var(--color-7);
        }
        .del-highlight {
          color:transparent;
        }
        :host(.amiga-font) .del-highlight {
          color: var(--color-7);
        }
      </style>
      <figure>
        <table>
          <caption>ISO/IEC 8859-1</caption>
          <tbody>
            <tr>
              <td></td>
              <td>0</td><td>1</td><td>2</td><td>3</td>
              <td>4</td><td>5</td><td>6</td><td>7</td>
              <td>8</td><td>9</td><td>A</td><td>B</td>
              <td>C</td><td>D</td><td>E</td><td class="highlight">F</td>
            </tr>
            <tr>
              <td>0x</td>
              <td></td><td></td><td></td><td></td>
              <td></td><td></td><td></td><td></td>
              <td></td><td></td><td></td><td></td>
              <td></td><td></td><td></td><td></td>
            </tr>
            <tr>
              <td>1x</td>
              <td></td><td></td><td></td><td></td>
              <td></td><td></td><td></td><td></td>
              <td></td><td></td><td></td><td></td>
              <td></td><td></td><td></td><td></td>
            </tr>
            <tr>
              <td>2x</td>
              <td> </td><td>!</td><td>"</td><td>#</td>
              <td>$</td><td>%</td><td>&amp;</td><td>'</td>
              <td>(</td><td>)</td><td>*</td><td>+</td>
              <td>,</td><td>-</td><td>.</td><td>/</td>
            </tr>
            <tr>
              <td>3x</td>
              <td>0</td><td>1</td><td>2</td><td>3</td>
              <td>4</td><td>5</td><td>6</td><td>7</td>
              <td>8</td><td>9</td><td>:</td><td>;</td>
              <td>&lt;</td><td>=</td><td>&gt;</td><td>?</td>
            </tr>
            <tr>
              <td>4x</td>
              <td>@</td><td>A</td><td>B</td><td>C</td>
              <td>D</td><td>E</td><td>F</td><td>G</td>
              <td>H</td><td>I</td><td>J</td><td>K</td>
              <td>L</td><td>M</td><td>N</td><td>O</td>
            </tr>
            <tr>
              <td>5x</td>
              <td>P</td><td>Q</td><td>R</td><td>S</td>
              <td>T</td><td>U</td><td>V</td><td>W</td>
              <td>X</td><td>Y</td><td>Z</td><td>[</td>
              <td>\\</td><td>]</td><td>^</td><td>_</td>
            </tr>
            <tr>
              <td>6x</td>
              <td>\`</td><td>a</td><td>b</td><td>c</td>
              <td>d</td><td>e</td><td>f</td><td>g</td>
              <td>h</td><td>i</td><td>j</td><td>k</td>
              <td>l</td><td>m</td><td>n</td><td>o</td>
            </tr>
            <tr>
              <td class="highlight">7x</td>
              <td>p</td><td>q</td><td>r</td><td>s</td>
              <td>t</td><td>u</td><td>v</td><td>w</td>
              <td>x</td><td>y</td><td>z</td><td>{</td>
              <td>|</td><td>}</td><td>~</td>
              <td class="del-highlight">␡</td>
            </tr>
            <tr>
              <td>8x</td>
              <td></td><td></td><td></td><td></td>
              <td></td><td></td><td></td><td></td>
              <td></td><td></td><td></td><td></td>
              <td></td><td></td><td></td><td></td>
            </tr>
            <tr>
              <td>9x</td>
              <td></td><td></td><td></td><td></td>
              <td></td><td></td><td></td><td></td>
              <td></td><td></td><td></td><td></td>
              <td></td><td></td><td></td><td></td>
            </tr>
            <tr>
              <td>Ax</td>
              <td></td><td>¡</td><td>¢</td><td>£</td>
              <td>¤</td><td>¥</td><td>¦</td><td>§</td>
              <td>¨</td><td>©</td><td>ª</td><td>«</td>
              <td>¬</td><td></td><td>®</td><td>¯</td>
            </tr>
            <tr>
              <td>Bx</td>
              <td>°</td><td>±</td><td>²</td><td>³</td>
              <td>´</td><td>µ</td><td>¶</td><td>·</td>
              <td>¸</td><td>¹</td><td>º</td><td>»</td>
              <td>¼</td><td>½</td><td>¾</td><td>¿</td>
            </tr>
            <tr>
              <td>Cx</td>
              <td>À</td><td>Á</td><td>Â</td><td>Ã</td>
              <td>Ä</td><td>Å</td><td>Æ</td><td>Ç</td>
              <td>È</td><td>É</td><td>Ê</td><td>Ë</td>
              <td>Ì</td><td>Í</td><td>Î</td><td>Ï</td>
            </tr>
            <tr>
              <td>Dx</td>
              <td>Ð</td><td>Ñ</td><td>Ò</td><td>Ó</td>
              <td>Ô</td><td>Õ</td><td>Ö</td><td>×</td>
              <td>Ø</td><td>Ù</td><td>Ú</td><td>Û</td>
              <td>Ü</td><td>Ý</td><td>Þ</td><td>ß</td>
            </tr>
            <tr>
              <td>Ex</td>
              <td>à</td><td>á</td><td>â</td><td>ã</td>
              <td>ä</td><td>å</td><td>æ</td><td>ç</td>
              <td>è</td><td>é</td><td>ê</td><td>ë</td>
              <td>ì</td><td>í</td><td>î</td><td>ï</td>
            </tr>
            <tr>
              <td>Fx</td>
              <td>ð</td><td>ñ</td><td>ò</td><td>ó</td>
              <td>ô</td><td>õ</td><td>ö</td><td>÷</td>
              <td>ø</td><td>ù</td><td>ú</td><td>û</td>
              <td>ü</td><td>ý</td><td>þ</td><td>ÿ</td>
            </tr>
          </tbody>
        </table>
        <figcaption>Simplified for clarity</figcaption>
      </figure>
    `;

    this.addEventListener('pointerdown', () => {
      this.classList.toggle('amiga-font');
      const caption = this.shadowRoot.querySelector('caption');
      if (caption.textContent === "ISO/IEC 8859-1 / Topaz") {
        caption.textContent = "ISO/IEC 8859-1";
      } else {
        caption.textContent = "ISO/IEC 8859-1 / Topaz";
      }
    });
  }
}

customElements.define('latin1-table', Latin1Table);