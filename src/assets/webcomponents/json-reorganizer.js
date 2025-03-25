class JsonReorganizer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    
    // Font data
    this.fonts = {};
    this.currentFont = null;
    this.fontOrder = []; // Track the order of fonts
    
    // Setup component
    this.render();
    this.setupEventListeners();
    
    // Load fonts
    this.loadFonts();
  }
  
  // Load fonts from JSON
  async loadFonts() {
    try {
      const response = await fetch('/assets/webcomponents/0x7f-list.json');
      if (!response.ok) {
        throw new Error('Failed to load fonts');
      }
      this.fonts = await response.json();
      
      // Predefined font order from character-viewer.js
      const predefinedOrder = [
        "TopazPlus_a1200",
        "Topaz_a1200",
        "Topaz_a500",
        "TopazPlus_a500",
        "mO'sOul",
        "MicroKnightPlus",
        "MicroKnight",
        "P0T-NOoDLE",
        "amiga-ks10-topaz-08",
        "amiga-ks13-topaz-09",
        "amiga-ks13-topaz-08",
        "amiga-ks10-topaz-09",
        "amiga-ks30-topaz-09",
        "amiga-ks30-topaz-08",
        "Topaz_8x11",
        "Ammolite_8x10",
        "Onyx_7x9",
        "Xen_7x11",
        "Eagleplayer",
        "mO-sOul",
        "PolarSmall",
        "Xen_6x8",
        "Xen_6x9",
        "eaca-eg3003-video-genie",
        "amstrad_cpc",
        "mpf-i-microprofessor",
        "crt8002-005",
        "apple_iigs",
        "apple_ii_french_canadian_enhanced",
        "apple_ii_uk_enhanced",
        "apple_ii_french_canadian",
        "apple_ii_uk",
        "apple_ii_enhanced",
        "apple_ii_german",
        "apple_ii",
        "apple_ii_french",
        "apple_ii_custom_improved_german",
        "hp16500b_small",
        "hp16500b_large",
        "tms9918",
        "colecovision-bold",
        "colecovision-thin",
        "elektuur_junior",
        "NCR7250-9x12",
        "sysv-banner",
        "drdos-6v-sbcs-8x16",
        "drdos-6v-sbcs-8x19",
        "exidy_sorcerer",
        "okean-240",
        "ASCII",
        "SECURITY",
        "GREEK2",
        "ISO4",
        "CYRIL2",
        "DRAW",
        "ISO3",
        "ISO2",
        "DRAWHI",
        "THIN",
        "FUTURA",
        "FUTURE",
        "THNSERIF",
        "CHESSPT3",
        "SCRIPT",
        "COMPUTER",
        "KAYPROII",
        "eaca-eg2000-colour-genie-g",
        "roman",
        "bbc_micro",
        "bbc_master",
        "crt8002-003",
        "tatung_einstein",
        "saa5057-cyrillic-datasheet",
        "saa5055-us",
        "saa5056-hebrew",
        "philips-p2000",
        "acorn_bbc_teletext_graphics_noncontiguous",
        "acorn_bbc_teletext_graphics_contiguous",
        "saa5057-cyrillic",
        "tvc",
        "tvc_cyr",
        "eaca-eg2000-colour-genie-1",
        "bashkiria-2m",
        "lik",
        "grundy_newbrain_10",
        "memotech",
        "juku-e5101",
        "grundy_newbrain_08",
        "mattel_aquarius",
        "ut-88",
        "mikro-80",
        "mikrosha",
        "robotron_pc1715-polish",
        "robotron_pc1715",
        "robotron_pc1715-latin-cyrillic",
        "robotron_kc85-1",
        "robotron_pc1715-russian",
        "robotron_kc87_1_2",
        "NIMBUS2",
        "AS-100",
        "NIMBUS2D",
        "OTRONA-A",
        "KAYPRO10",
        "BINARY",
        "dvk_ksm",
        "dvk_15ie",
        "elektronika_bk-0010",
        "sharp_mz80a",
        "sharp_mz80k2e_japanese",
        "RB100ROM",
        "RB100CRT",
        "ti-83-plus-large",
        "fujitsu-fm7",
        "VT220ROM",
        "FM-TOWNS",
        "vt320",
        "VT220CRT",
        "vt220",
        "ASCII_HX",
        "XCourier_7x13",
        "XCourier_6x11",
        "iskra_1080",
        "pravetz_8c",
        "apple_ii_custom_pig_font",
        "pravetz_82",
        "pravetz_8m",
        "dragon200e",
        "microsol-vmx80",
        "standard",
        "apple_ii_custom_reactive",
        "c64-german",
        "c64-swedish2",
        "pet-custom-data70stylefont",
        "pet_russian",
        "c64-hungarian",
        "c64-custom-calligraphic-kauno-1985",
        "c16-hungarian",
        "c64-spanish",
        "c64-danish",
        "c64-swedish",
        "pet_japanese",
        "pet_swedish",
        "pet_hungarian",
        "pet_greek",
        "pet_norwegian",
        "vic20-norwegian",
        "vic20-swedish",
        "vic20-japanese",
        "superpet-ascii",
        "superpet-apl",
        "P0T-Block",
        "HANDY2",
        "SMALL1",
        "hp4195_8x13_remapped",
        "CHUNKEE",
        "NEAT2",
        "ARTY1",
        "ARTY",
        "NEAT1",
        "amstrad_pcw",
        "pet",
        "vic-20",
        "c128",
        "c16",
        "c64",
        "bemz_bajt",
        "trs80-coco2-lowercase",
        "apple_ii_japanese",
        "trs80-coco3",
        "BTHIN",
        "THINSCRP",
        "B",
        "BHEXHI",
        "THINCAPS",
        "BHEXBOX",
        "BHEXALL",
        "BHEXLO",
        "BDECLO",
        "PERSIAN",
        "ohio_scientific_superboard",
        "pet_german",
        "vic20-german",
        "ARABNAF",
        "msx-arabic-perfect1",
        "c64-japanese.906143-02",
        "lvov",
        "SM910_D",
        "VideoWriter250-9x12",
        "OLIPC1TT",
        "rom",
        "sharp_mz80b",
        "trs80-coco",
        "atari-classic",
        "atari-international",
        "atascii",
        "Datapoint-8600",
        "trs80-model1",
        "mc6674",
        "trs80-model4-int-sym",
        "mc6670p",
        "SMALL",
        "bbc_master_international",
        "atari-najm-65xe-arabic",
        "WANGPCMD",
        "WANGPCLD",
        "WANGPCM",
        "WANGPCL",
        "alesta_520ex",
        "SMALL2",
        "ARMY",
        "didaktik-thin",
        "jupiter_ace",
        "zx-spectrum",
        "didaktik-bold",
        "zx81",
        "zx80",
        "acorn_bbc_custom_starch",
        "acorn_bbc_custom_courier",
        "acorn_bbc_custom_caesar",
        "acorn_bbc_custom_altsysfnt",
        "acorn_bbc_custom_arcturus",
        "acorn_bbc_custom_latin1",
        "acorn_bbc_custom_deskfont",
        "acorn_bbc_custom_jaguar",
        "yunior",
        "agat-7",
        "ep_cyr_slashnet",
        "pet_french",
        "sinclair_ql",
        "3270",
        "PEKIGORD",
        "BOLD0",
        "SMOOTH",
        "bluemsx-kanjirom-5-kanji",
        "msx-hangul-daewoo-cpc400",
        "bluemsx-kanjirom-2-fullwidth",
        "JAP",
        "signetics-2513",
        "ibm-7535-manufacturing-system",
        "BACKSLNT",
        "ep_hfont",
        "ep_cyr_kz",
        "ep_uk",
        "ep_cyr_abc",
        "ep_brd",
        "ep_cyr_vs",
        "WIGGLY",
        "DECORATE",
        "ART",
        "ARTX",
        "CLPORT8B",
        "BBC512BX",
        "BBC512BD",
        "BULKY",
        "SCRWL~~~",
        "HANDUGLY",
        "BLOODY",
        "DATA",
        "REVERSE",
        "INVERTED",
        "SIDE",
        "TRI88CSO",
        "System_VIO_10x18",
        "System_VIO_12x16",
        "Terminal_41",
        "Terminal_EGA40_cp437",
        "Terminal_EGA40_cp850",
        "Terminal_CGA40_cp437",
        "Terminal_CGA40_cp850",
        "Terminal_15",
        "CM-5X8",
        "ET2K-132",
        "gem-1.1-6x6-vga",
        "gem-2.0-6x6",
        "viewmax-1-6x6",
        "gem-3.1-6x6",
        "viewmax-2-6x6",
        "Courier_8x7",
        "EVXME132",
        "SANS1-SC",
        "SANS1",
        "Z100-A",
        "THIN_RUS",
        "THIN_CYR",
        "THIN_HEB",
        "CP865_T",
        "THIN_LT1",
        "THIN_GRE",
        "TH-CP437",
        "CP437_T",
        "THIN_GFX",
        "MTGRC2",
        "MTGRC1",
        "MTGRC3",
        "RUGENC2",
        "8X8THIN",
        "EUCGAT",
        "THIN_LT2",
        "MTGRC4",
        "TELEPC",
        "System_VIO_8x8",
        "Courier_9x8",
        "System_6x10",
        "HP-LX6L1",
        "852_LAT2",
        "437_US",
        "APLS",
        "NEWFONT1",
        "APRIPORT",
        "partner",
        "862_HEB",
        "System_VIO_6x10",
        "HP-LX6CF",
        "HP-LX6PT",
        "EVXME94",
        "HP-LX6",
        "HP-LX6L2",
        "CGA-TH",
        "radio_86rk",
        "ATISMLW6",
        "PC_6",
        "HP-LX6NO",
        "System_VIO_8x10",
        "APLS10",
        "Courier_10x10",
        "APLS11",
        "CM-6X10",
        "Courier_8x10",
        "Courier_12x10",
        "Terminal_90",
        "TI-PC-9",
        "Courier_12x12",
        "Courier_12x12_1",
        "System_6x14",
        "System_5x12",
        "System_VIO_6x14",
        "Courier_8x13",
        "System_5x16",
        "Courier_9x12",
        "System_VIO_8x12",
        "GEORGIAN",
        "SCRIPT1",
        "HYLAS",
        "LBSCRIPT",
        "System_VIO_5x12",
        "ROMAN1",
        "TH-CP852",
        "TH-CP865",
        "PS2THIN2",
        "ELERGON",
        "PS2THIN3",
        "PS2THIN1",
        "PS2THIN4",
        "POLICE",
        "THIN_SS",
        "OLI-D-T8",
        "ISOCP866",
        "ISOCP857",
        "ISOCP852",
        "JULIE2",
        "TH-CP850",
        "System_VIO_5x16",
        "System_VIO_7x15",
        "CP850_T",
        "COMPAQTH",
        "TH-CP863",
        "TH-CP860",
        "ISOCP855",
        "JULIE",
        "ISO",
        "ISOCP850",
        "ISOCP869",
        "AMBASSAD",
        "ISOCP861",
        "ISOCP863",
        "ISOCP437",
        "Courier_9x16",
        "FM-T-437",
        "DOSJ-437",
        "PVGAP132",
        "ISOCP860",
        "DOSV-437",
        "Courier_12x15",
        "Courier_9x16_1",
        "Courier_12x20_1",
        "Courier_12x20",
        "System_Monospaced_9x20",
        "System_VIO_8x18",
        "PPC-M1",
        "CP65504",
        "TRIVGA8",
        "LCD",
        "BROADWY3",
        "16_GFX",
        "16_LT1",
        "16_LT2",
        "16_RUS",
        "APEAUS",
        "READABL8",
        "BIGGER",
        "gem-1.1-8x14",
        "SANS4",
        "NEWFONT3",
        "SANS4-SC",
        "SANS3-SC",
        "CP437ALT",
        "NEWFONT2",
        "PC-SC",
        "SANS2",
        "SANS2-SC",
        "SMEGA88",
        "FE_8X8",
        "CP437BGR",
        "System_8x10",
        "System_8x8",
        "P0T-IBM",
        "System_Monospaced_8x8",
        "irisha",
        "SQUARE",
        "System_8x12",
        "Terminal_Bold_21",
        "8",
        "Terminal_EGA",
        "Terminal_12",
        "System_Monospaced_8x9",
        "Terminal_12_sq",
        "Terminal_VGA_cp850",
        "Terminal_Hercules_cp437",
        "Terminal_VGA_cp861",
        "NEC-MS1B",
        "Terminal_VGA_cp863",
        "Terminal_VGA",
        "System_VIO_8x14",
        "System_VIO_8x16",
        "System_Monospaced_8x12",
        "SANSERIF",
        "16",
        "korvet",
        "Terminal_EGA80_cp437",
        "Terminal_VGA_cp860",
        "CP3848",
        "Terminal_CGA80_cp437",
        "RIMROCK",
        "Terminal_VGA_cp865",
        "Terminal_120",
        "Terminal_EGA80_cp850",
        "Terminal_EGA_cp437",
        "6X14",
        "Terminal_CGA80_cp850",
        "Terminal_CGA_cp437",
        "Terminal_VGA_cp437",
        "6X8",
        "CYRIL_B",
        "gem-2.0-8x8",
        "gem-3.1-8x8",
        "viewmax-1-8x8",
        "gem-2.0-8x14",
        "viewmax-2-8x14",
        "viewmax-1-8x16",
        "16_CYR",
        "16_GRE",
        "gem-3.1-8x14",
        "viewmax-1-8x14",
        "viewmax-2-8x16",
        "Terminal_Hercules_cp850",
        "EDDA9",
        "PC1640A",
        "EAGLE2",
        "HP-LX8L2",
        "gem-1.1-8x8",
        "DG1ALT",
        "HP-LX8NO",
        "viewmax-2-8x8",
        "INVASION",
        "ESCHATON",
        "HP-LX8L1",
        "MBC775",
        "MPACT",
        "PC1640C",
        "NIMBUS1",
        "CP790",
        "BLCKSNSF",
        "OLIPC1HE",
        "GNEGA132",
        "OLIPC1EU",
        "PVBGC3",
        "SUPER",
        "TANDY2",
        "PVBGC1",
        "TANDY1",
        "MTGRC5",
        "INTELV8",
        "ACERGRC",
        "LBPC",
        "MTGRC8",
        "NIX-M35",
        "MTGRC6",
        "LE-D",
        "RUMG1C",
        "DTK8X8",
        "MINI",
        "CYRILL3",
        "JAT-MC",
        "JAT-RMC",
        "SEEQUA",
        "CYRILL2",
        "EUROPC",
        "MAC",
        "PVBGC2",
        "ROM8PIX",
        "8X8",
        "SUBSUP",
        "CP1251",
        "RUS_AR",
        "CP58258",
        "MADRID",
        "CP866U",
        "CP437",
        "MTGRC9",
        "Z100-B",
        "HBRW1987",
        "SMVGA88",
        "FONTHE8",
        "MINDSET",
        "APRI200",
        "8_CYR",
        "CP58259",
        "MCR",
        "8_HEB",
        "FANT_GFX",
        "MCR_CYR",
        "ALT8_CYR",
        "FANT_LT2",
        "FANT_LT1",
        "ALT8_HEB",
        "MCR_HEB",
        "8_GRE",
        "CP61235",
        "8X11SNSF",
        "ALT8_GRE",
        "MCR_GRE",
        "CP1124",
        "FANT_RUS",
        "CP59187",
        "8_LT1",
        "CP813",
        "ALT8_GFX",
        "8X8ITAL",
        "MCR_GFX",
        "8_LT2",
        "8X10",
        "ALT8",
        "8_GFX",
        "FANT_HEB",
        "ALT8_LT1",
        "CP63342",
        "CP60270",
        "MCR_LT1",
        "ALT8_LT2",
        "CP62259",
        "CP1051",
        "MCR_LT2",
        "CP1287",
        "FANT_CYR",
        "8_RUS",
        "CP60853",
        "CP30040",
        "CP59829",
        "CP778",
        "CP60258",
        "CP59234",
        "ALT8_RUS",
        "THIN8X8",
        "HERCITAL",
        "MCR_RUS",
        "HERCULES",
        "FANT",
        "RUGENC1",
        "HP-LX8",
        "FANT_GRE",
        "HP-LX8CF",
        "GREEK",
        "CYRILL1",
        "CM-8X10",
        "STRETCH",
        "BIGSF",
        "CYRILLI2",
        "READABLE",
        "HEB-BOLD",
        "VGA-ROM",
        "HEB-MED",
        "SWISS-AV",
        "HUGE",
        "OLD-ENGL",
        "NORWAY",
        "SPRANTO2",
        "BWAY2",
        "EVGA-ALT",
        "WACKY2",
        "MACNTOSH",
        "2_HEBREW",
        "16_HEB",
        "CP111",
        "SPRANTO1",
        "ARMENIAN",
        "SWISSAV2",
        "BLKBOARD",
        "HEBLARGE",
        "KEWL",
        "ANSIBLE",
        "ROMAN",
        "F0ALT",
        "SPRANTO",
        "STANDARD",
        "OLDENG-F",
        "VOYNICH",
        "GREEKALT",
        "ROMAN3",
        "MEDIEVAL",
        "CORRODED",
        "HEB-SNSF",
        "DKY#001",
        "GRCKSSRF",
        "HEB-KTAB",
        "HEBUGLY",
        "HEBKTAV2",
        "CNTDOWN",
        "ARABDRFT",
        "ROTUND",
        "HEBKTAV1",
        "SCRAWL2",
        "ARBNASKH",
        "ARABKUFI",
        "HOLLOW",
        "SMCAPNUM",
        "FINNISH",
        "SCRWL---",
        "BIGSERIF",
        "SWISSBX2",
        "HEB-BIG",
        "BINARYED",
        "SWISSBOX",
        "MODERN",
        "SLANT2",
        "RUNIC",
        "CYRILLIC",
        "SWISS",
        "NORTON1",
        "SANSERIX",
        "HEBYOGI",
        "NORWAY2",
        "HEBBOLDK",
        "HEB-7BIT",
        "READABL7",
        "NORTON0",
        "ORATOR",
        "DONNA",
        "SANSMALL",
        "SANSF1",
        "FLORI",
        "PARKAVE",
        "DEF_8X16",
        "CIRCLE",
        "TENGWAR",
        "NUTSO",
        "HIGHSEAS",
        "MERP2",
        "WACKY",
        "FE_8X16",
        "CALCULAT",
        "SCRIPT2",
        "LEGEND",
        "BODONI",
        "BRUSH",
        "SCRIPT3",
        "ELEGITAL",
        "YIDDISH",
        "COURIER",
        "MERP",
        "BROADWAY",
        "FRESNO",
        "COMPUTR2",
        "RUNES",
        "GAELIC",
        "MORSE",
        "BROADWY1",
        "PERCY",
        "F0",
        "ROMANY",
        "8X14",
        "SERIFBIG",
        "BOLD1",
        "GOTHIC2",
        "BOLD3",
        "BROADWY2",
        "ELEGANTE",
        "SCRAWL",
        "ELEGANT2",
        "SMEGA",
        "BOLD5",
        "FE_8X14",
        "KOOL",
        "BAUHAUS",
        "9X16SNSF",
        "BOLD4",
        "OUTLINE",
        "ITALIC2",
        "HEBREW",
        "BRAILLE",
        "GOTH_NEW",
        "SMVGA",
        "OLDENGL",
        "SANS3",
        "ROMAN2",
        "SMALCAPS",
        "ALTCP850",
        "ALTCP437",
        "ALTCP865",
        "ALTCP863",
        "ALTCP860",
        "BLOCK",
        "SLANT",
        "FONTHE",
        "VGAHEB92",
        "LOADHEB",
        "RUS_ARE",
        "RUS_AR1",
        "PP_SSER",
        "CAFE",
        "PP_ROMAN",
        "8X14APL",
        "BACKWARD",
        "ITALICS",
        "CP866",
        "CONDBIT",
        "COND8X16",
        "&YUGOSLA",
        "&URDU",
        "&HEBREW",
        "&FARSI",
        "&POLISH",
        "&TURKISH",
        "&GREEK",
        "&ARABIC",
        "&EUROPE",
        "&GAELIC",
        "&RUSSIAN",
        "LBITALIC",
        "LB_LARGE",
        "BOXROUND",
        "LB_OCR",
        "POLISH",
        "LB_MISC",
        "PC_7",
        "OLDENG",
        "FRACTUR",
        "LBARABIC",
        "866_RUS",
        "855_CYR",
        "850_LAT1",
        "737_GRE",
        "864_ARA",
        "874_THA",
        "CP857",
        "CN-TW437",
        "CP855",
        "CP869",
        "CP850",
        "CP852",
        "KR-DOS",
        "CP860",
        "CP861",
        "CP915",
        "CP863",
        "CP912",
        "CP865",
        "CP866C",
        "CP866B",
        "SWIS1251",
        "SWIS1131",
        "CP880",
        "CP881",
        "CP883",
        "CP882",
        "CP851",
        "CP885",
        "CP113",
        "CP112",
        "CP884",
        "CP853",
        "CP862",
        "CP864",
        "CP923",
        "CP65500",
        "CP65501",
        "CP922",
        "CP920",
        "CP65503",
        "CP65502",
        "CP819",
        "CP921",
        "CP919",
        "CP58163",
        "CP914",
        "CP63283",
        "CP60211",
        "CP901",
        "CP59283",
        "CP902",
        "CP913",
        "CP58222",
        "CP62318",
        "CP878",
        "CP61294",
        "CP59246",
        "CP65505",
        "CP1288",
        "CP30029",
        "CP30001",
        "CP30015",
        "CP774",
        "CP895",
        "CP856",
        "CP775",
        "CP991",
        "CP30014",
        "CP30000",
        "CP30028",
        "CP30016",
        "CP30002",
        "CP777",
        "CP667",
        "CP3012",
        "CP30003",
        "CP30017",
        "CP30013",
        "CP30007",
        "CP1117",
        "CP58152",
        "CP772",
        "CP58335",
        "CP773",
        "CP3846",
        "CP1116",
        "CP30006",
        "CP30012",
        "CP808",
        "CP30004",
        "CP30010",
        "CP771",
        "CP3845",
        "CP770",
        "CP30039",
        "CP30011",
        "CP30005",
        "CP30022",
        "CP848",
        "CP849",
        "CP30023",
        "CP30009",
        "CP30021",
        "CP30020",
        "CP30034",
        "CP30008",
        "CP30030",
        "CP30024",
        "CP30018",
        "CP899",
        "CP872",
        "CP3021",
        "CP867",
        "CP668",
        "CP30019",
        "CP30025",
        "CP30031",
        "CP30027",
        "CP30033",
        "CP859",
        "CP58210",
        "CP858",
        "CP737",
        "CP30032",
        "CP30026",
        "CP1270",
        "CP1361",
        "CP65506",
        "CP62691",
        "CP61667",
        "CP60643",
        "CP58596",
        "CP58595",
        "CP58598",
        "CP58601",
        "CP58627",
        "CP58619",
        "CP58630",
        "CP1275",
        "PGC",
        "VGA9",
        "EGA9",
        "GR-CP437",
        "EGA8",
        "VGA8",
        "C&T-HIQV",
        "CP1118",
        "CP1119",
        "CP62306",
        "CP1125",
        "CP1131",
        "MTGRC7",
        "RUMG2C",
        "HP-LX8PT",
        "CP1253",
        "CP1257",
        "CP59619",
        "CP1254",
        "CP1250",
        "CP59620",
        "CP1252",
        "CP1280",
        "CP1281",
        "CP1283",
        "CP1282",
        "CP1286",
        "CP1284",
        "CP1285",
        "GR-CP850",
        "EUCGA",
        "CGA",
        "BIOS",
        "DG1",
        "MDA9",
        "3270PC9",
        "EUMDA9",
        "PS2OLD8",
        "PS2OLD9",
        "WVGA8",
        "PPC-M4",
        "TRIVGA9",
        "PPC-M2",
        "ACERV9",
        "TRI88CS8",
        "ACERV8",
        "PPC-M3",
        "SIGRM9",
        "SIGRM8",
        "TRI88CS9",
        "RUMONOX9",
        "OLIVGR",
        "JAT-MM9",
        "LE-D9",
        "WVGA9",
        "3DL-A8",
        "3DL-A9",
        "PHXEGA9",
        "INTELV9",
        "JAT-RMM9",
        "SM910",
        "EVXMEEGA",
        "RUMG2M9",
        "CLPORT9",
        "CLPORT8",
        "CL5320-8",
        "RUGENM9",
        "CL5320-9",
        "TANDY2M9",
        "RUHGC1-9",
        "AMIEGA8",
        "EUROPC9",
        "ACER710M",
        "ACERGRM9",
        "COMPAQP3",
        "AMIEGA9",
        "HYUNMGR9",
        "RUMG1M9",
        "IGSVGA8",
        "ATISWGR9",
        "STB-EGA8",
        "ANTIQUE",
        "IGSVGA9",
        "RUHGC2-9",
        "STB-EGA9",
        "PC6300",
        "GRMONOX9",
        "BLUETERM",
        "VERITE",
        "3DL-B",
        "EAGLE1",
        "PPC4",
        "MBC55X",
        "ACER710",
        "PC1640B",
        "PPC2",
        "PPC3",
        "PPC1",
        "TRI89B",
        "T3100-A4",
        "OLIVM15",
        "ITTX",
        "SHARP3K1",
        "COPAMX",
        "ITTXNW",
        "PC1640D",
        "HACK4TH",
        "AIXOID8",
        "APRI-M",
        "MERP3",
        "RUSSIAN",
        "SCRIPT4",
        "ATI8X16",
        "ITALIC3",
        "HANDWRIT",
        "ATI9X14",
        "IVAN",
        "GOTHIC",
        "SYS8X20",
        "ICONS",
        "A7100RU2",
        "A7100RU1",
        "SIMPLE",
        "TANDY2K2",
        "SIMPAGAR",
        "8X14THIN",
        "THINDEMO",
        "SIEMPCD",
        "TANDY2K1",
        "CN-PRCHN",
        "OLI-D-T9",
        "PHXEGA8",
        "COMPIS",
        "A7100-US",
        "BOLD2",
        "DEF_8X14",
        "COURIER1",
        "APRI256",
        "SYS8X16",
        "REZPOUET",
        "atari-st-8x8",
        "WANG437",
        "BIT8X8",
        "specialist",
        "FANTASY",
        "BBC512",
        "atari-st-6x6",
        "BBC512B",
        "CM-6X8",
        "ATARIPOF",
        "KPRO2K",
        "PHXBIOS",
        "NEC-MS1A",
        "Z_RUSS",
        "VTECH",
        "TINYTYPE",
        "EPSONQ2",
        "SHARP3K2",
        "T3100-A1",
        "T3100-A3",
        "T3100-A2",
        "MBC16B",
        "YES-T",
        "SPERRY",
        "YES-GR",
        "PHXVGA8",
        "DEF_8X8",
        "poisk",
        "COMPUTR3",
        "ATISWGR",
        "ATI8X8",
        "EPSONQ1",
        "WINDOWS",
        "PCCONV",
        "FWORKS",
        "KPRO2K_D",
        "EPSONQM9",
        "ATI8X14",
        "CYRILLI3",
        "ATI9X16",
        "TEX-MATH",
        "NIX-M16",
        "atari-st-8x16",
        "BBC512_D",
        "BBC512_X",
        "NIX-M15A",
        "NIX-M15B",
        "MBPC230D",
        "PHXEGA8D",
        "ATISWGRD",
        "ATIKRVGA",
        "TOSH-SAT",
        "NEC-MS2A",
        "9THWAVE",
        "NICER40C",
        "AIXOID9",
        "System_Monospaced_8x16",
        "TOSHT300",
        "RUS_AR6",
        "MBPC230M",
        "APRIXENC",
        "SPERRYHI",
        "T3100-B4",
        "MBPC230",
        "RUS_AR6E",
        "T3100-B3",
        "T3100-B1",
        "T3100-B2",
        "EPSONQ2D",
        "VTECH_D",
        "PHXBIOSD",
        "CGA-TH_D",
        "EUCGAT_D",
        "MTGRC3_D",
        "RUGENC2D",
        "MTGRC2_D",
        "MTGRC1_D",
        "MTGRC4_D",
        "TELEPC_D",
        "APC-III",
        "Z100-A_D",
        "SPERRY_D",
        "MBC16B_D",
        "YES-T_D",
        "HEBCLRGF",
        "BIT8X14",
        "OLIVM15D",
        "COPAMX_D",
        "ITTX_D",
        "ITTXNW_D",
        "FATSCII",
        "MINDSETD",
        "BIT8X16",
        "HEBIBM83",
        "gem-1.1-8x16",
        "TALL_GRE",
        "gem-2.0-8x16",
        "ACER710D",
        "gem-3.1-8x16",
        "VERITE_D",
        "BIOS_D",
        "MTGRC7_D",
        "TALL_CYR",
        "ACERV8_D",
        "MTGRC8_D",
        "EUROPC_D",
        "EUCGA_D",
        "PC1640CD",
        "TANDY1_D",
        "JAT-MC_D",
        "PPC1_D",
        "LBPC_D",
        "PPC4_D",
        "PPC2_D",
        "PVBGC1_D",
        "OLIPC1GR",
        "PC1640AD",
        "PVBGC3_D",
        "MBC55X_D",
        "TALL_LT2",
        "RUMG2C_D",
        "APRI200D",
        "TALL_LT1",
        "EAGLE1_D",
        "MTGRC5_D",
        "PC1640BD",
        "TALL_HEB",
        "OLIVGR_D",
        "RUMG1C_D",
        "WANG437D",
        "EAGLE2_D",
        "IBMCGA83",
        "DG1ALT_D",
        "TANDY2_D",
        "DG1_D",
        "PVBGC2_D",
        "LE-D_D",
        "MTGRC9_D",
        "TALL_GFX",
        "ACERGRCD",
        "SEEQUA_D",
        "RUGENC1D",
        "NIX-M35D",
        "MBC775_D",
        "TALL",
        "JAT-RMCD",
        "TALL_RUS",
        "DTK8X8_D",
        "MTGRC6_D",
        "PC1640DD",
        "PPC3_D",
        "ATI8X8_D",
        "EPSONQ1D",
        "AMIEGA8D",
        "System_8x14",
        "NEC-MS2B",
        "WVGA8_D",
        "MPACT_D",
        "NIMBUS1D",
        "CGA_D",
        "Z100-B_D",
        "System_8x18",
        "System_8x16",
        "YES-GR_D",
        "PCCONV_D",
        "BIT8X20",
        "40C-TYPE",
        "PC",
        "WANG437M",
        "System_VIO_12x20",
        "APRI256D",
        "Terminal_8514_cp437",
        "Terminal_8514",
        "Terminal_140",
        "System_VIO_7x25",
        "System_VIO_12x22",
        "System_VIO_12x30",
        "32",
        "HUGE-VGA",
        "Courier_15x25",
        "atari-st-16x32"
      ];
      
      // Initialize font order with predefined order first
      this.fontOrder = [];
      
      // Add fonts from predefined order if they exist in our loaded fonts
      predefinedOrder.forEach(fontKey => {
        if (this.fonts[fontKey]) {
          this.fontOrder.push(fontKey);
        }
      });
      
      // Add any remaining fonts that weren't in the predefined order
      Object.keys(this.fonts).forEach(fontKey => {
        if (!this.fontOrder.includes(fontKey)) {
          this.fontOrder.push(fontKey);
        }
      });
      
      this.renderFontList();
      
      // Load the first font pattern automatically
      const firstFontKey = this.fontOrder[0];
      if (firstFontKey) {
        this.selectFont(firstFontKey);
        
        // Mark the first font as selected
        const firstFontItem = this.shadowRoot.querySelector('.font-item');
        if (firstFontItem) {
          firstFontItem.classList.add('selected');
        }
      }
      
      // Update the JSON output
      this.updateJsonOutput();
    } catch (error) {
      console.error('Error loading fonts:', error);
    }
  }
  
  // Render the font list
  renderFontList() {
    const fontList = this.shadowRoot.querySelector('.font-list');
    if (!fontList) return;
    
    let html = '';
    
    // Use fontOrder to determine the order of rendering
    this.fontOrder.forEach(fontKey => {
      const font = this.fonts[fontKey];
      if (!font) return;
      
      const fontName = font.metadata?.name || fontKey;
      const previewImage = font.metadata?.['0x7f_png'] || '';
      
      // Get the actual dimensions of the character if available
      const width = font.metadata?.['0x7f_bitmap']?.[0]?.length || 16;
      const height = font.metadata?.['0x7f_bitmap']?.length || 16;
      
      // Calculate a reasonable scale factor to make small characters more visible
      const scaleFactor = 2;
      
      html += `
        <div class="font-item" data-font-key="${fontKey}" draggable="true" title="${fontName}">
          <div class="font-preview" 
               style="background-image: url('${previewImage}'); 
                      width: ${width * scaleFactor}px; 
                      height: ${height * scaleFactor}px;"
               data-original-width="${width}"
               data-original-height="${height}"></div>
          <div class="font-name">${fontName}</div>
        </div>
      `;
    });
    
    fontList.innerHTML = html;
    
    // Reattach event listeners to the newly created elements
    this.setupDragListeners();
  }
  
  // Render the component
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        
        .container {
          display: flex;
          flex-direction: column;
        }
        
        .font-list {
          display: flex;
          flex-wrap: wrap;
          border: 1px dashed #ccc;
          padding: 10px;
          min-height: 100px;
        }
        
        .font-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          border: 1px solid transparent;
          position: relative;
        }
        
        .font-item:hover {
          background-color: var(--color-4);
        }
        
        .font-item.selected {
          background-color: var(--color-7);
          color: var(--color-1);
        }
        
        .font-item.dragging {
          opacity: 0.5;
        }
        
        .font-item.drag-over {
          border: 1px dashed #666;
        }
        
        .font-name {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          transform: translateY(-100%);
          font-size: 1rem;
          text-align: center;
          background-color: var(--color-2);
          color: white;
          padding: 1px 2px;
          width: max-content;
          opacity: 0;
          pointer-events: none;
          z-index: 1000;
        }
        
        .font-item:hover .font-name {
          opacity: 1;
        }
        
        .font-preview {
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          image-rendering: pixelated;
          margin: 2px;
        }
        
        .font-details {
          margin-top: 20px;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        
        .current-font-preview {
          width: 128px;
          height: 128px;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          image-rendering: pixelated;
          margin: 0 auto;
        }
        
        .current-font-name {
          text-align: center;
          font-size: 16px;
          margin: 10px 0;
        }
        
        .json-output {
          margin-top: 20px;
        }
        
        .json-output textarea {
          width: 100%;
          min-height: 200px;
          font-family: monospace;
          padding: 10px;
          box-sizing: border-box;
        }
      </style>
      
      <div class="container">
        <h3>Drag and drop to reorganize fonts</h3>
        <div class="font-list"></div>
        
        <div class="font-details" style="display: none;">
          <div class="current-font-preview"></div>
          <div class="current-font-name"></div>
        </div>
        
        <div class="json-output">
          <h3>Reorganized JSON</h3>
          <textarea readonly></textarea>
        </div>
      </div>
    `;
  }
  
  // Setup event listeners
  setupEventListeners() {
    // Font item click event
    this.shadowRoot.addEventListener('click', (e) => {
      const fontItem = e.target.closest('.font-item');
      if (fontItem) {
        const fontKey = fontItem.dataset.fontKey;
        this.selectFont(fontKey);
        
        // Update selected state
        this.shadowRoot.querySelectorAll('.font-item').forEach(item => {
          item.classList.toggle('selected', item === fontItem);
        });
      }
    });
    
    // Setup drag and drop events
    this.setupDragAndDrop();
  }
  
  // Setup drag and drop functionality
  setupDragAndDrop() {
    // Add event delegation for drag events
    this.shadowRoot.addEventListener('dragstart', this.handleDragStart.bind(this));
    this.shadowRoot.addEventListener('dragend', this.handleDragEnd.bind(this));
    this.shadowRoot.addEventListener('dragover', this.handleDragOver.bind(this));
    this.shadowRoot.addEventListener('dragleave', this.handleDragLeave.bind(this));
    this.shadowRoot.addEventListener('drop', this.handleDrop.bind(this));
  }
  
  // Setup drag listeners specifically for font items
  setupDragListeners() {
    // This is intentionally empty as we're using event delegation
    // But we can use this to initialize any specific drag-related state if needed
  }
  
  // Handle drag start
  handleDragStart(e) {
    const fontItem = e.target.closest('.font-item');
    if (!fontItem) return;
    
    // Store the dragged item's key
    e.dataTransfer.setData('text/plain', fontItem.dataset.fontKey);
    fontItem.classList.add('dragging');
    
    // Set the drag image (optional)
    const preview = fontItem.querySelector('.font-preview');
    if (preview) {
      e.dataTransfer.setDragImage(preview, 0, 0);
    }
  }
  
  // Handle drag end
  handleDragEnd(e) {
    const fontItem = e.target.closest('.font-item');
    if (fontItem) {
      fontItem.classList.remove('dragging');
    }
    
    // Remove all drag-over classes
    this.shadowRoot.querySelectorAll('.drag-over').forEach(item => {
      item.classList.remove('drag-over');
    });
  }
  
  // Handle drag over
  handleDragOver(e) {
    e.preventDefault(); // Allow drop
    
    const fontItem = e.target.closest('.font-item');
    if (fontItem) {
      // Clear previous drag-over states
      this.shadowRoot.querySelectorAll('.drag-over').forEach(item => {
        if (item !== fontItem) {
          item.classList.remove('drag-over');
        }
      });
      
      fontItem.classList.add('drag-over');
    }
  }
  
  // Handle drag leave
  handleDragLeave(e) {
    const fontItem = e.target.closest('.font-item');
    if (fontItem) {
      fontItem.classList.remove('drag-over');
    }
  }
  
  // Handle drop
  handleDrop(e) {
    e.preventDefault();
    
    const draggedKey = e.dataTransfer.getData('text/plain');
    const targetItem = e.target.closest('.font-item');
    
    if (draggedKey && targetItem) {
      const targetKey = targetItem.dataset.fontKey;
      
      // Don't do anything if dropping onto itself
      if (draggedKey === targetKey) return;
      
      // Reorder the fonts
      this.reorderFonts(draggedKey, targetKey);
      
      // Update the UI
      this.renderFontList();
      
      // Update the JSON output
      this.updateJsonOutput();
      
      console.log('Drop completed, JSON updated');
    }
    
    // Remove all drag-over classes
    this.shadowRoot.querySelectorAll('.drag-over').forEach(item => {
      item.classList.remove('drag-over');
    });
  }
  
  // Reorder fonts based on drag and drop
  reorderFonts(draggedKey, targetKey) {
    // Get current positions
    const draggedIndex = this.fontOrder.indexOf(draggedKey);
    const targetIndex = this.fontOrder.indexOf(targetKey);
    
    if (draggedIndex === -1 || targetIndex === -1) return;
    
    // Remove the dragged item
    this.fontOrder.splice(draggedIndex, 1);
    
    // Insert it at the new position
    this.fontOrder.splice(targetIndex, 0, draggedKey);
  }
  
  // Update the JSON output textarea
  updateJsonOutput() {
    const textarea = this.shadowRoot.querySelector('.json-output textarea');
    if (!textarea) return;
    
    // Create a new object with the reordered keys
    const reorderedFonts = {};
    
    // Use the fontOrder array to ensure keys are added in the correct order
    this.fontOrder.forEach(key => {
      if (this.fonts[key]) {
        reorderedFonts[key] = this.fonts[key];
      }
    });
    
    // To ensure the order is preserved in the JSON output, we'll create a special
    // representation that shows the order explicitly
    const orderedOutput = {
      _fontOrder: this.fontOrder,
      fonts: reorderedFonts
    };
    
    // Format the JSON with 2 spaces indentation
    textarea.value = JSON.stringify(orderedOutput, null, 2);
    
    // Force a UI update by triggering a change event
    const event = new Event('change');
    textarea.dispatchEvent(event);
    
    console.log('JSON updated with order:', this.fontOrder);
  }
  
  // Select and display a font
  selectFont(fontKey) {
    const font = this.fonts[fontKey];
    if (!font || !font.metadata) return;
    
    this.currentFont = font;
    const fontName = font.metadata.name || fontKey;
    const previewImage = font.metadata?.['0x7f_png'] || '';
    
    // Update font details display
    const detailsContainer = this.shadowRoot.querySelector('.font-details');
    const preview = this.shadowRoot.querySelector('.current-font-preview');
    const nameElement = this.shadowRoot.querySelector('.current-font-name');
    
    if (detailsContainer && preview && nameElement) {
      detailsContainer.style.display = 'block';
      preview.style.backgroundImage = `url('${previewImage}')`;
      nameElement.textContent = fontName;
    }
  }
}

// Register custom element
customElements.define('json-reorganizer', JsonReorganizer);