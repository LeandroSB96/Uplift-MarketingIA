const questions = [
  {
    question: 'What does an AI-powered marketing system actually do?',
    answer: 'It helps teams organize campaign data, identify patterns, forecast likely outcomes, and prioritize tests. Your people remain in control of strategy and approvals.',
  },
  {
    question: 'Will this replace our existing marketing platforms?',
    answer: 'No. The intent is to help your team make better use of its current channels and tools. The exact integrations and implementation depend on your environment.',
  },
  {
    question: 'How do you approach data privacy and governance?',
    answer: 'Data access, retention, permissions, and model use should be defined with your security and legal stakeholders before implementation. Requirements vary by organization and region.',
  },
  {
    question: 'How quickly can a team get started?',
    answer: 'Timing depends on data readiness, platforms, and the scope of the first use case. A discovery conversation helps determine a realistic path and useful first milestone.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="shell section-space">
      <div style={{ textAlign: 'center' }}>
        <span className="section-kicker">Good questions, clear answers</span>
        <h2 className="section-title" style={{ marginInline: 'auto' }}>Before you move faster.</h2>
      </div>
      <div className="faq-list">
        {questions.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
