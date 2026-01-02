import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Send, Eraser, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface TextInputSectionProps {
  onGenerate: (text: string) => void;
  isLoading: boolean;
}

export const TextInputSection: React.FC<TextInputSectionProps> = ({ onGenerate, isLoading }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = () => {
    setError(null);
    
    const trimmedText = text.trim();
    
    if (!trimmedText) {
      setError("Please enter some text to generate a mind map.");
      return;
    }

    if (trimmedText.length < 20) {
      setError("The text is too short. Please provide at least 20 characters for a meaningful mind map.");
      return;
    }

    onGenerate(trimmedText);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-xl border-slate-200 dark:border-slate-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <Sparkles className="w-5 h-5 text-accent" />
          Transform Text to Mind Map
        </CardTitle>
        <CardDescription>
          Paste your notes, articles, or ideas below. Our AI will extract the hierarchy and create a visual map.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Validation Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          </motion.div>
        )}

        <div className="relative">
          <Textarea
            placeholder="Enter your text here (e.g., 'The solar system consists of the Sun and the objects that orbit it...')"
            className={`min-h-[200px] resize-none text-base p-4 focus-visible:ring-primary ${error ? 'border-destructive' : ''}`}
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              if (error) setError(null);
            }}
          />
          <div className="absolute bottom-3 right-3 flex gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => {
                setText("");
                setError(null);
              }}
              disabled={!text || isLoading}
              className="text-slate-500"
            >
              <Eraser className="w-4 h-4 mr-2" />
              Clear
            </Button>
          </div>
        </div>
        
        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <Button 
            className="w-full h-12 text-lg font-semibold shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90" 
            onClick={handleGenerate}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Analyzing Text...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="w-5 h-5" />
                Generate Mind Map
              </span>
            )}
          </Button>
        </motion.div>
      </CardContent>
    </Card>
  );
};