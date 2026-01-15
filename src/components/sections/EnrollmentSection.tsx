import { Calendar } from 'lucide-react';
import { siteContent } from '@/data/siteContent';

const EnrollmentSection = () => {
  return (
    <section id="inskolning" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/50 text-primary px-4 py-2 rounded-full mb-6">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">{siteContent.enrollment.duration} inskolning</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {siteContent.enrollment.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {siteContent.enrollment.intro}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {siteContent.enrollment.steps.map((step, index) => (
            <div
              key={step.step}
              className="relative p-6 rounded-3xl bg-background border border-border hover:border-secondary hover:shadow-card transition-all group"
            >
              <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-coral text-cta-foreground flex items-center justify-center font-bold text-sm">
                {step.step}
              </div>
              <div className="pt-4">
                <h3 className="font-serif text-lg font-semibold mb-3 group-hover:text-coral transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < siteContent.enrollment.steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>

        {/* Weekly Schedule */}
        <div className="bg-background rounded-3xl p-6 md:p-8 shadow-soft">
          <h3 className="font-serif text-2xl font-bold mb-6 text-center">
            {siteContent.enrollment.schedule.title}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[400px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold text-primary">Dag</th>
                  <th className="text-left py-4 px-4 font-semibold text-primary">Aktiviteter</th>
                </tr>
              </thead>
              <tbody>
                {siteContent.enrollment.schedule.days.map((day, index) => (
                  <tr
                    key={day.day}
                    className={`border-b border-border/50 hover:bg-secondary/20 transition-colors ${
                      index % 2 === 0 ? 'bg-card' : ''
                    }`}
                  >
                    <td className="py-4 px-4 font-medium text-primary">{day.day}</td>
                    <td className="py-4 px-4 text-muted-foreground">{day.activities}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentSection;
