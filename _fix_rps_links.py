
import re

text = Path('/Users/kayla/portfolio/data/projects.ts').read_text()

# Replace ALL links: [...] for ROS2 entries (those that point to RPS_Hand)
# These are the only ones now. Using a broad pattern to catch any remaining links blocks
# that come right before the rps1-hand slug.

old = '''  links: [
    {
      label: "GitHub Repository",
      href: "https://github.com/kayladipaolo/RPS_Hand",
    },
  ],
 }

 {
  slug: "rps1-hand",'''

new = '''  links: []
 }

 {
  slug: "rps1-hand",'''

count = text.count(old)
print(f"Found {count} RPS_Hand links block(s)")

if count:
    text = text.replace(old, new, count)

Path('/Users/kayla/portfolio/data/projects.ts').write_text(text)
print("Written")

# Verify
remaining = Path('/Users/kayla/portfolio/data/projects.ts').read_text().count('RPS_Hand')
print(f"RPS_Hand remaining: {remaining}")
