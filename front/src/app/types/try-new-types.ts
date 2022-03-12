export type Langs = "en" | "ru" | "jp" | "cn";
export type DevLangs = 'c' | 'js' | 'ts' | 'php' | 'py' | 'j' | 'apl' | 'd';
export type LangsCombos = `L-${Langs}/${DevLangs}`;

export const langCombo_jp_apl: LangsCombos = "L-jp/apl";
