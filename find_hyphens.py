import os
import re

dirs = [
    'app/',
    'src/components/homepage/',
    'src/components/cinematic-hero/',
    'src/components/school/'
]

for d in dirs:
    for root, _, files in os.walk(d):
        for file in files:
            if file.endswith('.tsx'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    lines = f.readlines()
                    for i, line in enumerate(lines):
                        # Find potential text with hyphens: word-word
                        # We want to exclude className, import paths, CSS variables, URLs, href, etc.
                        # Only look for word-word outside of tags if possible, or simple heuristics.
                        
                        # Strip out import statements
                        if line.strip().startswith('import '): continue
                        
                        matches = re.finditer(r'(?<![/-])\b([a-zA-Z]+-[a-zA-Z]+)\b(?![-/])', line)
                        for match in matches:
                            word = match.group(1)
                            # Exclude common camel/kebab cases used in code
                            if 'className' in line or 'style' in line or 'href' in line or 'src' in line or 'data-' in line:
                                if word in line:
                                    # Very basic heuristic: if it's inside quotes and next to =, might be an attribute
                                    pass
                            
                            # Just print it all and we can manually filter
                            print(f"{path}:{i+1}: {line.strip()}")
