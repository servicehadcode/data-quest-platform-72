
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";

export default function Profile() {
  const { isAuthenticated, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container px-4 py-12 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Your Profile</h1>
            <p className="text-muted-foreground text-lg">
              Welcome back, {user.name}!
            </p>
          </div>

          <div className="glass p-8 rounded-xl">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl font-bold text-primary">{user.name.charAt(0)}</span>
              </div>
              
              <h2 className="text-2xl font-semibold">{user.name}</h2>
              <p className="text-muted-foreground">{user.email}</p>
              
              <div className="w-full mt-8">
                <h3 className="text-xl font-medium mb-4">Account Information</h3>
                <div className="space-y-4">
                  <div className="flex justify-between pb-2 border-b">
                    <span className="text-muted-foreground">Email</span>
                    <span>{user.email}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b">
                    <span className="text-muted-foreground">User ID</span>
                    <span>{user.id}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b">
                    <span className="text-muted-foreground">Account Status</span>
                    <span className="text-green-500">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
