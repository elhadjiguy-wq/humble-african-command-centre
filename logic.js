export const priorityRank = { CRITICAL: 0, HIGH: 1, NORMAL: 2, LATER: 3 };
export const statusWeight = { DONE: 1, READY: 1, FINAL: 1, APPROVED: .8, PUBLISHED: 1, LIVE: 1, SUBMITTED: .8, "IN PROGRESS": .5, "SETTING UP": .4, "READY TO UPLOAD": .7, GENERATED: .55, "PROMPT READY": .3, SCRIPT: .25, VISUALS: .4, VOICEOVER: .55, EDITED: .7, SCHEDULED: .85, "ACCOUNT CREATED": .25, BLOCKED: .15, "NOT STARTED": 0, IDEA: .1 };

export function readiness(tasks) {
  if (!tasks.length) return 0;
  return Math.round(tasks.reduce((sum, task) => sum + (statusWeight[task.status] ?? 0), 0) / tasks.length * 100);
}

export function prioritizedTasks(tasks) {
  return tasks.filter(t => t.status !== "DONE").sort((a, b) => {
    const blocked = Number(b.status === "BLOCKED") - Number(a.status === "BLOCKED");
    return blocked || priorityRank[a.priority] - priorityRank[b.priority] || a.order - b.order;
  });
}

export function categoryStatus(tasks, category) {
  const list = tasks.filter(t => t.category === category);
  if (!list.length || list.every(t => t.status === "NOT STARTED")) return "NOT STARTED";
  if (list.some(t => t.status === "BLOCKED")) return "BLOCKED";
  if (list.every(t => t.status === "DONE")) return "READY";
  return "IN PROGRESS";
}

export function safeText(value) {
  return String(value ?? "").replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));
}
