import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Briefcase, GraduationCap, Lightbulb } from "lucide-react";

const Templates = () => {
  const templates = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Book Summaries",
      description: "Extract key themes, characters, and plot points from long-form text.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Meeting Notes",
      description: "Turn messy transcripts into clear action items and decision trees.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Study Guides",
      description: "Break down complex academic subjects into digestible hierarchical nodes.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Brainstorming",
      description: "Expand a single seed idea into a massive web of possibilities.",
      color: "bg-amber-100 text-amber-600"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">Start with a Template</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Choose a starting point to see how AI can structure different types of information.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {templates.map((template, i) => (
            <Card key={i} className="hover:border-primary/50 cursor-pointer transition-colors">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className={`p-3 rounded-xl ${template.color}`}>
                  {template.icon}
                </div>
                <CardTitle>{template.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-500 dark:text-slate-400">{template.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Templates;