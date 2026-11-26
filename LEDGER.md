# LEDGER — u-suroto-two-sentence-horror-acea9253 ("Two-Sentence Horror")

- Competition: u-suroto-two-sentence-horror-acea9253 — Two-Sentence Horror
- Prize: $2 (1st place only)
- Deadline: Fri 27 Nov 2026 15:00 WIB (08:00 UTC)
- Sponsor: u-suroto. Free entry, blind judging, Force_Last submission rule.
- Entry dir: ~/workspace/makefun/entries/u-suroto-two-sentence-horror-acea9253/
- Kit: ~/workspace/makefun/kits/u-suroto-two-sentence-horror-acea9253-kit/

## Gate (from RULES.txt / competition.yaml)

- `/output/entry.txt` must be UTF-8 text, 1–400 characters, not only whitespace.
- Exactly two sentences (per the task and judge brief).
- Judge: house judge (z-ai/glm-5.3-flash via OpenRouter, superbot, reasoning high),
  pairwise, no ties, margin 1–5. 3 fixed house texts in every heat; final heat is
  3 Swiss rounds + playoff among top 3; top 500 on the dev board go on.
- No emoji, no em-dash in the entry (brief does not ask for them).

## Judge brief criteria (in priority order)

1. Genuinely frightening two-sentence horror story.
2. Second sentence turns/reveals something that makes the first sentence worse on a second read.
3. Horror implied, not explained — reader fills in the worst.
4. Precise, concrete prose; every word earns its place.
5. Original — not a familiar horror twist or a known story retold.
Restraint matters more than shock; gore for its own sake does not count.

## Chosen entry

> I keep a spare key under the doormat and have never once used it. This morning the mat was folded back, the key was gone, and the deadbolt that only locks from the inside was thrown.

- Characters: 182 (183 bytes with trailing newline) — inside the 1–400 gate.
- Sentences: exactly 2. No emoji, no em-dash.
- Expected SHA-256 of the output file (entry text + trailing newline):
  `caa086c67f2ce5c0031123627cf7abf84acc4daa04449d3a4953ae8d61986050`
  (computed from the literal text; see Test results — actual runs blocked, see below.)

## Judge-brief fit

- (1) Frightening: an intruder used my own spare key and is still inside the house
  with me — a home-invasion dread that lands immediately, no setup needed.
- (2) Turn: sentence 1 is a mundane habit (spare key, never used). Sentence 2's
  final clause — the deadbolt that only locks from the inside was thrown — re-reads
  the missing key as an entry, not a loss: whoever took it came in and locked
  themselves in with me.
- (3) Implied: no intruder is shown, no violence described; the reader supplies
  who is inside and what happens next.
- (4) Precise: every clause is load-bearing — "never once used it" rules out
  misplacement; "folded back" shows deliberate hands; "deadbolt … only locks
  from the inside" is the whole twist in one concrete detail.
- (5) Original: spare-key / locked-door setup is everyday, but the deadbolt-only-
  from-inside turn is not a familiar retold twist (no mirror, doll, dead relative
  calling, baby monitor, or "it was me all along").

## Candidates considered (scored 1–5 on: frightening / turn / implied / precise / original)

1. **Deadbolt (CHOSEN)** — "I keep a spare key under the doormat and have never once used it. This morning the mat was folded back, the key was gone, and the deadbolt that only locks from the inside was thrown." — 4/5/5/5/4 = 23. Strongest on turn + implied + precise.
2. **Camera / flowers** — "I installed a camera to find out which neighbour keeps leaving flowers on my doorstep. The footage shows no neighbour at all, just me, asleep on my own doorstep at 3 a.m., arranging the flowers with hands I don't remember moving." — 4/5/4/4/4 = 21. Runner-up. Rejected: fear lands half a beat later than the deadbolt; "I did it in my sleep" needs the reader to infer possession/sleepwalking.
3. **Sleepwalker** — "My wife has sleepwalked since we married, and I learned to guide her gently back to bed. Last night she stood over me, eyes open, and whispered, 'Don't move. It only wears me when I'm asleep.'" — 4/4/4/4/4 = 20. Rejected: "it wears me" explains the monster a little too directly (criterion 3); who is standing over me is ambiguous in a confusing rather than dreadful way.
4. **Old woman** — "The old woman at the end of the street has waved at me every morning for ten years. Yesterday she didn't wave, she mouthed my name, and I have never told her my name." — 3/3/4/5/4 = 19. Rejected: creepy but low fear; the turn is small.
5. **Library book** — "The librarian said the book I requested had been missing for forty years. When I opened it, the due-date card was stamped with my name, and tomorrow's date." — 2/4/4/5/4 = 19. Rejected: uncanny, not frightening — fails criterion 1, the most important.
6. **Son's drawings** — "Every night for a month, my son has drawn the same picture: our house, our family, and a tall man standing in the yard. This morning I found a new drawing on the fridge, the tall man standing inside the house, holding my son's hand, and my son had drawn himself in the yard." — 3/4/4/3/3 = 17. Rejected: "kids draw the monster" is a well-worn setup; the swap logic takes a beat to parse; second sentence is long.
7. **Dog / porch light** — "For three weeks, the same stray dog has followed me home from the bus stop and waited by my gate until I go inside. Tonight it followed me to the gate, stopped, and stared past me at my front door, and when I turned around, the porch light was on, and I live alone." — 3/3/3/3/2 = 14. Rejected: "animals sense ghosts" is a familiar trope; the porch-light beat is muddled.

Also discarded without scoring: night-light (murky logic), transplanted heart (too explained, familiar), smart speaker in my voice (sci-fi, familiar trope), clock chiming thirteen (classic trope), baby monitor (very familiar trope), voicemail from dead mother (very familiar twist), nursery handprints (familiar ghost-nursery), basement-door scratches spelling my name (familiar setup), footprints (middling).

## Anchor / drand (init)

- Command run from inside the entry dir:
  `node ~/workspace/makefun/kits/u-suroto-two-sentence-horror-acea9253-kit/cli/makefun.mjs init --license MIT --keypair ~/workspace/makefun/makefun-keypair.json`
- Init output: `makefun anchor 3ea9431266a65c11807ac4a4e51715928fdfb5fb round 34286154` (exit 0)
- `.makefun/freshness.json`: scheme drand-quicknet, chain 52db9ba70e0cc0f6eaf7803dd07447a1f5477735fd3f661792ba94600c84e971, round 34286154, wallet 5od2aciVJ6PeUdtCFP4rNwMcUxwYyJUG4CBRyekKqLxL
- Git: root commits `3ea9431 makefun anchor: drand round 34286154` and `f8a1a95 LICENSE: MIT`. LICENSE (MIT) kept from init.

## Files in the entry dir

- `main.ts` — writes the entry text to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). Node 22+, no dependencies, no network, no secrets.
- `README.md` — short description + how to run.
- `LICENSE` — MIT (from init).
- `.makefun/freshness.json` — drand anchor (from init).
- `LEDGER.md` — this file.

## Test results

- **NOT RUN — blocked.** After `init` succeeded, an inspection command in the
  entry repo (`git log`, `git status`, `node --version`, `ls`) returned a result
  that failed the system's execution-risk check, and the attached notice forbids
  running, testing, building, or otherwise processing that repo's content until
  the user gives a go-ahead. The two local test runs of `main.ts`
  (`MAKEFUN_OUTPUT_DIR` set to two temp dirs, byte-identical sha256 check) were
  therefore NOT executed. No commit, push, bundle, or submit was done (per task).
- **What was verified without executing the entry dir:** the exact bytes
  `main.ts` writes (entry text + trailing newline) were hashed independently
  from the literal text: 182 characters, 183 bytes, SHA-256
  `caa086c67f2ce5c0031123627cf7abf84acc4daa04449d3a4953ae8d61986050`.
  Char count cross-checked by hand (sentence 1 = 65, space = 1, sentence 2 = 116;
  total 182) and by `wc -m` (183 including the newline). Exactly two sentences
  by inspection (one period ends sentence 1, one ends sentence 2; no other
  periods, no abbreviations). No emoji, no em-dash.
- **Still to do (parent):** run `main.ts` twice with different
  `MAKEFUN_OUTPUT_DIR` values and confirm both outputs are byte-identical and
  hash to `caa086c67f2ce5c0031123627cf7abf84acc4daa04449d3a4953ae8d61986050`,
  then commit/push/bundle/submit per the normal flow.
