// Tools and technologies shown as logos. Brand marks come from Simple Icons; tools whose marks it
// doesn't carry use a neutral line icon instead of an imitation of their logo.
import {
  siAndroidstudio,
  siClaude,
  siCss,
  siDart,
  siDocker,
  siExpo,
  siExpress,
  siFastapi,
  siFigma,
  siFirebase,
  siFlutter,
  siGit,
  siGithub,
  siGithubcopilot,
  siGooglecolab,
  siGooglegemini,
  siHtml5,
  siHuggingface,
  siJavascript,
  siJupyter,
  siLinux,
  siMongodb,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siNumpy,
  siOllama,
  siOpenjdk,
  siPandas,
  siPhp,
  siPostgresql,
  siPostman,
  siPython,
  siReact,
  siScikitlearn,
  siSqlalchemy,
  siStreamlit,
  siTailwindcss,
  siTensorflow,
  siTypescript,
  siVercel,
  siVite,
  siWordpress,
  siYoutube,
  type SimpleIcon,
} from 'simple-icons';
import { Cloud, Code2, FlaskConical, LayoutTemplate, MessageSquare, Palette, PenTool, Pipette, ScanSearch, Sparkles, type LucideIcon } from 'lucide-react';

export type Tool = { name: string; icon: SimpleIcon | LucideIcon; color?: string };

const t = (icon: SimpleIcon, name = icon.title): Tool => ({ name, icon });
const l = (name: string, icon: LucideIcon, color: string): Tool => ({ name, icon, color });

export const toolGroups: { group: string; tools: Tool[] }[] = [
  { group: 'Languages', tools: [t(siPython), t(siDart), t(siTypescript), t(siJavascript), t(siOpenjdk, 'Java'), t(siPhp), t(siHtml5), t(siCss)] },
  { group: 'Frameworks', tools: [t(siFlutter), t(siReact), t(siNextdotjs), t(siFastapi), t(siNodedotjs), t(siExpress), t(siExpo), t(siTailwindcss), t(siVite), t(siStreamlit)] },
  { group: 'AI & data', tools: [t(siOllama), t(siHuggingface), t(siTensorflow), t(siScikitlearn), t(siPandas), t(siNumpy), t(siJupyter), t(siGooglecolab), l('Gemma', Sparkles, '#4c8bf5')] },
  { group: 'AI assistants', tools: [t(siGooglegemini, 'Gemini'), l('ChatGPT', MessageSquare, '#10a37f'), t(siClaude), t(siGithubcopilot)] },
  { group: 'Databases & cloud', tools: [t(siPostgresql), t(siMongodb), t(siMysql), t(siFirebase), t(siSqlalchemy), t(siDocker), l('Azure', Cloud, '#0089d6'), t(siVercel), t(siLinux)] },
  {
    group: 'Design & UX',
    tools: [t(siFigma), l('Canva', Palette, '#00c4cc'), l('Google Stitch', PenTool, '#a78bfa'), l('UI / UX', LayoutTemplate, '#f472b6'), l('CSS Peeper', ScanSearch, '#7c6cff'), l('Colour picker', Pipette, '#fbbf24')],
  },
  { group: 'Tools & media', tools: [t(siGit), t(siGithub), t(siPostman), l('Playwright', FlaskConical, '#2ead33'), l('VS Code', Code2, '#22a7f2'), t(siAndroidstudio), t(siWordpress), t(siYoutube)] },
];

export const allTools = toolGroups.flatMap((g) => g.tools);
