
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { toast } from "sonner";
import { Calendar, Clock, Briefcase, User, Mail, Phone } from "lucide-react";

const Interviews = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    date: "",
    time: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Interview request submitted:", formData);
    toast.success("Your interview request has been submitted! We'll contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      date: "",
      time: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container px-4 py-12 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Request an Interview</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Take the first step towards your dream career. Schedule an interview with our team and showcase your skills and potential.
            </p>
          </div>

          <div className="glass p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block font-medium">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="John Doe" 
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block font-medium">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      placeholder="john@example.com" 
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="block font-medium">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      placeholder="(123) 456-7890" 
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="position" className="block font-medium">Position of Interest</label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 z-10" />
                    <Select onValueChange={(value) => handleSelectChange("position", value)}>
                      <SelectTrigger className="pl-10">
                        <SelectValue placeholder="Select position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="software-engineer">Software Engineer</SelectItem>
                        <SelectItem value="data-scientist">Data Scientist</SelectItem>
                        <SelectItem value="ux-designer">UX Designer</SelectItem>
                        <SelectItem value="product-manager">Product Manager</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="date" className="block font-medium">Preferred Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input 
                      id="date" 
                      name="date" 
                      type="date" 
                      value={formData.date} 
                      onChange={handleChange} 
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="time" className="block font-medium">Preferred Time</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input 
                      id="time" 
                      name="time" 
                      type="time" 
                      value={formData.time} 
                      onChange={handleChange} 
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block font-medium">Additional Information</label>
                <Textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Tell us about your background, skills, or any questions you have..."
                  rows={4}
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full">
                Submit Interview Request
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Interviews;
