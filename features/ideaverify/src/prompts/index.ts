export const SUMMARY_PROMPT = `Summarize the following thread into key points, preserving citations.`;
export const CLUSTER_LABEL_PROMPT = `Given a cluster of comments, propose a concise, human-readable label and 3-5 keywords.`;
export const PAINPOINT_EXTRACT_PROMPT = `Extract pain points, doubts, comparisons, and form-factor hints. Output JSON with fields: title, painPoint, tags[], quotes[], sources[].`;
export const RATING_PROMPT = `Rate the idea across dimensions (market pain, competition, technical, business, growth, compliance, moat, execution). Return JSON scores 0-100 and confidence 0-1 with brief evidence.`;
export const FIRST_PRINCIPLES_PROMPT = `From first principles and given personas, derive long-term roadmap constraints and opportunities.`;
export const SUGGESTIONS_PROMPT = `Propose MVP features, pricing suggestion, and next-step experiments.`;
