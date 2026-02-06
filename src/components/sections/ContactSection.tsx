import { useState } from 'react';
import { Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { siteContent } from '@/data/siteContent';
import { toast } from '@/hooks/use-toast';
const iconMap: Record<string, React.ReactNode> = {
  Phone: <Phone className="w-6 h-6" />,
  MapPin: <MapPin className="w-6 h-6" />
};
type FormType = 'interest' | 'complaint';
const ContactSection = () => {
  const [formType, setFormType] = useState<FormType>('interest');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Tack för din anmälan!",
      description: "Vi återkommer så snart vi kan."
    });
  };
  return <section id="kontakt" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {siteContent.contact.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              {siteContent.contact.intro}
            </p>

            <div className="space-y-6">
              {siteContent.contact.methods.map(method => <div key={method.label} className="flex items-start gap-4 p-4 rounded-2xl bg-card hover:bg-secondary/30 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center text-coral">
                    {iconMap[method.icon]}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{method.label}</p>
                    {method.icon === 'Phone' ? <a href={`tel:${method.value.replace(/[\s-]/g, '')}`} className="font-semibold text-primary hover:text-coral transition-colors">
                        {method.value}
                      </a> : <p className="font-semibold text-primary">{method.value}</p>}
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Contact Form */}
          <div id="intresseanmalan" className="bg-card rounded-3xl p-6 md:p-8 shadow-card">
            <h3 className="font-serif text-2xl font-bold mb-6">
              {siteContent.form.title}
            </h3>

            {/* Form Type Toggle */}
            <div className="flex rounded-xl bg-secondary/50 p-1 mb-6">
              <button type="button" onClick={() => {
              setFormType('interest');
              setIsSubmitted(false);
            }} className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${formType === 'interest' ? 'bg-background text-primary shadow-sm' : 'text-muted-foreground hover:text-primary'}`}>
                Intresseanmälan
              </button>
              <button type="button" onClick={() => {
              setFormType('complaint');
              setIsSubmitted(false);
            }} className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${formType === 'complaint' ? 'bg-background text-primary shadow-sm' : 'text-muted-foreground hover:text-primary'}`}>
                Klagomål
              </button>
            </div>

            {isSubmitted ? <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-coral" />
                </div>
                <h4 className="font-serif text-xl font-semibold mb-2">
                  {formType === 'interest' ? 'Tack för din anmälan!' : 'Tack för ditt klagomål!'}
                </h4>
                <p className="text-muted-foreground">Vi återkommer till dig så snart som möjligt.</p>
              </div> : formType === 'interest' ? <form name="interest" data-netlify="true" onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="parentName">Vårdnadshavares namn *</Label>
                    <Input id="parentName" name="parentName" required className="rounded-xl" placeholder="Ditt namn" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-postadress *</Label>
                    <Input id="email" name="email" type="email" required className="rounded-xl" placeholder="din@email.se" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon *</Label>
                    <Input id="phone" name="phone" type="tel" required className="rounded-xl" placeholder="070 123 45 67" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="childName">Barnets namn *</Label>
                    <Input id="childName" name="childName" required className="rounded-xl" placeholder="Barnets förnamn" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="childBirthdate">Barnets födelsedatum *</Label>
                    <Input id="childBirthdate" name="childBirthdate" type="date" required className="rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="desiredStart">Önskat startdatum *</Label>
                    <Input id="desiredStart" name="desiredStart" type="date" required className="rounded-xl" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Meddelande</Label>
                  <Textarea id="message" name="message" rows={4} className="rounded-xl resize-none" placeholder="Berätta gärna lite om er familj och varför ni är intresserade av Riala Waldorfförskola..." />
                </div>

                <Button type="submit" variant="cta" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-cta-foreground/30 border-t-cta-foreground rounded-full animate-spin" />
                      Skickar...
                    </span> : <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      {siteContent.form.submitText}
                    </span>}
                </Button>
              </form> : <form name="complaint" data-netlify="true" onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="reporterName">Ditt namn *</Label>
                    <Input id="reporterName" name="reporterName" required className="rounded-xl" placeholder="Ditt namn" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="damageEmail">E-postadress *</Label>
                    <Input id="damageEmail" name="damageEmail" type="email" required className="rounded-xl" placeholder="din@email.se" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="complaintPhone">Telefon *</Label>
                  <Input id="complaintPhone" name="complaintPhone" type="tel" required className="rounded-xl" placeholder="070 123 45 67" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="complaintDescription">Beskriv ditt klagomål *</Label>
                  <Textarea id="complaintDescription" name="complaintDescription" rows={4} required className="rounded-xl resize-none" placeholder="Beskriv vad klagomålet gäller..." />
                </div>

                <Button type="submit" variant="cta" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-cta-foreground/30 border-t-cta-foreground rounded-full animate-spin" />
                      Skickar...
                    </span> : <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Skicka klagomål
                    </span>}
                </Button>
              </form>}
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;