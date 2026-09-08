import test from 'node:test';
import assert from 'node:assert/strict';
import { readiness, prioritizedTasks, categoryStatus, safeText } from '../logic.js';

test('readiness is calculated from task statuses', () => {
  assert.equal(readiness([{status:'DONE'},{status:'NOT STARTED'}]), 50);
  assert.equal(readiness([{status:'DONE'},{status:'IN PROGRESS'}]), 75);
});

test('blocked tasks come first, followed by priority', () => {
  const tasks=[{id:'normal',status:'NOT STARTED',priority:'NORMAL',order:1},{id:'critical',status:'NOT STARTED',priority:'CRITICAL',order:2},{id:'blocked',status:'BLOCKED',priority:'LATER',order:3},{id:'done',status:'DONE',priority:'CRITICAL',order:0}];
  assert.deepEqual(prioritizedTasks(tasks).map(x=>x.id), ['blocked','critical','normal']);
});

test('category status communicates blockers and completion', () => {
  assert.equal(categoryStatus([{category:'BOOK',status:'DONE'}], 'BOOK'), 'READY');
  assert.equal(categoryStatus([{category:'BOOK',status:'BLOCKED'}], 'BOOK'), 'BLOCKED');
});

test('user-entered text is escaped for safe display', () => assert.equal(safeText('<script>'), '&lt;script&gt;'));
