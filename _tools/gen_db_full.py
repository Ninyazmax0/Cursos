#!/usr/bin/env python3
"""Generador completo del curso de Base de Datos - 20 niveles con UI Python-style"""

OUTPUT = r"C:\Users\MINEDUCYT\OneDrive\Documentos\verdadera-academia\database_course.html"

# ============================================================
# CSS - Estilo Python (glassmorphism, animaciones, etc.)
# ============================================================
CSS = r"""
     :root {
         --background: #1a1b26;
         --foreground: #a9b1d6;
         --card-background: #24283b;
         --border: #414868;
         --accent: #7aa2f7;
         --accent-dark: #5a7edb;
         --accent-glow: rgba(122, 162, 247, 0.4);
         --green: #9ece6a;
         --green-glow: rgba(158, 206, 106, 0.4);
         --yellow: #e0af68;
         --yellow-glow: rgba(224, 175, 104, 0.4);
         --red: #f7768e;
         --purple: #bb9af7;
         --purple-glow: rgba(187, 154, 247, 0.4);
         --cyan: #73daca;
         --font-sans: 'Inter', sans-serif;
         --font-mono: 'JetBrains Mono', monospace;
     }
     * { box-sizing: border-box; }
     body { color: var(--foreground); font-family: var(--font-sans); margin: 0; padding: 0; position: relative; overflow-x: hidden; }
     .background-container { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; transition: opacity 0.5s ease; }
     .background-day, .background-night { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-size: cover; background-position: center; opacity: 0; transition: opacity 1s ease; }
     .background-day { background-image: url('https://i.pinimg.com/originals/71/f1/b9/71f1b924a56150104ec16828f2d31b7f.gif'); }
     .background-night { background-image: url('https://i.pinimg.com/originals/4c/23/98/4c2398e6be397bb08b5cb70b2192d730.gif'); }
     .dark .background-night { opacity: 1; }
     .background-day { opacity: 1; }
     .content-box { position: fixed; inset: 0.75rem; background: rgba(26, 27, 38, 0.78); border: 1px solid rgba(122, 162, 247, 0.15); border-radius: 20px; padding: 0; box-shadow: 0 25px 80px rgba(0, 0, 0, 0.6), 0 0 60px rgba(122, 162, 247, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.04); backdrop-filter: blur(24px) saturate(1.2); display: flex; justify-content: center; align-items: center; overflow: hidden; }
     .panel { display: none; animation: panelSlideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1); width: 100%; height: 100%; }
     .panel.active { display: flex; }
     @keyframes panelSlideIn { from { opacity: 0; transform: translateY(12px) scale(0.99); } to { opacity: 1; transform: translateY(0) scale(1); } }
     @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
     @keyframes glowPulse { 0%, 100% { box-shadow: 0 0 15px var(--accent-glow); } 50% { box-shadow: 0 0 30px var(--accent-glow), 0 0 60px rgba(122, 162, 247, 0.15); } }
     @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
     @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
     #level-selection-panel { padding: 1.5rem 2rem; overflow-y: auto; flex-direction: column; align-items: center; }
     #level-selection-panel::-webkit-scrollbar { width: 6px; }
     #level-selection-panel::-webkit-scrollbar-track { background: transparent; }
     #level-selection-panel::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }
     #level-selection-panel::-webkit-scrollbar-thumb:hover { background: var(--accent); }
     .course-header { text-align: center; margin-bottom: 1.5rem; animation: fadeInUp 0.6s ease; }
     .course-header h1 { font-size: 2.5rem; font-weight: 800; background: linear-gradient(135deg, var(--accent) 0%, var(--purple) 50%, var(--cyan) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 0.5rem; letter-spacing: -0.02em; }
     .course-header p { color: var(--foreground); opacity: 0.6; font-size: 1rem; max-width: 500px; margin: 0 auto; }
     .overall-progress { width: 100%; max-width: 600px; margin: 0 auto 2rem; animation: fadeInUp 0.7s ease; }
     .progress-stats { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; font-size: 0.85rem; }
     .progress-stats .label { color: var(--foreground); opacity: 0.7; }
     .progress-stats .value { color: var(--accent); font-weight: 700; font-family: var(--font-mono); }
     .progress-track { width: 100%; height: 8px; background: rgba(65, 72, 104, 0.5); border-radius: 99px; overflow: hidden; position: relative; }
     .progress-fill { height: 100%; border-radius: 99px; background: linear-gradient(90deg, var(--accent) 0%, var(--purple) 50%, var(--green) 100%); background-size: 200% 100%; transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1); position: relative; }
     .progress-fill::after { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); background-size: 200% 100%; animation: shimmer 2s ease infinite; }
     .levels-section { width: 100%; max-width: 900px; animation: fadeInUp 0.8s ease; }
     .section-title { font-size: 1.1rem; font-weight: 700; color: var(--foreground); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em; }
     .section-title i { color: var(--accent); }
     #level-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 0.9rem; width: 100%; max-width: 860px; margin-bottom: 2rem; }
     .level-node { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.6rem; padding: 1.25rem 1rem; cursor: pointer; background: rgba(36, 40, 59, 0.55); border: 1px solid rgba(65, 72, 104, 0.5); border-radius: 16px; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); position: relative; overflow: hidden; min-height: 120px; }
     .level-node.unlocked:hover { transform: translateY(-3px); border-color: rgba(122, 162, 247, 0.5); box-shadow: 0 8px 28px rgba(122, 162, 247, 0.15); background: rgba(36, 40, 59, 0.75); }
     .level-node.locked { opacity: 0.38; cursor: not-allowed; filter: grayscale(0.4); }
     .level-node.completed { border-color: rgba(158, 206, 106, 0.35); background: rgba(158, 206, 106, 0.05); }
     .level-node.completed:hover { border-color: rgba(158, 206, 106, 0.6); box-shadow: 0 8px 28px rgba(158, 206, 106, 0.12); }
     .node-icon { width: 42px; height: 42px; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: all 0.3s ease; }
     .level-node.unlocked .node-icon { background: rgba(122,162,247,0.12); color: var(--accent); }
     .level-node.unlocked:hover .node-icon { background: var(--accent); color: #1a1b26; transform: scale(1.1); }
     .level-node.completed .node-icon { background: rgba(158,206,106,0.12); color: var(--green); }
     .level-node.locked .node-icon { background: rgba(65,72,104,0.25); color: var(--border); }
     .node-number { font-family: var(--font-mono); font-size: 0.7rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; opacity: 0.5; }
     .level-node.unlocked .node-number { color: var(--accent); }
     .level-node.completed .node-number { color: var(--green); opacity: 0.7; }
     .node-title { font-size: 0.82rem; font-weight: 600; text-align: center; line-height: 1.3; color: var(--foreground); max-width: 140px; }
     .level-node.completed .node-title { color: var(--green); }
     .level-node.locked .node-title { opacity: 0.4; }
     .status-ribbon { position: absolute; top: 10px; right: -28px; background: var(--green); color: #1a1b26; font-size: 0.55rem; font-weight: 800; padding: 2px 24px; transform: rotate(45deg); letter-spacing: 0.05em; }
     #lesson-panel { padding: 0; flex-direction: column; }
     #lesson-panel .lesson-wrapper { display: flex; flex-direction: column; height: 100%; width: 100%; max-width: 100%; }
     #lesson-panel header { display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.5rem; background: rgba(36, 40, 59, 0.5); border-bottom: 1px solid rgba(65, 72, 104, 0.4); flex-shrink: 0; }
     #lesson-panel header h2 { font-size: 1.25rem; font-weight: 700; color: var(--foreground); margin: 0; }
     #close-lesson-btn { background: rgba(65, 72, 104, 0.3); border: 1px solid var(--border); border-radius: 10px; padding: 0.5rem; color: var(--foreground); cursor: pointer; transition: all 0.2s; }
     #close-lesson-btn:hover { background: rgba(247, 118, 142, 0.15); border-color: var(--red); color: var(--red); }
     .lesson-progress-container { padding: 0 1.5rem; flex-shrink: 0; }
     .progress-bar-bg { background-color: rgba(65, 72, 104, 0.4); border-radius: 999px; height: 4px; overflow: hidden; }
     .progress-bar-fill { background: linear-gradient(90deg, var(--accent), var(--purple)); height: 100%; border-radius: 999px; transition: width 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
     #lesson-content { flex-grow: 1; overflow-y: auto; padding: 1.5rem; }
     #lesson-content::-webkit-scrollbar { width: 6px; }
     #lesson-content::-webkit-scrollbar-track { background: transparent; }
     #lesson-content::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }
     #lesson-panel footer { display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.5rem; background: rgba(36, 40, 59, 0.5); border-top: 1px solid rgba(65, 72, 104, 0.4); flex-shrink: 0; }
     #lesson-step { font-family: var(--font-mono); font-size: 0.85rem; color: var(--foreground); opacity: 0.6; }
     .btn-primary { background: linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%); color: white; padding: 0.65rem 1.5rem; border-radius: 10px; font-weight: 600; font-size: 0.9rem; border: none; cursor: pointer; transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1); box-shadow: 0 2px 8px rgba(122, 162, 247, 0.25); display: inline-flex; align-items: center; gap: 0.4rem; }
     .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(122, 162, 247, 0.35); }
     .btn-primary:active { transform: translateY(0); }
     .btn-primary:disabled { opacity: 0.4; cursor: not-allowed; transform: none; box-shadow: none; }
     .btn-secondary { background: rgba(65, 72, 104, 0.4); color: var(--foreground); padding: 0.65rem 1.5rem; border-radius: 10px; font-weight: 600; font-size: 0.9rem; border: 1px solid var(--border); cursor: pointer; transition: all 0.25s ease; }
     .btn-secondary:hover { background: rgba(65, 72, 104, 0.6); border-color: var(--accent); }
     #quiz-panel { padding: 1.5rem; overflow-y: auto; flex-direction: column; align-items: center; }
     #quiz-panel::-webkit-scrollbar { width: 6px; }
     #quiz-panel::-webkit-scrollbar-track { background: transparent; }
     #quiz-panel::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }
     #quiz-panel .quiz-wrapper { width: 100%; max-width: 700px; }
     #quiz-panel header { margin-bottom: 1.5rem; }
     #quiz-level-title { font-size: 1.5rem; font-weight: 700; color: var(--foreground); margin-bottom: 0.25rem; }
     #quiz-progress { font-family: var(--font-mono); font-size: 0.9rem; color: var(--accent); background: rgba(122, 162, 247, 0.1); padding: 0.25rem 0.75rem; border-radius: 8px; border: 1px solid rgba(122, 162, 247, 0.2); }
     #quiz-question { font-size: 1.2rem; line-height: 1.5; color: var(--foreground); margin-bottom: 1.5rem; }
     .quiz-option { border: 1px solid rgba(65, 72, 104, 0.5); background: rgba(36, 40, 59, 0.4); color: var(--foreground); padding: 1rem 1.25rem; border-radius: 12px; cursor: pointer; transition: all 0.2s ease; text-align: left; width: 100%; user-select: none; font-size: 0.95rem; display: flex; align-items: center; gap: 0.75rem; }
     .quiz-option .option-letter { width: 28px; height: 28px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.8rem; background: rgba(122, 162, 247, 0.1); color: var(--accent); border: 1px solid rgba(122, 162, 247, 0.2); flex-shrink: 0; transition: all 0.2s; }
     .quiz-option:hover:not(.disabled) { border-color: var(--accent); background: rgba(122, 162, 247, 0.08); transform: translateX(4px); }
     .quiz-option:hover:not(.disabled) .option-letter { background: var(--accent); color: var(--background); }
     .quiz-option.correct { border-color: var(--green); background: rgba(158, 206, 106, 0.08); color: var(--green); }
     .quiz-option.correct .option-letter { background: var(--green); color: var(--background); border-color: var(--green); }
     .quiz-option.incorrect { border-color: var(--red); background: rgba(247, 118, 142, 0.08); color: var(--red); }
     .quiz-option.incorrect .option-letter { background: var(--red); color: white; border-color: var(--red); }
     .quiz-option.disabled { pointer-events: none; opacity: 0.5; }
     #results-panel { padding: 2rem; flex-direction: column; align-items: center; justify-content: center; text-align: center; }
     #results-icon { width: 80px; height: 80px; margin-bottom: 1.5rem; }
     #results-title { font-size: 2rem; font-weight: 800; margin-bottom: 0.75rem; }
     #results-score { font-size: 1.25rem; font-family: var(--font-mono); color: var(--accent); margin-bottom: 0.5rem; }
     #results-message { color: var(--foreground); opacity: 0.7; margin-bottom: 2rem; }
     .code-block { background-color: #1a1b26; border: 1px solid rgba(65, 72, 104, 0.5); color: #c0caf5; font-family: var(--font-mono); border-radius: 14px; margin-top: 1rem; overflow: hidden; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3); }
     .code-block-header { background: rgba(36, 40, 59, 0.8); padding: 0.6rem 1rem; display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid rgba(65, 72, 104, 0.3); }
     .code-block-header span { width: 11px; height: 11px; border-radius: 50%; }
     .code-block-header .bg-red-500 { background-color: #ff5f56; }
     .code-block-header .bg-yellow-500 { background-color: #ffbd2e; }
     .code-block-header .bg-green-500 { background-color: #27c93f; }
     .code-block pre { margin: 0; padding: 1rem 1.25rem; white-space: pre; overflow-x: auto; background: #1a1b26; position: relative; }
     .code-block pre code { font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace; font-size: 0.88rem; line-height: 1.7; tab-size: 4; display: block; position: relative; color: #c0caf5; }
     .hidden { display: none; }
     .lesson-content h3 { color: var(--accent); margin-top: 1.5rem; margin-bottom: 0.5rem; }
     .lesson-content ul, .lesson-content ol { margin-left: 1.5rem; margin-bottom: 1rem; }
     .lesson-content li { margin-bottom: 0.5rem; }
     .lesson-content code { background-color: rgba(122, 162, 247, 0.1); color: var(--accent); padding: 0.2rem 0.4rem; border-radius: 4px; font-family: var(--font-mono); font-size: 0.9em; }
     .lesson-content strong { color: var(--yellow); }
     .lesson-content p { margin-bottom: 1rem; line-height: 1.6; }
     .quiz-type-indicator { background: linear-gradient(135deg, var(--accent), var(--purple)); color: white; padding: 0.35rem 0.85rem; border-radius: 20px; font-size: 0.8rem; font-weight: 600; margin-bottom: 1rem; display: inline-block; }
     .quiz-feedback { margin-top: 1rem; padding: 1rem 1.25rem; border-radius: 10px; font-weight: 600; font-size: 0.95rem; }
     .quiz-feedback.correct { background-color: rgba(158, 206, 106, 0.08); color: var(--green); border: 1px solid rgba(158, 206, 106, 0.3); }
     .quiz-feedback.incorrect { background-color: rgba(247, 118, 142, 0.08); color: var(--red); border: 1px solid rgba(247, 118, 142, 0.3); }
     .tour-code-btn { display: none; align-items: center; gap: 0.4rem; padding: 0.35rem 0.8rem; border-radius: 8px; border: 1px solid rgba(122, 162, 247, 0.35); background: rgba(122, 162, 247, 0.1); color: var(--accent); font-size: 0.78rem; font-weight: 600; cursor: pointer; transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1); }
     .tour-code-btn:hover { border-color: var(--accent); box-shadow: 0 0 12px rgba(122,162,247,0.25); transform: translateY(-1px); }
     .tour-code-btn.visible { display: flex; }
     .tour-code-btn i { width: 14px; height: 14px; }
     code[class*="language-"], pre[class*="language-"] { color: #c0caf5; background: #1a1b26; text-shadow: none; font-family: "JetBrains Mono", Consolas, Monaco, monospace; font-size: 0.95rem; line-height: 1.6; direction: ltr; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; tab-size: 2; hyphens: none; }
     pre[class*="language-"] { padding: 1rem; margin: 0; overflow: auto; border-radius: 10px; border: 1px solid #414868; background: #1e1e2e; }
     :not(pre) > code[class*="language-"] { padding: .15rem .35rem; border-radius: .35rem; background: rgba(122,162,247,.12); color: #7aa2f7; border: 1px solid #414868; }
     .token.comment, .token.prolog, .token.doctype, .token.cdata { color: #565f89; font-style: italic; }
     .token.punctuation { color: #c0caf5; }
     .token.property, .token.tag, .token.boolean, .token.number, .token.constant, .token.symbol, .token.deleted { color: #ff9e64; font-weight: bold; }
     .token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted { color: #9ece6a; }
     .token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string { color: #c0caf5; font-weight: bold; }
     .token.atrule, .token.attr-value, .token.keyword { color: #bb9af7; font-weight: bold; }
     .token.function, .token.class-name { color: #7aa2f7; font-weight: bold; }
     .token.regex, .token.important, .token.variable { color: #e0af68; font-style: italic; }
     .language-sql .token.keyword { color: #bb9af7; font-weight: bold; }
     .language-sql .token.string { color: #9ece6a; }
     .language-sql .token.number { color: #ff9e64; }
     .language-sql .token.comment { color: #565f89; font-style: italic; }
     .language-sql .token.function { color: #7aa2f7; }
     .language-sql .token.operator { color: #89ddff; }
     .language-sql .token.punctuation { color: #a9b1d6; }
     .language-sql .token.boolean { color: #ff9e64; font-weight: bold; }
     .lesson-content .mt-4 { margin-top: 1rem; }
     .lesson-content .p-4 { padding: 1rem; }
     .lesson-content .rounded-lg { border-radius: 0.5rem; }
     .lesson-content .border { border-width: 1px; }
     .lesson-content .text-sm { font-size: 0.875rem; }
     .lesson-content .bg-red-900\/30 { background-color: rgba(247, 118, 142, 0.15); }
     .lesson-content .bg-yellow-900\/30 { background-color: rgba(224, 175, 104, 0.15); }
     .lesson-content .border-red-500 { border-color: rgba(247, 118, 142, 0.5); }
     .lesson-content .border-yellow-500 { border-color: rgba(224, 175, 104, 0.5); }
     .lesson-content .text-red-400 { color: #f7768e; }
     .lesson-content .text-yellow-400 { color: #e0af68; }
     .lesson-content .ml-5 { margin-left: 1.25rem; }
     .lesson-content .space-y-2 > * + * { margin-top: 0.5rem; }
     .lesson-content .list-disc { list-style-type: disc; }
     .lesson-content .list-decimal { list-style-type: decimal; }
"""

# ============================================================
# HTML HEAD
# ============================================================
HTML_HEAD = """<!DOCTYPE html>
<html lang="es" class="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Base de Datos - Status Code 418</title>
    <link rel="stylesheet" href="assets/css/tailwind.min.css">
    <link rel="icon" href="favicon.svg" type="image/svg+xml">
    <script src="https://unpkg.com/lucide@latest"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/line-numbers/prism-line-numbers.css">
    <link rel="stylesheet" href="assets/css/auras.css">
    <script type="module" src="assets/js/firebase-config.js"></script>
    <script type="module" src="assets/js/firebase-storage.js"></script>
    <script src="assets/js/course_system.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.36.1/min/vs/loader.min.js"></script>
    <script src="assets/js/theme-manager.js"></script>
    <style>""" + CSS + """
    </style>
</head>
<body>
    <div class="background-container">
        <div class="background-day"></div>
        <div class="background-night"></div>
    </div>
    <div id="loading-overlay" class="fixed inset-0 bg-gray-900 bg-opacity-90 z-50 hidden items-center justify-center flex-col transition-opacity duration-300">
        <div class="relative w-24 h-24 mb-4">
            <div class="absolute inset-0 border-4 border-t-blue-500 border-r-transparent border-b-purple-500 border-l-transparent rounded-full animate-spin"></div>
            <div class="absolute inset-0 flex items-center justify-center">
                <i data-lucide="loader-2" class="w-8 h-8 text-white animate-pulse"></i>
            </div>
        </div>
        <p id="loading-message" class="text-xl font-bold text-white tracking-wider animate-pulse">CARGANDO BASE DE DATOS...</p>
    </div>
<div class="content-box">
    <div id="level-selection-panel" class="panel active">
        <div class="w-full flex justify-between items-center px-6 py-4" style="border-bottom: 1px solid rgba(65,72,104,0.3); flex-shrink: 0;">
            <a href="menu_inicio.html" class="flex items-center gap-2 hover:opacity-80 transition-opacity" title="Volver al Menu Principal">
                <i data-lucide="terminal" class="w-7 h-7" style="color: var(--accent);"></i>
                <span class="font-bold text-lg" style="color: var(--foreground);">Status Code 418</span>
            </a>
            <div class="flex items-center gap-3">
                <a href="menu_inicio.html" class="hidden md:flex items-center gap-2 text-sm btn-secondary" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">
                    <i data-lucide="arrow-left" class="w-4 h-4"></i> Volver al Hub
                </a>
                <button id="theme-toggle" class="glass-button" style="background: rgba(65,72,104,0.3); border: 1px solid var(--border); border-radius: 10px; padding: 0.5rem; color: var(--foreground); cursor: pointer; transition: all 0.2s;">
                    <i id="theme-icon" data-lucide="moon" class="w-5 h-5"></i>
                </button>
            </div>
        </div>
        <div style="flex-grow: 1; overflow-y: auto; padding: 1.5rem 2rem; display: flex; flex-direction: column; align-items: center;">
            <div class="course-header">
                <h1>🗄️ Curso de Base de Datos</h1>
                <p>Domina SQL y el diseño de bases de datos — desde consultas básicas hasta sistemas complejos.</p>
            </div>
            <div class="overall-progress">
                <div class="progress-stats">
                    <span class="label">Progreso del curso</span>
                    <span class="value" id="overall-progress-text">0/20 niveles</span>
                </div>
                <div class="progress-track">
                    <div class="progress-fill" id="overall-progress-bar" style="width: 0%;"></div>
                </div>
            </div>
            <div class="levels-section">
                <div class="section-title"><i data-lucide="layers" class="w-5 h-5"></i> Niveles del Curso</div>
                <div id="level-grid"></div>
            </div>
        </div>
    </div>
    <div id="lesson-panel" class="panel">
        <div class="lesson-wrapper">
            <header>
                <h2 id="lesson-title"></h2>
                <button id="close-lesson-btn" title="Cerrar Leccion"><i data-lucide="x" class="w-5 h-5"></i></button>
            </header>
            <div class="lesson-progress-container" style="padding-top: 0.75rem;">
                <div class="progress-bar-bg"><div id="lesson-progress" class="progress-bar-fill" style="width: 10%;"></div></div>
            </div>
            <div id="lesson-content-wrapper" class="flex-grow flex flex-col lg:flex-row gap-4 overflow-hidden min-h-0" style="padding: 1rem 1.5rem;">
                <div id="lesson-dialog-panel" class="w-full lg:w-full flex flex-col relative h-full rounded-xl overflow-hidden border transition-all duration-500" style="background: rgba(26,27,38,0.6); border-color: rgba(122,162,247,0.15);">
                     <div id="lesson-narrator-header" class="flex justify-between items-center p-3 border-b flex-shrink-0" style="border-color: rgba(65,72,104,0.3); background: rgba(0,0,0,0.15);">
                          <div class="flex items-center gap-3">
                              <div id="lesson-narrator-icon" class="w-9 h-9 rounded-lg flex items-center justify-center" style="background: rgba(122,162,247,0.12); border: 1px solid rgba(122,162,247,0.3); color: var(--accent);">
                                  <i data-lucide="book-open" class="w-4 h-4"></i>
                              </div>
                              <div>
                                  <h3 id="lesson-narrator-title" class="font-bold text-sm" style="color: var(--accent);">Teoria y Conceptos</h3>
                                  <p id="lesson-narrator-subtitle" class="text-xs" style="color: var(--foreground); opacity: 0.5;">Lectura</p>
                              </div>
                          </div>
                     </div>
                     <div id="lesson-content" class="flex-grow overflow-y-auto p-5 prose prose-invert max-w-none prose-p:text-[1rem] prose-p:leading-relaxed prose-headings:text-accent prose-strong:text-white prose-strong:font-bold" style="scrollbar-width: thin; scrollbar-color: var(--border) transparent;"></div>
                </div>
                <div id="lesson-code-panel" class="w-full lg:w-1/2 h-full rounded-xl overflow-hidden hidden flex-col transition-all duration-500" style="border: 1px solid rgba(65,72,104,0.4); box-shadow: 0 8px 32px rgba(0,0,0,0.3);">
                     <div class="code-block-header px-4 py-2 flex justify-between items-center" style="background: rgba(36,40,59,0.8); border-bottom: 1px solid rgba(65,72,104,0.3);">
                         <div class="flex items-center gap-2">
                             <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                             <span class="text-xs font-mono ml-2" style="color: var(--foreground); opacity: 0.5;" id="lesson-code-filename">ejemplo.sql</span>
                         </div>
                         <button id="code-tour-btn" class="tour-code-btn" title="Ver explicacion paso a paso">
                             <i data-lucide="book-marked"></i> Explicar codigo
                         </button>
                     </div>
                     <div id="lesson-monaco-container" class="flex-grow w-full relative" style="background: #1a1b26;"></div>
                </div>
            </div>
            <footer>
                <button id="prev-btn" class="btn-secondary flex items-center gap-2" disabled><i data-lucide="arrow-left" class="w-4 h-4"></i> Anterior</button>
                <span id="lesson-step">1 / 10</span>
                <button id="next-btn" class="btn-primary flex items-center gap-2">Siguiente <i data-lucide="arrow-right" class="w-4 h-4"></i></button>
            </footer>
        </div>
    </div>
    <div id="quiz-panel" class="panel" style="overflow-y: auto;">
        <div class="quiz-wrapper">
            <header class="flex justify-between items-center">
                <div><h2 id="quiz-level-title">Quiz - Nivel 1</h2><div id="quiz-type-indicator" class="quiz-type-indicator hidden"></div></div>
                <span id="quiz-progress">1/10</span>
            </header>
            <p id="quiz-question"></p>
            <div id="quiz-content">
                <div id="multiple-choice-container" class="grid grid-cols-1 md:grid-cols-2 gap-3"></div>
                <div id="code-completion-container" class="hidden"></div>
                <div id="drag-drop-container" class="hidden drag-drop-container"></div>
                <div id="matching-container" class="hidden matching-container"></div>
                <div id="ordering-container" class="hidden ordering-container"></div>
                <div id="error-finding-container" class="hidden error-finding-container"></div>
            </div>
            <div id="quiz-feedback" class="quiz-feedback hidden"></div>
            <div class="flex justify-between items-center mt-6">
                <button id="quiz-hint-btn" class="btn-secondary flex items-center gap-2"><i data-lucide="lightbulb" class="w-4 h-4"></i> Pista</button>
            </div>
        </div>
    </div>
    <div id="results-panel" class="panel">
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 2rem; width: 100%;">
            <i id="results-icon" class="w-20 h-20 mb-4"></i>
            <h2 id="results-title"></h2>
            <p id="results-score"></p>
            <p id="results-message"></p>
            <div class="flex gap-3 mt-4">
                <button id="retry-lesson-btn" class="btn-secondary flex items-center gap-2"><i data-lucide="rotate-ccw" class="w-4 h-4"></i> Repetir</button>
                <button id="next-level-btn" class="btn-primary hidden flex items-center gap-2">Siguiente Nivel <i data-lucide="arrow-right" class="w-4 h-4"></i></button>
                <a id="code-challenge-btn" href="#" class="btn-primary hidden" style="display: flex; align-items: center; gap: 0.5rem; text-decoration: none;"><i data-lucide="code"></i> Ir al Desafio</a>
            </div>
        </div>
    </div>
</div>
"""

print("HTML_HEAD generated")

# ============================================================
# NIVELES 1-20 DEL CURSO DE BASE DE DATOS
# ============================================================

COURSE_DATA_JS = r"""
const courseData = [
"""

# Helper para generar quiz
def gen_quiz(questions):
    parts = []
    for q in questions:
        opts = ', '.join([f'"{o}"' for o in q['options']])
        parts.append(f'{{ type: "multiple-choice", question: "{q["question"]}", options: [{opts}], answer: "{q["answer"]}" }}')
    return ',\n            '.join(parts)

# Helper para generar leccion
def gen_lesson(steps):
    parts = []
    for s in steps:
        codigo_part = ''
        if 'codigo' in s:
            codigo_escaped = s['codigo'].replace('\\', '\\\\').replace('\n', '\\n').replace('"', '\\"')
            codigo_part = f',\n                codigo: "{codigo_escaped}"'
        tour_part = ''
        if 'tourSteps' in s:
            tour_items = []
            for t in s['tourSteps']:
                text_escaped = t['text'].replace('\\', '\\\\').replace('"', '\\"')
                tour_items.append(f'{{ text: "{text_escaped}", line: {t["line"]} }}')
            tour_part = f',\n                tourSteps: [{", ".join(tour_items)}]'
        dialogo_escaped = s['dialogo'].replace('\\', '\\\\').replace('\n', '\\n').replace('"', '\\"')
        parts.append(f'{{\n                title: "{s["title"]}",\n                dialogo: "{dialogo_escaped}"{codigo_part}{tour_part}\n            }}')
    return ',\n            '.join(parts)

# Helper para generar diccionario
def gen_dictionary(terms):
    parts = []
    for t in terms:
        def_escaped = t['def'].replace('\\', '\\\\').replace('"', '\\"')
        parts.append(f'{{ term: "{t["term"]}", definition: "{def_escaped}" }}')
    return ', '.join(parts)

# ============================================================
# NIVEL 1: Introducción a las Bases de Datos
# ============================================================
level1 = r"""
    {
        title: "Introducción a las Bases de Datos",
        dictionary: [
            { term: "Base de Datos", definition: "Colección organizada de información estructurada almacenada electrónicamente." },
            { term: "Tabla", definition: "Estructura de filas y columnas que almacena datos de un tipo específico." },
            { term: "Registro (Fila)", definition: "Una entrada individual en una tabla. Representa un elemento completo." },
            { term: "Campo (Columna)", definition: "Un atributo específico de cada registro. Define qué tipo de dato almacena." },
            { term: "Clave Primaria (PK)", definition: "Campo único que identifica cada registro. No puede repetirse ni ser NULL." },
            { term: "SQL", definition: "Structured Query Language. Lenguaje estándar para consultar y manipular bases de datos relacionales." },
            { term: "DBMS", definition: "Database Management System. Software que gestiona bases de datos (MySQL, PostgreSQL, SQLite)." }
        ],
        lesson: [
            {
                title: "¿Qué es una Base de Datos?",
                dialogo: "<p>Antes de escribir una sola consulta, necesitas entender qué es realmente una base de datos.</p><p>Una <strong>base de datos</strong> es como un archivador digital ultra-organizado. En vez de papeles desordenados, la información se almacena en estructuras llamadas <strong>tablas</strong>, donde cada fila es un registro y cada columna es un campo específico.</p><p>Imagina una hoja de cálculo de Excel, pero con reglas estrictas de integridad, velocidad de búsqueda instantánea y capacidad de manejar millones de registros sin colapsar.</p>"
            },
            {
                title: "Tipos de Bases de Datos",
                dialogo: "<p>No todas las bases de datos son iguales. Existen varios tipos según cómo organizan los datos:</p><ul><li><strong>Relacionales (SQL):</strong> Datos en tablas con relaciones estrictas. Ej: MySQL, PostgreSQL, SQLite.</li><li><strong>NoSQL (Documentales):</strong> Datos en documentos flexibles tipo JSON. Ej: MongoDB.</li><li><strong>Clave-Valor:</strong> Almacenamiento ultra-rápido con pares clave-valor. Ej: Redis.</li><li><strong>Grafos:</strong> Optimizadas para relaciones complejas entre nodos. Ej: Neo4j.</li></ul><p>En este curso nos enfocaremos en las <strong>relacionales (SQL)</strong>, que son las más utilizadas en la industria.</p>"
            },
            {
                title: "Tu Primera Tabla",
                dialogo: "<p>Una tabla relacional tiene columnas con nombres y tipos de datos definidos. Cada fila que insertes debe respetar esa estructura.</p>",
                codigo: "CREATE TABLE estudiantes (\n    id INTEGER PRIMARY KEY,\n    nombre TEXT NOT NULL,\n    email TEXT UNIQUE,\n    edad INTEGER\n);",
                tourSteps: [
                    { text: "<code>CREATE TABLE</code> es la sentencia SQL para crear una nueva tabla. Le damos el nombre <code>estudiantes</code>.", line: 1 },
                    { text: "<code>id INTEGER PRIMARY KEY</code>: Columna numérica que identifica ÚNICAMENTE cada fila. No se repite jamás.", line: 2 },
                    { text: "<code>nombre TEXT NOT NULL</code>: Campo de texto obligatorio. <code>NOT NULL</code> obliga a que siempre tenga valor.", line: 3 },
                    { text: "<code>email TEXT UNIQUE</code>: Texto que no puede duplicarse. Dos estudiantes no pueden compartir email.", line: 4 },
                    { text: "<code>edad INTEGER</code>: Número entero opcional (puede ser NULL si no se proporciona).", line: 5 }
                ]
            },
            {
                title: "Claves Primarias",
                dialogo: "<p>La <strong>clave primaria (Primary Key)</strong> es el identificador único de cada registro. Es como el DNI o número de seguridad social: nunca se repite.</p><div class='mt-4 p-4 bg-yellow-900/30 border border-yellow-500 rounded-lg'><strong class='text-yellow-400'>💡 Regla de oro:</strong><p class='text-sm'>Toda tabla DEBE tener una clave primaria. Sin ella, no puedes identificar un registro específico de forma confiable.</p></div>",
                codigo: "-- AUTOINCREMENT genera el número automáticamente\nCREATE TABLE productos (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    nombre TEXT,\n    precio REAL\n);",
                tourSteps: [
                    { text: "<code>AUTOINCREMENT</code> hace que el id se genere solo: 1, 2, 3... Tú no necesitas escribirlo al insertar.", line: 2 },
                    { text: "<code>REAL</code> es el tipo de dato para números con decimales (como 19.99).", line: 4 }
                ]
            },
            {
                title: "Claves Foráneas",
                dialogo: "<p>Una <strong>clave foránea (Foreign Key)</strong> conecta dos tablas. Es un campo en una tabla que apunta a la clave primaria de otra tabla, creando una relación.</p>",
                codigo: "CREATE TABLE pedidos (\n    id INTEGER PRIMARY KEY,\n    estudiante_id INTEGER,\n    producto TEXT,\n    FOREIGN KEY (estudiante_id)\n        REFERENCES estudiantes(id)\n);",
                tourSteps: [
                    { text: "<code>estudiante_id</code> es la columna que almacenará el ID de un estudiante existente.", line: 3 },
                    { text: "<code>FOREIGN KEY</code> declara que esta columna es una clave foránea.", line: 4 },
                    { text: "<code>REFERENCES estudiantes(id)</code> vincula con la columna <code>id</code> de la tabla <code>estudiantes</code>. No puedes poner un ID que no exista.", line: 5 }
                ]
            },
            {
                title: "Tipos de Datos en SQL",
                dialogo: "<p>Cada columna tiene un tipo de dato específico. Los más comunes son:</p><ul><li><code>INTEGER</code> - Números enteros (1, 42, -7)</li><li><code>REAL</code> - Números decimales (3.14, 19.99)</li><li><code>TEXT</code> - Cadenas de texto ('Hola', 'María')</li><li><code>BLOB</code> - Datos binarios (imágenes, archivos)</li><li><code>BOOLEAN</code> - Verdadero/Falso (1/0)</li><li><code>DATE</code> - Fechas ('2025-01-15')</li></ul>"
            },
            {
                title: "NULL vs NOT NULL",
                dialogo: "<p><code>NULL</code> significa 'sin valor' o 'desconocido'. No es lo mismo que cero o texto vacío.</p><div class='mt-4 p-4 bg-red-900/30 border border-red-500 rounded-lg'><strong class='text-red-400'>🚧 Error Común:</strong><p class='text-sm'>NULL no es igual a nada, ni siquiera a otro NULL. <code>NULL = NULL</code> devuelve falso. Para verificar NULL usa <code>IS NULL</code> o <code>IS NOT NULL</code>.</p></div>",
                codigo: "CREATE TABLE usuarios (\n    id INTEGER PRIMARY KEY,\n    nombre TEXT NOT NULL,\n    email TEXT,\n    telefono TEXT DEFAULT 'Sin registrar'\n);",
                tourSteps: [
                    { text: "<code>NOT NULL</code> obliga a que este campo tenga valor al insertar. Sin él, la operación falla.", line: 3 },
                    { text: "Sin <code>NOT NULL</code>, este campo acepta NULL si no se proporciona valor.", line: 4 },
                    { text: "<code>DEFAULT</code> establece un valor automático si no se proporciona ninguno al insertar.", line: 5 }
                ]
            },
            {
                title: "Sistemas de Gestión (DBMS)",
                dialogo: "<p>Un <strong>DBMS</strong> (Database Management System) es el software que crea, gestiona y consulta bases de datos. Los más populares:</p><ul><li><strong>SQLite:</strong> Ligero, sin servidor, ideal para aprendizaje. Usa un archivo .db.</li><li><strong>MySQL:</strong> El más usado en la web. Open source, rápido.</li><li><strong>PostgreSQL:</strong> El más avanzado. Soporta tipos complejos, JSON, y más.</li><li><strong>SQL Server:</strong> De Microsoft, usado en empresas grandes.</li><li><strong>Oracle:</strong> Potente, para aplicaciones empresariales críticas.</li></ul><p>En este curso usaremos sintaxis compatible con <strong>SQLite</strong> por ser el más accesible para aprender.</p>"
            },
            {
                title: "Relaciones entre Tablas",
                dialogo: "<p>El poder real de las bases de datos relacionales está en conectar tablas:</p><ul><li><strong>Uno a Muchos:</strong> Un estudiante tiene muchos pedidos. Un pedido pertenece a un estudiante.</li><li><strong>Muchos a Muchos:</strong> Un estudiante cursa muchas materias. Una materia tiene muchos estudiantes. Necesita una tabla intermedia.</li><li><strong>Uno a Uno:</strong> Un usuario tiene un perfil. Raro pero existe.</li></ul>"
            },
            {
                title: "¡Listo para el Quiz!",
                dialogo: "<p>Has aprendido los conceptos fundamentales: qué es una base de datos, tablas, registros, claves primarias y foráneas, tipos de datos y relaciones.</p><p>Ahora demuestra tu conocimiento en el quiz evaluativo. ¡Necesitas 70% para aprobar!</p>"
            }
        ],
        quiz: [
            { type: "multiple-choice", question: "¿Qué es una base de datos relacional?", options: ["Una base de datos sin estructura", "Una colección de datos organizados en tablas relacionadas", "Un archivo de texto plano", "Una hoja de cálculo de Excel"], answer: "Una colección de datos organizados en tablas relacionadas" },
            { type: "multiple-choice", question: "¿Qué representa una fila en una tabla?", options: ["Un campo", "Un registro individual", "Una columna", "Una relación"], answer: "Un registro individual" },
            { type: "multiple-choice", question: "¿Qué es una clave primaria?", options: ["Un campo que puede repetirse", "Un identificador único de cada registro", "Una contraseña de la base de datos", "El nombre de la tabla"], answer: "Un identificador único de cada registro" },
            { type: "multiple-choice", question: "¿Qué tipo de dato almacena números con decimales?", options: ["INTEGER", "TEXT", "REAL", "BOOLEAN"], answer: "REAL" },
            { type: "multiple-choice", question: "¿Qué significa NOT NULL?", options: ["El campo puede estar vacío", "El campo debe tener un valor obligatorio", "El campo es numérico", "El campo es una clave"], answer: "El campo debe tener un valor obligatorio" },
            { type: "multiple-choice", question: "¿Qué hace AUTOINCREMENT?", options: ["Borra registros automáticamente", "Genera números secuenciales automáticos para la PK", "Duplica las filas", "Crea índices"], answer: "Genera números secuenciales automáticos para la PK" },
            { type: "multiple-choice", question: "¿Qué es una clave foránea?", options: ["Una clave de seguridad", "Un campo que referencia la PK de otra tabla", "Un tipo de dato especial", "Una contraseña"], answer: "Un campo que referencia la PK de otra tabla" },
            { type: "multiple-choice", question: "¿Qué significa SQL?", options: ["Simple Query Language", "Structured Query Language", "Standard Query Library", "System Query Logic"], answer: "Structured Query Language" },
            { type: "multiple-choice", question: "¿Cuál DBMS es más ligero y no requiere servidor?", options: ["MySQL", "PostgreSQL", "SQLite", "Oracle"], answer: "SQLite" },
            { type: "multiple-choice", question: "¿Para verificar si un campo es NULL, qué operador usas?", options: ["= NULL", "== NULL", "IS NULL", "EQUALS NULL"], answer: "IS NULL" }
        ]
    },
"""

print("Level 1 defined")

# ============================================================
# NIVEL 2: SQL Básico - SELECT
# ============================================================
level2 = r"""
    {
        title: "SQL Básico - SELECT",
        dictionary: [
            { term: "SELECT", definition: "Sentencia SQL para consultar y recuperar datos de una tabla." },
            { term: "FROM", definition: "Especifica de qué tabla se obtienen los datos." },
            { term: "WHERE", definition: "Filtra resultados según condiciones específicas." },
            { term: "ORDER BY", definition: "Ordena los resultados ascendente (ASC) o descendente (DESC)." },
            { term: "LIMIT", definition: "Restringe el número máximo de filas devueltas." },
            { term: "DISTINCT", definition: "Elimina valores duplicados del resultado." },
            { term: "AS", definition: "Crea un alias temporal para columnas o tablas." }
        ],
        lesson: [
            {
                title: "Tu Primera Consulta",
                dialogo: "<p>La sentencia <code>SELECT</code> es la herramienta fundamental de SQL. Sirve para consultar y recuperar datos de una tabla.</p><p>La sintaxis mínima es: <code>SELECT columnas FROM tabla;</code></p>",
                codigo: "SELECT nombre, email FROM estudiantes;",
                tourSteps: [
                    { text: "<code>SELECT</code> inicia la consulta. Le dices a SQL qué columnas quieres ver.", line: 1 },
                    { text: "<code>nombre, email</code> son las columnas específicas que solicitamos, separadas por coma.", line: 1 },
                    { text: "<code>FROM estudiantes</code> indica de qué tabla extraer esos datos.", line: 1 }
                ]
            },
            {
                title: "Seleccionar Todas las Columnas",
                dialogo: "<p>Si quieres ver TODAS las columnas de una tabla, usa el asterisco <code>*</code> como comodín.</p><div class='mt-4 p-4 bg-yellow-900/30 border border-yellow-500 rounded-lg'><strong class='text-yellow-400'>⚠️ Buena Práctica:</strong><p class='text-sm'>En producción, evita <code>SELECT *</code>. Especifica las columnas que necesitas para mejor rendimiento y claridad.</p></div>",
                codigo: "SELECT * FROM estudiantes;",
                tourSteps: [
                    { text: "<code>*</code> es el comodín que significa 'todas las columnas'. Devuelve cada campo de la tabla.", line: 1 }
                ]
            },
            {
                title: "Filtrando con WHERE",
                dialogo: "<p><code>WHERE</code> es el filtro de tu consulta. Solo devuelve filas que cumplan la condición.</p>",
                codigo: "SELECT nombre, edad FROM estudiantes\nWHERE edad >= 18;",
                tourSteps: [
                    { text: "Pedimos nombre y edad de los estudiantes.", line: 1 },
                    { text: "<code>WHERE edad >= 18</code> filtra: solo estudiantes de 18 años o más pasan el filtro.", line: 2 }
                ]
            },
            {
                title: "Operadores de Comparación",
                dialogo: "<p>Los operadores para condiciones WHERE son:</p><ul><li><code>=</code> Igual a</li><li><code>!=</code> Diferente de</li><li><code>&lt;</code> Menor que</li><li><code>&gt;</code> Mayor que</li><li><code>&lt;=</code> Menor o igual</li><li><code>&gt;=</code> Mayor o igual</li><li><code>LIKE</code> Coincidencia de patrón ('%Ana%' contiene 'Ana')</li><li><code>IN</code> Dentro de una lista (edad IN (18, 19, 20))</li><li><code>BETWEEN</code> En un rango (edad BETWEEN 18 AND 25)</li></ul>"
            },
            {
                title: "Combinando Condiciones: AND, OR, NOT",
                dialogo: "<p>Puedes combinar múltiples condiciones con operadores lógicos:</p>",
                codigo: "SELECT * FROM productos\nWHERE precio > 100\n  AND categoria = 'electronica'\n  AND stock > 0;",
                tourSteps: [
                    { text: "<code>AND</code> requiere que TODAS las condiciones sean verdaderas. Si una falla, la fila se excluye.", line: 2 },
                    { text: "Aquí filtramos por precio, categoría Y stock simultáneamente.", line: 4 }
                ]
            },
            {
                title: "Ordenando Resultados",
                dialogo: "<p><code>ORDER BY</code> ordena los resultados. Por defecto es ascendente (ASC). Usa <code>DESC</code> para descendente.</p>",
                codigo: "SELECT nombre, precio FROM productos\nORDER BY precio DESC;",
                tourSteps: [
                    { text: "<code>ORDER BY precio DESC</code> ordena de mayor a menor precio. El producto más caro aparece primero.", line: 2 }
                ]
            },
            {
                title: "Limitando Resultados",
                dialogo: "<p><code>LIMIT</code> restringe cuántas filas devolver. Útil para paginación o ver solo los primeros resultados.</p>",
                codigo: "SELECT * FROM estudiantes\nORDER BY nombre ASC\nLIMIT 5;",
                tourSteps: [
                    { text: "Primero ordena por nombre alfabéticamente (ASC).", line: 2 },
                    { text: "<code>LIMIT 5</code> toma solo los primeros 5 resultados del conjunto ordenado.", line: 3 }
                ]
            },
            {
                title: "Funciones de Agregación",
                dialogo: "<p>Las funciones de agregación calculan valores sobre un conjunto de filas:</p><ul><li><code>COUNT(*)</code> - Cuenta filas</li><li><code>SUM(columna)</code> - Suma valores</li><li><code>AVG(columna)</code> - Promedio</li><li><code>MAX(columna)</code> - Valor máximo</li><li><code>MIN(columna)</code> - Valor mínimo</li></ul>",
                codigo: "SELECT COUNT(*) AS total,\n       AVG(edad) AS promedio,\n       MAX(edad) AS mayor,\n       MIN(edad) AS menor\nFROM estudiantes;",
                tourSteps: [
                    { text: "<code>COUNT(*)</code> cuenta TODAS las filas de la tabla.", line: 1 },
                    { text: "<code>AS total</code> crea un alias: la columna resultante se llamará 'total'.", line: 1 },
                    { text: "<code>AVG(edad)</code> calcula el promedio de todas las edades.", line: 2 },
                    { text: "<code>MAX/MIN</code> encuentran los valores extremos de la columna edad.", line: 3 }
                ]
            },
            {
                title: "DISTINCT: Eliminar Duplicados",
                dialogo: "<p><code>DISTINCT</code> elimina valores repetidos del resultado. Solo muestra valores únicos.</p>",
                codigo: "SELECT DISTINCT categoria FROM productos;",
                tourSteps: [
                    { text: "Si hay 100 productos pero solo 5 categorías distintas, esta consulta devuelve exactamente 5 filas.", line: 1 }
                ]
            },
            {
                title: "¡Listo para el Quiz!",
                dialogo: "<p>SELECT es el corazón de SQL. Dominar consultas básicas es fundamental para todo lo que viene.</p><p>¡Demuestra que sabes consultar datos!</p>"
            }
        ],
        quiz: [
            { type: "multiple-choice", question: "¿Qué hace SELECT * FROM tabla?", options: ["Borra todos los datos", "Selecciona todas las columnas de la tabla", "Crea una tabla nueva", "Actualiza los datos"], answer: "Selecciona todas las columnas de la tabla" },
            { type: "multiple-choice", question: "¿Qué cláusula filtra resultados?", options: ["FROM", "WHERE", "SELECT", "ORDER BY"], answer: "WHERE" },
            { type: "multiple-choice", question: "¿Qué operador lógico significa 'Y' (ambas condiciones deben cumplirse)?", options: ["OR", "AND", "NOT", "LIKE"], answer: "AND" },
            { type: "multiple-choice", question: "¿Qué cláusula ordena los resultados?", options: ["SORT BY", "ORDER BY", "GROUP BY", "ARRANGE BY"], answer: "ORDER BY" },
            { type: "multiple-choice", question: "¿Qué función cuenta el número de filas?", options: ["SUM()", "COUNT()", "TOTAL()", "SIZE()"], answer: "COUNT()" },
            { type: "multiple-choice", question: "¿Qué palabra elimina valores duplicados?", options: ["UNIQUE", "DISTINCT", "DIFFERENT", "REMOVE"], answer: "DISTINCT" },
            { type: "multiple-choice", question: "¿Qué cláusula limita el número de resultados?", options: ["TOP", "LIMIT", "MAX", "RESTRICT"], answer: "LIMIT" },
            { type: "multiple-choice", question: "¿Qué función calcula el promedio?", options: ["MEAN()", "AVERAGE()", "AVG()", "PROM()"], answer: "AVG()" },
            { type: "multiple-choice", question: "¿Qué operador busca patrones de texto?", options: ["=", "LIKE", "MATCH", "SEARCH"], answer: "LIKE" },
            { type: "multiple-choice", question: "¿Qué significa SELECT nombre AS n FROM t?", options: ["Renombra la columna permanentemente", "Muestra 'nombre' con el alias temporal 'n'", "Crea una nueva columna", "Elimina la columna nombre"], answer: "Muestra 'nombre' con el alias temporal 'n'" }
        ]
    },
"""

print("Level 2 defined")
# NIVELES 1-20 DEL CURSO DE BASE DE DATOS
# ============================================================

COURSE_DATA_JS = r"""
const courseData = [
"""

# Helper para generar quiz
def gen_quiz(questions):
    parts = []
    for q in questions:
        opts = ', '.join([f'"{o}"' for o in q['options']])
        parts.append(f'{{ type: "multiple-choice", question: "{q["question"]}", options: [{opts}], answer: "{q["answer"]}" }}')
    return ',\n            '.join(parts)

# Helper para generar leccion
def gen_lesson(steps):
    parts = []
    for s in steps:
        codigo_part = ''
        if 'codigo' in s:
            codigo_escaped = s['codigo'].replace('\\', '\\\\').replace('\n', '\\n').replace('"', '\\"')
            codigo_part = f',\n                codigo: "{codigo_escaped}"'
        tour_part = ''
        if 'tourSteps' in s:
            tour_items = []
            for t in s['tourSteps']:
                text_escaped = t['text'].replace('\\', '\\\\').replace('"', '\\"')
                tour_items.append(f'{{ text: "{text_escaped}", line: {t["line"]} }}')
            tour_part = f',\n                tourSteps: [{", ".join(tour_items)}]'
        dialogo_escaped = s['dialogo'].replace('\\', '\\\\').replace('\n', '\\n').replace('"', '\\"')
        parts.append(f'{{\n                title: "{s["title"]}",\n                dialogo: "{dialogo_escaped}"{codigo_part}{tour_part}\n            }}')
    return ',\n            '.join(parts)

# Helper para generar diccionario
def gen_dictionary(terms):
    parts = []
    for t in terms:
        def_escaped = t['def'].replace('\\', '\\\\').replace('"', '\\"')
        parts.append(f'{{ term: "{t["term"]}", definition: "{def_escaped}" }}')
    return ', '.join(parts)

# ============================================================
# NIVEL 1: Introducción a las Bases de Datos
# ============================================================
level1 = r"""
    {
        title: "Introducción a las Bases de Datos",
        dictionary: [
            { term: "Base de Datos", definition: "Colección organizada de información estructurada almacenada electrónicamente." },
            { term: "Tabla", definition: "Estructura de filas y columnas que almacena datos de un tipo específico." },
            { term: "Registro (Fila)", definition: "Una entrada individual en una tabla. Representa un elemento completo." },
            { term: "Campo (Columna)", definition: "Un atributo específico de cada registro. Define qué tipo de dato almacena." },
            { term: "Clave Primaria (PK)", definition: "Campo único que identifica cada registro. No puede repetirse ni ser NULL." },
            { term: "SQL", definition: "Structured Query Language. Lenguaje estándar para consultar y manipular bases de datos relacionales." },
            { term: "DBMS", definition: "Database Management System. Software que gestiona bases de datos (MySQL, PostgreSQL, SQLite)." }
        ],
        lesson: [
            {
                title: "¿Qué es una Base de Datos?",
                dialogo: "<p>Antes de escribir una sola consulta, necesitas entender qué es realmente una base de datos.</p><p>Una <strong>base de datos</strong> es como un archivador digital ultra-organizado. En vez de papeles desordenados, la información se almacena en estructuras llamadas <strong>tablas</strong>, donde cada fila es un registro y cada columna es un campo específico.</p><p>Imagina una hoja de cálculo de Excel, pero con reglas estrictas de integridad, velocidad de búsqueda instantánea y capacidad de manejar millones de registros sin colapsar.</p>"
            },
            {
                title: "Tipos de Bases de Datos",
                dialogo: "<p>No todas las bases de datos son iguales. Existen varios tipos según cómo organizan los datos:</p><ul><li><strong>Relacionales (SQL):</strong> Datos en tablas con relaciones estrictas. Ej: MySQL, PostgreSQL, SQLite.</li><li><strong>NoSQL (Documentales):</strong> Datos en documentos flexibles tipo JSON. Ej: MongoDB.</li><li><strong>Clave-Valor:</strong> Almacenamiento ultra-rápido con pares clave-valor. Ej: Redis.</li><li><strong>Grafos:</strong> Optimizadas para relaciones complejas entre nodos. Ej: Neo4j.</li></ul><p>En este curso nos enfocaremos en las <strong>relacionales (SQL)</strong>, que son las más utilizadas en la industria.</p>"
            },
            {
                title: "Tu Primera Tabla",
                dialogo: "<p>Una tabla relacional tiene columnas con nombres y tipos de datos definidos. Cada fila que insertes debe respetar esa estructura.</p>",
                codigo: "CREATE TABLE estudiantes (\n    id INTEGER PRIMARY KEY,\n    nombre TEXT NOT NULL,\n    email TEXT UNIQUE,\n    edad INTEGER\n);",
                tourSteps: [
                    { text: "<code>CREATE TABLE</code> es la sentencia SQL para crear una nueva tabla. Le damos el nombre <code>estudiantes</code>.", line: 1 },
                    { text: "<code>id INTEGER PRIMARY KEY</code>: Columna numérica que identifica ÚNICAMENTE cada fila. No se repite jamás.", line: 2 },
                    { text: "<code>nombre TEXT NOT NULL</code>: Campo de texto obligatorio. <code>NOT NULL</code> obliga a que siempre tenga valor.", line: 3 },
                    { text: "<code>email TEXT UNIQUE</code>: Texto que no puede duplicarse. Dos estudiantes no pueden compartir email.", line: 4 },
                    { text: "<code>edad INTEGER</code>: Número entero opcional (puede ser NULL si no se proporciona).", line: 5 }
                ]
            },
            {
                title: "Claves Primarias",
                dialogo: "<p>La <strong>clave primaria (Primary Key)</strong> es el identificador único de cada registro. Es como el DNI o número de seguridad social: nunca se repite.</p><div class='mt-4 p-4 bg-yellow-900/30 border border-yellow-500 rounded-lg'><strong class='text-yellow-400'>💡 Regla de oro:</strong><p class='text-sm'>Toda tabla DEBE tener una clave primaria. Sin ella, no puedes identificar un registro específico de forma confiable.</p></div>",
                codigo: "-- AUTOINCREMENT genera el número automáticamente\nCREATE TABLE productos (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    nombre TEXT,\n    precio REAL\n);",
                tourSteps: [
                    { text: "<code>AUTOINCREMENT</code> hace que el id se genere solo: 1, 2, 3... Tú no necesitas escribirlo al insertar.", line: 2 },
                    { text: "<code>REAL</code> es el tipo de dato para números con decimales (como 19.99).", line: 4 }
                ]
            },
            {
                title: "Claves Foráneas",
                dialogo: "<p>Una <strong>clave foránea (Foreign Key)</strong> conecta dos tablas. Es un campo en una tabla que apunta a la clave primaria de otra tabla, creando una relación.</p>",
                codigo: "CREATE TABLE pedidos (\n    id INTEGER PRIMARY KEY,\n    estudiante_id INTEGER,\n    producto TEXT,\n    FOREIGN KEY (estudiante_id)\n        REFERENCES estudiantes(id)\n);",
                tourSteps: [
                    { text: "<code>estudiante_id</code> es la columna que almacenará el ID de un estudiante existente.", line: 3 },
                    { text: "<code>FOREIGN KEY</code> declara que esta columna es una clave foránea.", line: 4 },
                    { text: "<code>REFERENCES estudiantes(id)</code> vincula con la columna <code>id</code> de la tabla <code>estudiantes</code>. No puedes poner un ID que no exista.", line: 5 }
                ]
            },
            {
                title: "Tipos de Datos en SQL",
                dialogo: "<p>Cada columna tiene un tipo de dato específico. Los más comunes son:</p><ul><li><code>INTEGER</code> - Números enteros (1, 42, -7)</li><li><code>REAL</code> - Números decimales (3.14, 19.99)</li><li><code>TEXT</code> - Cadenas de texto ('Hola', 'María')</li><li><code>BLOB</code> - Datos binarios (imágenes, archivos)</li><li><code>BOOLEAN</code> - Verdadero/Falso (1/0)</li><li><code>DATE</code> - Fechas ('2025-01-15')</li></ul>"
            },
            {
                title: "NULL vs NOT NULL",
                dialogo: "<p><code>NULL</code> significa 'sin valor' o 'desconocido'. No es lo mismo que cero o texto vacío.</p><div class='mt-4 p-4 bg-red-900/30 border border-red-500 rounded-lg'><strong class='text-red-400'>🚧 Error Común:</strong><p class='text-sm'>NULL no es igual a nada, ni siquiera a otro NULL. <code>NULL = NULL</code> devuelve falso. Para verificar NULL usa <code>IS NULL</code> o <code>IS NOT NULL</code>.</p></div>",
                codigo: "CREATE TABLE usuarios (\n    id INTEGER PRIMARY KEY,\n    nombre TEXT NOT NULL,\n    email TEXT,\n    telefono TEXT DEFAULT 'Sin registrar'\n);",
                tourSteps: [
                    { text: "<code>NOT NULL</code> obliga a que este campo tenga valor al insertar. Sin él, la operación falla.", line: 3 },
                    { text: "Sin <code>NOT NULL</code>, este campo acepta NULL si no se proporciona valor.", line: 4 },
                    { text: "<code>DEFAULT</code> establece un valor automático si no se proporciona ninguno al insertar.", line: 5 }
                ]
            },
            {
                title: "Sistemas de Gestión (DBMS)",
                dialogo: "<p>Un <strong>DBMS</strong> (Database Management System) es el software que crea, gestiona y consulta bases de datos. Los más populares:</p><ul><li><strong>SQLite:</strong> Ligero, sin servidor, ideal para aprendizaje. Usa un archivo .db.</li><li><strong>MySQL:</strong> El más usado en la web. Open source, rápido.</li><li><strong>PostgreSQL:</strong> El más avanzado. Soporta tipos complejos, JSON, y más.</li><li><strong>SQL Server:</strong> De Microsoft, usado en empresas grandes.</li><li><strong>Oracle:</strong> Potente, para aplicaciones empresariales críticas.</li></ul><p>En este curso usaremos sintaxis compatible con <strong>SQLite</strong> por ser el más accesible para aprender.</p>"
            },
            {
                title: "Relaciones entre Tablas",
                dialogo: "<p>El poder real de las bases de datos relacionales está en conectar tablas:</p><ul><li><strong>Uno a Muchos:</strong> Un estudiante tiene muchos pedidos. Un pedido pertenece a un estudiante.</li><li><strong>Muchos a Muchos:</strong> Un estudiante cursa muchas materias. Una materia tiene muchos estudiantes. Necesita una tabla intermedia.</li><li><strong>Uno a Uno:</strong> Un usuario tiene un perfil. Raro pero existe.</li></ul>"
            },
            {
                title: "¡Listo para el Quiz!",
                dialogo: "<p>Has aprendido los conceptos fundamentales: qué es una base de datos, tablas, registros, claves primarias y foráneas, tipos de datos y relaciones.</p><p>Ahora demuestra tu conocimiento en el quiz evaluativo. ¡Necesitas 70% para aprobar!</p>"
            }
        ],
        quiz: [
            { type: "multiple-choice", question: "¿Qué es una base de datos relacional?", options: ["Una base de datos sin estructura", "Una colección de datos organizados en tablas relacionadas", "Un archivo de texto plano", "Una hoja de cálculo de Excel"], answer: "Una colección de datos organizados en tablas relacionadas" },
            { type: "multiple-choice", question: "¿Qué representa una fila en una tabla?", options: ["Un campo", "Un registro individual", "Una columna", "Una relación"], answer: "Un registro individual" },
            { type: "multiple-choice", question: "¿Qué es una clave primaria?", options: ["Un campo que puede repetirse", "Un identificador único de cada registro", "Una contraseña de la base de datos", "El nombre de la tabla"], answer: "Un identificador único de cada registro" },
            { type: "multiple-choice", question: "¿Qué tipo de dato almacena números con decimales?", options: ["INTEGER", "TEXT", "REAL", "BOOLEAN"], answer: "REAL" },
            { type: "multiple-choice", question: "¿Qué significa NOT NULL?", options: ["El campo puede estar vacío", "El campo debe tener un valor obligatorio", "El campo es numérico", "El campo es una clave"], answer: "El campo debe tener un valor obligatorio" },
            { type: "multiple-choice", question: "¿Qué hace AUTOINCREMENT?", options: ["Borra registros automáticamente", "Genera números secuenciales automáticos para la PK", "Duplica las filas", "Crea índices"], answer: "Genera números secuenciales automáticos para la PK" },
            { type: "multiple-choice", question: "¿Qué es una clave foránea?", options: ["Una clave de seguridad", "Un campo que referencia la PK de otra tabla", "Un tipo de dato especial", "Una contraseña"], answer: "Un campo que referencia la PK de otra tabla" },
            { type: "multiple-choice", question: "¿Qué significa SQL?", options: ["Simple Query Language", "Structured Query Language", "Standard Query Library", "System Query Logic"], answer: "Structured Query Language" },
            { type: "multiple-choice", question: "¿Cuál DBMS es más ligero y no requiere servidor?", options: ["MySQL", "PostgreSQL", "SQLite", "Oracle"], answer: "SQLite" },
            { type: "multiple-choice", question: "¿Para verificar si un campo es NULL, qué operador usas?", options: ["= NULL", "== NULL", "IS NULL", "EQUALS NULL"], answer: "IS NULL" }
        ]
    },
"""

print("Level 1 defined")
