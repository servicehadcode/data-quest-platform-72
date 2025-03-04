
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogIn, UserPlus, Mail, Lock, User } from "lucide-react";
import { toast } from "sonner";

const AuthButtons = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({ name: "", email: "", password: "", confirmPassword: "" });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", loginData);
    toast.success("Login successful!");
    setIsDialogOpen(false);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    
    if (signupData.password !== signupData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    
    console.log("Signup submitted:", signupData);
    toast.success("Account created successfully!");
    setIsDialogOpen(false);
  };

  return (
    <section className="py-12 container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
        <p className="text-muted-foreground mb-8">
          Create an account to access exclusive features, track your progress, and connect with other learners.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2" onClick={() => setActiveTab("login")}>
                <LogIn className="h-4 w-4" />
                Log In
              </Button>
            </DialogTrigger>
            
            <DialogTrigger asChild>
              <Button variant="outline" className="gap-2" onClick={() => setActiveTab("signup")}>
                <UserPlus className="h-4 w-4" />
                Sign Up
              </Button>
            </DialogTrigger>
            
            <DialogContent className="sm:max-w-md">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <DialogHeader>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Log In</TabsTrigger>
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                  </TabsList>
                </DialogHeader>
                
                <TabsContent value="login" className="mt-4">
                  <form onSubmit={handleLoginSubmit}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                          <label htmlFor="login-email" className="text-sm font-medium">Email</label>
                        </div>
                        <Input 
                          id="login-email" 
                          type="email" 
                          placeholder="Enter your email" 
                          value={loginData.email}
                          onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Lock className="mr-2 h-4 w-4 text-muted-foreground" />
                          <label htmlFor="login-password" className="text-sm font-medium">Password</label>
                        </div>
                        <Input 
                          id="login-password" 
                          type="password" 
                          placeholder="Enter your password" 
                          value={loginData.password}
                          onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                          required
                        />
                      </div>
                      
                      <div className="text-sm">
                        <a href="#" className="text-primary hover:underline">
                          Forgot your password?
                        </a>
                      </div>
                    </div>
                    
                    <DialogFooter className="mt-6">
                      <Button type="submit" className="w-full">Log In</Button>
                    </DialogFooter>
                  </form>
                </TabsContent>
                
                <TabsContent value="signup" className="mt-4">
                  <form onSubmit={handleSignupSubmit}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <User className="mr-2 h-4 w-4 text-muted-foreground" />
                          <label htmlFor="signup-name" className="text-sm font-medium">Full Name</label>
                        </div>
                        <Input 
                          id="signup-name" 
                          type="text" 
                          placeholder="Enter your name" 
                          value={signupData.name}
                          onChange={(e) => setSignupData({...signupData, name: e.target.value})}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                          <label htmlFor="signup-email" className="text-sm font-medium">Email</label>
                        </div>
                        <Input 
                          id="signup-email" 
                          type="email" 
                          placeholder="Enter your email" 
                          value={signupData.email}
                          onChange={(e) => setSignupData({...signupData, email: e.target.value})}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Lock className="mr-2 h-4 w-4 text-muted-foreground" />
                          <label htmlFor="signup-password" className="text-sm font-medium">Password</label>
                        </div>
                        <Input 
                          id="signup-password" 
                          type="password" 
                          placeholder="Create a password" 
                          value={signupData.password}
                          onChange={(e) => setSignupData({...signupData, password: e.target.value})}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Lock className="mr-2 h-4 w-4 text-muted-foreground" />
                          <label htmlFor="signup-confirm-password" className="text-sm font-medium">Confirm Password</label>
                        </div>
                        <Input 
                          id="signup-confirm-password" 
                          type="password" 
                          placeholder="Confirm your password" 
                          value={signupData.confirmPassword}
                          onChange={(e) => setSignupData({...signupData, confirmPassword: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    
                    <DialogFooter className="mt-6">
                      <Button type="submit" className="w-full">Create Account</Button>
                    </DialogFooter>
                  </form>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default AuthButtons;
