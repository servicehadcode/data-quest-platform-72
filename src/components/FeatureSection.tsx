
import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CompetitionCard, { CompetitionCardProps } from "./CompetitionCard";

const FeatureSection = () => {
  // Mock data for competitions
  const competitionData: CompetitionCardProps[] = [
    {
      id: "1",
      title: "Forecasting Climate Change Impacts",
      description: "Develop models to predict how climate change will affect regional ecosystems over the next decade.",
      prize: "$50,000",
      teams: 243,
      deadline: "Jun 30, 2024",
      daysLeft: 28,
      category: "Environmental",
      image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=600&auto=format&fit=crop",
      featured: true,
    },
    {
      id: "2",
      title: "E-commerce Customer Segmentation Challenge",
      description: "Create advanced segmentation models to help retailers better understand customer behavior patterns.",
      prize: "$35,000",
      teams: 187,
      deadline: "May 15, 2024",
      daysLeft: 14,
      category: "Retail",
      image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "3",
      title: "Medical Imaging Diagnosis Improvement",
      description: "Enhance the accuracy of disease detection in medical images using machine learning techniques.",
      prize: "$75,000",
      teams: 312,
      deadline: "Jul 20, 2024",
      daysLeft: 42,
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "4",
      title: "Financial Fraud Detection Systems",
      description: "Design algorithms to identify and prevent fraudulent transactions in real-time payment systems.",
      prize: "$45,000",
      teams: 256,
      deadline: "May 5, 2024",
      daysLeft: 5,
      category: "Finance",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop",
    },
  ];

  // Mock data for datasets
  const datasetData = [
    {
      id: "1",
      title: "Global Temperature Patterns (1950-2023)",
      description: "Comprehensive temperature and climate metrics from weather stations worldwide spanning 70+ years.",
      teams: 567,
      deadline: "Updated weekly",
      daysLeft: 0,
      category: "Environmental",
      image: "https://images.unsplash.com/photo-1621980776747-04d892487abb?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "2",
      title: "Retail Consumer Behavior Dataset",
      description: "Anonymized shopping patterns and purchase history from 1M+ customers across 5 major retailers.",
      teams: 423,
      deadline: "Updated monthly",
      daysLeft: 0,
      category: "Retail",
      image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=600&auto=format&fit=crop",
      featured: true,
    },
    {
      id: "3",
      title: "Anonymized Medical Records Collection",
      description: "Privacy-protected patient records with symptoms, diagnoses, treatments and outcomes.",
      teams: 389,
      deadline: "Updated quarterly",
      daysLeft: 0,
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "4",
      title: "Financial Markets Historical Data",
      description: "Daily trading data from major global markets over the past 25 years with key economic indicators.",
      teams: 512,
      deadline: "Updated daily",
      daysLeft: 0,
      category: "Finance",
      image: "https://images.unsplash.com/photo-1638913972776-873fc7af3fdf?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-20 container px-4 sm:px-6">
      <div className="max-w-xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-semibold mb-4">Explore Our Platform</h2>
        <p className="text-muted-foreground text-lg">
          Discover ongoing competitions, rich datasets, and connect with the data science community.
        </p>
      </div>

      <Tabs defaultValue="competitions" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="glass">
            <TabsTrigger value="competitions">Competitions</TabsTrigger>
            <TabsTrigger value="datasets">Datasets</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="competitions" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competitionData.map((competition) => (
              <CompetitionCard key={competition.id} {...competition} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline" size="lg">
              View all competitions
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="datasets" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {datasetData.map((dataset) => (
              <CompetitionCard key={dataset.id} {...dataset} prize="" />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline" size="lg">
              Browse all datasets
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default FeatureSection;
