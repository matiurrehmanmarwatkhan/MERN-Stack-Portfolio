import os
import re
from pathlib import Path
root = Path('D:/Mern Stack Portfolio')
patterns = [root / 'server.ts', root / 'vite.config.ts', root / 'src' / 'main.tsx', root / 'src' / 'App.tsx', root / 'src' / 'data.ts']
for comp in (root / 'src' / 'components').glob('*.tsx'):
    patterns.append(comp)
for src in (root / 'src').glob('*.ts'):
    if src.name != 'data.ts':
        patterns.append(src)

def strip_type_defs(text):
    out = []
    skip = False
    depth = 0
    for line in text.splitlines(True):
        if skip:
            depth += line.count('{') - line.count('}')
            if depth <= 0:
                skip = False
            continue
        if re.match(r'\s*(export\s+)?type\s+[A-Za-z0-9_]+\s*=.*;', line):
            continue
        if re.match(r'\s*(export\s+)?interface\s+[A-Za-z0-9_]+\s*(<[^>]+>)?\s*\{', line):
            skip = True
            depth = line.count('{') - line.count('}')
            if depth <= 0:
                skip = False
            continue
        out.append(line)
    return ''.join(out)

re_ts_jsx = re.compile(r"(import .* from ['\"])(.*)\.(ts|tsx)(['\"])"
)
re_hastypes = re.compile(r'(:\s*React\.(FC|Node)|<[^>]+>)')
re_event_types = {
    r'\(e:\s*React\.MouseEvent\)': '(e)',
    r'\(e:\s*React\.ChangeEvent<[^>]+>\)': '(e)',
    r'\(e:\s*React\.FormEvent\)': '(e)',
    r'\(e:\s*MouseEvent\)': '(e)',
    r'\(e:\s*React\.KeyboardEvent<[^>]+>\)': '(e)',
}
re_as_type = re.compile(r'\s+as\s+[A-Za-z0-9_<>\| \[\]"\']+')
re_generic = re.compile(r'(React\.)?(FC|ReactNode|React\.Node|React\.ReactNode)')

for p in patterns:
    if not p.exists():
        continue
    text = p.read_text(encoding='utf-8')
    orig = text
    text = re.sub(r'import\s+\{\s*Project,\s*SkillCategory,\s*TimelineEntry,\s*Stat\s*\}\s+from\s+["\']\.\/types["\'];?\s*\n', '', text)
    text = re.sub(r'import\s+\{\s*ChatMessage\s*\}\s+from\s+["\']\.\.\/types["\'];?\s*\n', '', text)
    text = re.sub(re_ts_jsx, lambda m: f"{m.group(1)}{m.group(2)}.{ 'jsx' if m.group(3) == 'tsx' else 'js'}{m.group(4)}", text)
    text = re.sub(r':\s*React\.FC(?:<[^>]*>)?', '', text)
    text = re.sub(r':\s*React\.FC', '', text)
    text = re.sub(r':\s*React\.Node', '', text)
    text = re.sub(r'<[A-Za-z0-9_\s,|]+>', '', text)
    for pat, repl in re_event_types.items():
        text = re.sub(pat, repl, text)
    text = re.sub(re_as_type, '', text)
    text = re.sub(re_generic, '', text)
    text = strip_type_defs(text)
    text = text.replace('document.getElementById(\'root\')!', 'document.getElementById(\'root\')')
    text = text.replace('document.getElementById(\"root\")!', 'document.getElementById(\"root\")')
    if text != orig:
        p.write_text(text, encoding='utf-8')
        print(f'updated {p}')

rename_map = {
    root / 'server.ts': root / 'server.js',
    root / 'vite.config.ts': root / 'vite.config.js',
    root / 'src' / 'main.tsx': root / 'src' / 'main.jsx',
    root / 'src' / 'App.tsx': root / 'src' / 'App.jsx',
    root / 'src' / 'data.ts': root / 'src' / 'data.js',
}
for comp in (root / 'src' / 'components').glob('*.tsx'):
    rename_map[comp] = comp.with_suffix('.jsx')
for src in (root / 'src').glob('*.ts'):
    if src.name != 'data.ts':
        rename_map[src] = src.with_suffix('.js')

for old, new in rename_map.items():
    if old.exists():
        old.rename(new)
        print(f'renamed {old} -> {new}')

# remove types file if no longer needed
if (root / 'src' / 'types.ts').exists():
    (root / 'src' / 'types.ts').unlink()
    print('removed src/types.ts')

pkg = root / 'package.json'
import json
pj = json.loads(pkg.read_text(encoding='utf-8'))
pj['scripts']['dev'] = 'node server.js'
pj['scripts']['build'] = 'vite build && esbuild server.js --bundle --platform=node --format=cjs --packages=external --sourcemap --outfile=dist/server.cjs'
if 'lint' in pj['scripts']:
    pj['scripts']['lint'] = 'echo "No TypeScript lint configured"'
pkg.write_text(json.dumps(pj, indent=2) + '\n', encoding='utf-8')
print('updated package.json scripts')
