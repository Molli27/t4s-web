#!/usr/bin/env python3
import subprocess, textwrap, datetime, json

def sh(cmd): return subprocess.check_output(cmd, shell=True, text=True).strip()

commit = sh("git rev-parse --short HEAD")
branch = sh("git rev-parse --abbrev-ref HEAD")
log = sh("git log -1 --pretty=format:%s%n%b")
diffstat = sh("git diff --stat HEAD~1..HEAD || true")

summary = f"""# ChatGPT Context
Stand: {datetime.datetime.utcnow().isoformat()}Z
Branch: {branch}
Commit: {commit}

## Letzte Commit-Nachricht
{log}

## Diff-Stat (HEAD~1..HEAD)
{diffstat}

## Nächste Schritte (aus TODO_CHATGPT.md)
"""
try:
    todo = open("TODO_CHATGPT.md","r",encoding="utf-8").read()
except FileNotFoundError:
    todo = "(keine Einträge)"
summary += "\n" + todo

open("CHATGPT_CONTEXT.md","w",encoding="utf-8").write(summary)
print("Wrote CHATGPT_CONTEXT.md")
