import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const tiers = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for trying out MindMap AI.",
      features: ["3 Maps per month", "Standard AI Model", "PNG Export", "Community Support"]
    },
    {
      name: "Pro",
      price: "$12",
      description: "For power users and professionals.",
      features: ["Unlimited Maps", "Advanced AI Models", "SVG & PDF Export", "Priority Support", "Custom Styling"],
      popular: true
    },
    {
      name: "Team",
      price: "$49",
      description: "Collaborate with your entire team.",
      features: ["Everything in Pro", "Shared Workspaces", "Admin Controls", "API Access", "SSO Integration"]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Choose the plan that works best for your workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <div 
              key={i} 
              className={`p-8 rounded-3xl border flex flex-col ${tier.popular ? 'border-primary ring-4 ring-primary/10 bg-white dark:bg-slate-900' : 'bg-white/50 dark:bg-slate-900/50'}`}
            >
              {tier.popular && (
                <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full self-start mb-4">
                  MOST POPULAR
                </span>
              )}
              <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-slate-500">/month</span>
              </div>
              <p className="text-sm text-slate-500 mb-8">{tier.description}</p>
              
              <div className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full" variant={tier.popular ? 'default' : 'outline'}>
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;