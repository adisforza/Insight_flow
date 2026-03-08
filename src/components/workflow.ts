export interface WorkflowStep {
  num: string;
  title: string;
  text: string;
}

export const workflow = (steps: WorkflowStep[]): string => `
  <section id="workflow">
    <div class="section-inner">
      <div style="text-align:center">
        <p class="section-tag"></p>
        <h2 class="section-title reveal">Our <span>Process</span></h2>
        <p class="section-sub reveal" style="margin:0 auto 3.5rem">
          A clear, transparent process so you always know what happens next —
          no guesswork, no surprises.
        </p>
      </div>

      <div class="workflow-grid">
        ${steps
          .map(
            (s: WorkflowStep) => `
          <div class="workflow-step reveal">
            <div class="workflow-num">${s.num}</div>
            <h3 class="workflow-title">${s.title}</h3>
            <p class="workflow-text">${s.text}</p>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  </section>
`;