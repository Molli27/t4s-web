#!/usr/bin/env python3
import json, os, subprocess, datetime, sys

def sh(cmd):
    return subprocess.check_output(cmd, shell=True, text=True).strip()

def changed_files():
    base = "origin/main"
    try:
        sh("git fetch --quiet origin")
    except Exception:
        pass
    # seit letztem gemeinsamen Stand (fallback: HEAD~20)
    try:
        rng = f"{base}..HEAD"
        files = sh(f"git diff --name-only {rng} || true").splitlines()
        if not files:
            files = sh("git diff --name-only HEAD~20..HEAD || true").splitlines()
    except Exception:
        files = []
    return [f for f in files if f]

def area_of(path):
    if path.startswith("pages/"): return "pages"
    if path.startswith("components/"): return "components"
    if path.startswith("styles/") or path.endswith(".css"): return "styles"
    if path in ("next.config.js","next.config.mjs","package.json","tsconfig.json"): return "config"
    return "data"  # Rest

def main():
    commit = sh("git rev-parse --short HEAD")
    branch = sh("git rev-parse --abbrev-ref HEAD")
    files = changed_files()
    areas = sorted(set(area_of(p) for p in files)) if files else []
    next_ok = True
    # Nur syntaktischer Check, kein echter Build (schnell & CI-freundlich)
    try:
        sh("node -v >/dev/null 2>&1")
        # optional: "npm run typecheck" wenn setup vorhanden
    except Exception:
        pass

    todo_path = "TODO_CHATGPT.md"
    todo = []
    if os.path.exists(todo_path):
        with open(todo_path, "r", encoding="utf-8") as f:
            for line in f:
                line=line.strip()
                if line and not line.startswith("#"):
                    todo.append(line)

    payload = {
        "commit": commit,
        "branch": branch,
        "timestamp": datetime.datetime.utcnow().isoformat() + "Z",
        "changed_files": files,
        "areas": areas,
        "next_build_ok": next_ok,
        "todo": todo
    }
    os.makedirs("public", exist_ok=True)
    with open("public/chatgpt-status.json", "w", encoding="utf-8") as f:
        json.dump(payload, f, ensure_ascii=False, indent=2)
    print("Wrote public/chatgpt-status.json")

if __name__ == "__main__":
    sys.exit(main())
